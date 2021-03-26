
var imgSize = $('.server_box img').width()
var size = imgSize / 1.2
var thicknessVar = 8
var startAngleVar = 3 / 2 * Math.PI
var greenColor = '#43FF01'
var grayColor = '#666666'

function setCircleProgress(elem, val) {
    $(elem).circleProgress({
        startAngle: startAngleVar,
        thickness: thicknessVar,
        value: val,
        size: size,
        fill: greenColor,
        emptyFill: grayColor
    })
}

setTimeout(function () {
    serverCircles = document.querySelectorAll('.circle_bar')
    serverCircles.forEach(function callback(element, index) {
        var value1 = $(element).children().html().split('/')[0]
        var value2 = $(element).children().html().split('/')[1]
        value1 /= value2
        setCircleProgress('#server' + (index + 1), value1)
        $(element).css('margin-right', imgSize - size)
    })
}, 1000)
