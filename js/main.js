var menuHeight = $('menu').height()
//$('#page').css('padding-top', menuHeight)

$(window).resize(function() {
    menuHeight = $('menu').height()
    //$('#page').css('padding-top', menuHeight)
})

var winWidth = $(window).width()
$(window).resize(function() {
    winWidth = $(window).width()
})

$('.content').each(function() {
    $( this ).toggle()
})
$('.hide').each(function() {
    //let parentId = $( this ).parent().attr('id')
    //$( this ).attr('href', '#' + parentId)
    $( this ).toggle()
})
$('.top_bouble').each(function() {
    //let parentId = $( this ).parent().attr('id')
    //$( this ).attr('href', '#' + parentId)
    $( this ).toggle()
})