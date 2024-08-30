const btn = document.getElementById("btn");
const inputEl = document.getElementById("input-el");
const para1 = document.getElementById("para-1");
const para2 = document.getElementById("para-2");
const para3 = document.getElementById("para-3");

// 1 meter = 3.28084 feet
// 1 foot = 0.3048 meter
// 1 liter = 0.264172 gallon
// 1 gallon = 3.78541 liters
// 1 kilogram = 2.20462 pounds
// 1 pound = 0.453592 kilogram

function mFeet(el){
    const m = (el * 3.2).toFixed(3);
    const f = (el * 0.30).toFixed(3);
    para1.textContent = `${el} meters = ${m} feet | ${el} feet = ${f} meters`
}

function lGallon(el) {
    const l = (el * 0.264).toFixed(3);
    const g = (el * 3.785).toFixed(3);
    para2.textContent = `${el} litres = ${l} gallons | ${el} gallons = ${g} litres`
}

function mass(el) {
    const k = (el * 2.20).toFixed(3);
    const p = (el * 0.45).toFixed(3);
    para3.textContent = `${el} kilos = ${k} pounds | ${el} pounds = ${p} kilos`
}

btn.addEventListener("click", function() {
    const input = inputEl.value;
    mFeet(input);
    lGallon(input);
    mass(input);
})

