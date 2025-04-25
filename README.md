# Down Syndrome Societal Services and Supports Survey

## Motivation & Background

I am part of a [research project](https://doi.org/10.1016/j.gim.2024.101114) and created [www.DownSyndromeQualityOfLife.com](https://www.downsyndromequalityoflife.com/) to display our results. However, I made the site entirely with self-coded JS, HTML, and CSS, and it came out not smooth as I'd hope. It also doesn't work well on mobile. For this project, I want to recreate it as an Shiny app so that it's smoother.

The core of the website is a [world map](https://www.downsyndromequalityoflife.com/map.html) that displays different data depending on a few inputs (a selection of which data and domain to display). The intent is for Down syndrome advocacy organizations to use our data to find "gold standard" countries that they could learn from to improve their own societies for people with Down syndrome. Without a nice map, it will be much harder for people to process/understand the data and find countries that have cultures from which best practices might transfer over relatively smoothly.

## Dashboard Overview

See [www.DownSyndromeQualityOfLife.com](https://www.downsyndromequalityoflife.com/) for a mostly functional prototype.

## User Guide

The main page ("Map") is the most interesting and high-yield to view the data. You can toggle among the different categories ("domains") of the survey using the "Ranking Category" selector in the top left. You can also toggle excluded countries from being shown on the map, but their scores will not be displayed (they were excluded prior to data analysis). For the map nerds out there, you can also toggle among different map projections in the top right. At the bottom of the page, there's a "Download Data" button to download the rankings that are currently being displayed on the map. This downloads a very limited data set by intention to prevent users from easily downloading all of the data and potentially misusing it. Our team has been very intentional and thoughtful about the take-home message of this study, so we do not want others changing the interpretation of our findings.

The "Country Data" tab allows users to drill into specific countries to view their scores and rankings.

The other tabs are not interactive and mainly serve to provide more information on the background and methodology of the study.

## Feature Guide

-   An intuitive layout with logical organisation of the various components (i.e. using fluidRows/columns, gridlayout, \...)

    -   Tabs at the top using `page_navbar`

-   Minimum of 5 user inputs

    1.  `selectInput`: Ranking Category (page: Map)

    2.  `input_switch`: Show excluded countries? (page: Map)

    3.  `selectInput`: Map Projection (page: Map)

    4.  `downloadButton`: Download Data (page: Map)

    5.  `selectizeInput`: Country (page: Country Data)

    6.  `plotly_click`: select country (linked with #5 above)

-   Minimum of 4 reactive outputs

    1.  Plot (page: Map)

    2.  Table (page: Country Data)

    3.  Plot (page: Country Data)

    4.  Respondent organization characteristics (page: Country Data)

-   At least one piece of data that can be either exported (plot, table, \...) or imported

    1.  Table (from plot) (page: Map)

-   At least two elements in your dashboard should be styled using CSS (you can either use in-line CSS or a dedicated stylesheet)

    1.  Layout of input elements (page: Map)

    2.  Labels of input elements (page: Map)

    3.  Table (page: Country Data)

    4.  Text/headers (pages: References and Citation Information, Methods, About Us)

    5.  Respondent organization characteristics (page: Country Data)

## References

1.  Kats, D. J., Skotko, B. G., de Graaf, G., Skladzien, E., Hooper, B. T., Mordi, R., Mykhailenko, T., Buckley, F., Patsiogiannis, V., Krell, K., Haugen, K., & Donelan, K. (2023). Designing an international survey for organisations serving people with Down syndrome. *Journal of Applied Research in Intellectual Disabilities*, 1--10. <https://doi.org/10.1111/jar.13071>

2.  Kats, D. J., Donelan, K., Banerjee, S., de Graaf, G., Skladzien, E., Hooper, B. T., Mordi, R., Mykhailenko, T., Buckley, F., Santoro, S. L., Patsiogiannis, V., Krell, K., Haugen, K., Skotko, B. G. (2024). Results of Inaugural International Down Syndrome Societal Services and Supports Survey. *Genetics in Medicine*. <https://doi.org/10.1016/j.gim.2024.101114>

------------------------------------------------------------------------

*This project is part of the BMI 709 course offered by the Master of Biomedical Informatics at Harvard Medical School.*
