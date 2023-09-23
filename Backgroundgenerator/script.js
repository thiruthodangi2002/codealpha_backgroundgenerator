const colorDisplay = document.querySelector('.color-display');
const generateButton = document.querySelector('.generate-button');
const customColorPicker = document.querySelector('.custom-color-picker');
const customButton = document.querySelector('.custom-button');
const colorCodeInput = document.getElementById('color-code-input');
const copyButton = document.getElementById('copy-button');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to set the background color and display color code
function setBackgroundColor(color) {
    colorDisplay.style.backgroundColor = color;
    colorCodeInput.value = color;
}

// Generate a random color on page load
setBackgroundColor(getRandomColor());

// Event listener for the "Generate Color" button
generateButton.addEventListener('click', () => {
    setBackgroundColor(getRandomColor());
});

// Event listener for the "Set Custom Color" button
customButton.addEventListener('click', () => {
    const customColor = customColorPicker.value;
    setBackgroundColor(customColor);
});

// Event listener for the "Copy Color Code" button
copyButton.addEventListener('click', () => {
    colorCodeInput.select();
    document.execCommand('copy');
});
