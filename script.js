const textInputEl = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
let resultTextEl = document.getElementById('result-text');
let textInputValue = '';
let convertedText = '';
let reversedText = '';

function convertText(inputString) {
    // Convert to Lowercase
    let lowerCaseString = inputString.toLowerCase();
    // Remove All Non-Alphanumeric Characters 
    return lowerCaseString.replace(/[^a-zA-Z0-9]/g, '');
};

function reverseText(str){ 
    const reversedString =  
    str.split("").reduce((acc, char) => char + acc, ""); 
    return reversedString;
} 

function compareText() {
    textInputValue = textInputEl.value;
    // Check If Text Input is Empty
    if (textInputValue === '') {
        alert('Please input a value');
    } else {
        // Change Input String
        convertedText = convertText(textInputValue);
        reversedText = reverseText(convertedText);
        if (convertedText === reversedText) {
            resultTextEl.textContent = `${textInputValue} is a palindrome`
        } else {
            resultTextEl.textContent = `${textInputValue} is not a palindrome`
        }
        textInputEl.value = '';
    }
};

// Event Listeners
btn.addEventListener('click', compareText);