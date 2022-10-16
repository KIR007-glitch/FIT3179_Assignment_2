const VegaLiteSpec9 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A population pyramid for the US in 2000, created using stack. See https://vega.github.io/vega-lite/examples/concat_population_pyramid.html for a variant of this created using concat.",
    "title":"Verstappen's Gap to Hamilton Throughout the Season",
    "width": 800,
    "height": 450,
    "data": { "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179-A2-Setup/main/Data/ver_ham_point_gap.csv"},
    "transform": [
      {"calculate": "datum.driverId == 44 ? 'Verstappen' : 'Hamilton'", "as": ""},
      {"calculate": "datum.driverId == 44 ? -datum.Points_Gap : datum.Points_Gap", "as": "Points_Gap"}
    ],
    "layer":[{
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "Track",
          "type":"nominal",
          "axis": null, "sort": "null",
        },
        "y": {
          "aggregate": "sum", "field": "Points_Gap",
          "title": "Gap to Hamilton",
          "axis": {"format": "s"}
        },
        "color": {
          "field": "driverId",
          "scale": {
            "domain":["44","33"],
            "range": ["black", "#3385ff"]},
          "legend": {
            "labelExpr": "datum.label == 44 ? 'Lagging' : 'Leading'",
            "title":"Points Status"
          },
        },
        "tooltip":[
          {"field":"Points_Gap", "type":"quantitative","title":"Gap to Hamilton"},
          {"field":"Track", "type":"nominal", "title": "Track Name"}
        ]
      },
      "config": {
        "view": {"stroke": null},
        "axis": {"grid": false}
      }
    }, 
    {
      "data": {
                  "values": [{}]
              },
       "encoding": {
                  "x": { "datum": "Monaco" }
              },
      "layer":[{

                      "mark": {
                      "type": "rule",
                      "strokeWidth": 4,
                      "strokeDash": [9, 4],
                      "color": "black",   
              },
      }]
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["Verstappen leading after"],
        "dx": -400,
        "dy": -150,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["the fourth race at Monaco"],
        "dx": -400,
        "dy": -130,
        "fontSize":14,
      }
    },
    {
      "data": {
                  "values": [{}]
              },
       "encoding": {
                  "x": { "datum": "Saudi Arabia" }
              },
      "layer":[{

                      "mark": {
                      "type": "rule",
                      "strokeWidth": 4,
                      "strokeDash": [9, 4],
                      "color": "black",   
              },
      }]
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["Hamilton and Verstappen"],
        "dx": 180,
        "dy": -150,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["become equal on points"],
        "dx": 180,
        "dy": -130,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["<--------------------When considering the races within this range it is------------------------->"],
        "dx": -220,
        "dy": -100,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["it is quite clear who was in favour for the championship"],
        "dx": -140,
        "dy": -80,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["Race Name"],
        "dx": -80,
        "dy": 280,
        "fontSize":14,
        "fontWeight":"bold"
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R1"],
        "dx": -390,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R2"],
        "dx": -360,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R3"],
        "dx": -320,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R4"],
        "dx": -280,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R5"],
        "dx": -250,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R6"],
        "dx": -220,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R7"],
        "dx": -180,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R8"],
        "dx": -140,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R9"],
        "dx": -105,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R10"],
        "dx": -75,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R11"],
        "dx": -35,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R12"],
        "dx": 5,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R13"],
        "dx": 40,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R14"],
        "dx": 80,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R15"],
        "dx": 113,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R16"],
        "dx": 150,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R17"],
        "dx": 185,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R18"],
        "dx": 220,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R19"],
        "dx": 255,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R20"],
        "dx": 290,
        "dy": 250,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R21"],
        "dx": 330,
        "dy": 250,
        "fontSize":14,
      }
    },

    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["R22"],
        "dx": 370,
        "dy": 250,
        "fontSize":14,
      }
    },



    
  
  
  ],
  "config": {
    "text": { "font": "Open Sans" },
    "title": { "font": "monospace", "fontSize": 25, "fontWeight": "bold" },
},
  }
  

   
  

  vegaEmbed("#vis9",VegaLiteSpec9,{"actions":false});