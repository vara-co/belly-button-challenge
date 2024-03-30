// Use the D3 library to read in samples.json from the URL
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Fetch the JSON data and log it to console
let json_data = d3.json(url).then(function(data) {
    console.log(data);
});

console.log(json_data)
// Create a horizontal bar chart with a dropdown menu to
// display the top 10 OTUs found in that individual

// Use the .slice(0,10) method, likely to get the top 10 after sorting.

// When creating the bar chart make sure you use
// sample_values for the values
// otu_ids for the labels
// otu_labels as the hovertext for the chart

////////////////////////////////////////////////////////////////////
//Trace draft for the bar chart
let trace1 = {
    x: blabla,
    y: blabla,
    text: otu_labels,  // hovering text
    name: "otu_ids",  // labels for the chart
    type: "bar",    // type of chart
    orientation: "h"    // horizontal view
};

let data = [trace1];

// Apply a title to the layout
let layout = {
    title: "Bar Chart" // UPdate the name of the chart here
};

// Render the bar plot to the div.
Plotly.newPlot("", data, layout);

///////////////////////////////////////////////////////////////////
//Trace draft for the bubble chart
let trace1 = {
    x: [otu_ids],
    y: [sample_values],
    mode: 'markers',
    marker: {
        size: [sample_values],
        color: [otu_ids]
        },  // double check if this coma is correct
    text: [otu_labels],
    };

    var data = [trace1];

    var layout = {
        title: "Bubble Chart"  // Update the name
        showlegend: false,
        height: 600,   // adjust the size
        width: 600      // adjust the size
};

// Render the bubble plot to the div.
Plotly.newPlot("", data, layout);

//Display the sample metadata
// i.e., an individual's demographic information

// Display each key-value pair from the metadata JSON object
// somewhere on the page: id, ethnicity, gender, age, location, bbtype, wfreq

// Update all the plots when a new sample is selected.
// Additionally, you are welcome to create any layout that you would
// like for your dashboard. An example dashboard is shown in the instructions.

// Deploy your app to a free static page hosting service, such as GitHub Pages.
// Submit the links to your deployment and your GitHub repo.