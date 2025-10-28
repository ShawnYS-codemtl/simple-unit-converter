/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById("length-p")
const volumeEl = document.getElementById("volume-p")
const massEl = document.getElementById("mass-p")
const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")

convertBtn.addEventListener("click", function(){
    let lengthOut = formatString('meters', 'feet', inputEl.value|0, 3.281)
    let volumeOut = formatString('liters', 'gallons', inputEl.value|0, 0.264)
    let massOut = formatString('kilos', 'pounds', inputEl.value|0, 2.204)
    lengthEl.innerHTML = lengthOut
    volumeEl.innerHTML = volumeOut
    massEl.innerHTML = massOut
})

function formatString(unitFrom, unitTo, value=0, conversion){
    return `
    ${value} ${unitFrom} = ${(value*conversion).toFixed(3)} ${unitTo} | ${value} ${unitTo} = ${(value/conversion).toFixed(3)} ${unitFrom}   
    `
}

