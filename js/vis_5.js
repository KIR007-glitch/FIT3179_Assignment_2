const VlSpec3 = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  title: "Global Internet Connectivity over Time",
  width: 600,
  height: 450,
  params: [{
      name: "country_selection",
      bind: {
          input: "select",
          options: [
              null,
              "China",
              "India",
              "New Zealand",
              "Sweeden",
              "USA",
          ],
          labels: [
              "All",
              "China",
              "India",
              "New Zealand",
              "Sweeden",
              "USA",
          ],
          name: "Compair to Country: "
      }
  }],
  data: {
      url: "https://raw.githubusercontent.com/Blake-Haydon/FIT3179_2021_S2_A2/main/docs/data/connectivity/online_population.csv",
      format: {
          type: "csv"
      },
  },
  transform: [{
      filter: "country_selection == null || (datum.Country == country_selection | datum.Country == 'Australia')"
  }],
  mark: { type: 'line', strokeWidth: 6 },
  encoding: {
      x: { field: 'Year', type: 'ordinal' },
      y: { field: 'Percent Connected', type: 'quantitative' },
      color: {
          field: "Country",
          type: "nominal",
          scale: {
              domain: ["Australia", "China", "India", "New Zealand", "Sweeden", "USA"],
              range: ["#91003f", "red", "grey", "green", "orange", "blue"],
              type: "nominal",
          },
      },
      tooltip: [
          { field: "Year", type: "ordinal", title: "Year" },
          { field: "Country", type: "nominal", title: "Country" },
          { field: "Percent Connected", type: "ordinal", title: "Percent Connected (\%)" },
      ]
  },
  config: {
      text: { font: 'Open Sans' },
      title: { font: 'monospace', fontSize: 15, fontWeight: "normal" },
  },
};

vegaEmbed('#vis3', VlSpec3);