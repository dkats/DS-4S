# Run this once, locally
library(countrycode)

data_file <- "data/inclusion_intl_2025.csv"

df <- read.csv(data_file)

custom_country_codes <- c("Kosovo" = "KSV", 
                          "Scotland" = countrycode("Great Britain", "country.name", "iso3c"), 
                          "T\xfcrkiye" = countrycode("Turkey", "country.name", "iso3c"),
                          "C\xf4te d'Ivoire" = countrycode("Ivory Coast", "country.name", "iso3c"))

df$code <- countrycode(df$region, "country.name", "iso3c", custom_match = custom_country_codes)

write.csv(df, data_file, row.names = FALSE)