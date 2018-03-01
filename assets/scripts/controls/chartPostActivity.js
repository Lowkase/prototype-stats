// ----------------------------------------------------------------------------------------------------
// CONTROLS - CHART POST ACTIVITY
// ----------------------------------------------------------------------------------------------------

$("#post-activity").on( "change", function() {
    postActivity_Filter = parseInt(this.value);
    chartPostActivity_Draw();
});

function chartPostActivity_Draw() {
    var ele = "#activity-barchart";

    $("#activity-barchart-con" +" svg").remove();
    $("#activity-barchart-con").append('<svg id="activity-barchart"></svg> ');

    var postActivities = appData[activeAudience].psychographics.categoriesData[activeInterestsPassionsCategory].analyses[0].postActivity;
    var data = postActivities[0].day;
    if(postActivity_Filter === 0){
        data = postActivities[0].day;
    }
    if(postActivity_Filter === 1){
        data = postActivities[1].month;
    }
    if(postActivity_Filter === 2){
        data = postActivities[2].year;
    }

    var margin = { top: 0, bottom: 30 };
    var width = $("#activity-barchart-con").width();
    var height = 130;


    var x = d3.scale.ordinal()
        .domain(data.map(function(d) { return d.name; }))
        .rangeRoundBands([0, width], 0.1);

    var y = d3.scale.linear()
        .domain([0, d3.max(data, function(d) { return d.value; })])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var chart = d3.select(ele)
        .attr("width", width)
        .attr("height", height + margin.top + margin.bottom);

    chart.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", function( d, i ) { return chartActivity_ColorSeries( i ); })        
        .attr("x", function(d) { return x(d.name); })
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .attr("width", x.rangeBand());

    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .attr("fill", "#3b3b3b")
        .attr("font-size", "12px")
        .call(xAxis);

    chart.selectAll('.axis line, .axis path')
         .style({'stroke': '#3b3b3b', 'fill': 'none', 'stroke-width': '1px'});
    }


function chartActivity_ColorSeries(n) {
    var colorsList = [
        "#2e5e93", 
        "#4472a0",
        "#5681aa",
        "#7e9fbf",
        "#89a8c4",
        "#7e9fbf",
        "#5681aa",
        "#4472a0",
        "#2e5e93"
    ];

    return colorsList[n % colorsList.length];
}