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


//ketika button ditekan
button.addEventListener("click", (event) => {
    event.preventDefault() 
    let bmiResult = hitungBMI(beratBadan.value,tinggiBadan.value).toFixed(1)
    console.log(bmiResult) 

    bmiDisplay.textContent = bmiResult

})

