import './mainstyle.css';

const descriptions = {
    "btn1": "Description 1",
    "btn2": "Description 2",
    "btn3": "Description 3",
    "btn4": "Description 4"
}

const juices = {
    "btn1": "Juice 1",
    "btn2": "Juice 2",
    "btn3": "Juice 3",
    "btn4": "Juice 4"
}

const allButtons = document.querySelectorAll('.imageButton');
const leverButton = document.getElementById('juice-lever');

const desciptionContainer = document.getElementById('description-container');
const juicesContainer = document.getElementById('juices-container');

let selectedButtonKey = "";
let juiceCount = 0;

// Loop through buttons to add click event listener 
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Change selected button to current
        allButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        // Show current juice description
        selectedButtonKey = button.getAttribute('data-key');
        const currentDescription = descriptions[selectedButtonKey] || "Description not found.";
        desciptionContainer.textContent = currentDescription;
    });
});

// Lever functionality
leverButton.addEventListener("click", () => {
    if (juiceCount < 4) {
        const addedJuice = juices[selectedButtonKey] || "Juice Error";
        juicesContainer.textContent += addedJuice;
        juiceCount++;
    }
});

