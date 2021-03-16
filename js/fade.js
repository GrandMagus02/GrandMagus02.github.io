
var block_show = null

$(document).ready(function() {

    function scrollTracking(subject) {

        var winTop = $(window).scrollTop()
        var winHeight = $(window).height()

        $(subject).each( function() {

            var elemTop = $(this).offset().top
            var elemHeight = $(this).outerHeight()
        
            if ( winTop + winHeight >= elemTop && winTop + winHeight - elemHeight * 2 <= elemTop + (winHeight - elemHeight) ){

                if (block_show == null || block_show == false) {
                    $(this).animate( { opacity: 1 }, 1000 )
                }
                block_show = true;
            }
            else {

                if (block_show == null || block_show == true) {
                    $(this).animate( { opacity: 0 } )
                }
                block_show = false;
            }
        })
    }
    
    function fadeBlocks() {

        scrollTracking( '.block-light' )
        scrollTracking( '.block-panorama' )
        scrollTracking( '.block-with-image' )
        scrollTracking( 'footer' )
    }

    $(window).scroll(function(){
        fadeBlocks()
    })
        
    $(document).ready(function(){ 
        fadeBlocks()
    })
})
