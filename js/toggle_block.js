$(document).ready(function(){

    // $('.show').each(function() {
    //     let parentId = $( this ).parent().attr('id')
    //     $( this ).attr('href', '#' + parentId)
    // })

    $('.show').click(function(){
        $( this ).toggle()
        $( this ).siblings('.hide').toggle()
        $( this ).siblings('.content').fadeToggle(300)
    })

    $('.hide').click(function(){
        $( this ).toggle()
        $( this ).siblings('.show').toggle()
        $( this ).siblings('.content').fadeToggle(0)

        var target = this.parentElement
        var overscrolling = menuHeight + 30

        scrollbar.scrollIntoView( target, {
            offsetTop: -scrollbar.containerEl.scrollTop + overscrolling,
        });
    })
})