// ----------------------------------------------------------------------------------------------------
// CONTROLS - CHART POSTS OVERTIME
// ----------------------------------------------------------------------------------------------------

$("#posts-over-time").on( "change", function() {
    postsOverTime_Filter = parseInt(this.value);
    chartPostsOverTime_Draw("chart_PostsOverTime");
});

function chartPostsOverTime_Draw(ele) {
    ele = "#" + ele;

    // Clear rendered SVG
    $(ele +" svg").remove();
    $(ele).append('<svg style="height:200px"></svg> ');

    var postsOverTime_Array = appData[activeAudience].insightstrends.categoriesData[activeInsightsTrendsCategory].postsOverTime;

    var data = postsOverTime_Array[0].day;
    if(postsOverTime_Filter === 0){
        data = postsOverTime_Array[0].day;
    }
    if(postsOverTime_Filter === 1){
        data = postsOverTime_Array[1].month;
    }
    if(postsOverTime_Filter === 2){
        data = postsOverTime_Array[2].year;
    }

    nv.addGraph(function() {
        var chart = nv.models.stackedAreaChart()
            .margin({right: 100})
            .x(function(d) { return d[0]; }) 
            .y(function(d) { return d[1]; })
            .color(["#7d9ebd","#25548c" ])

            .clipEdge(true)
            .interpolate("basis")

            .showControls(false)
            .showYAxis(false)
            .showLegend(false);

        // Format x-axis labels with custom function.
        if(postsOverTime_Filter === 0){
            var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            chart.xAxis.tickValues([0, 1, 2, 3, 4, 5, 6]).tickFormat(function(d){ return days[d]; });
        }
        if(postsOverTime_Filter === 1){
            var weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
            chart.xAxis.tickValues([0, 1, 2, 3]).tickFormat(function(d){ return weeks[d]; });
        }
        if(postsOverTime_Filter === 2){
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            chart.xAxis.tickValues([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]).tickFormat(function(d){ return months[d]; });
        }

        // Draw chart
        d3.select(ele + ' svg')
            .datum(data)
            .call(chart);

        // Responsive
        nv.utils.windowResize( chart.update );

        return chart;
    });
}