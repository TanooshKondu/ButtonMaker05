const bgColor = document.getElementById("bgColorInput");
const fontColor = document.getElementById("fontColorInput");
const fontSize = document.getElementById("fontSizeInput");
const fontWeight = document.getElementById("fontWeightInput");
const paddIn = document.getElementById("paddingInput");
const borderRadius = document.getElementById("borderRadiusInput");
const customBtn = document.getElementById("customButton");

function apply() {
    customBtn.style.backgroundColor = bgColor.value;
    customBtn.style.color = fontColor.value;
    customBtn.style.fontSize = fontSize.value;
    customBtn.style.fontWeight = fontWeight.value;
    customBtn.style.padding = paddIn.value;
    customBtn.style.borderRadius = borderRadius.value;
}