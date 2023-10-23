
let simpleColorsArray = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DodgerBlue",
    "FireBrick",
    "ForestGreen",
    "Fuchsia",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Green",
    "GreenYellow",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSteelBlue",
    "Lime",
    "LimeGreen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Yellow",
    "YellowGreen"
];


let colorCodeRepresentation = ["simple", getRandomSimpleColor()]

let colorContainerRef = document.getElementById("color-container");
let buttonRef = document.querySelector("button") 
let spanColorTextRef = document.querySelector("#text-color")
let spanHexButtonRef = document.querySelector("#hex")
let spanSimpleButtonRef = document.querySelector("#simple")

changeContainerColor(colorCodeRepresentation[1])

function colorNameToHex(){
    // getComputedStyle returns all the style applied to the html
    let computedColor = window.getComputedStyle(colorContainerRef).backgroundColor
    // appending the dot at the end gives back any of the applied styles
    // backgroundColor = rgb(165,42,42)
    console.log(computedColor);
    // now we need to extract only the numbers, that by the way, comes as text
    let hex = "#" + computedColor.match(/\d+/g).map(rgbNumber => {
        // Add a zero before every color number, for proper formatting when translating
        // it into hex. Example: 0255, 042, 042
        // slice(-2) returns always the last 2 numbers.
        return  ("0" + parseInt(rgbNumber).toString(16)).slice(-2);
    }).join("");

    // console.log(hex);
    return hex.toUpperCase()
}


function getRandomHexCode(){
    let randomDecimal = Math.floor(Math.random() * 16777216);
    let hex = randomDecimal.toString(16).toUpperCase();
    // console.log(`#${hex}`);
    return `#${hex}`
}

function getRandomSimpleColor(){
    let randomNum = Math.floor(Math.random() * simpleColorsArray.length) 
    // console.log(simpleColorsArray[randomNum]);
    return simpleColorsArray[randomNum]
}

function changeContainerColor(colorCode){
    colorContainerRef.style.backgroundColor = colorCode
    spanColorTextRef.textContent = colorCode
    spanColorTextRef.style.color = colorCode
}

buttonRef.addEventListener("click", ()=>{
    // changed
    // colorContainerRef.style.opacity = 0;
    if(colorCodeRepresentation[0] == "simple"){
        let radomSimpleColor = getRandomSimpleColor()
        changeContainerColor(radomSimpleColor)
        colorCodeRepresentation[1] = radomSimpleColor
    }else{
        changeContainerColor(getRandomHexCode())
    }
})

spanHexButtonRef.addEventListener("click", ()=>{
    colorCodeRepresentation[0] = "hex"
    spanSimpleButtonRef.style.fontWeight = "normal"
    spanHexButtonRef.style.fontWeight = "bolder"
    spanColorTextRef.textContent = colorNameToHex()
})
spanSimpleButtonRef.addEventListener("click", ()=>{
    colorCodeRepresentation[0] = "simple"
    spanSimpleButtonRef.style.fontWeight = "bolder"
    spanHexButtonRef.style.fontWeight = "normal"
    spanColorTextRef.textContent = colorCodeRepresentation[1]
})