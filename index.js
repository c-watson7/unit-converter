/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const outputEl = document.getElementById("output-container")
let inputValue = null
let conversionHtml = ""
let conversions = {
    distance: {
        meters: 0,
        feet: 0
    },
    volume: {
        liters: 0,
        gallons: 0
    },
    mass: {
        kilograms: 0,
        pounds: 0
    }
}

function convert(value) {
    let distance = [value * 3.281, value * .305]
    let volume = [value * .264, value * 3.785]
    let mass =[value * 2.204, value * .454]
    conversions.distance.feet = distance[1].toFixed(3)
    conversions.distance.meters = distance[0].toFixed(3)
    conversions.mass.kilograms = mass[1].toFixed(3)
    conversions.mass.pounds = mass[0].toFixed(3)
    conversions.volume.gallons = volume[1].toFixed(3)
    conversions.volume.liters = volume[0].toFixed(3)
}

function generateElements(obj) {
    for(let i = 0; i < Object.keys(obj).length; i++) {
        let section = Object.keys(obj)[i]
        let unitOne = Object.keys(obj[section])[0]
        let unitTwo = Object.keys(obj[section])[1]
        conversionHtml += `
            <div class="conversion">
                <h3>${capitalizeFirstLetter(section)} (${capitalizeFirstLetter(unitOne)}/${capitalizeFirstLetter(unitTwo)})</h3>
                <p>
                    ${inputValue} ${unitOne} = ${obj[section][unitOne]} ${unitTwo} | ${inputValue} ${unitTwo} = ${obj[section][unitTwo]} ${unitOne}
                </p>
            </div>`
    }
    outputEl.innerHTML = conversionHtml
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

convertBtn.addEventListener("click", function() {
    inputValue = inputEl.value
    convert(inputValue)
    outputEl.innerHTML = null
    conversionHtml = ""
    generateElements(conversions)
})

