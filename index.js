var b2006 = document.getElementById("fy2006");
var b2016 = document.getElementById("fy2016");
var head2 = document.getElementById("head2");

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
var bars = chart.selectAll(".bar").data(data2016);//starts off with 2016 data

var makeBars = function() {
    if(this.id == "fy2006"){//changes to 2006 data if 2006 button clicked
	var data = data2006;
	head2.innerText = "Fiscal Year 2006"
    }
    else{//2016 data is default
	var data = data2016;
	head2.innerText = "Fiscal Year 2016"
    }
    bars.remove();//removes previous bars
    bars = chart.selectAll(".bar").data(data);
    bars.enter().append("div").classed("bar", true) //gives them the bar class to make them blue and aligned
	.transition()
	.duration(1000)
	.attr("title", function(d) { //the title attribute gives the element a tooltip when you hover
            return d.name + " -- $" + d.amount + " billion -- " + d.percent + "%";
	})
	.style("height", function(d){ //gives the height of the bar based on amount
	    return d.amount + "px";
	})
	.style("margin-top", function(d){ //adjusts margin-top so graph doesn't look weird
	    return (600 - d.amount) + "px";
	});
}

makeBars();//make the first bars so that bars.remove() doesn't return an error

/* CREATE Y AXIS LABELS */
d3.select("#yaxis").selectAll(".ylabel")
    .data([600, 500, 400, 300, 200, 100, 0]).enter() //the scale on y axis is 100
    .append("span").classed("ylabel", true) //this class gives them their spacing
    .text(function(d) {return "$" + d + " billion";}); //this is the display value

//This event makes the tooltip text of a bar appear below the chart
var barHoverEvent = function() {
    var text = this.getAttribute("title");
    d3.select("#xaxis").text(text);
}


b2006.addEventListener("click", makeBars);
b2016.addEventListener("click", makeBars);




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
