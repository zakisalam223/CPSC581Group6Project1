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
const leverButton = document.getElementById('slush-lever');

const POUR_DURATION_MS = 3000; // Duration of pour animation in milliseconds

const desciptionContainer = document.getElementById('description-container');
const slushesContainer = document.getElementById('slushes-container');

let selectedButtonKey = "";
let slushCount = 0;
let isPouring = false;

// Main buttons - to select juice
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

// Lever - to add juice
leverButton.addEventListener("click", () => {
    if (slushCount < 4 && !isPouring) {
        const addedSlush = juices[selectedButtonKey] || "Slush Error";
        slushesContainer.textContent += addedSlush;
        slushCount++;

        // Switch to pour state
        isPouring = true;
        leverButton.classList.add('pouring');

        setTimeout(() => {
            leverButton.classList.remove('pouring');
            isPouring = false;
        }, POUR_DURATION_MS); // Lever waits 3 seconds before returning to normal state
    }
});

