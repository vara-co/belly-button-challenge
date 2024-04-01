//Use the D3 library to read in samples.json from the URL given

//Define url variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//Fetch the JSON data and log to console
let json_data = d3.json(url).then(function(data) {
    console.log(data);
});

//////////////////////////////////////////////////////////////////////////////////////////////////

//Function that updates plots on change
// Note that this function has to be the name optionChanged due to the HTML line of code:
// <select id="selDataset" onchange="optionChanged(this.value)"></select> If you wanted to change the
// function name, you would have to update it on the HTML line above as well.

function optionChanged(sampleID) {    // This function will kickstart the other three within it
    Metadata(sampleID);
    BarChart(sampleID);
    BubbleChart(sampleID);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
//Create function to initialize dinamic charts at startup with a functioning dropdown menu
function init () {

    //Use D3 to select the HTML element <select id="selDataset" onchange="optionChanged(this.value)"></select>
    let dropdownMenu = d3.select("#selDataset");

    //Values for dropdown menu with id's
    ///let dataset = dropdownMenu.property("value");

    d3.json(url).then(function(data) {
        let sampleNames = data.names;
        //Iterate through array and log/append each name
        sampleNames.forEach((name) => {
            //Append each value to populate dropdown menu
            dropdownMenu.append("option")
                .text(name)
                .property("value", name);
        });

        //Call first sample from list
        let firstSample = sampleNames[0];

        //Call first plots to initialize
        Metadata(firstSample);
        BarChart(firstSample);
        BubbleChart(firstSample);
        
    }); 

}; 

////////////////////////////////////////////////////////////////////////////////////////////

//Create function to build the Metadata Box
function Metadata (testID) {    
    //Call json data
    d3.json(url).then(function(data) {    
        let metadata = data.metadata;

        //Filter data to get values for each sample
        let metadataArray = metadata.filter(sample => sample.id == testID);   
        //Set first object in sample array to variable
        let sample = metadataArray[0];  

        //Select panel from html and set to variable
        let sampleMetaID = d3.select("#sample-metadata");
        sampleMetaID.html("");
        //Loop through each key and append data to sampleMetaID
        for (key in sample) {
            // Add the name of the Key and Value to the Metadata Box by appending the
            // text content of the <h6> element in the HTML to the key-value of the metadata item
            sampleMetaID.append("h6").text(key + ": " + sample[key]); 
        }
    })  
}  

///////////////////////////////////////////////////////////////////////////////////////////////

//Function that builds bar chart
function BarChart (testID) {
    d3.json(url).then(function(data) {
        let samples = data.samples;

    //Filter data to get values for each sample
    let resultsArray = samples.filter(sample => sample.id == testID);
    let sample = resultsArray[0];
    
    //Assign variables to sample values
    let otu_ids = sample.otu_ids
    let sample_values = sample.sample_values
    let otu_labels = sample.otu_labels
    
    //Set variable for plot values
    let trace1 = [
        {x: sample_values.slice(0,10).reverse(),
        y: otu_ids.slice(0,10).map(otu_id => "OTU "+otu_id).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        type:"bar",
        orientation:"h" }
    ];
    //Define layout
    let layout = {
        title:"Top 10 OTUs per Test Subject"
    };

    //Call Plotly to plot 
    Plotly.newPlot("bar", trace1, layout)

    });

};  

//////////////////////////////////////////////////////////////////////////////////////////////////

//Function that builds bubble chart
function BubbleChart (testID) {
    d3.json(url).then(function(data) {
        let samples = data.samples;

    //Filter data to get values for each sample
    let sampleArray = samples.filter(sample => sample.id == testID);
    let sample = sampleArray[0];
    
    //Assign variables to sample values
    let otu_ids = sample.otu_ids
    let sample_values = sample.sample_values
    let otu_labels = sample.otu_labels
    
    //Set variable for plot values
    let trace2 = [
        {x: otu_ids,
         y: sample_values,
         text: otu_labels,
         mode:"markers",
         marker:{
            size: sample_values, 
            color: otu_ids,
            colorscale: "Earth"  // Color Scale found in the Readme References
         }
         
        }];

    //Define layout
    let layout = {
        xaxis: {title:"OTU ID"}
    };
    //Call Plotly to plot
    Plotly.newPlot("bubble", trace2, layout)

    });
};

////////////////////////////////////////////////////////////////////////////////////////////

//Initialize the functions on startup
init()  

///////////////////////////////////////////////////////////////////////////////////////////