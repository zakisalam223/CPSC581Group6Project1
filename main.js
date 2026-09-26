import './mainstyle.css';

const descriptions = {
    "btn1": "Description 1",
    "btn2": "Description 2",
    "btn3": "Description 3",
    "btn4": "Description 4"
}

const allButtons = document.querySelectorAll('.imageButton');
const desciptionContainer = document.getElementById('description-container');

// Loop through buttons to add click event listener 
allButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Change selected button to current
        allButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        // Show current juice description
        const key = button.getAttribute('data-key');
        const currentDescription = descriptions[key] || "Description not found.";
        desciptionContainer.textContent = currentDescription;
    });
});

