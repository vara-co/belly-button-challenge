<h1 align="center">DU - DA Module 14 "belly-button-challenge"<br/>
An Interactive Dashboard Exploring Belly Button Biodiversity</h1>
<h2 align="center">Using HTML(PyCharm) and JavaScript(Visual Studio Code)<br/>
<br/>
by Laura Vara</h2><br/>

![ReadMe_BacteriaThumbTITLE2](https://github.com/vara-co/belly-button-challenge/assets/152572519/b6ddb643-cfbf-4bc0-a369-b3ec18d840a4)

**Live Static Belly-Button-Challenge HTML Deployment website:**
https://vara-co.github.io/belly-button-challenge-dashboard/

**Repository for the Live Static HTML Deployment website:**
https://github.com/vara-co/belly-button-challenge-dashboard/

The goal of this assignment was to build an interactive dashboard to explore a [Belly Button Biodiversity dataset](https://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.
This dataset contains a small number of microbial species to which in this project, we'll refer to as OTUs.  These have shown, via this dataset, that are present in more than 70% of people.

<h2>Index</h2><br/>
1. Content of the repository<br/>
2. Instructions for the Challenge<br/>
3. References<br/>

Content of the repository
-----------------------------------------------------------
- Code directory:
  - static directory:
    - index.html    <-- This is the HTML used for this project, with some changes to deploy as a static wesbite.
    - samples.json  <-- This is the database JSON file with the data used for this project
    - js directory:
      -  app.js <-- This is the JSON file that makes the charts be interactive with information from the database provided.
(Note that for the paths that connect the HTML with the app.js file, these files have to be in this same order. Othewise you would have to redefine the file paths in your code.)

- Data directory:
  - index.html  <-- original HTML file provided to work on this project. This has no alterations. You can use it to work on this challenge if you want to.
  - samples.json 
- Images directory:
This directory has several .png images provided. I used **bacteria.png** to add it to the HTML website. It was not part of the instructions, but I did it anyway.
    
<h2>Instructions</h2>
The instructions for this challenge are divided into the following subsections:
 

<h3>1. Use the D3 library</h3>

- Read in samples.json from the URL: https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json


<h3>2. Horizontal bar chart</h3>

- Create a horizontal bar chaert with a dropdown menu to display the top 10 OTUs found in that individual
  - Use **sample_values** as the values for the bar chart.
  - Use **otu_ids** as the labels for the bar chart.
  - Use **otu_labels** as the hovertext for the chart.
- It should look like this:

<br/>

![barchart](https://github.com/vara-co/belly-button-challenge/assets/152572519/40c07338-8610-4f0a-83c8-453443b9ccb5)

<br/>
<h3>3. Bubble Chart</h3><br/>

- Create a bubble chart that displays each sample.
  - Use **otu_ids** for the x values.
  - Use **sample_values** for the y values.
  - Use **sample_values** for the marker size.
  - Use **otu_ids** for the marker colors.
  - Use **otu_labels** for the text values.
- It should look like this:

<br/>

![BubbleChart](https://github.com/vara-co/belly-button-challenge/assets/152572519/8a7d7f24-8563-4202-91dc-dd63378d44b1)

<br/>
<h3>4. Metadata</h3><br/>

- Display the sample metadata, i.e., an individual's demographic information.

<br/>
<h3>5. Key-Value Display </h3><br/>

- Display each key-value pair from the metadata JSON object somewhere on the page.
- It should look like this:

<br/>

![Key_Value_box](https://github.com/vara-co/belly-button-challenge/assets/152572519/e422990c-e654-4c44-806a-5d3c562fb1dc)

<br/>
<h3>6. Plots should be updated </h3><br/>

- Update all the plots when a new sample is selected from the dropdown menu. Additionally, you are welcome to create any layout that you would like for your dahsboard.<br/>
- This is an example dashboard:

<br/>

![image](https://github.com/vara-co/belly-button-challenge/assets/152572519/5b991292-ecd0-4bfe-ab10-2c216de2856f)

<br/>
<h3>7. Website Deployment </h3><br/>

- Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

<br/>

**Advanced Challenge Section**
(Optional with no extra points)
- Adapt the Gauge Chart from [the plotly.com](https://plotly.com/javascript/gauge-charts/) site, to plot the weekly washing frequency of the individual.
- You will need to modify the exapmle gauge code to account for values ranging from 0-9.
- Update the chart whenever a new sample is selected.
- (NOTE: These lines of code, in the original HTML were commented out to avoid errors, as I did not do this bonus section. However, I might try in the future when I have more experience with JavaScript.)
- This bonus section should look like this:

<br/>

![Bonus](https://github.com/vara-co/belly-button-challenge/assets/152572519/5ce03186-f494-4ede-8f3c-e95e7ca5c67e)

<h2>References for the belly-button-challenge</h2><br/>
Most of what's in this challenge, was covered in class.<br/>
The few things that either weren't or we had to reference to, are described
with it's source right below.<br/>


- Bar and Bubble Charts:
  - https://plotly.com/javascript/bar-charts/
  - https://plotly.com/javascript/bubble-charts/

- Plotly Color Scales. The one used for the Bubble Chart was "Earth":
  - https://plotly.com/python/v3/matplotlib-colorscales/
  - https://community.plotly.com/t/what-colorscales-are-available-in-plotly-and-which-are-the-default/2079/2
  - https://plotly.com/python/builtin-colorscales/

- HTML Style changes:
  - https://htmlcolorcodes.com/
  - https://www.w3schools.com/css/css_font.asp

- Deploying a static HTML on Github:
  - https://docs.github.com/en/pages/quickstart
  - https://www.youtube.com/watch?v=OltY8JIaP-4
    
----------------------------------------------------------------------------------------------

