//hitung BMI
//Rumus: Berat Badan/(Tinggi Badan/100)^2

const beratBadan = 70
const tinggiBadan = 170

const BMI = beratBadan/(tinggiBadan/100)**2

console.log(BMI.toFixed(1))
