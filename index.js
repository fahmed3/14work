var data2016 = [
    {name: "National Defense", amount: 533, percent: 49},
    {name: "Education", amount: 85.7, percent: 8},
    {name: "Transportation", amount: 78.2, percent: 7},
    {name: "Social Security, Unemployment, and Labor", amount: 65.8, percent: 6},
    {name: "Government", amount: 65.2, percent: 6},
    {name: "Veterans' Benefits", amount: 61.8, percent: 6},
    {name: "Medicare and Health", amount: 59.9, percent: 5},
    {name: "International Affairs", amount: 49.9, percent: 5},
    {name: "Energy and Environment", amount: 40.1, percent: 4},
    {name: "Science, Space and Tech", amount: 27.5, percent: 3},
    {name: "Housing and Community", amount: 21.3, percent: 2},
    {name: "Agriculture", amount: 6.68, percent: 1}
];
var data2006 = [
    {name: "National Defense", amount: 552, percent: 51},
    {name: "Education", amount: 85.6, percent: 8},
    {name: "Transportation", amount: 73, percent: 7},
    {name: "Social Security, Unemployment, and Labor", amount: 62.6, percent: 6},
    {name: "Medicare and Health", amount: 59.8, percent: 6},
    {name: "Government", amount: 59.8, percent: 6},
    {name: "Housing and Community", amount: 42.6, percent: 4},
    {name: "Energy and Environment", amount: 39.8, percent: 4},
    {name: "International Affairs", amount: 38, percent: 4},
    {name: "Veterans' Benefits", amount: 34.4, percent: 3},
    {name: "Science, Space and Tech", amount: 24.9, percent: 2},
    {name: "Agriculture", amount: 6.32, percent: 1}
];

/* D3 VARIABLES */
//this div has both the axes and the chart
var container = d3.select("#container");
//this div has all the bars inside of it
var chart = d3.select("#chart");
//these are the individual bars
var bars = chart.selectAll(".bar").data(data2016).enter().append("div");


/* CREATE Y AXIS LABELS */
d3.select("#yaxis").selectAll(".ylabel")
    .data([600, 500, 400, 300, 200, 100, 0]).enter() //the scale on y axis is 100
    .append("span").classed("ylabel", true) //this class gives them their spacing
    .text(function(d) {return "$" + d + " billion";}); //this is the display value

//This event makes the tooltip text of a bar appear below the chart
var barHoverEvent = function() {
    var text = this.getAttribute("title");
    d3.select("#xaxis").text("Category: " + text);
};


/* TRANSITION */
var buttons = document.getElementsByTagName("button");
buttons[0].addEventListener("click", function(evt) {
    console.log("throwback");
    changeYear(data2006, "2006");
});
buttons[1].addEventListener("click", function(evt) {
    console.log("wooo");
    changeYear(data2016, "2016");
});

//This function does the transition effect
var changeYear = function(dataArray, year) {
    //make bars
    bars.classed("bar", true) //gives them the bar class to make them blue and aligned
        .attr("title", function(d, i) { //the title attribute gives the element a tooltip when you hover
            return dataArray[i].name + " -- $" + dataArray[i].amount + " billion -- " + dataArray[i].percent + "%";
        })
        .transition().duration(1000)
        .style("height", function(d, i) { //set the height of the bar
            return dataArray[i].amount + "px";
        })
        .style("margin-top", function(d, i) { //this is necessary for some reason
            return (600 - dataArray[i].amount) + "px";
        });
    //Fill the x axis with the category name
    var domBars = document.getElementsByClassName("bar");
    for(var i = 0; i < domBars.length; i++) {
        domBars[i].addEventListener("mouseenter", barHoverEvent);
    }
    d3.select("#xaxis").text("Hover over a bar to see the name of the category it represents.");
    d3.select("#title").text("Fiscal Year " + year);
};

changeYear(data2006, "2006");




/* CREATE X AXIS LABELS 
d3.select("#xaxis").selectAll(".xlabel").data(data2016).enter().append("span").classed("xlabel", true)
    .style("opacity", 0) //make them hidden by default
    .text(function(d) {return d.name;}); //the name of the budget division 

var categoryLabelsDom = document.getElementsByClassName("xlabel");
for(var i = 0; i < categoryLabelsDom.length; i++) {
    categoryLabelsDom[i].addEventListener("mouseenter", function() {
        this.style.opacity = 1;
    });
    categoryLabelsDom[i].addEventListener("mouseleave", function() {
        this.style.opacity = 0;
    });
}*/
