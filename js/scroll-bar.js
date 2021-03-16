var options = {
    'damping': 0.1,
    'alwaysShowTracks': true
}

var scrollbar = Scrollbar.init(
    document.getElementById('smooth-scroll'), options
);

// $('.scrollbar-thumb').css({
//     'background-color': '#38A0FF',
//     'border-radius': '0'
// })

// $('.scrollbar-track').css({
//     'background-color': '#222',
//     'border-radius': '0'
// })

$('.scrollbar-track').addClass('custom-scrollbar-track')
$('.scrollbar-thumb').addClass('custom-scrollbar-thumb')

var winHeight = $(window).height()
$(window).resize(function() {
    winHeight = $(window).height()
})

var headerHeight = $('header').height()
$(window).resize(function() {
    headerHeight = $('header').height()
    $('.menu_bar').css('top', headerHeight)
})

scrollbar.addListener(function(status) {
    var fixedElem = document.getElementsByClassName('fixed');
    var offset = status.offset;

    if (offset.y >= headerHeight) {
        //console.log(offset.y + " >= " + headerHeight)
        $('.menu_bar').addClass('fixed')
    }
    else {
        //console.log(offset.y + " < " + headerHeight)
        $('.menu_bar').removeClass('fixed')
        $('.menu_bar').css('top', headerHeight)
    }

    for (let i = 0; i < fixedElem.length; ++i) {
        fixedElem[i].style.top = offset.y + 'px';
        fixedElem[i].style.left = offset.x + 'px';
    }
    
    const parallax = (subject, division, scale) => {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + offset.y && topPos > offset.y - winHeight) {
                $(this).css({
                    'transform':'scale(' + scale + ') translate(0%, ' + ((offset.y - topPos) / division) + '%'
                })
            }
        })
    }
    parallax('.parallax_close', 5, 1)
    parallax('.parallax_normal', 6, 1)
    parallax('.parallax_far', 20, 1.2)
 });
 
 const parallaxStart = (subject, division, scale) => {
    $(subject).each( function() {
        var topPos = $(this).offset().top
        if(topPos <= winHeight + scrollbar.offset.y && topPos > scrollbar.offset.y - winHeight) {
            $(this).css({
                'transform':'scale(' + scale + ') translate(0%, ' + ((scrollbar.offset.y - topPos) / division) + '%'
            })
        }
    })
}
parallaxStart('.parallax_close', 5, 1)
parallaxStart('.parallax_normal', 6, 1)
parallaxStart('.parallax_far', 10, 1.2)
