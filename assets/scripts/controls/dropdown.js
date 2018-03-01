// ----------------------------------------------------------------------------------------------------
// CONTROLS - DROPDOWN
// ----------------------------------------------------------------------------------------------------
function init_dropdown(){
    // Dropdown
    var htmlDropdown = "";
    $("#dropdown-list").html( htmlDropdown );
    for(var i_appData=0, len=appData.length; i_appData < len; i_appData++){
		if(activeAudience === i_appData){
			htmlDropdown = htmlDropdown + '<li class="active">';
		} else {
			htmlDropdown = htmlDropdown + '<li>';
		}

        htmlDropdown = htmlDropdown +  
                '<div class="avatar">' +
                	'<div class="check">' +
                		'<i class="fa fa-check"></i>' +
                	'</div>' +
                	'<img src="assets/images/' + appData[i_appData].logo + '" alt="' + appData[i_appData].name + '" />' +
                '</div>' +
				'<div class="overview-stats">' +
					'<div class="title-stat">' +
					'	<div class="title">' + appData[i_appData].name + '</div>' +
					'	<div class="stat">' + numeral( appData[i_appData].size ).format('0,0') + '</div>' +
					'</div>' +
					'<div class="overview">' + appData[i_appData].description + '</div>' +
					'<div class="select">' +
					'	<div id="dropdown-' + i_appData + '" class="m-button m-button-small m-button-positive dropdown-select">Select</div>' +
					'</div>' +
				'</div>' +
            '</li>';
    }
    $("#dropdown-list").append( htmlDropdown );  
}


$("#audience-dropdown").on( "click", function() {
	var dropdownOffset = $(this).offset();
	var dropdownWidth = $(this).width();
	var dropdownHeight = $(this).height();

	$("#audience-modal").css("top", dropdownOffset.top + dropdownHeight + 10 );
	$("#audience-modal").css("left", dropdownOffset.left + dropdownWidth - 150 );

	$("#audience-modal").toggle();
});


$("#dropdown-list").on( "click", ".dropdown-select", function(e) {
	// Get index of audience selected
	var audienceIndex = e.target.id;
	audienceIndex = audienceIndex.slice( ( audienceIndex.length - audienceIndex.indexOf("-") ) * -1 ) * -1;

	if(activeAudience !== audienceIndex){
		activeAudience = audienceIndex;
		global_initSections();
		global_resetFilters();
		global_redrawCharts();
		$("#audience-dropdown-value").html( $("#audience-size-name").html() );
	}
	$("#audience-modal").toggle();
});