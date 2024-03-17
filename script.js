const textInputEl = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
let textInputValue = ';'
let convertedText = '';

function compareText() {
    textInputValue = textInputEl.value;
    // Check If Text Input is empty
    if (textInputValue === '') {
        alert('Please input a value');
    } else {
        console.log(textInputValue);
    }
}

// Event Listeners
btn.addEventListener('click', compareText);


/* Pseudokod 
Om användaren klickar på knappen utan att skriva in en text => alert "Please input a value". 
Ta in text från input field. 
Ta bort alla icke alfabetiska characters ex. punkter, mellanrum och symboler. 
Använd en metod som vänder på textInput och sparar in i en variabel, convertedText. 
Jämför textInput med convertedText

Om de är lika retunera: `${textInput} is a palindrome`
Annars retunera: `${textInput} is not a palindrome`

Om skriver in eye och klickar på knappen ska texten: "eye is a palindrome" skrivas ut.
Om skriver in nope och klickar på knappen ska texten: "nope is not a palindrome" skrivas ut.
*/