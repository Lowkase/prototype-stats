// ----------------------------------------------------------------------------------------------------
// CONTROLS - CHART DEMOGRAPHICS
// ----------------------------------------------------------------------------------------------------

function chartDemographics_Draw(ele) {
    // Get canvas
    ele = "#" + ele;

    // Clear SVG from canvas
    $(ele +" svg").remove();

    // Init pie
    var pie = d3.layout.pie().sort( null );

    // Get data from dataset
    var demographics = appData[activeAudience].demographics[0];

    // Data
    var data_chart_title = null;
    var data_outer_values = null; 
    var data_outer_labels = null; 
    var data_inner_values = null;

    if( ele === "#chartDemographics1" ){
        data_chart_title = demographics.chart1_title;
        data_outer_values = pie( demographics.chart1_outer_values );
        data_outer_labels = pie( demographics.chart1_outer_labels );
        data_inner_values = pie( demographics.chart1_inner_values );
    }
    if( ele === "#chartDemographics2" ){
        data_chart_title = demographics.chart2_title;
        data_outer_values = pie( demographics.chart2_outer_values );
        data_outer_labels = pie( demographics.chart2_outer_labels );
        data_inner_values = pie( demographics.chart2_inner_values );
    }
    if( ele === "#chartDemographics3" ){
        data_chart_title = demographics.chart3_title;
        data_outer_values = pie( demographics.chart3_outer_values );
        data_outer_labels = pie( demographics.chart3_outer_labels );
        data_inner_values = pie( demographics.chart3_inner_values );
    }
    if( ele === "#chartDemographics4" ){
        data_chart_title = demographics.chart4_title;
        data_outer_values = pie( demographics.chart4_outer_values );
        data_outer_labels = pie( demographics.chart4_outer_labels );
        data_inner_values = pie( demographics.chart4_inner_values );
    }

    // Remove then add title to the graph canvas
    $(ele + " .graph-title").remove();
    $(ele).append('<div class="graph-title">' + data_chart_title + '</div>');

    // Dimensions
    $(".chart-double-pie").height( $(".chart-double-pie").width() );
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var width = $( ele ).width();
    var height = $( ele ).height();
    var radius = Math.min( width, height ) / 2;  
    var marginLeft = width / 2;


/*
    var arc1Buffer = 45;
    var arc1Width = 10;
    var arc2Buffer = 60;
    var arc2Width = 40;
    if( viewportWidth < 1280 ) {
        arc1Buffer = 60;
        arc2Buffer = 75;
    }
    var arc1TextBufferx = 20;
    if( viewportWidth < 1280 ) { arc1TextBufferx = 35; }
    var arc1TextBuffery = 18;
    if( viewportWidth < 1280 ) { arc1TextBuffery = 35; }

    var arc2TextBufferx = 80;
    if( viewportWidth < 1280 ) { arc2TextBufferx = 95; }
    var arc2TextBuffery = 80;
    if( viewportWidth < 1280 ) { arc2TextBuffery = 95; }
*/

// Define arcs (px from edges of container and width of arcs)
    var arc1Buffer = 70;
    var arc1Width = 7;
    var arc2Buffer = 80;
    var arc2Width = 25;
    if( viewportWidth < 1280 ) {
        arc1Buffer = 90;
        arc2Buffer = 105;
        arc1Width = 10;
        arc2Width = 40;
    }

// Define arc labels
    var arc1TextBufferx = 40;
    if( viewportWidth < 1280 ) { arc1TextBufferx = 40; }
    var arc1TextBuffery = 38;
    if( viewportWidth < 1280 ) { arc1TextBuffery = 40; }

    var arc2TextBufferx = 94;
    if( viewportWidth < 1280 ) { arc2TextBufferx = 125; }
    var arc2TextBuffery = 94;
    if( viewportWidth < 1280 ) { arc2TextBuffery = 125; }


    // Calculate arcs
    var arc1Out = radius - arc1Buffer;  
    var arc1In = arc1Out - arc1Width;
    var arc2Out = radius - arc2Buffer;  
    var arc2In = arc2Out - arc2Width;
    var arc1 = d3.svg.arc().outerRadius( arc1Out ).innerRadius( arc1In );
    var arc2 = d3.svg.arc().outerRadius( arc2Out ).innerRadius( arc2In );

    // Set diminensions for svg
    var svg = d3.select( ele ).append( "svg" ).attr( "width", width ).attr( "height", height );

    // Add pies to the canvas
    var g1 = svg.append( "g" ).attr("class", "g1").attr( "transform", "translate(" + Math.min( width, height ) / 2 + "," + Math.min( width, height ) / 2 + ")" );
    var g2 = svg.append( "g" ).attr("class", "g2").attr( "transform", "translate(" + Math.min( width, height ) / 2 + "," + Math.min( width, height ) / 2 + ")" );

    // Draw paths (pie sections)
    var path1   = g1.selectAll( "path" ).data( data_outer_values ).enter().append( "path" ).attr( "fill", function( d, i ) { return chartDemographics_ColorSeries( i ); }).attr( "d", arc1 );
    var path2   = g2.selectAll( "path" ).data( data_inner_values ).enter().append( "path" ).attr( "fill", function( d, i ) { return chartDemographics_ColorSeries( i ); }).attr( "d", arc2 );


    // Outer labels
    g1.selectAll("text")
        .data(data_outer_values)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("class", "outer-labels")
        .attr("font-size", "10px")
        .attr("x", function(d) {
            var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
            //d.cx = Math.cos(a) * (radius - 75);
            return Math.cos(a) * (radius - arc1TextBufferx);
        })
        .attr("y", function(d) {
            var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
            //d.cy = Math.sin(a) * (radius - 75);
            return Math.sin(a) * (radius - arc1TextBuffery);
        });

    // Outer label values (percentages)
    var textCounter = 0;
    g1.selectAll(".outer-labels")
        .data(data_outer_values)
        .append("tspan")
        .attr("font-size", "10px")
        .attr('dx', '0px')
        .attr('dy', '-2px')
        .text(function(d) { 
            // Calculate the %
            var total = chartDemographics_TotalData(data_outer_values);
            var value = d.value;
            var percentage = (value / total) * 100;
            percentage = Math.round(percentage);
            return percentage + "%";
        });

    // Outer label placement
    textCounter = 0;
    g1.selectAll(".outer-labels")
        .data(data_outer_values)
        .append("tspan")
        .attr("font-size", "10px")
        .attr("font-weight", "regular")
        .attr({
            dx: function (d) {
                return '-23px';
            },
            dy: function (d) { 
                if (d.y < 0) {
                    return '-12px';
                } else {
                    return '12px';
                }
            }
        })
        .text(function(d) { 
            var newLabel = data_outer_labels[textCounter].data;
            textCounter = textCounter + 1;
            return newLabel;
        });


    // Inner labels
    g2.selectAll("text")
        .data(data_inner_values)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("class", "inner-labels")
        .attr("font-size", "10px")
        .attr("font-weight", "bold")
        .attr("fill", "white")
        .attr("x", function(d) {
            var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
            //d.cx = Math.cos(a) * (radius - 75);
            return Math.cos(a) * (radius - arc2TextBufferx);
        })
        .attr("y", function(d) {
            var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
            //d.cy = Math.sin(a) * (radius - 75);
            return Math.sin(a) * (radius - arc2TextBuffery);
        });

    // Inner label values (percentages)
    textCounter = 0;
    g2.selectAll(".inner-labels")
        .data(data_inner_values)
        .append("tspan")
        .attr("font-size", "10px")
        .attr('dx', '0px')
        .attr('dy', '4px')
        .text(function(d) { 
            // Calculate the %
            var total = chartDemographics_TotalData(data_inner_values);
            var value = d.value;
            var percentage = (value / total) * 100;
            percentage = Math.round(percentage);
            return percentage + "%";
        });
}



// function - Total data passed in so we can calculate a percentage
function chartDemographics_TotalData(data){
    var total = 0;
    for(var i=0, len=data.length; i < len; i++){
        total = total + data[i].value;
    }
    return total;
}


// function - Color series for the donuts
// Color seris for pic charts
function chartDemographics_ColorSeries(n) {
    var colorsList = [
        "#193b61",
        "#4a77a3",
        "#25548c", 
        "#4a77a3", 
        "#89a8c4", 
        "#a0b9d0"
    ];

    return colorsList[n % colorsList.length];
}