// Gestion de la navbar sur smartphone
const btnNavRight = document.querySelector(".btnNav--Right")
const btnNavleft = document.querySelector(".btnNav--Left")
let activeLeft = false
let activeRight = false

const returnLeft = document.querySelector(".returnLeft")
const returnRight = document.querySelector(".returnRight")

btnNavRight.addEventListener("click", ()=>{

    if (!activeRight){
        document.querySelector(".navSmartphoneRight").style.transform = "translateX(0%)"
        document.querySelector(".navSmartphoneLeft").style.transform = "translateX(-100%)"
        activeRight = true
        activeLeft = false
    }

    else{
        document.querySelector(".navSmartphoneRight").style.transform = "translateX(100%)"
        document.querySelector(".navSmartphoneLeft").style.transform = "translateX(0%)"
        activeRight = false
        activeLeft = true
    }
    
})

btnNavleft.addEventListener("click", ()=>{

    // Apparition de la navbar de gauche
    if (!activeLeft){
        document.querySelector(".navSmartphoneLeft").style.transform = "translateX(0%)"
        document.querySelector(".navSmartphoneRight").style.transform = "translateX(100%)"
        activeLeft = true
        activeRight = false
    }
    
    else{
        document.querySelector(".navSmartphoneLeft").style.transform = "translateX(-100%)"
        document.querySelector(".navSmartphoneRight").style.transform = "translateX(0%)"
        activeLeft = false
        activeRight = true
    }
})

returnLeft.addEventListener("click", ()=>{
        document.querySelector(".navSmartphoneLeft").style.transform = "translateX(-100%)"
        activeLeft = false
})

returnRight.addEventListener("click", ()=>{
    document.querySelector(".navSmartphoneRight").style.transform = "translateX(100%)"
    activeRight = false
})

// Animation "caroussel" crypto

const eth = document.querySelector(".asset1")
const xrp = document.querySelector(".asset2")
const btc = document.querySelector(".asset3")
const xdc = document.querySelector(".asset4")

eth.addEventListener("mouseover", ()=>{
    document.querySelector(".photo").style.transform = "translateX(-0%)"
})

xrp.addEventListener("mouseover", ()=>{
    document.querySelector(".photo").style.transform = "translateX(-25%)"
})

btc.addEventListener("mouseover", ()=>{
    document.querySelector(".photo").style.transform = "translateX(-50%)"
})

xdc.addEventListener("mouseover", ()=>{
    document.querySelector(".photo").style.transform = "translateX(-75%)"
})
