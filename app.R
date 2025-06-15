# app.R

library(shiny)
library(plotly)
library(dplyr)
library(tidyr)
library(stringr)

# ── DATA ───────────────────────────────────────────────────────────────────────

# (1) scores.csv and inclusion.csv must already have an 'iso' column.
scores     <- read.csv("scores.csv",     stringsAsFactors = FALSE)
org_char   <- read.csv("inclusion.csv",  stringsAsFactors = FALSE)
responses  <- read.csv("responses.csv",  stringsAsFactors = FALSE)
questions  <- read.csv("questions.csv", 
                       header = FALSE,    stringsAsFactors = FALSE) %>%
    t() %>% as.data.frame(stringsAsFactors = FALSE)
colnames(questions) <- questions[1,]
questions <- questions[-1,]

# Define factor-level orders
levels_yn      <- c("No", "Yes", "Do not know")
levels_likert  <- c("None or Few", "Some", "Many", "Most or All", "Do not know")
levels_geo     <- c("Yes, in all regions/states/provinces",
                    "Yes, in some regions/states/provinces",
                    "No", "Do not know")
levels_less    <- c("Less", "Same", "More", "Do not know")
levels_little  <- c("None", "Little", "Some", "A lot", "Do not know")

# Apply those levels to your responses data
responses <- responses %>%
    mutate(
        comm_sports           = factor(comm_sports,           levels = levels_yn),
        comm_sports_inclusive = factor(comm_sports_inclusive, levels = levels_yn),
        comm_family_learn     = factor(comm_family_learn,     levels = levels_likert),
        # … repeat for all your other columns …
        policy_influence      = factor(policy_influence,      levels = levels_little)
    )

# Predefined domain lists and colors
domain_list   <- c("Overall" = "all_domain",
                   "Community Inclusion" = "community",
                   "Education" = "edu",
                   "Healthcare" = "health",
                   "Independence" = "indep",
                   "Policy and Law" = "policy")
domain_colors <- c(all_domain = "#4348db",
                   community  = "#2a8aa9",
                   edu        = "#30a92a",
                   health     = "#d07c31",
                   indep      = "#c1231e",
                   policy     = "#b437af")

# Helper for ordinal labels
cardinal_to_ordinal <- function(x) {
    sapply(x, function(v) {
        if (is.na(v)) return(NA_character_)
        suf <- if (v %% 100 %in% 11:13) "th" else
            switch(as.character(v %% 10),
                   "1"="st","2"="nd","3"="rd","th")
        paste0(v, suf)
    })
}

# ── UI ─────────────────────────────────────────────────────────────────────────

ui <- navbarPage(
    title = "DS-4S",
    
    tabPanel("Map",
             fluidRow(
                 column(6,
                        selectInput("domain", "Ranking Category:", domain_list)
                 ),
                 column(6,
                        checkboxInput("excluded", "Show excluded countries?", FALSE)
                 )
             ),
             plotlyOutput("map")
    ),
    
    tabPanel("Country Data",
             fluidRow(
                 column(12, 
                        selectizeInput("country", "Country",
                                       choices = sort(org_char$country[org_char$include == "Yes"]),
                                       options = list(placeholder = '', 
                                                      onInitialize = I('function() { this.setValue(""); }'))
                        )
                 )
             ),
             uiOutput("country_scores"),
             uiOutput("country_responses"),
             uiOutput("country_characteristics")
    ),
    
    navbarMenu("More",
               tabPanel("Best Practice Interviews",
                        if (file.exists("interview-netherlands.html"))
                            includeHTML("interview-netherlands.html")
               ),
               tabPanel("References",
                        if (file.exists("citation.html"))
                            includeHTML("citation.html")
               ),
               tabPanel("Methods",
                        if (file.exists("methods.html"))
                            includeHTML("methods.html")
               ),
               tabPanel("About Us",
                        if (file.exists("about.html"))
                            includeHTML("about.html")
               )
    )
)

# ── SERVER ─────────────────────────────────────────────────────────────────────

server <- function(input, output, session) {
    
    output$map <- renderPlotly({
        df <- scores
        dom <- input$domain
        
        p <- plot_geo(df) %>% 
            add_trace(
                locations = ~iso,
                z         = df[[paste0(dom, "_score")]],
                colorscale = list(
                    list(0, scales::colour_ramp(c("white", domain_colors[dom]))(0)),
                    list(1, domain_colors[dom])
                ),
                marker    = list(line = list(color = "black", width = 0.5)),
                text      = ~paste0(
                    "<b>", country, "</b><br/>",
                    sprintf("%.1f (%s)",
                            df[[paste0(dom, "_score")]],
                            cardinal_to_ordinal(df[[paste0(dom, "_rank")]])
                    )
                ),
                hoverinfo = "text"
            )
        
        if (input$excluded) {
            # add excluded-country trace similar to above…
        }
        
        p %>% layout(
            title = names(domain_list)[domain_list == dom],
            geo   = list(projection = list(type = "equirectangular"))
        )
    })
    
    output$country_scores <- renderUI({
        req(input$country)
        sel <- scores %>% filter(country == input$country)
        df  <- tibble(
            Domain = names(domain_list),
            Score  = sprintf("%.1f", sel[paste0(names(domain_list), "_score")]),
            Rank   = as.character(sel[paste0(names(domain_list), "_rank")])
        )
        # build HTML table…
    })
    
    output$country_responses <- renderUI({
        req(input$country)
        row <- responses %>% filter(Country == input$country) %>% slice(1)
        df  <- questions %>%
            filter(ID %in% names(row)) %>%
            mutate(Response = as.character(row[ID]))
        # build UI…
    })
    
    output$country_characteristics <- renderUI({
        req(input$country)
        row <- org_char %>% filter(country == input$country) %>% slice(1)
        tagList(
            strong("Organization characteristics"),
            div("Region: ", row$region_size),
            div("Members: ", row$members),
            div("With Down syndrome: ", row$related_to_ds)
        )
    })
}

shinyApp(ui = ui, server = server)
