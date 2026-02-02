const colorBox = document.querySelector('.color-box');
const colorPicker = document.getElementById('colorPicker');
const resetBtn = document.getElementById('resetBtn');

const defaultColor = 'white'; 


colorPicker.addEventListener('input', () => {
    colorBox.style.backgroundColor = colorPicker.value;
});


resetBtn.addEventListener('click', () => {
    colorBox.style.backgroundColor = defaultColor;
    colorPicker.value = 'white'; 
});