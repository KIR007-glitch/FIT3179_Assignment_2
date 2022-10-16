// TODO: Must finish these functionality for the actual assignment
// 1) How to make a tooltip with images so that I could add an image of the circuit layout
// 2) How to add a URL onto the tool tip so that a user can access a wikipedia page regarding the circuit.


const VegaLiteSpec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 450,
    "title": "Formula 1 2021 Season Global Racing Locations",
    "params":[
        {
            "name":"zoom_level",
            "value": 100,
            "bind": {
                "input":"range",
                "min": 100,
                "max": 1000,
                "step":250,
                "name":"Zoom: "
            }
            
        },
        {
            "name":"center_to",
            "value":[11.1, 54.5],
            "bind":{
                "input":"select",
                "options":[
                    [11.1, 54.5],
                    [45.8, 29.7],
                    [-96.9, 26.2],
                    [-62.4, -38.1],
                ],
                "labels": ["Europe", "Middle-East", "North America", "South America"],
                "name": "Map Centre: "
            }
        }
    ],


    "projection": {
        "type": "equalEarth",
        "center": {"expr":"center_to"},
        "scale":{"expr":"zoom_level"},
    },
  
    "layer": [
      {
    "data": {
      "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179_Assignment_2/main/js/oceans.json",
      "format": {"type": "topojson", "feature": "oceans"}
    },
    "mark": {"type": "geoshape", "fill": "skyblue"}
  },
  
      {
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179_Assignment_2/main/js/ne_110m.json",
          "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
        },
        "mark": {"type": "geoshape", "fill": "beige","stroke": "lightgrey"}
      },
      
      {
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179_Assignment_2/main/js/ne_110m.json",
          "format": {"type": "topojson", "feature": "ne_110m_graticules_30"}
        },
        "mark": {"type": "geoshape","fill":null, "stroke": "white"}
      },
  
  
      {
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179_Assignment_2/main/Data/2021_circuits.csv",
            "format":{"type":"csv"}
        },
  
        "mark": {"type": "circle"},
        "encoding": {
          "longitude": {"field": "lng", "type": "quantitative"},
          "latitude": {"field": "lat", "type": "quantitative"},
          "tooltip":[
            {"field":"country","title":"Country"},
            {"field": "location","title":"Location"},
            {"field": "name_x", "title":"Circuit Name"},
            {"field": "round", "title":"Race Number"}
  
            ],
            "size": {"value": 70},
            "color": {"field":"name_x",
            "scale": {
                "domain": ["Bahrain International Circuit","Circuit de Barcelona-Catalunya",
                "Istanbul Park","Circuit de Monaco","Silverstone Circuit","Hungaroring","Circuit de Spa-Francorchamps",
                "Autodromo Nazionale di Monza","Autódromo José Carlos Pace","Autodromo Enzo e Dino Ferrari",
                "Yas Marina Circuit","Autódromo Hermanos Rodríguez","Circuit Paul Ricard","Circuit Park Zandvoort",
                "Circuit of the Americas","Red Bull Ring","Red Bull Ring","Sochi Autodrom","Baku City Circuit","Autódromo Internacional do Algarve",
                "Jeddah Corniche Circuit","Losail International Circuit"],
                "range": ["black", "black","black","blue",
                "black","purple","blue",
                "orange","black","blue","blue","blue","blue","blue","blue","blue","black","blue","black","black","black"],
                "type": "nominal",
            },
            "title":"Circuit Name"


        },


        }, 
      },
      
  
    ],
    "config": {
        "text": { "font": "Open Sans" },
        "title": { "font": "monospace", "fontSize": 25, "fontWeight": "bold" },
  },
  }

vegaEmbed('#vis1', VegaLiteSpec1,{"actions":false});