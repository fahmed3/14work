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
    //{name: "", amount: , percent: },
];
var container = d3.select("#container");
var chart = d3.select("#chart");
var axisLabelEnter = container.selectAll(".label").data(data2016).enter();

/* CREATE AXIS LABELS */
axisLabelEnter.append("span").classed("label", true).style("bottom", 0).text(function(d) {return d.name;});