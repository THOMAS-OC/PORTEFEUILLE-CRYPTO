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