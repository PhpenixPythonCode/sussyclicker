const clicker = document.getElementById('clicker')
const scoreCounter = document.getElementById('score')
const shopButton = document.getElementById('shopbutton')
const shop = document.getElementById('shopframe')
const buySuperSussy = document.getElementById('supersussybuy')
const buyUltraSussy = document.getElementById('ultrasussybuy')
const buySusSussy = document.getElementById('sussussybuy')
const buyRockSussy = document.getElementById('rocksussybuy')
const buyForntiteSussy = document.getElementById('forntitesussybuy')
const buyLeanSussy = document.getElementById('leansussybuy')
const buyNerdSussy = document.getElementById('nerdsussybuy')
const buySpongeSussy = document.getElementById('spongesussybuy')
const buyRainbowSussy = document.getElementById('rainbowsussybuy')

const clickerImage = document.getElementById('clickerimage')

var sound = new Audio('sus.mp3')

if(localStorage.getItem('score')){
    var score = parseInt(localStorage.getItem('score'))
    scoreCounter.innerHTML = score
} else{
    var score = 0
}

if(localStorage.getItem('scoreIncrement')){
    var scoreIncrement = parseInt(localStorage.getItem('scoreIncrement'))
} else{
    var scoreIncrement = 1
}
var shopOpen = false


if(localStorage.getItem('ownsSuperSussy')){
    if(localStorage.getItem('ownsSuperSussy').toString() == 'true'){
        document.getElementById('purchase-supersussy').innerHTML = 'Owned'
        buySuperSussy.style.cursor = 'default'
        buySuperSussy.style.backgroundColor = 'red'
        clickerImage.src = 'supersussy.png'
        sound = new Audio('supersus.mp3')
    } else if(localStorage.getItem('ownsSuperSussy').toString() == 'false'){
        document.getElementById('purchase-supersussy').innerHTML = 'Owned'
        buySuperSussy.style.cursor = 'default'
        buySuperSussy.style.backgroundColor = 'red'
    }
    
} else{
    buySuperSussy.addEventListener('click', () => {
        if(score >= 100){
            scoreIncrement = 5
            score = score - 100
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsSuperSussy', true)
            clickerImage.src = 'supersussy.png'
            sound = new Audio('supersus.mp3')
            window.location.reload()
        } else{
            document.getElementById('purchase-supersussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-supersussy').innerHTML = 'Super Sussy | - 100 | +5'
            }, 2000)
            
        }
        
    })
}


if(localStorage.getItem('ownsUltraSussy')){
    if(localStorage.getItem('ownsUltraSussy').toString() == 'true'){
        document.getElementById('purchase-ultrasussy').innerHTML = 'Owned'
        buyUltraSussy.style.cursor = 'default'
        buyUltraSussy.style.backgroundColor = 'red'
        clickerImage.src = 'ultrasussy.png'
        sound = new Audio('ultrasus.mp3')
    } else if(localStorage.getItem('ownsUltraSussy').toString() == 'false'){
        document.getElementById('purchase-ultrasussy').innerHTML = 'Owned'
        buyUltraSussy.style.cursor = 'default'
        buyUltraSussy.style.backgroundColor = 'red'
    }
    
} else{
    buyUltraSussy.addEventListener('click', () => {
        if(score >= 1000){
            scoreIncrement = 25
            score = score - 1000
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsUltraSussy', true)
            localStorage.setItem('ownsSuperSussy', false)
            window.location.reload()
            clickerImage.src = 'ultrasussy.png'
            sound = new Audio('ultrasus.mp3')
        } else{
            document.getElementById('purchase-ultrasussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-ultrasussy').innerHTML = 'Ultra Sussy | - 1,000 | +25'
            }, 2000)
        }
        
    })
}


if(localStorage.getItem('ownsSusSussy')){
    if(localStorage.getItem('ownsSusSussy').toString() == 'true'){
        document.getElementById('purchase-sussussy').innerHTML = 'Owned'
        buySusSussy.style.cursor = 'default'
        buySusSussy.style.backgroundColor = 'red'
        clickerImage.src = 'sussussy.png'
        sound = new Audio('sussus.mp3')
    } else if(localStorage.getItem('ownsSusSussy').toString() == 'false'){
        document.getElementById('purchase-sussussy').innerHTML = 'Owned'
        buySusSussy.style.cursor = 'default'
        buySusSussy.style.backgroundColor = 'red'
    }
    
} else{
    buySusSussy.addEventListener('click', () => {
        if(score >= 10000){
            scoreIncrement = 100
            score = score - 10000
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsSusSussy', true)
            localStorage.setItem('ownsSuperSussy', false)
            localStorage.setItem('ownsUltraSussy', false)
            window.location.reload()
            clickerImage.src = 'sussussy.png'
            sound = new Audio('sussus.mp3')
        } else{
            document.getElementById('purchase-sussussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-sussussy').innerHTML = 'Sus Sussy | - 10,000 | +100'
            }, 2000)
        }
        
    })
}

if(localStorage.getItem('ownsRockSussy')){
    if(localStorage.getItem('ownsRockSussy').toString() == 'true'){
        document.getElementById('purchase-rocksussy').innerHTML = 'Owned'
        buyRockSussy.style.cursor = 'default'
        buyRockSussy.style.backgroundColor = 'red'
        clickerImage.src = 'rocksussy.png'
        sound = new Audio('rocksus.mp3')
    } else if(localStorage.getItem('ownsRockSussy').toString() == 'false'){
        document.getElementById('purchase-rocksussy').innerHTML = 'Owned'
        buyRockSussy.style.cursor = 'default'
        buyRockSussy.style.backgroundColor = 'red'
    }
    
} else{
    buyRockSussy.addEventListener('click', () => {
        if(score >= 100000){
            scoreIncrement = 420
            score = score - 100000
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsRockSussy', true)
            localStorage.setItem('ownsSusSussy', false)
            localStorage.setItem('ownsSuperSussy', false)
            localStorage.setItem('ownsUltraSussy', false)
            window.location.reload()
            clickerImage.src = 'rocksussy.png'
            sound = new Audio('rocksus.mp3')
        } else{
            document.getElementById('purchase-rocksussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-rocksussy').innerHTML = 'Rock Sussy | - 100,000 | +420'
            }, 2000)
        }
        
    })
}


if(localStorage.getItem('ownsForntiteSussy')){
    if(localStorage.getItem('ownsForntiteSussy').toString() == 'true'){
        document.getElementById('purchase-forntitesussy').innerHTML = 'Owned'
        buyForntiteSussy.style.cursor = 'default'
        buyForntiteSussy.style.backgroundColor = 'red'
        clickerImage.src = 'forntitesussy.png'
        sound = new Audio('forntitesus.mp3')
    } else if(localStorage.getItem('ownsForntiteSussy').toString() == 'false'){
        document.getElementById('purchase-forntitesussy').innerHTML = 'Owned'
        buyForntiteSussy.style.cursor = 'default'
        buyForntiteSussy.style.backgroundColor = 'red'
    }
    
} else{
    buyForntiteSussy.addEventListener('click', () => {
        if(score >= 500000){
            scoreIncrement = 6969
            score = score - 500000
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsForntiteSussy', true)
            localStorage.setItem('ownsSusSussy', false)
            localStorage.setItem('ownsSuperSussy', false)
            localStorage.setItem('ownsUltraSussy', false)
            localStorage.setItem('ownsRockSussy', false)
            window.location.reload()
            clickerImage.src = 'forntitesussy.png'
            sound = new Audio('forntitesus.mp3')
        } else{
            document.getElementById('purchase-forntitesussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-forntitesussy').innerHTML = 'Forntite Sussy | - 500,000 | +6,969'
            }, 2000)
        }
        
    })
}


if(localStorage.getItem('ownsLeanSussy')){
    if(localStorage.getItem('ownsLeanSussy').toString() == 'true'){
        document.getElementById('purchase-leansussy').innerHTML = 'Owned'
        buyLeanSussy.style.cursor = 'default'
        buyLeanSussy.style.backgroundColor = 'red'
        clickerImage.src = 'leansussy.png'
        sound = new Audio('leansus.mp3')
    } else if(localStorage.getItem('ownsLeanSussy') == 'false'){
        document.getElementById('purchase-leansussy').innerHTML = 'Owned'
        buyLeanSussy.style.cursor = 'default'
        buyLeanSussy.style.backgroundColor = 'red'
    }
    
} else{
    buyLeanSussy.addEventListener('click', () => {
        if(score >= 2551230){
            scoreIncrement = 702963
            score = score - 2551230
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsLeanSussy', true)
            localStorage.setItem('ownsForntiteSussy', false)
            localStorage.setItem('ownsSusSussy', false)
            localStorage.setItem('ownsSuperSussy', false)
            localStorage.setItem('ownsUltraSussy', false)
            localStorage.setItem('ownsRockSussy', false)
            window.location.reload()
            clickerImage.src = 'leansussy.png'
            sound = new Audio('leansus.mp3')
        } else{
            document.getElementById('purchase-leansussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-leansussy').innerHTML = 'Lean Sussy | -2,551,230 | +702,963'
            }, 2000)
        }
        
    })
}

if(localStorage.getItem('ownsNerdSussy')){
    if(localStorage.getItem('ownsNerdSussy').toString() == 'true'){
        document.getElementById('purchase-nerdsussy').innerHTML = 'Owned'
        buyNerdSussy.style.cursor = 'default'
        buyNerdSussy.style.backgroundColor = 'red'
        clickerImage.src = 'nerdsussy.png'
        sound = new Audio('nerdsus.mp3')
    } else if(localStorage.getItem('ownsNerdSussy').toString() == 'false'){
        document.getElementById('purchase-nerdsussy').innerHTML = 'Owned'
        buyNerdSussy.style.cursor = 'default'
        buyNerdSussy.style.backgroundColor = 'red'
    }
    
} else{
    buyNerdSussy.addEventListener('click', () => {
        if(score >= 200000000){
            scoreIncrement = 3000000
            score = score - 200000000
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsNerdSussy', true)
            localStorage.setItem('ownsLeanSussy', false)
            localStorage.setItem('ownsForntiteSussy', false)
            localStorage.setItem('ownsSusSussy', false)
            localStorage.setItem('ownsSuperSussy', false)
            localStorage.setItem('ownsUltraSussy', false)
            localStorage.setItem('ownsRockSussy', false)
            window.location.reload()
            clickerImage.src = 'nerdsussy.png'
            sound = new Audio('nerdsus.mp3')
        } else{
            document.getElementById('purchase-nerdsussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-nerdsussy').innerHTML = 'Nerd Sussy | -200,000,000 | +3,000,000'
            }, 2000)
        }
        
    })
}


if(localStorage.getItem('ownsSpongeSussy')){
    if(localStorage.getItem('ownsSpongeSussy').toString() == 'true'){
        document.getElementById('purchase-spongesussy').innerHTML = 'Owned'
        buySpongeSussy.style.cursor = 'default'
        buySpongeSussy.style.backgroundColor = 'red'
        clickerImage.src = 'spongesussy.png'
        sound = new Audio('spongesus.mp3')
    } else if(localStorage.getItem('ownsSpongeSussy').toString() == 'false'){
        document.getElementById('purchase-spongesussy').innerHTML = 'Owned'
        buySpongeSussy.style.cursor = 'default'
        buySpongeSussy.style.backgroundColor = 'red'
    }
    
} else{
    buySpongeSussy.addEventListener('click', () => {
        if(score >= 1000000000){
            scoreIncrement = 10000000
            score = score - 1000000000
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsSpongeSussy', true)
            localStorage.setItem('ownsNerdSussy', false)
            localStorage.setItem('ownsLeanSussy', false)
            localStorage.setItem('ownsForntiteSussy', false)
            localStorage.setItem('ownsSusSussy', false)
            localStorage.setItem('ownsSuperSussy', false)
            localStorage.setItem('ownsUltraSussy', false)
            localStorage.setItem('ownsRockSussy', false)
            window.location.reload()
            clickerImage.src = 'nerdsussy.png'
            sound = new Audio('nerdsus.mp3')
        } else{
            document.getElementById('purchase-spongesussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-spongesussy').innerHTML = 'Sponge Sussy | -1,000,000,000 | +10,000,000'
            }, 2000)
        }
        
    })
}

if(localStorage.getItem('ownsRainbowSussy')){
    if(localStorage.getItem('ownsRainbowSussy').toString() == 'true'){
        document.getElementById('purchase-rainbowsussy').innerHTML = 'Owned'
        buyRainbowSussy.style.cursor = 'default'
        buyRainbowSussy.style.backgroundColor = 'red'
        clickerImage.src = 'rainbowsussy.png'
        sound = new Audio('rainbowsus.mp3')
    } else if(localStorage.getItem('ownsRainbowSussy').toString() == 'false'){
        document.getElementById('purchase-rainbowsussy').innerHTML = 'Owned'
        buyRainbowSussy.style.cursor = 'default'
        buyRainbowSussy.style.backgroundColor = 'red'
    }
    
} else{
    buyRainbowSussy.addEventListener('click', () => {
        if(score >= 1000000000000){
            scoreIncrement = 999999999999999
            score = score - 1000000000000
            localStorage.setItem('score', score)
            localStorage.setItem('scoreIncrement', scoreIncrement)
            localStorage.setItem('ownsRainbowSussy', true)
            localStorage.setItem('ownsSpongeSussy', false)
            localStorage.setItem('ownsNerdSussy', false)
            localStorage.setItem('ownsLeanSussy', false)
            localStorage.setItem('ownsForntiteSussy', false)
            localStorage.setItem('ownsSusSussy', false)
            localStorage.setItem('ownsSuperSussy', false)
            localStorage.setItem('ownsUltraSussy', false)
            localStorage.setItem('ownsRockSussy', false)
            window.location.reload()
            clickerImage.src = 'rainbowsussy.png'
            sound = new Audio('rainbowsus.mp3')
        } else{
            document.getElementById('purchase-rainbowsussy').innerHTML = 'Insuffecient Funds'
            setTimeout(() => {
                document.getElementById('purchase-rainbowsussy').innerHTML = 'Rainbow Sussy | -1,000,000,000,000 | +999,999,999,999,999'
            }, 2000)
        }
        
    })
}

clicker.addEventListener('mouseup', () => {
    score = score + scoreIncrement
    scoreCounter.innerHTML = score
    localStorage.setItem('score', score)
    
    sound.currentTime = 0
    sound.play()

})

shopButton.addEventListener('click', () => {
    if(shopOpen == false){
        shopOpen = true
        shop.style.visibility = 'visible'
    } else{
        shopOpen = false
        shop.style.visibility = 'hidden'
    }
})

document.getElementById('score-box').addEventListener("contextmenu", function(event){
    event.preventDefault()
    var contextElement = document.getElementById("context-menu")
    contextElement.style.top = event.clientY + 'px'
    contextElement.style.left = event.clientX + 'px'
    contextElement.classList.add("active")
})

window.addEventListener("mouseup", () => {
    document.getElementById("context-menu").classList.remove('active')
})

document.getElementById("context-menu").addEventListener('contextmenu', (e) => {
    e.preventDefault()
})

document.getElementById('resetdata').addEventListener('mousedown', () => {
    localStorage.removeItem('score')
    localStorage.removeItem('scoreIncrement')
    score = 0
    scoreIncrement = 1
    removeUpgrades()
    window.location.reload()
})

function removeUpgrades() {
    localStorage.removeItem('ownsSuperSussy')
    localStorage.removeItem('ownsUltraSussy')
    localStorage.removeItem('ownsSusSussy')
    localStorage.removeItem('ownsRockSussy')
    localStorage.removeItem('ownsForntiteSussy')
    localStorage.removeItem('ownsLeanSussy')
    localStorage.removeItem('ownsNerdSussy')
    localStorage.removeItem('ownsSpongeSussy')
    localStorage.removeItem('ownsRainbowSussy')


}