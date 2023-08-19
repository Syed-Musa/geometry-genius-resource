function calculatetriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);

    const hieghtField = document.getElementById('triangle-height');
    const heightValueText = hieghtField.value;
    const height = parseFloat(heightValueText);
    console.log(height);
}