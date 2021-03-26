
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
        //console.log('hash:', hash);
        
        if (!hash) {
        return;
        }

        if (hash === '#') {
        return;
        }

        if (hash === '#top') {
        scrollbar.setMomentum(0, -scrollbar.scrollTop);
        } else {

        scrollbar.scrollIntoView(document.querySelector(hash), {
            offsetTop: -scrollbar.containerEl.scrollTop + menuHeight,
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

scrollbar.addListener(function(status) {
    let fixedElem = document.getElementsByClassName('fixed')
    let fixedElemBottom = document.getElementsByClassName('top_bouble')
    let offset = status.offset
    let $topBouble = $('.top_bouble')
    let $menuBar = $('.menu_bar')
    let menuHeight = $('.menu_bar').height() + 20;
    
    if ($("#header_slider_box").length) {
        if (offset.y >= headerHeight) {
            $menuBar.addClass('fixed')
            if (winWidth > tabletWidth) {
                $topBouble.fadeIn(1000)
            }
        }
        else {
            if (winWidth > tabletWidth) {
                $menuBar.removeClass('fixed')
                $menuBar.css('top', headerHeight)
                $topBouble.fadeOut(500)
            }
        }
    } else {
        $menuBar.addClass('fixed')
        if (offset.y >= 1024) {
            $topBouble.fadeIn(1000)
        } else $topBouble.fadeOut(500)
    }
    

    for (let i = 0; i < fixedElem.length; ++i) {
        fixedElem[i].style.top = offset.y + 'px';
        fixedElem[i].style.left = offset.x + 'px';
    }

    for (let i = 0; i < fixedElemBottom.length; ++i) {
        fixedElemBottom[i].style.top = offset.y + winHeight - fixedElemBottom[i].style.height - 100 + 'px';
    }

    let scrollOffsetTop = 200
    let scrollOffsetBottom = 200
    const parallax = (subject, division, scale) => {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            if(topPos <= winHeight + offset.y + scrollOffsetTop && topPos > offset.y - winHeight - scrollOffsetBottom) {
                $(this).css({
                    'transform':'scale(' + scale + ') translate(0%, ' + ((offset.y - topPos) / division) + '%'
                })
            }
        })
    }
    parallax('.parallax_close', 4, 1)
    parallax('.parallax_normal', 5, 1)
    parallax('.parallax_far', 30, 1)
    parallax('.parallax_poster', 120, 1.2)
 });

$(document).ready(function() {
    const parallaxStart = (subject, division, scale) => {
        $(subject).each( function() {
            var topPos = $(this).offset().top
            $(this).css({
                'transform':'scale(' + scale + ') translate(0%, ' + ((scrollbar.offset.y - topPos) / division) + '%'
            })
        })
    }
    parallaxStart('.parallax_close', 4, 1)
    parallaxStart('.parallax_normal', 5, 1)
    parallaxStart('.parallax_far', 30, 1)
    parallaxStart('.parallax_poster', 120, 1.2)
})

$('.top_bouble').click(() => {
    console.log('yes')
    scrollbar.setMomentum(0, -scrollbar.scrollTop);
})

window.onload = () => {
    setTimeout(() => {
        scrollTo(0, 0);
    }, 0);
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
