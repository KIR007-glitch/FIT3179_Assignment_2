const VegaLiteSpec10 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 450,
    "title":  "2021 Season Top 10 Drivers",
    params: [{
        name: "Driver_selection",
        bind: {
            input: "select",
            options: [
                null,
                "Verstappen",
                "Hamilton",
                "Bottas",
                "Sainz",
                "Norris",
                "Leclerc",
                "PÃ©rez",
                "Ricciardo",
                "Gasly",
                "Alonso",
                
            ],
            labels: [
                "All",
                "Verstappen",
                "Hamilton",
                "Bottas",
                "Sainz",
                "Norris",
                "Leclerc",
                "Perez",
                "Ricciardo",
                "Gasly",
                "Alonso"
            ],
            name: "Select Driver"
        }
    }],
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179_WK10_HW/main/data/2021_driver_data.csv",
            "format":{"type":"csv"}
        },
        transform: [{
            filter: "Driver_selection == null || (datum.surname == Driver_selection)"
        }],



        "layer":[{
            "params":[{
                "name":"hover",
                "value": [{"surname": "Verstappen"}],
                "select": {
                    "type": "point",
                    "fields": ["surname"],
                    "on": "mouseover"
                            }
            }],
            "mark": { "type": "line","point":"true"},

            "encoding": {
               "x": { "field": "name", "type": "ordinal","title":"Grand Prix Name","sort":null},
               "y": { "field": "season_points", "type": "quantitative", "title":"Total Points" },
            "color": {
            
                "field": "surname",
                "title":"Driver Name",
                "type": "nominal",
                "scale": {
                    "domain": ["Verstappen","Hamilton","Bottas","PÃ©rez","Sainz","Norris","Leclerc","Ricciardo","Gasly","Alonso"],
                    "range": ["#1B0BF5", "#0A0A0A","#0A0A0A","#1B0BF5","#FB270A","#F1B906","#FB270A","#F1B906","#07CEE4","#AD79FF"],
                    "type": "nominal",
    
                },
            },
            "tooltip": [
                { "field": "surname", "type": "nominal", "title": "Name" },
                { "field": "name", "type": "nominal", "title": "GrandPrix" },
                { "field": "season_points", "type": "ordinal", "title": "Total Points", },
            ]
        },},
        {
            "data": {
                        "values": [{}]
                    },
             "encoding": {
                        "y": { "datum": 215.0 }
                    },
            "layer":[{
    
                            "mark": {
                            "type": "rule",
                            "strokeWidth": 7,
                            "strokeDash": [9, 4],
                            "color": "black",
                    },
            },
            {
                "mark": {
                  "type": "text",
                  "align": "left",
                  "baseline": "bottom",
                  "text": ["Other drivers barely managed to "],
                  "dx": -380,
                  "dy": 30,
                  "fontSize":20,
                },
            },
            {
                
                "mark": {
                  "type": "text",
                  "align": "left",
                  "baseline": "bottom",
                  "text": ["break the 215 Points Mark"],
                  "dx": -380,
                  "dy": 50,
                  "fontSize":20,
                },
              },
              
        ]
        },
           

             
        
    
    
    
    
    ],
  
 
    "config": {
        "text":  { "font": "Open Sans" },
        "title": { "font": "monospace", "fontSize": 20, "fontWeight": "bold" },
    },
}

vegaEmbed("#vis10",VegaLiteSpec10,{"actions":false});