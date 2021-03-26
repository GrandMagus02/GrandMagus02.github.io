var menuHeight = $('menu').height()
$(window).resize(function() {
    menuHeight = $('menu').height()
})

var winHeight = $(window).height()
$(window).resize(function() {
    winHeight = $(window).height()
})

var winWidth = $(window).width()
$(window).resize(function() {
    winWidth = $(window).width()
})

var headerHeight = $('header').height()
$(window).resize(function() {
    headerHeight = $('header').height()
    $('.menu_bar').css('top', headerHeight)
})

$('.content').each(function() {
    $( this ).toggle()
})
$('.hide').each(function() {
    $( this ).toggle()
})
$('.top_bouble').each(function() {
    $( this ).toggle()
})