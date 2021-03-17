class AnchorPlugin extends Scrollbar.ScrollbarPlugin {
    static pluginName = 'anchor';

    onHashChange = () => {
        this.handleHash(location.hash);
    };

    onClick = (event) => {
        const { target } = event;

        if (target.tagName !== 'A') {
        return;
        }

        const hash = target.getAttribute('href');

        if (!hash || hash.charAt(0) !== '#') {
        return;
        }

        this.handleHash(hash);
    }

    handleHash = (hash) => {
        console.log('hash:', hash);
        
        if (!hash) {
        return;
        }

        if (hash === '#top') {
        scrollbar.setMomentum(0, -scrollbar.scrollTop);
        } else {
        console.log('scrollTop:', scrollbar.containerEl.scrollTop);

        scrollbar.scrollIntoView(document.querySelector(hash), {
            offsetTop: -scrollbar.containerEl.scrollTop,
        });
        }
    };

    onInit() {
        this.handleHash(location.hash);

        window.addEventListener('hashchange', this.onHashChange);

        this.scrollbar.contentEl.addEventListener('click', this.onClick);
    }

    onDestory() {
        window.removeEventListener('hashchange', this.onHashChange);

        this.scrollbar.contentEl.removeEventListener('click', this.onClick);
    }
}

Scrollbar.use(AnchorPlugin);

var options = {
    'damping': 0.1,
    'alwaysShowTracks': true,
    'continuousScrolling': true
}

var scrollbar = Scrollbar.init(
    document.getElementById('smooth-scroll'), options
)

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
    
    // var menu_size_small = '1rem'
    // var menu_font_size_small = '1.8rem'
    // var menu_size = '1.8rem'
    // var menu_font_size = '2.4rem'

    if (offset.y >= headerHeight) {
        $('.menu_bar').addClass('fixed')
        // $('.menu_link').css({
        //     'padding': menu_size_small,
        //     'font-size': menu_font_size_small
        // })
    }
    else {
        $('.menu_bar').removeClass('fixed')
        $('.menu_bar').css('top', headerHeight)
        // $('.menu_link').css({
        //     'padding': menu_size,
        //     'font-size': menu_font_size
        // })
    }

    for (let i = 0; i < fixedElem.length; ++i) {
        fixedElem[i].style.top = offset.y + 'px';
        fixedElem[i].style.left = offset.x + 'px';
    }
    
    const parallax = (subject, division, scale) => {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + offset.y + 200 && topPos > offset.y - winHeight - 200) {
                $(this).css({
                    'transform':'scale(' + scale + ') translate(0%, ' + ((offset.y - topPos) / division) + '%'
                })
            }
        })
    }
    parallax('.parallax_close', 5, 1)
    parallax('.parallax_normal', 6, 1)
    parallax('.parallax_far', 30, 1)
    parallax('.parallax_poster', 70, 1.2)
 });

$(document).ready(function() {
    const parallaxStart = (subject, division, scale) => {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            //console.dir($(this))
            $(this).css({
                'transform':'scale(' + scale + ') translate(0%, ' + ((scrollbar.offset.y - topPos) / division) + '%'
            })
        })
    }
    parallaxStart('.parallax_close', 5, 1)
    parallaxStart('.parallax_normal', 6, 1)
    parallaxStart('.parallax_far', 30, 1)
    parallaxStart('.parallax_poster', 70, 1.2)
})

window.onload = () => {
    setTimeout(() => {
        scrollTo(0, 0);
    }, 0);
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

setTimeout(function () {
    scrollbar.scrollTop = $(document).scrollTop()
    console.log(scrollbar.scrollTop + ' ' + $(document).scrollTop())
}, 1000)