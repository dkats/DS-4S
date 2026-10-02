# Run this once, locally, NOT in app.R
library(countrycode)

scores <- read.csv("app/scores.csv")
org_char <- read.csv("app/inclusion.csv")

custom_country_codes <- c("Kosovo" = "KSV", "Scotland" = "GBR")

scores$iso <- countrycode(scores$country, "country.name", "iso3c", custom_match = custom_country_codes)
org_char$iso <- countrycode(org_char$country, "country.name", "iso3c", custom_match = custom_country_codes)

write.csv(scores, "app/scores.csv", row.names = FALSE)
write.csv(org_char, "app/inclusion.csv", row.names = FALSE)