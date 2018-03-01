// ----------------------------------------------------------------------------------------------------
// VIEWS - AUDIENCE INTERESTS PASSIONS
// ----------------------------------------------------------------------------------------------------
function init_audience_interests_passions(){

    // Category switch
    $("#interests-passions-categories-list").on( "click", ".interests-passions-category", function(e) {
        // Get index
        var index = $(this).attr('id');

        index = index.slice( ( index.length - index.lastIndexOf("-") ) * -1 ) * -1;

        if(index < 2){
            if(activeInterestsPassionsCategory !== index){
                activeInterestsPassionsCategory = index;
                activeInterestsPassionsInsightType = 0;
                global_initSections();
                global_resetFilters_PostActivity();
                global_redrawCharts();
            }
        }
    });


    // Insight switch
    $("#interests-passions-insight-type").on( "click", ".interests-passions-insight-type", function(e) {
        // Get index
        var index = $(this).attr('id');

        index = index.slice( ( index.length - index.lastIndexOf("-") ) * -1 ) * -1;

        if(activeInterestsPassionsInsightType !== index){
            activeInterestsPassionsInsightType = index;
            global_initSections();
            global_resetFilters_PostActivity();          
            global_redrawCharts();
        }
    });


    // Categories
    var interestsPassionsCategories_Array = appData[activeAudience].psychographics.categoriesSelector;
    var htmlCategories = "";
    $("#interests-passions-categories").html( htmlCategories );
    for(var i_categories=0, lenCategories=interestsPassionsCategories_Array.length; i_categories < lenCategories; i_categories++){
        if (activeInterestsPassionsCategory === i_categories){
            htmlCategories = htmlCategories + '<li id="interests-passions-category-' + i_categories + '" class="interests-passions-category active">';
        } else {
            htmlCategories = htmlCategories + '<li id="interests-passions-category-' + i_categories + '" class="interests-passions-category">';
        }

        htmlCategories = htmlCategories +  
                '<div class="col1">' + interestsPassionsCategories_Array[i_categories].type + '</div>' +
                '<div class="col2">' + interestsPassionsCategories_Array[i_categories].shareValue + '%</div>' +
            '</li>';
    }
    $("#interests-passions-categories").append( htmlCategories ); 


    // InsightTypes
    var interestsPassionsInsightTypes_Array = appData[activeAudience].psychographics.categoriesData[activeInterestsPassionsCategory].analyses[0].chatter;
    var htmlInsightTypes = "";
    $("#interests-passions-insight-type").html( htmlInsightTypes );
    for(var i_insightTypes=0, lenInsightTypes=interestsPassionsInsightTypes_Array.length; i_insightTypes < lenInsightTypes; i_insightTypes++){
        if (activeInterestsPassionsInsightType === i_insightTypes){
            htmlInsightTypes = htmlInsightTypes + '<li id="interests-passions-insight-type-' + i_insightTypes + '" class="interests-passions-insight-type active">';
        } else {
            htmlInsightTypes = htmlInsightTypes + '<li id="interests-passions-insight-type-' + i_insightTypes + '" class="interests-passions-insight-type">';
        }

        htmlInsightTypes = htmlInsightTypes +  
                '<span">' + interestsPassionsInsightTypes_Array[i_insightTypes].insightType + '</span> ' +
                '<span><i class="fa fa-check"></i></span>' +
            '</li>';
    }
    $("#interests-passions-insight-type").append( htmlInsightTypes ); 


    // Insights
    var interestsPassionsInsights_Array = appData[activeAudience].psychographics.categoriesData[activeInterestsPassionsCategory].analyses[0].chatter[activeInterestsPassionsInsightType].insightGroups;
    var htmlInsights = "";
    $("#interests-passions-insights").html( htmlInsights );
    for(var i_insights=0, lenInsights=interestsPassionsInsights_Array.length; i_insights < lenInsights; i_insights++){

        htmlInsights = htmlInsights +  
                '<div class="insights">' +
                    '<header>' + interestsPassionsInsights_Array[i_insights].analysisType +  '</header>' +
                    '<article>' +
                        '<ul class="m-list-unstyled">';
            
                            var interestsPassionsInsightsStats_Array = interestsPassionsInsights_Array[i_insights].insights;
                            for(var i_insightStats=0, lenInsightsStats=interestsPassionsInsightsStats_Array.length; i_insightStats < lenInsightsStats; i_insightStats++){
                                htmlInsights = htmlInsights + 
                                    '<li>' +
                                        '<div>' + interestsPassionsInsightsStats_Array[i_insightStats].insight + '</div>';

                                        if(i_insights === 0){
                                            htmlInsights = htmlInsights + '<div>' + numeral( interestsPassionsInsightsStats_Array[i_insightStats].value ).format('0,0') + '</div>';
                                        }
                                        if(i_insights === 1){
                                            htmlInsights = htmlInsights + '<div>' + interestsPassionsInsightsStats_Array[i_insightStats].value + '%</div>';
                                        }
                                        if(i_insights === 2){
                                            htmlInsights = htmlInsights + '<div>' + interestsPassionsInsightsStats_Array[i_insightStats].value + 'x</div>';
                                        }

                                    htmlInsights = htmlInsights + '</li>';
                            }

        htmlInsights = htmlInsights +  
                        '</ul>' +
                    '</article>' +
                '</div>';
    }
    $("#interests-passions-insights").append( htmlInsights ); 


    // Influencers
    var interestsPassionsInfluencers_Array = appData[activeAudience].psychographics.categoriesData[activeInterestsPassionsCategory].analyses[0].influencers;
    var htmlInfluencers = "";
    $("#interests-passions-influencers").html( htmlInfluencers );
    for(var i_influencers=0, lenInfluencers=interestsPassionsInfluencers_Array.length; i_influencers < lenInfluencers; i_influencers++){
        htmlInfluencers = htmlInfluencers +  
                '<div class="m-twitter-card">' +
                    '<div class="avatar">' +
                        '<img src="assets/images/' + interestsPassionsInfluencers_Array[i_influencers].image + '" alt="Twitter Image" />' +
                    '</div>' +
                    '<div class="info">' +
                        '<div class="handle">' + interestsPassionsInfluencers_Array[i_influencers].handle + '</div>' +
                        '<div class="name">' + interestsPassionsInfluencers_Array[i_influencers].name + '</div>' +
                        '<div class="twitter-stats">' +
                            '<div class="followers">' +
                                '<span><i class="fa fa-user"></i> </span>' +
                                '<span>' + interestsPassionsInfluencers_Array[i_influencers].followers + '</span>' +
                            '</div>' +
                            '<div class="retweets">' +
                                '<span><i class="fa fa-retweet"></i> </span>' +
                                '<span>' + interestsPassionsInfluencers_Array[i_influencers].retweets + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    }
    $("#interests-passions-influencers").append( htmlInfluencers ); 


    // Recent Retweets
    var interestsPassionsRecentRetweets_Array = appData[activeAudience].psychographics.categoriesData[activeInterestsPassionsCategory].analyses[0].recentTweets;
    var htmlRecentRetweets = "";
    var colCounter = 1;
    $("#bxsliderInterestsPassions").html( htmlRecentRetweets );
    for(var i_recentRetweets=0, lenRecentRetweets=interestsPassionsRecentRetweets_Array.length; i_recentRetweets < lenRecentRetweets; i_recentRetweets++){
        if(colCounter === 1){
            htmlRecentRetweets = htmlRecentRetweets + '<li>';
        }

        htmlRecentRetweets = htmlRecentRetweets +
                    '<div class="m-twitter-card-recent">' +
                        '<div class="avatar">' +
                            '<img src="assets/images/' + interestsPassionsRecentRetweets_Array[i_recentRetweets].image + '" alt="Twitter Image" />' +
                        '</div>' +
                        '<div class="info">' +
                            '<div class="name">' + interestsPassionsRecentRetweets_Array[i_recentRetweets].name + '</div>' +
                            '<div class="handle">' + interestsPassionsRecentRetweets_Array[i_recentRetweets].handle + '</div>' +
                            '<div class="text">' + interestsPassionsRecentRetweets_Array[i_recentRetweets].tweet + '</div>' +
                            '<div class="followers">' +
                                '<span>' + interestsPassionsRecentRetweets_Array[i_recentRetweets].followers + '</span>' +
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

    $("#bxsliderInterestsPassions").append( htmlRecentRetweets ); 
    bxsliderInterestsPassions.reloadSlider();

}