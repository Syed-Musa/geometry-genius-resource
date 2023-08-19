// Triangle Calculation
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

    addToCalculationEntry('triangle', area);
}

// Rectangle Calculation
function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate input
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('rectangle', area);
}

// Parallelogram Calculate
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('parallelogram', area);
}


function calculateEllipseArea(){
    const majorRedius = getInputValue('ellipse-major-redius');
    const minorRedius = getInputValue('ellipse-minor-redius');
    const area = 3.14 * majorRedius * minorRedius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}


// reuseable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}


function setElementInnerText(fieldId, area){
    const element = document.getElementById(fieldId);
    element.innerText = area;
}


// add to calculation entry
function addToCalculationEntry(areaType, area){
    console.log(areaType + '' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm">Convert</button>`;

    calculationEntry.appendChild(p);
}