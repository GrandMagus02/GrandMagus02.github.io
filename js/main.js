var menuHeight = $('menu').height()
$('#page').css('padding-top', menuHeight)

$(window).resize(function() {
    menuHeight = $('menu').height()
    $('#page').css('padding-top', menuHeight)
})