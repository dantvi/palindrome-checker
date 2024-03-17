const textInputEl = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
let textInputValue = ';'
let convertedText = '';

function convertText(inputString) {
    // Convert to Lowercase String
    let lowerCaseString = inputString.toLowerCase();
    // Remove All Non-Alphanumeric Characters 
    return lowerCaseString.replace(/[^a-zA-Z0-9]/g, '');
};

function compareText() {
    textInputValue = textInputEl.value;
    // Check If Text Input is empty
    if (textInputValue === '') {
        alert('Please input a value');
    } else {
        console.log('before remove:', textInputValue);
        console.log('after remove:', convertText(textInputValue));
    }
};

// Event Listeners
btn.addEventListener('click', compareText);


/* Pseudokod 
Ta bort alla icke alfabetiska characters ex. punkter, mellanrum och symboler. 
Konvertera hela texten till lower case
Använd en metod som vänder på textInput och sparar in i en variabel, convertedText. 
Jämför textInput med convertedText

Om de är lika retunera: `${textInput} is a palindrome`
Annars retunera: `${textInput} is not a palindrome`

Om skriver in eye och klickar på knappen ska texten: "eye is a palindrome" skrivas ut.
Om skriver in nope och klickar på knappen ska texten: "nope is not a palindrome" skrivas ut.
*/