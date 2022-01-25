const btnNavRight = document.querySelector(".btnNav--Right")
const btnNavleft = document.querySelector(".btnNav--Left")
let activeLeft = false
let activeRight = false

btnNavRight.addEventListener("click", ()=>{

    if (!activeRight){
        document.querySelector(".navSmartphoneRight").style.transform = "translateX(0%)"
        activeRight = true
    }

    else{
        document.querySelector(".navSmartphoneRight").style.transform = "translateX(100%)"
        activeRight = false
    }
    
})

btnNavleft.addEventListener("click", ()=>{

    // Apparition de la navbar de gauche
    if (!activeLeft){
        document.querySelector(".navSmartphoneLeft").style.transform = "translateX(0%)"
        document.querySelector(".navSmartphoneRight").style.transform = "translateX(100%)"
        activeLeft = true
    }
    
    else{
        document.querySelector(".navSmartphoneLeft").style.transform = "translateX(-100%)"
        document.querySelector(".navSmartphoneRight").style.transform = "translateX(0%)"
        activeLeft = false
    }

    
})