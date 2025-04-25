library(getip)
ip_address <- getip::getip()

shiny::runApp("app.R",
  host = ip_address, port = 3838,
  display.mode = "normal"
)
