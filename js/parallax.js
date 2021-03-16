var winHeight = $(window).height()
$(window).resize(function() {
    winHeight = $(window).height()
})
var lastScrollPos = $(document).scrollTop()
var scrollPos = $(this).scrollTop()

const skewPage = (formula) => {
    if( formula > 5)
        $( '#page' ).css('transform', 'skew(0, ' + 5 + 'deg)')
    else if( formula < -5)
        $( '#page' ).css('transform', 'skew(0, ' + -5 + 'deg)')
    else
        $( '#page' ).css('transform', 'skew(0, ' + formula + 'deg)')
}

$( document ).scroll( () => {
    scrollPos = $(this).scrollTop()
    
    const parallax = (subject, division) => {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + scrollPos && topPos > scrollPos - winHeight) {
                $(this).css({
                    'transform':'scale(1.2) translate(0%, ' + (((scrollPos - topPos) / division) + 5) + '%'
                })
            }
        })
    }
    parallax('.parallax', 25)

    const parallaxStrong = (subject, division) => {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + scrollPos && topPos > scrollPos - winHeight) {
                $(this).css({
                    'transform':'scale(1.2) translate(0%, ' + ((scrollPos - topPos) / division) + '%'
                })
            }
        })
    }
    parallaxStrong('.parallaxStrong', 20)

    const parallaxUnscaled = (subject, division) => {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + scrollPos && topPos > scrollPos - winHeight) {
                $(this).css({
                    'transform':'scale(1.1) translate(0%, ' + (((scrollPos - topPos) / division) + 5) + '%'
                })
            }
        })
    }
    parallaxUnscaled('.parallaxUnscaled', 25)

    const parallaxRows = ( subject, division ) => {
        $( subject ).each( function( index ) {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + scrollPos && topPos > scrollPos - winHeight) {
                $(this).css({
                    'transform':'translate(' + (((scrollPos - topPos) / division) + 20 + (index * -3) ) + '%, 0%)'
                })
            }
        })
    }
    parallaxRows('.row_item, .row_item_sec', 40)
})

var checkScrollSpeed = (function(settings){
    settings = settings || {};
  
    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 50;
  
    function clear() {
      lastPos = null;
      delta = 0;
    }
  
    clear();
    
    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

window.onscroll = function(){
    skewPage( checkScrollSpeed() / 80 )
};