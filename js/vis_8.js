// To do: Make sure the data file included for this visualization removes the /N elements from the fastestLapSpeed
// Make sure to create a data frame including the fastest lap for each driver and then 
// Add a line to show that the top 13 drivers have set the most number of fast laps
const VegaLiteSpec8 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Drag a rectangular brush to show (first 20) selected points in a table.",
    "hconcat": [{
        "title": "Correlation between Grid Position, Final Position and Fastest Lap Speed",
            "width": 800,
            "height": 450,
            "layer":[{
        "data": {"url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179-A2-Setup/main/Data/2021_driver_data.csv",
    "format":{"type":"csv"}},
    "mark":"rect",
    "encoding": {
                "x": {
                "bin":{"maxbins":20},
                "field": "positionOrder",
                "type": "quantitative",
                "title": "Final Position",
            },
            "y": {
                "bin":{"maxbins":20},
                "field": "grid",
                "type": "quantitative",
                "sort":"descending",
                "title": "Grid Position"
            },
            
            "color": {
                "field":"fastestLapSpeed",
                "type": "quantitative",
                "title": "Fastest Lap Speed (km/h)",
                "scale": {
                    "scheme": "plasma"
                }
            },
             "tooltip":[
                { "field": "positionOrder", "type": "quantitative", "title":"Final Position"},
                { "field": "grid", "type": "quantitative", "title":"Grid Position"},
                { "field": "fastestLapSpeed", "type": "quantitative", "title":"Fastest Lap Speed"},
                {"field":"surname","type":"nominal","title":"Driver Name"},
                {"field":"name","type":"nominal","title":"Grand Prix"}                  
              ]
    }
    },
    {
        "data": {
                    "values": [{}]
                },
         "encoding": {
                    "x": { "datum": 13.0 }
                },
        "layer":[{

                        "mark": {
                        "type": "rule",
                        "strokeWidth": 7,
                        "strokeDash": [9, 4],
                        "color": "black",
                        "tooltip": "The fastest Lap for record for each race of 2021 was set by a driver who had a top 10 grid position and had a top 10 final position"
                },
        },
        {
                    "mark": {
                        "type": "text",
                        "align": "left",
                        "baseline": "top",
                        "dx": -300,
                        "dy": -240,
                        "x": "width",
                        "text": "<--------------------------------------------------------------------------------Top 13 drivers ",
                        "tooltip": " The Top 13 drivers had Fastest Lap speeds of over 240 km/h."
                    }
        }]
    },
    {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["The Top 13 Drivers had Fastest"],
          "dx": 130,
          "dy": 110,
          "fontSize":14,
        }
      },
      {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["Lap speeds of over 240 km/h."],
          "dx": 130,
          "dy": 130,
          "fontSize":14,
        }
      },
      {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["<--------------------------------"],
          "angle":90,
          "dx": -100,
          "dy": 270,
          "fontSize":14,
          "fontWeight":"bold",
        }
      },

      {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["Lando Norris is one of the few drivers"],
          "dx": -400,
          "dy": 80,
          "fontSize":14,
        }
      },
      {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["in the top 13 with a fastest lap less than "],
          "dx": -400,
          "dy": 100,
          "fontSize":14,
        }
      },
      {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": [" 180 km/h "],
          "dx": -400,
          "dy": 120,
          "fontSize":14,
        }
      },
]
    }],
    "resolve": {"legend": {"color": "independent"}},
    "config": {
        "text": { "font": "Open Sans" },
        "title": { "font": "monospace", "fontSize": 20, "fontWeight": "bold" },
    },
}

  vegaEmbed("#vis8",VegaLiteSpec8,{"actions":false});