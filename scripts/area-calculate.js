function calculatetriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);

    const hieghtField = document.getElementById('triangle-height');
    const heightValueText = hieghtField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);


    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height);

    const area = base * height;
}


// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}