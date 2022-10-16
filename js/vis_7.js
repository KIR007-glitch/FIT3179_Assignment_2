// To do: Add an interactive average to show the number of points clearly to the user.
// Add Labels if possible so that it is easier for the viewer to identify
// Add color blind friendly colors to the chart other wise might lose marks

const VegaLiteSpec7 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  
     "data": {
              "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179-A2-Setup/main/Data/constructor_data.csv",
                "format":{"type":"csv"}
            },
    "params":[{
      "name":"constructor",
      "bind":{
        "input":"select",
        "options":[
          null,
          "Red Bull",
          "Mercedes",
          "Ferrari",
          "McLaren",
          "Alpine F1 Team",
        ],
        "labels":[
          "Show All",
          "Red Bull",
          "Mercedes",
          "Ferrari",
          "Mclaren",
          "Alpine",
        ],
        "name":"Constructor Selection: "
      }
    }],
    "transform":[{
      "filter": "constructor == null || datum.name_y == constructor"
    }],
    "width": 800,
    "height":450,
    "title":"Top 5 Constructors of the 2021 Season",
    "mark": "bar",
    "encoding": {
      "x": {"field": "name_x", "type": "ordinal","title":"Grand Prix Name", "sort":"null"},
      "y": {
        "aggregate": "sum", "field": "points",
        "title": "Constructor Points",
        "stack": null
      },
      "color": {
        "field": "name_y",
        "scale":{
          "domain":["Red Bull","Mercedes","Ferrari","McLaren","Alpine F1 Team"],
          "range": ["#1B0BF5", "#0A0A0A", "#D41159", "#F1B906","#AD79FF"],
          "type":"nominal"

        },
     
        "title":"Constructor",
        "type": "nominal",
  
      },
      "tooltip": [
                { "field": "name_y", "type": "nominal", "title": "Constructor Name:" },
                {"field":"points", "type":"quantitative", "title":"Points"},
                {"field":"name_x", "type": "nominal", "title":"Grand Prix Name"}
            ],
      "opacity": {"value": 1}
      
    },
    config: {
        text: { font: 'Open Sans'},
        title: { font: 'monospace', fontSize: 20, fontWeight: "bold" },
    },
    
  }

  vegaEmbed("#vis7",VegaLiteSpec7,{"actions":false});
