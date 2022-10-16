const VegaLiteSpec4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Google's stock price over time.",
    "width": 800,
    "height": 450,
            "data": {
              "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179-A2-Setup/main/Data/2021_driver_data.csv",
                "format":{"type":"csv"}
            },
     "encoding": {
      "x": {"field": "name", "type": "nominal"},
      "y": {"field": "positionOrder", "type": "quantitative","sort":"descending"}
    },
      "transform": [{"filter": "datum.surname==='Verstappen'"}],
  
    "layer": [{
      "mark": {
        "type":"line",
        "point":"true",
      }
    }, {
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "middle",
        "dx": 3
      },
      "encoding": {
        "text": {"field": "positionOrder", "type": "quantitative"}
      }
    }]
  
   
  }

vegaEmbed("#vis4",VegaLiteSpec4);