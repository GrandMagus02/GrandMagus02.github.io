$(document).ready(function(){
    $('.content').each(function() {
        $( this ).fadeToggle(200)
    })
    $('.hide').each(function() {
        let parentId = $( this ).parent().attr('id')
        $( this ).attr('href', '#' + parentId)
        $( this ).toggle()
    })

    $('.show').each(function() {
        let parentId = $( this ).parent().attr('id')
        $( this ).attr('href', '#' + parentId)
    })

    $('.show').click(function(){
        $(this).toggle()
        $( this ).siblings('.hide').toggle()
        $( this ).siblings('.content').fadeToggle(0)
    })

    $('.hide').click(function(){
        $(this).toggle()
        $( this ).siblings('.show').toggle()
        $( this ).siblings('.content').fadeToggle(0)
    })
})