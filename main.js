import './mainstyle.css';

// Array of description objects 
const descriptions = {
    "btn1": [
        {
            emoji: "★",
            fruitAttribute: "description",
            personality: "1"
        },
        {
            emoji: "𐀪",
            fruitAttribute: "another point",
            personality: "personality here"
        }
    ],
    "btn2": [
        {
            emoji: " ★",
            fruitAttribute: "description",
            personality: "2"
        },
    ],
    // Watermelon
    "btn3": [
        {
            emoji: "˶ᵔ ᵕ ᵔ˶",
            fruitAttribute: "very refreshing and sweet",
            personality: "positive and friendly"
        },
        {
            emoji: "„• ֊ •„",
            fruitAttribute: "not overpowering",
            personality: "low assertiveness; high cooperativeness"
        },
        {
            emoji: "𖦹",
            fruitAttribute: "watermelon exterior is quite squiggly",
            personality: "a little unorganized"
        },
        {
            emoji: "ꕀ",
            fruitAttribute: "high percentage of water",
            personality: "go with the flow"
        }
    ],
    "btn4": [
        {
            emoji: " ★",
            fruitAttribute: "description",
            personality: "4"
        },
    ],
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

// Main buttons - to select juice
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Change selected button to current
        allButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        // Show current juice description
        selectedButtonKey = button.getAttribute('data-key');
        const currentDescription = descriptions[selectedButtonKey] || "Description not found.";
        // Every description object, creates appropraite piece of html
        desciptionContainer.innerHTML = currentDescription.map(point => `
    <div class="descriptionBulletPoint">
        <div class="descriptionMain">
            <span class="descriptionEmoji">${point.emoji}</span>
            <span>${point.fruitAttribute}</span>
        </div>

        <div class="descriptionPersonality">
            → ${point.personality}
        </div>
    </div>
`).join('');
    });
});

// Lever - to add juice
leverButton.addEventListener("click", () => {
    if (juiceCount < 4) {
        const addedJuice = juices[selectedButtonKey] || "Juice Error";
        juicesContainer.textContent += addedJuice;
        juiceCount++;
    }
});

