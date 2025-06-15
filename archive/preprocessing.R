# preprocess_csvs.R

library(dplyr)
library(countrycode)

# custom ISO3C overrides
custom_country_codes <- c("Kosovo" = "KSV",
                          "Scotland" = "GBR")

# scores.csv
read.csv("RAWscores.csv", stringsAsFactors = FALSE) |>
    mutate(iso = countrycode(country,
                             origin      = "country.name",
                             destination = "iso3c",
                             custom_match = custom_country_codes)) |>
    write.csv("scores.csv", row.names = FALSE)

# inclusion.csv
read.csv("RAWinclusion.csv", stringsAsFactors = FALSE) |>
    mutate(iso = countrycode(country,
                             origin      = "country.name",
                             destination = "iso3c",
                             custom_match = custom_country_codes)) |>
    write.csv("inclusion.csv", row.names = FALSE)
