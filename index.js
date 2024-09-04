//hitung BMI
//Rumus: Berat Badan/(Tinggi Badan/100)^2


//get the elements
let beratBadan = document.getElementById("weight")
let tinggiBadan = document.getElementById("height")
let button = document.getElementById("button")

let bmiDisplay = document.getElementById("bmi")
let bmiDesc = document.getElementById("keterangan")

//fungsi rumus BMI
function hitungBMI (BB, TB){
    let BMI = BB/(TB/100)**2
    return BMI
}

function logicBMI (BMI){
    if (BMI <18.5){
        return "underweight"
    }else if (BMI >=18.5 || BMI < 25 ){
        return "normal weight"
    }else if (BMI >=25|| BMI < 30 ){
        return "overweight"
    }else if (BMI > 30){
        return "obesity"
    }else {
        return "Error"
    }
}


//ketika button ditekan
button.addEventListener("click", (event) => {
    event.preventDefault() 
    let bmiResult = hitungBMI(beratBadan.value,tinggiBadan.value)
    let bmiLogic = logicBMI(bmiResult)

    console.log(bmiResult.toFixed(1)) 
    console.log(bmiLogic)
    bmiDisplay.textContent = bmiResult.toFixed(1)
    bmiDesc.textContent = bmiLogic

    beratBadan.value = "";
    tinggiBadan.value = "";
})
