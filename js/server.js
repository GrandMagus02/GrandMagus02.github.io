$(document).ready(function(){

    function copyToClipboard(element) {
        var $temp = $("<input>")
        $("body").append($temp)
        $temp.val($(element).text()).select()
        document.execCommand("copy")
        $temp.remove()
    }

    let fadeTime = 300
    let lifeTime = 1000

    function popUp(element) {
        $(element).click(function() {
            copyToClipboard(this)
            if ( !($(this).siblings('.copied_popup').is('span'))) {
                var $readyPopUp = $("<span>")
                $readyPopUp.text('Copied!')
                $(this).parent().append($readyPopUp)
                $readyPopUp.addClass('copied_popup')
                $readyPopUp.fadeToggle(0)
                $readyPopUp.fadeToggle(fadeTime)
            }
            setTimeout(function() {
                $readyPopUp.fadeToggle(fadeTime)
                setTimeout(function() {
                    $readyPopUp.remove()
                }, fadeTime)
            }, lifeTime)            
        })
    }

    $('.ip_adress').each(function() {
        popUp(this)
    })
    $('.email').each(function() {
        popUp(this)
    })
})