//hitung BMI
//Rumus: Berat Badan/(Tinggi Badan/100)^2

let beratBadan = document.getElementById("weight")
let tinggiBadan = document.getElementById("height")
let button = document.getElementById("button")

function hitungBMI (BB, TB){
    let BMI = BB/(TB/100)**2
    return BMI
}


button.addEventListener("click", (event) => {
    event.preventDefault() 
    console.log(hitungBMI(beratBadan.value,tinggiBadan.value)) 
})

