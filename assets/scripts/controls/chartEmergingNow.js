// ----------------------------------------------------------------------------------------------------
// CONTROLS - CHART EMERGING NOW
// ----------------------------------------------------------------------------------------------------

function chartEmergingNow_Draw(ele, dataset) {
        // Variables
        ele = "#" + ele;
        $(ele +" svg").remove();

        // Data
        var data = null;
        if(dataset === "InterestsPassions"){
            data = appData[activeAudience].psychographics.categoriesData[activeInterestsPassionsCategory].analyses[0].emergingNow;
        }
        if(dataset === "InsightsTrends"){
            data = appData[activeAudience].insightstrends.categoriesData[activeInsightsTrendsCategory].emergingNow;
        }

        // Dimensions
        w = $(ele).width();
        var h = 110;

        var radius = 10;
        var max_n = 0;
        for (var d in data) {
            max_n = Math.max(data[d].value, max_n);
        }
        var dx = w / max_n;
        var dy = 30;

        // Draw
        var svg = d3.select(ele)
            .append("svg")
            .attr("width", w)
            .attr("height", h);
    
            // Bars
            var bars = svg.selectAll(".bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("class", function(d, i) { return "bar"; })
                .attr("x", function(d, i) { return 0; })
                .attr("y", function(d, i) { return (dy + 10) * i; })
                .attr("width", function(d, i) { return  (d.value / max_n) * 100 + '%'; })
                .attr("height", dy)
                .attr("rx", radius)
                .attr("ry", radius)
                .attr( "fill", function( d, i ) { return chartEmergingNow_ColorSeries( i ); });

            // Labels
            var text = svg.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .attr("class", function(d, i) { return "label";} )
                .attr("x", 10)
                .attr("y", function(d, i) { return ((dy + 10) * i) + 20;} )
                .attr("font-size", "12px")
                .attr("font-weight", "bold")
                .attr("fill", "#ffffff")
                .text( function(d) { return d.insight; } );

}

function chartEmergingNow_ColorSeries(n) {
    var colorsList = [
        "#26558c", 
        "#4b77a3", 
        "#89a8c4"
    ];

    return colorsList[n % colorsList.length];
}