//set URL to pull data
let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';


// Initializes the page with a default plots
function init() {

    let barData = [{
        type: 'bar',
        x: [20, 14, 23],
        y: ['giraffes', 'orangutans', 'monkeys'],
        orientation: 'h'
      }];
      
      Plotly.newPlot('bar', barData);

    let bubTrace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      };
      
    let bubData = [bubTrace1];
      
    let bubLayout = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
      };
      
    Plotly.newPlot('bubble', bubData, bubLayout);

    let gaugeData = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: 270,
            title: { text: "Speed" },
            type: "indicator",
            mode: "gauge+number"
        }
    ];
    
    let gaugeLay = { width: 600, height: 500, margin: { t: 0, b: 0 } };

    Plotly.newPlot('gauge', gaugeData, gaugeLay);
  }
  
// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);
d3.selectAll("#selDataset").on("change", getData);

//Pull in the data
d3.json(url).then(function(data){
    console.log(data);


});
init();
