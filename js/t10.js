/*  $(document).ready(function() {


    var icons = {
        header:  'ui-icon-circle-arrow-e' ,
        activeHeader: 'ui-icon-circle-arrow-s'
    }
    $('#accordion').accordion( {
        collapsible: true,
        icons: icons
        active: false
        heightStyle: 'content'
    }).sortable({
        axis: "y",
        handle: "h3",
        stop: function(event, ui) {
            // IE doesn't register the blur when sorting
            // so trigger focusout handlers to remove .ui-st
            ui.item.children( "h3" ).triggerHandler( "focusout" )

            // Refresh accordion to handle new order
            $( this ).accordion( "refresh" );
        })
    }) */


    $('#accordion2').accordion({
        collapsible: true,
        icons: icons
        active: false
        heightStyle: 'content'
    })

