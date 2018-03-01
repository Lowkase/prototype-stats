// ----------------------------------------------------------------------------------------------------
// VIEWS - AUDIENCE INSIGHTS TRENDS
// ----------------------------------------------------------------------------------------------------
function init_audience_insights_trends(){

    // Category switch
    $("#insights-trends-categories-list").on( "click", ".insights-trends-category", function(e) {
        // Get index
        var index = $(this).attr('id');

        index = index.slice( ( index.length - index.lastIndexOf("-") ) * -1 ) * -1;

        if(index < 2){
            if(activeInsightsTrendsCategory !== index){
                activeInsightsTrendsCategory = index;
                global_initSections();
                global_resetFilters_PostsOverTime();
                global_redrawCharts();
                bxsliderInsightTrends.reloadSlider();
            }
        }
    });


    // Categories
    var insightsTrendsCategories_Array = appData[activeAudience].insightstrends.categoriesSelector;
    var htmlCategories = "";
    $("#insights-trends-categories").html( htmlCategories );
    for(var i_categories=0, lenCategories=insightsTrendsCategories_Array.length; i_categories < lenCategories; i_categories++){
        if (activeInsightsTrendsCategory === i_categories){
            htmlCategories = htmlCategories + '<li id="insights-trends-category-' + i_categories + '" class="insights-trends-category active">';
        } else {
            htmlCategories = htmlCategories + '<li id="insights-trends-category-' + i_categories + '" class="insights-trends-category">';
        }

        htmlCategories = htmlCategories +  
                '<div class="col1">' + insightsTrendsCategories_Array[i_categories].type + '</div>' +
            '</li>';
    }
    $("#insights-trends-categories").append( htmlCategories ); 


    // Overview - Image
    $("#insights-trends-image").attr("src", "assets/images/" + appData[activeAudience].insightstrends.categoriesData[activeInsightsTrendsCategory].image );


    // Overview - Description
    $("#insights-trends-description").text( appData[activeAudience].insightstrends.categoriesData[activeInsightsTrendsCategory].description );


    // Overview - Insights
    var insightsTrendsInsights_Array = appData[activeAudience].insightstrends.categoriesData[activeInsightsTrendsCategory].insights;
    var htmlInsights = "";
    $("#insights-trends-stats").html( htmlInsights );
    htmlInsights = htmlInsights + "<div>&nbsp;</div>";
    for(var i_insighs=0, lenInsights=insightsTrendsInsights_Array.length; i_insighs < lenInsights; i_insighs++){
        htmlInsights = htmlInsights +  
            '<div>' +
                '<div class="count">' + global_kFormatter(  insightsTrendsInsights_Array[i_insighs].count ) + '</div>' +
                '<div class="measure">' + insightsTrendsInsights_Array[i_insighs].measure + '</div>' +
                '<div class="multiplier">+' + insightsTrendsInsights_Array[i_insighs].multiplier + 'x</div>' +
            '</div>';
    }
    htmlInsights = htmlInsights + "<div>&nbsp;</div>";
    $("#insights-trends-stats").append( htmlInsights ); 


    // Influencers
    var insightsTrendsInfluencers_Array = appData[activeAudience].insightstrends.categoriesData[activeInsightsTrendsCategory].influencers;
    var htmlInfluencers = "";
    $("#insights-trends-influencers").html( htmlInfluencers );
    for(var i_influencers=0, lenInfluencers=insightsTrendsInfluencers_Array.length; i_influencers < lenInfluencers; i_influencers++){
        htmlInfluencers = htmlInfluencers +  
                '<div class="m-twitter-card">' +
                    '<div class="avatar">' +
                        '<img src="assets/images/' + insightsTrendsInfluencers_Array[i_influencers].image + '" alt="Twitter Image" />' +
                    '</div>' +
                    '<div class="info">' +
                        '<div class="handle">' + insightsTrendsInfluencers_Array[i_influencers].handle + '</div>' +
                        '<div class="name">' + insightsTrendsInfluencers_Array[i_influencers].name + '</div>' +
                        '<div class="twitter-stats">' +
                            '<div class="followers">' +
                                '<span><i class="fa fa-user"></i> </span>' +
                                '<span>' + insightsTrendsInfluencers_Array[i_influencers].followers + '</span>' +
                            '</div>' +
                            '<div class="retweets">' +
                                '<span><i class="fa fa-retweet"></i> </span>' +
                                '<span>' + insightsTrendsInfluencers_Array[i_influencers].retweets + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    }
    $("#insights-trends-influencers").append( htmlInfluencers ); 


    // Recent Retweets
    var insightsTrendsRecentRetweets_Array = appData[activeAudience].insightstrends.categoriesData[activeInsightsTrendsCategory].recentTweets;
    var htmlRecentRetweets = "";
    var colCounter = 1;
    $("#bxsliderInsightTrends").html( htmlRecentRetweets );
    for(var i_recentRetweets=0, lenRecentRetweets=insightsTrendsRecentRetweets_Array.length; i_recentRetweets < lenRecentRetweets; i_recentRetweets++){
        if(colCounter === 1){
            htmlRecentRetweets = htmlRecentRetweets + '<li>';
        }

        htmlRecentRetweets = htmlRecentRetweets +
                    '<div class="m-twitter-card-recent">' +
                        '<div class="avatar">' +
                            '<img src="assets/images/' + insightsTrendsRecentRetweets_Array[i_recentRetweets].image + '" alt="Twitter Image" />' +
                        '</div>' +
                        '<div class="info">' +
                            '<div class="name">' + insightsTrendsRecentRetweets_Array[i_recentRetweets].name + '</div>' +
                            '<div class="handle">' + insightsTrendsRecentRetweets_Array[i_recentRetweets].handle + '</div>' +
                            '<div class="text">' + insightsTrendsRecentRetweets_Array[i_recentRetweets].tweet + '</div>' +
                            '<div class="followers">' +
                                '<span>' + insightsTrendsRecentRetweets_Array[i_recentRetweets].followers + '</span>' +
                                '<span> followers</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>';

        if(colCounter === 2){
            htmlRecentRetweets = htmlRecentRetweets + '</li>';
            colCounter = 1;
        } else {
            colCounter = colCounter + 1;    
        }
    }

    $("#bxsliderInsightTrends").append( htmlRecentRetweets ); 
    bxsliderInsightTrends.reloadSlider();

}