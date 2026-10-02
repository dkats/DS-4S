library(shiny)
library(plotly)
library(bslib)        # Required for input_switch()
library(countrycode)
library(tidyverse)

scores <- read.csv("scores.csv")
org_char <- read.csv("inclusion.csv")

levels_yn <- c("No", "Yes", "Do not know")
levels_likert <- c("None or Few", "Some", "Many", "Most or All", "Do not know")
levels_geo <- c("Yes, in all regions/states/provinces", "Yes, in some regions/states/provinces", "No", "Do not know")
levels_less <- c("Less", "Same", "More", "Do not know")
levels_little <- c("None", "Little", "Some", "A lot", "Do not know")
responses <- read.csv("responses.csv") |> 
  mutate(comm_sports = factor(comm_sports, levels = levels_yn),
         comm_sports_inclusive = factor(comm_sports_inclusive, levels = levels_yn),
         comm_family_learn = factor(comm_family_learn, levels = levels_likert),
         comm_neglang_people = factor(comm_neglang_people, levels = levels_likert),
         comm_neglang_media = factor(comm_neglang_media, levels = levels_likert),
         edu_daycare_law = factor(edu_daycare_law, levels = levels_yn),
         edu_daycare_inclusive = factor(edu_daycare_inclusive, levels = levels_yn),
         edu_school_adapt = factor(edu_school_adapt, levels = levels_yn),
         edu_school_inclusive = factor(edu_school_inclusive, levels = levels_yn),
         edu_law_freepostsecondary = factor(edu_law_freepostsecondary, levels = levels_yn),
         edu_daycare_access = factor(edu_daycare_access, levels = levels_likert),
         edu_school_enroll = factor(edu_school_enroll, levels = levels_likert),
         edu_inclusion = factor(edu_inclusion, levels = levels_likert),
         edu_inclusion2 = factor(edu_inclusion2, levels = levels_likert),
         edu_curriculum_adapted = factor(edu_curriculum_adapted, levels = levels_likert),
         edu_teacher_training = factor(edu_teacher_training, levels = levels_likert),
         policy_edu = factor(policy_edu, levels = levels_geo),
         health_prenatal = factor(health_prenatal, levels = levels_yn),
         health_nipt = factor(health_nipt, levels = levels_yn),
         health_guidelines = factor(health_guidelines, levels = levels_yn),
         health_exp = factor(health_exp, levels = levels_yn),
         healthy_qual = factor(healthy_qual, levels = levels_yn),
         health_covid_plan = factor(health_covid_plan, levels = levels_yn),
         health_covid_access = factor(health_covid_access, levels = levels_yn),
         health_nips_paid = factor(health_nips_paid, levels = levels_likert),
         health_speech = factor(health_speech, levels = levels_likert),
         health_heart = factor(health_heart, levels = levels_likert),
         health_hearing_test = factor(health_hearing_test, levels = levels_likert),
         health_hearing_treat = factor(health_hearing_treat, levels = levels_likert),
         health_mental = factor(health_mental, levels = levels_likert),
         health_afford = factor(health_afford, levels = levels_likert),
         health_birthcontrol = factor(health_birthcontrol, levels = levels_likert),
         health_prenatal_paid = factor(health_prenatal_paid, levels = levels_likert),
         health_terminate = factor(health_terminate, levels = levels_likert),
         health_prenatal_info = factor(health_prenatal_info, levels = levels_likert),
         indep_transition = factor(indep_transition, levels = levels_yn),
         indep_transport = factor(indep_transport, levels = levels_yn),
         indep_edu_relationships = factor(indep_edu_relationships, levels = levels_yn),
         indep_employer_accom = factor(indep_employer_accom, levels = levels_yn),
         indep_govt_fin = factor(indep_govt_fin, levels = levels_likert),
         indep_volunteer = factor(indep_volunteer, levels = levels_likert),
         indep_work_paid = factor(indep_work_paid, levels = levels_likert),
         indep_work_minwage = factor(indep_work_minwage, levels = levels_likert),
         indep_work_20hr = factor(indep_work_20hr, levels = levels_likert),
         indep_work_inclusive = factor(indep_work_inclusive, levels = levels_likert),
         indep_work_benefits = factor(indep_work_benefits, levels = levels_likert),
         indep_livingexp = factor(indep_livingexp, levels = levels_likert),
         indep_exclude = factor(indep_exclude, levels = levels_likert),
         comm_kept = factor(comm_kept, levels = levels_likert),
         policy_vote = factor(policy_vote, levels = levels_geo),
         policy_nondiscrimination = factor(policy_nondiscrimination, levels = levels_geo),
         policy_marry = factor(policy_marry, levels = levels_geo),
         policy_abuse_invest = factor(policy_abuse_invest, levels = levels_geo),
         policy_sterilization = factor(policy_sterilization, levels = levels_geo),
         policy_abandonunder = factor(policy_abandonunder, levels = levels_yn),
         policy_abandonover = factor(policy_abandonover, levels = levels_yn),
         policy_abuse = factor(policy_abuse, levels = levels_yn),
         policy_openinput = factor(policy_openinput, levels = levels_yn),
         comm_electricity = factor(comm_electricity, levels = levels_less),
         comm_sanitation = factor(comm_sanitation, levels = levels_less),
         policy_influence = factor(policy_influence, levels = levels_little))
questions <- read.csv("questions.csv", header = FALSE) |> 
  t() |> as.data.frame()
colnames(questions) <- questions[1,]
questions <- questions[-1,]

custom_country_codes <- c("Kosovo" = "KSV", "Scotland" = "GBR")
scores$iso <- countrycode(scores$country, "country.name", "iso3c", custom_match = custom_country_codes)
org_char$iso <- countrycode(org_char$country, "country.name", "iso3c", custom_match = custom_country_codes)

score_rounding <- 2

domain_list <- c("Overall" = "all_domain", "Community Inclusion" = "community", "Education" = "edu", "Healthcare" = "health", "Independence" = "indep", "Policy and Law" = "policy")
domain_colors <- c("all_domain" = "#4348db", "community" = "#2a8aa9", "edu" = "#30a92a", "health" = "#d07c31", "indep" = "#c1231e", "policy" = "#b437af")

gradient_single_color <- function(color, start_frac = 0.2) {
  white <- c(1, 1, 1)
  rgb <- col2rgb(color) / 255
  
  interpolated <- white + start_frac * (rgb - white)
  
  list(
    list(0, rgb(interpolated[1], interpolated[2], interpolated[3], maxColorValue = 1)),
    list(1, color)
  )
}

cardinal_to_ordinal <- function(numbers, htmlsuper = FALSE) {
  sapply(numbers, function(x) {
    suffix <- if (x %% 100 %in% 11:13) {
      "th"
    } else {
      switch(x %% 10 + 1, "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th")
    }
    
    if(is.na(x)) {
      NA
    } else {
      paste0(x, ifelse(htmlsuper, "<sup>", ""), suffix, ifelse(htmlsuper, "</sup>", ""))
    }
  })
}

ui <- page_navbar(id = "navbar",
  title = "DS-4S",
  bg = "#0000cc",
  theme = bs_theme() |> bs_add_variables("bslib-spacer" = "1rem"),
  header = tags$head(
    tags$style(HTML("
      .input-container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-between;
      }
      .shiny-input-container {
        display: flex;
        align-items: center;
        min-width: 200px;
      }
      .shiny-input-container > label {
        margin-bottom: 0;
        margin-right: 10px;
        white-space: nowrap;
      }
      select, .selectize-control {
        min-width: 200px;
        padding-right: 30px;
      }
      #download {
        max-width: 16em;
      }
      .shiny-table th, td {
        text-align: center;
      }
      #country_scores {
        display: block;
      }
      #country_scores table td:first-child {
        text-align: right;
        font-weight: bold;
      }
      #row_overall {
        border: 1px solid transparent;
        border-color: rgba(0, 0, 0, 0.1) transparent rgba(0, 0, 0, 0.1) transparent;
        color: #4348db;
      }
      .CommunityInclusion {
        border-left: 6px solid #2a8aa9;
      }
      .Education {
        border-left: 6px solid #30a92a;
      }
      .Healthcare {
        border-left: 6px solid #d07c31;
      }
      .Independence {
        border-left: 6px solid #c1231e;
      }
      .SocialandPolicyIssues {
        border-left: 6px solid #b437af;
      }
      .question {
        display: block;
        margin-left: 0.5em;
      }
      .scale {
        margin-left: 0.5em;
        font-style: italic;
        color: gray;
        margin-left: 4em;
        margin-bottom: 0em;
      }
      .response {
        margin-left: 4em;
      }
      .center {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 10px auto;
      }
      .subtitle {
        margin-top: 0rem;
      }
      h2 {
        margin-top: 0.75rem;
        margin-bottom: 0rem;
      }
      h4 {
        margin-top: 0.4rem;
        margin-bottom: 0rem;
      }
      h5 {
        margin-top: 0.4rem;
        margin-bottom: 0rem;
      }
    "))
  ),
  nav_panel(
    title = "Map",
    id = "map",
    tags$div(
      class = "input-container",
      selectInput("domain", "Ranking Category:", domain_list),
      input_switch("excluded", "Show excluded countries?"),
    ),
    plotlyOutput("map"),
    # tags$div(class = "center", downloadButton("download", "Download Data"))
  ),
  nav_panel(
    title = "Country Data",
    id = "country_data",
    fluidRow(column(12, class = "center",
      selectizeInput("country", "Country",
        choices = sort(org_char$country[org_char$include == "Yes"]),
        options = list(
          placeholder = '',
          onInitialize = I('function() { this.setValue(""); }')
        )
      )
    )),
    fluidRow(column(12, class = "center", uiOutput("country_scores"))),
    # fluidRow(column(12,plotlyOutput("country_domains"))),
    fluidRow(column(10, offset = 1, uiOutput("country_responses"))),
    fluidRow(column(10, offset = 1, uiOutput("country_characteristics")))
  ),
  nav_item(tags$a(icon("bell"), "Request Access to the Survey", href = "https://redcap.partners.org/redcap/surveys/?s=J3ANH9LRYEC8CLYK", target = "_blank")),
  nav_panel(
    title = "Best Practice Interviews",
    id = "interviews",
    if(file.exists("interview-netherlands.html")) {
      includeHTML("interview-netherlands.html")
    }
  ),
  nav_panel(
    title = "References and Citation Information",
    id = "citation",
    if(file.exists("citation.html")) {
      includeHTML("citation.html")
    }
  ),
  nav_panel(
    title = "Methods",
    id = "methods",
    if(file.exists("methods.html")) {
      includeHTML("methods.html")
    }
  ),
  nav_panel(
    title = "About Us",
    id = "about",
    if(file.exists("about.html")) {
      includeHTML("about.html")
    }
  )
)

server <- function(input, output, session) {
  output$map <- renderPlotly({
    # Base map
    # TODO: Singapore, Macau are too small and don't appear
    map <- plot_geo(scores, source = "map") |> 
      add_trace(
        z = ~scores[,paste0(input$domain, "_score")], 
        locations = ~iso, 
        colorscale = gradient_single_color(domain_colors[input$domain]),
        marker = list(line = list(color = toRGB("black"), width = 0.5)),
        text = ~paste(paste0("<b>",country,"</b><br />"), paste({
          df <- sapply(domain_list, function(domain) {
            apply(
              rbind(
                gsub("-", "\u2013", format(round(scores[,paste0(domain, "_score")], score_rounding), nsmall = score_rounding)), 
                paste0("(",cardinal_to_ordinal(scores[,paste0(domain, "_rank")], TRUE),")")), 
              2, paste, collapse = " ")
          })
          df <- apply(df, 1, function(row) paste(colnames(df), row, sep = ": ", collapse = "<br />"))
          # Add color to hover text - not possible in plotly
          # df <- apply(df, 1, function(row) {
          #   paste(
          #     sapply(seq_along(row), function(i) {
          #       sprintf(
          #         "<div style='color: %s;'>%s: %s</div>",
          #         domain_colors[domain_list[colnames(df)[i]]],
          #         colnames(df)[i],
          #         row[i]
          #       )
          #     }),
          #     collapse = "<br />"
          #   )
          # })
          df
        }), sep = "<br />"),
        hoverinfo = "text"
      ) |> 
      add_trace(data = scores[is.na(scores[, paste0(input$domain, "_score")]),],
                z = ~0,
                locations = ~iso, 
                colorscale = list(
                  list(0, "#7f7f7f"),
                  list(1, "#7f7f7f")
                ),
                marker = list(line = list(color = toRGB("black"), width = 0.5)),
                text = ~paste(paste0("<b>",country,"</b><br />"), paste({
                  df <- sapply(domain_list, function(domain) {
                    apply(
                      rbind(
                        ifelse(
                          is.na(scores[, paste0(domain, "_score")]),
                          "\u2014",
                          gsub("-", "\u2013", format(round(scores[, paste0(domain, "_score")], score_rounding), nsmall = score_rounding))
                        ), 
                        ifelse(
                          is.na(scores[, paste0(domain, "_rank")]),
                          "",
                          paste0("(", cardinal_to_ordinal(scores[, paste0(domain, "_rank")], TRUE), ")")
                        )), 2, paste, collapse = " ")
                  }) |> 
                    as.data.frame() |> 
                    filter(is.na(scores[, paste0(input$domain, "_score")]))
                  apply(df, 1, function(row) paste(colnames(df), row, sep = ": ", collapse = "<br />"))
                }), sep = "<br />"),
                hoverinfo = "text",
                showscale = FALSE
      )
    
    # Add excluded countries
    if(input$excluded) {
      map <- map |> 
        add_trace(data = org_char[!(org_char$related_to_ds %in% c("50% - 74%", "75% or more")) & org_char$focus == "Holistic" & !(org_char$iso %in% org_char$iso[org_char$include == "Yes"]),],
                  z = ~0,
                  locations = ~iso,
                  colorscale = list(
                    list(0, "#cccccc"),
                    list(1, "#cccccc")
                  ),
                  marker = list(line = list(color = toRGB("black"), width = 0.5)),
                  text = ~paste(paste0("<b>",country,"</b><br />"), "Survey completed, but the organization was excluded due", "to fewer than 50% of the organization's members either having", "Down syndrome or having family members with Down syndrome", sep = "<br />"),
                  hoverinfo = "text",
                  showscale = FALSE
        ) |> 
        add_trace(data = org_char[org_char$related_to_ds %in% c("50% - 74%", "75% or more") & org_char$focus != "Holistic" & !(org_char$iso %in% org_char$iso[org_char$include == "Yes"]),],
                  z = ~0,
                  locations = ~iso,
                  colorscale = list(
                    list(0, "#cccccc"),
                    list(1, "#cccccc")
                  ),
                  marker = list(line = list(color = toRGB("black"), width = 0.5)),
                  text = ~paste(paste0("<b>",country,"</b><br />"), "Survey completed, but the organization was excluded", "due to not having a holistic focus on the lives", "of people with Down syndrome", sep = "<br />"),
                  hoverinfo = "text",
                  showscale = FALSE
        ) |> 
        add_trace(data = org_char[!(org_char$related_to_ds %in% c("50% - 74%", "75% or more")) & org_char$focus != "Holistic" & !(org_char$iso %in% org_char$iso[org_char$include == "Yes"]),],
                  z = ~0,
                  locations = ~iso,
                  colorscale = list(
                    list(0, "#cccccc"),
                    list(1, "#cccccc")
                  ),
                  marker = list(line = list(color = toRGB("black"), width = 0.5)),
                  text = ~paste(paste0("<b>",country,"</b><br />"), "Survey completed, but the organization was excluded due", "to not having a holistic focus on the lives of people with", "Down syndrome and fewer than 50% of the organization's", "members either having Down syndrome or having family", "members with Down syndrome", sep = "<br />"),
                  hoverinfo = "text",
                  showscale = FALSE
        )
    }
    
    # Formatting
    map <- map |> 
      colorbar(title = "Score",
               tickvals = c(min(scores[,paste0(input$domain, "_score")], na.rm = TRUE), 
                            max(scores[,paste0(input$domain, "_score")], na.rm = TRUE) - 0.1*(max(scores[,paste0(input$domain, "_score")], na.rm = TRUE)-min(scores[,paste0(input$domain, "_score")], na.rm = TRUE))),
               ticklen = 0,
               ticktext = c("Needs Improvement", "Role Model"),
               tickangle = 90) |> 
      layout(
        title = list(
          text = names(domain_list[domain_list == input$domain]),
          font = list(
            size = 30
          )
        ),
        geo = list(
          showcountries = TRUE,
          showframe = FALSE,
          showcoastlines = TRUE,
          projection = "equirectangular"
        ),
        margin = list(
          t = 100
        )
      )
    
    event_register(map, "plotly_click")
    map
  })
  
  # output$download <- downloadHandler(
  #   filename = function() {
  #     paste0("DS-4S ", input$domain, ".csv")
  #   },
  #   content = function(file){
  #     write.csv(scores[,c("country", paste0(input$domain, "_rank"))], file, row.names = FALSE)
  #   }
  # )
  
  output$country_scores <- renderUI({
    req(input$country)
    df <- scores[scores$country == input$country,] |> 
      select(ends_with("_score"), ends_with("_rank"))  |> 
      pivot_longer(
        everything(),
        names_to = c("domain","type"),
        names_pattern = "^(.*)_(rank|score)$"
      ) |> 
      pivot_wider(names_from = type, values_from = value) |> 
      mutate(
        Score = ifelse(is.na(score), "\u2014", gsub("-", "\u2013", sprintf("%.1f", score))),
        Rank  = ifelse(is.na(rank), "\u2014", sprintf("%.0f", rank)),
        Domain = names(domain_list[domain_list == domain])
      ) |> 
      select(Domain, Score, Rank)
    
    tags$table(class="table",
               tags$thead(
                 tags$tr(
                   tags$th(), tags$th("Score"), tags$th("Rank")
                 )
               ),
               tags$tbody(
                 tags$tr(
                   tags$td("Overall", style = paste("color:",domain_colors[domain_list["Overall"]])), 
                   tags$td(df[df$Domain=="Overall","Score"], align="center", style = paste("color:",domain_colors[domain_list["Overall"]])), 
                   tags$td(df[df$Domain=="Overall","Rank"],  align="center", style = paste("color:",domain_colors[domain_list["Overall"]])),
                   id = "row_overall"
                 ),
                 tags$tr(
                   tags$td("Community Inclusion", style = paste("color:",domain_colors[domain_list["Community Inclusion"]])), 
                   tags$td(df[df$Domain=="Community Inclusion","Score"], align="center", style = paste("color:",domain_colors[domain_list["Community Inclusion"]])), 
                   tags$td(df[df$Domain=="Community Inclusion","Rank"],  align="center", style = paste("color:",domain_colors[domain_list["Community Inclusion"]]))
                 ),
                 tags$tr(
                   tags$td("Education", style = paste("color:",domain_colors[domain_list["Education"]])), 
                   tags$td(df[df$Domain=="Education","Score"], align="center", style = paste("color:",domain_colors[domain_list["Education"]])), 
                   tags$td(df[df$Domain=="Education","Rank"],  align="center", style = paste("color:",domain_colors[domain_list["Education"]]))
                 ),
                 tags$tr(
                   tags$td("Healthcare", style = paste("color:",domain_colors[domain_list["Healthcare"]])), 
                   tags$td(df[df$Domain=="Healthcare","Score"], align="center", style = paste("color:",domain_colors[domain_list["Healthcare"]])), 
                   tags$td(df[df$Domain=="Healthcare","Rank"],  align="center", style = paste("color:",domain_colors[domain_list["Healthcare"]]))
                 ),
                 tags$tr(
                   tags$td("Independence", style = paste("color:",domain_colors[domain_list["Independence"]])), 
                   tags$td(df[df$Domain=="Independence","Score"], align="center", style = paste("color:",domain_colors[domain_list["Independence"]])), 
                   tags$td(df[df$Domain=="Independence","Rank"],  align="center", style = paste("color:",domain_colors[domain_list["Independence"]]))
                 ),
                 tags$tr(
                   tags$td("Policy and Law", style = paste("color:",domain_colors[domain_list["Policy and Law"]])), 
                   tags$td(df[df$Domain=="Policy and Law","Score"], align="center", style = paste("color:",domain_colors[domain_list["Policy and Law"]])), 
                   tags$td(df[df$Domain=="Policy and Law","Rank"],  align="center", style = paste("color:",domain_colors[domain_list["Policy and Law"]]))
                 ),
               )
    )
  })
  
  # output$country_domains <- renderPlotly({
  #   if(input$country != ""){
  #     df <- scores[scores$country == input$country,]
  #     df <- df |> select(ends_with("_score") | ends_with("_rank"))
  #     
  #     df <- df |> 
  #       pivot_longer(
  #         cols = everything(),
  #         names_to = c("keyword", "type"),
  #         names_pattern = "^(.*)_(rank|score)$",
  #         values_to = "value"
  #       ) |> 
  #       pivot_wider(
  #         names_from = type,
  #         values_from = value
  #       )
  #     
  #     df$keyword <- names(domain_list[domain_list == df$keyword])
  #     df$keyword <- stringr::str_to_title(df$keyword)
  #     
  #     y_max <- max(df$rank, na.rm = TRUE)
  #     
  #     plot_ly(df,
  #       x = ~factor(keyword, levels = keyword),
  #       y = ~(max(rank, na.rm = TRUE) - rank + 1),
  #       text = ~rank,
  #       hoverinfo = "none",
  #       type = "bar") |>
  #     layout(
  #       yaxis = list(
  #         title = "Ranking",
  #         range = c(0, y_max),
  #         tickvals = seq(0+y_max%%5, y_max+y_max%%5, ceiling(y_max/5)),
  #         ticktext = seq(y_max-y_max%%5+1, 1, -ceiling(y_max/5))
  #       ),
  #       xaxis = list(
  #         title = "Domain"
  #       )
  #     )
  #   }
  # })
  
  output$country_responses <- renderUI({
    if(input$country != "") {
      row <- responses[responses$Country == input$country,] |> select(-"Country")
      # TODO: fix duplicates
      if(nrow(row) > 1) {
        row <- row[1,]
      }
      df <- cbind(questions[questions$ID == colnames(row), c("Question", "Domain", "Scale")], t(row))
      colnames(df)[4] = "Response"
      
      tags$span(id = "responses", tagList(
        lapply(seq_len(nrow(df)), function(i) {
          tags$div(
            class = gsub(" ", "", df$Domain[i]),
            tags$strong(df$Question[i], class = "question"),
            tags$p(paste0("(Scale: ",df$Scale[i],")"), class = "scale"),
            tags$p(df$Response[i], class = "response")
          )
        })
      ))
    }
  })
  
  output$country_characteristics <- renderUI({
    if(input$country != "") {
      row <- org_char[org_char$country == input$country,]
      # TODO: fix duplicates
      if(nrow(row) > 1) {
        row <- row[1,]
      }
      tags$span(tagList(
                  tags$strong("Respondent organization characteristics"),
                  tags$div("Region:", gsub("-", "\u2013", row$region_size)),
                  tags$div("Number of members:", gsub("-", "\u2013", row$members)),
                  tags$div("Number of members with Down syndrome or with a relative with Down syndrome:", gsub("-", "\u2013", row$related_to_ds))
      ))
    }
  })
  
  # Store which country is clicked on the map
  country_selected <- eventReactive(event_data("plotly_click", source = "map"), {
    data <- event_data("plotly_click", source = "map")
    if(data$curveNumber == 0) {
      # Valid scores
      countries <- scores$country[!is.na(scores[,paste0(input$domain, "_score")])]
    } else if(data$curveNumber == 1) {
      # Missing domain score
      countries <- scores$country[is.na(scores[,paste0(input$domain, "_score")])]
    } else if(data$curveNumber == 2) {
      # Excluded countries
      countries <- org_char$country[!(org_char$related_to_ds %in% c("50% - 74%", "75% or more") & org_char$focus == "Holistic") & !(org_char$iso %in% org_char$iso[org_char$include == "Yes"])]
    }
    
    countries[data$pointNumber+1]
  })
  
  # When a country is clicked on the map, update the country tab selection to be that country
  observeEvent(country_selected(), {
    updateSelectizeInput(session, "country", selected = country_selected())
    updateNavbarPage(session, "navbar", selected = "Country Data")
  })
}

shinyApp(ui, server)
