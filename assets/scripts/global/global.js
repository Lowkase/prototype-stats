// ----------------------------------------------------------------------------------------------------
// GLOBAL
// ----------------------------------------------------------------------------------------------------
function global_initVars(){
    activeTab = 0;
    activeAudience = 0;
    activeInterestsPassionsCategory = 0;
    activeInterestsPassionsInsightType = 0;
    activeInsightsTrendsCategory = 0;

    postActivity_Filter = 0;
    postsOverTime_Filter = 0;
}

function global_initSlides(){
    // Define slideshows
    bxsliderInterestsPassions = $('#bxsliderInterestsPassions').bxSlider({
        speed: 4000,
        infiniteLoop: true,
        pager: false,
        controls: false,
        auto: true
    });
    bxsliderInsightTrends = $('#bxsliderInsightTrends').bxSlider({
        speed: 4000,
        infiniteLoop: true,
        pager: false,
        controls: false,
        auto: true
    });
}

function global_initSections(){
    init_dropdown();
    init_audience_overview();
    init_audience_demographics();
    init_audience_interests_passions();
    init_audience_insights_trends();
}

function global_initCharts(){
    chartPostActivity_Draw();
    chartEmergingNow_Draw("chartEmergingNow_InterestsPassions", "InterestsPassions");
    chartEmergingNow_Draw("chartEmergingNow_InsightsTrends", "InsightsTrends");
    chartPostsOverTime_Draw("chart_PostsOverTime");    
}

function global_resetFilters(){
    global_resetFilters_PostActivity();
    global_resetFilters_PostsOverTime();
}
function global_resetFilters_PostActivity(){
    postActivity_Filter = 0;
    $('#post-activity').prop('selectedIndex',0);
}
function global_resetFilters_PostsOverTime(){
    postsOverTime_Filter = 0;
    $('#posts-over-time').prop('selectedIndex',0);
}

function global_redrawCharts(){
    init_audience_demographics();

    chartPostActivity_Draw();
    chartEmergingNow_Draw("chartEmergingNow_InterestsPassions", "InterestsPassions");
    chartEmergingNow_Draw("chartEmergingNow_InsightsTrends", "InsightsTrends");
    chartPostsOverTime_Draw("chart_PostsOverTime");
}

window.onresize = function(event) {
	global_redrawCharts();
    bxsliderInterestsPassions.reloadSlider();
    bxsliderInsightTrends.reloadSlider();
};

$(document).mouseup(function (e)
{
    // Hide the dropdown modal when we click any where but the dropdown modal
    var container = $("#audience-modal");

    // If the target of the click isn't the container, nor a descendant of the container
    if ( !container.is(e.target) && container.has(e.target).length === 0 ) 
    {
        container.hide();
    }
});

function global_kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'K' : num;
}