// TO DO
// 3. Add filled dot points to indicate clearly where to use the tooltip to the user.
// 4. Add figure Ground so that it is clear which line he is looking at.

const VegaLiteSpec2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Google's stock price over time.",
    "width": 800,
    "height": 450,
      "title":  " Max Verstappen Vs Lewis Hamilton Season Points",
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179-A2-Setup/main/Data/2021_driver_data.csv",
            "format":{"type":"csv"}
        },

  "layer": [
    {
      "mark": { "type": "line","point":true},
      "encoding": {
        "x": { "field": "name", "type": "ordinal","title":"Grand Prix Name","sort":null},
        "y": { "field": "season_points", "type": "quantitative", "title":"Total Points" },
           "color": {
            "field": "surname",
            "title":"Driver Name",
            "type": "nominal",
            "scale": {
                "domain": ["Verstappen","Hamilton"],
                "range": ["blue", "black"],
                "type": "nominal",
            },
        },
        "layer":[{
          "mark":{"type":"circle"},
        }],

        "tooltip": [
            { "field": "surname", "type": "nominal", "title": "Name" },
            { "field": "name", "type": "nominal", "title": "GrandPrix" },
            { "field": "season_points", "type": "ordinal", "title": "Total Points" },
        ]
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["Verstappen Denied Hamilton passage as they  "],
        "dx": -350,
        "dy": 30,
        "fontSize":12,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["fought wheel to wheel "],
        "dx": -350,
        "dy": 45,
        "fontSize":12,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["Emilia Romagna Grand Prix "],
        "dx": -350,
        "dy": 60,
        "fontSize":12,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["Both Hamilton and Verstappen failed "],
        "dx": -140,
        "dy": 120,
        "fontSize":14,
      }
    },
        {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["to gain points in the Azerbaijan Grand Prix"],
        "dx": -140,
        "dy": 135,
        "fontSize":14,
      }
    },
            {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["Hamilton and Verstappen "],
        "dx": 150,
        "dy": -10,
        "fontSize":14,
      }
    },
                {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["crash out going wheel to "],
        "dx": 150,
        "dy": 5,
        "fontSize":14,
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "bottom",
        "text": ["wheel in the Italian Grand Prix"],
        "dx": 150,
        "dy": 20,
        "fontSize":14,
      }
    },
    {
      "data": { "values": [{}]},

  "mark": {
    "type": "text", 
    "angle": 10,
     "text": ["___ "],
     "dx": -150,
     "dy": 130,
    "fontSize": 35},

    },
    {
      "data": { "values": [{}]},

  "mark": {
    "type": "text", 
    "angle": 10,
     "text": ["___ "],
     "dx": 120,
     "dy": -50,
    "fontSize": 35},

    },
    {
      "data": { "values": [{}]},

  "mark": {
    "type": "text", 
    "angle": 90,
     "text": ["______ "],
     "dx": 120,
     "dy": 330,
    "fontSize": 35},

    },
    {
      "data": {
                  "values": [{}]
              },
       "encoding": {
                  "x": { "datum": "Saudi Arabian Grand Prix" }
              },
      "layer":[{

                      "mark": {
                      "type": "rule",
                      "strokeWidth": 4,
                      "strokeDash": [9, 4],
                      "color": "black",
                      "tooltip": "Hamilton and Verstappen were tied for points at 367.5 going into the last race",   
              },
      }]
    }

  ],
  "config": {
        "text": { "font": "Open Sans" },
        "title": { "font": "monospace", "fontSize": 25, "fontWeight": "bold" },
  },
}

vegaEmbed("#vis2",VegaLiteSpec2,{"actions":false});