# Run this once, locally, NOT in app.R
library(countrycode)

data_file <- "data/inclusion_intl_2025.csv"

df <- read.csv(data_file)

custom_country_codes <- c("Kosovo" = "KSV", "Scotland" = "GBR")

df$code <- countrycode(df$region, "country.name", "iso3c", custom_match = custom_country_codes)

write.csv(df, data_file, row.names = FALSE)