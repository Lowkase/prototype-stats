// ----------------------------------------------------------------------------------------------------
// VIEWS - AUDIENCE OVERVIEW
// ----------------------------------------------------------------------------------------------------
function init_audience_overview(){

    // Name
    $("#audience-name").text( appData[activeAudience].name + " Overview" );

    // Image
    $("#audience-image").attr( "src", "assets/images/" + appData[activeAudience].logo );

    // Size
    $("#audience-size").text( numeral( appData[activeAudience].size ).format('0,0') );

    // Size Name
    $("#audience-size-name").text( appData[activeAudience].name );
    
    // Description
    $("#audience-description").text( appData[activeAudience].description );
  
    // Total Posts
    var audienceTotalPosts_Count = 0;
    var audienceTotalPosts_Total = appData[activeAudience].totalPosts.length;
    $("#audience-total-posts").text( global_kFormatter( appData[activeAudience].totalPosts[audienceTotalPosts_Count] ) ); 
    setInterval(function(){ 
        $("#audience-total-posts").text( global_kFormatter( appData[activeAudience].totalPosts[audienceTotalPosts_Count] ) );            
        if(audienceTotalPosts_Count < audienceTotalPosts_Total - 1) {
            audienceTotalPosts_Count = audienceTotalPosts_Count + 1;
        } else {
            audienceTotalPosts_Count = 0;
        }
    }, 20000);

    // Posts Velocity    
    var audiencePostVelocity_Count = 0;
    var audiencePostVelocity_Total = appData[activeAudience].postsVelocity.length;
    $("#audience-posts-velocity").text( global_kFormatter( appData[activeAudience].postsVelocity[audiencePostVelocity_Count] ) ); 
    setInterval(function(){ 
        $("#audience-posts-velocity").text( global_kFormatter( appData[activeAudience].postsVelocity[audiencePostVelocity_Count] ) ); 
        if(audiencePostVelocity_Count < audiencePostVelocity_Total - 1) {
            audiencePostVelocity_Count = audiencePostVelocity_Count + 1;
        } else {
            audiencePostVelocity_Count = 0;
        }
    }, 20000);

    // Key Insights
    var audienceKeyInsights_Array = appData[activeAudience].keyInsights;
    var htmlKeyInsights = "";
    $("#audience-key-insights").html( htmlKeyInsights );
    for(var i_keyInsights=0, len=audienceKeyInsights_Array.length; i_keyInsights < len; i_keyInsights++){
        htmlKeyInsights = htmlKeyInsights +  
            '<li>' +
                '<div class="stat-icon">' +
                    '<i class="fa ' + audienceKeyInsights_Array[i_keyInsights].icon + '"></i>' +
                '</div>' +
                '<div class="stat-text">' +
                    '<div class="label">' + audienceKeyInsights_Array[i_keyInsights].name + '</div>' +
                    '<div class="value">' + audienceKeyInsights_Array[i_keyInsights].value + '</div>' +
                '</div>' +
            '</li>';
    }
    $("#audience-key-insights").append( htmlKeyInsights );   

}