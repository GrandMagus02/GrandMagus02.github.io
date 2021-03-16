$(document).ready(function() {

    $('.theme').click(function(){

        if(theme == true) {
            theme = false
            lightTheme()
        }
        else {
            theme = true
            darkTheme()
        }
        console.log('Dark Theme = ' + darkTheme)
    })
    
    $('#cmp').css({

        'max-width':'' + $('.compareSlide').val() + '%'
    })

    $('.compareSlide').on('input',function() {

        $('#cmp').css({
            
            'max-width':'' + $('.compareSlide').val() + '%'
        })
    })

})