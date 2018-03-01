// ----------------------------------------------------------------------------------------------------
// CONTROLS - NAV
// ----------------------------------------------------------------------------------------------------
$(".m-nav-side-panel li").on( "click", function() {
    var navItem = $(this).attr('id');
    var section = '#section-' + navItem.substr(4);

    if(activeTab === 0){
        $(section).animatescroll( { element: '#audience', scrollSpeed:1000, easing:'easeInOutCubic' } );
    }

    if(activeTab === 1){
        $(section).animatescroll( { element: '#campaign', scrollSpeed:1000, easing:'easeInOutCubic' } );
    }
});