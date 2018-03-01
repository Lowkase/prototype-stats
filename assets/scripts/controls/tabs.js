// ----------------------------------------------------------------------------------------------------
// CONTROLS - TABS
// ----------------------------------------------------------------------------------------------------

// Default to audience tab
$("#audience").show();

$("#nav-side-panel-audience").show();

$("#tab-audience").on( "click", function() {
    activeTab = 0;

    $("#campaign").hide();
    $("#audience").show();

	// Redraw the graphs.  If the window was resized while in the campaign tag some of the graphs may not render properly, lets force the rerender
    global_resetFilters();
	global_redrawCharts();

    $("#tab-campaign").removeClass("active");
    $("#tab-audience").addClass("active");

    $("#nav-side-panel-audience").show();    
    $("#nav-side-panel-campaign").hide();
});
$("#tab-campaign").on( "click", function() {
    activeTab = 1;

    $("#audience").hide();
    $("#campaign").show();

	// Redraw the graphs.  If the window was resized while in the campaign tag some of the graphs may not render properly, lets force the rerender
    global_resetFilters();
	global_redrawCharts();

    $("#tab-audience").removeClass("active");
    $("#tab-campaign").addClass("active");

    $("#nav-side-panel-audience").hide();    
    $("#nav-side-panel-campaign").show();   
});