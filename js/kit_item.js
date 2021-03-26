$(document).ready(function(){

    let $kitItem = $('.kit_item'),
        $kitTooltip = $('#item_stats'),
    
        $name = $("<h2>"),
        //$description = $("<p>"),
        $enchantments = $("<ul>"),
        $damage = $("<p>"),
        $durability = $("<p>"),

        fadeInTime = 100,
        fadeOutTime = 0

        $kitTooltip.toggle(0)

    let offset = {
        y: 0,
        x: 0
    }

    scrollbar.addListener(function(status) {
        offset = status.offset
    })

    $('.kits').mousemove( e => {
        $kitTooltip.css({ 
            "top" : e.pageY + 5 + offset.y,
            "left" : e.pageX + 5 + offset.x
        })
    })
    $kitItem.mouseenter( e => {
        $target = $(e.target) 

        let $dataName = "",
            $dataDescription = "",
            $dataEnchantments = "",
            $dataDamage = "",
            $dataDurability = ""

        $dataName = $target.attr("data-name")

        $dataDescription = $target.attr("data-description")
        if (typeof $dataDescription !== 'undefined' && $dataDescription !== false)
            $dataDescription = $dataDescription.split("/n")
        
        $dataEnchantments = $target.attr("data-enchantments")
        if (typeof $dataEnchantments !== 'undefined' && $dataEnchantments !== false)
            $dataEnchantments = $dataEnchantments.split(";")

        $dataDamage = $target.attr("data-damage")

        $dataDurability = $target.attr("data-durability")

        $name.text($dataName)
        $kitTooltip.append($name)
        
        if (typeof $dataDescription !== 'undefined' && $dataDescription !== false)
            if ($dataDescription.length > 0) {
                $dataDescription.forEach(elem => {
                    let $description = $("<p>")
                    $description.text(elem)
                    $kitTooltip.append($description)
                })
            }
        
        if (typeof $dataEnchantments !== 'undefined' && $dataEnchantments !== false)
            if ($dataEnchantments.length > 0) {
                $enchantments.text("Зачарования:")
                $kitTooltip.append($enchantments)

                $dataEnchantments.forEach(elem => {
                    let $enchant = $("<li>")
                    $enchant.text(elem)
                    $enchantments.append($enchant)
                })
            }
        
        if (typeof $dataDamage !== 'undefined' && $dataDamage !== false)
            if ($dataDamage.length > 0) {
                $damage.text("Damage: " + $dataDamage)
                $damage.addClass('damage')
                $kitTooltip.append($damage)
            }

        if (typeof $dataDurability !== 'undefined' && $dataDurability !== false)
            if ($dataDurability.length > 0) {
                $durability.text("Durability: " + $dataDurability)
                $durability.addClass('durability')
                $kitTooltip.append($durability)
            }

        $kitTooltip.fadeIn(fadeInTime)
    }).mouseout( e => {
        $kitTooltip.fadeOut(fadeOutTime)
        $kitTooltip.empty()
    })
})