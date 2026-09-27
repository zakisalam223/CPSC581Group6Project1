import './mainstyle.css';

// Array of description objects 
// TODO: Fill Individual Descriptions here
const descriptions = {
    // Peach
    "btn1": [
        {
            emoji: "★",
            fruitAttribute: "very sweet and juicy",
            personality: "positive and cheerful"
        },
        {
            emoji: "ᶻ 𝗓 𐰁 .ᐟ",
            fruitAttribute: "mellow flavour",
            personality: "low activity level; high cooperation"
        },
        {
            emoji: " ˙𐃷˙ ",
            fruitAttribute: "peach is pixelated",
            personality: "very playful and fun"
        },
        {
            emoji: " 𓆝 𓆟 𓆞 ",
            fruitAttribute: "eyes closed",
            personality: "high trust"
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

// HTML Code for each flavour
const htmlDescription = (point) => `
    <div class="descriptionBulletPoint">
        <div class="descriptionMain">
            <span class="descriptionEmoji">${point.emoji}</span>
            <span>${point.fruitAttribute}</span>
        </div>

        <div class="descriptionPersonality">
            → ${point.personality}
        </div>
    </div>
`

const juices = {
    "btn1": "Juice 1",
    "btn2": "Juice 2",
    "btn3": "Juice 3",
    "btn4": "Juice 4"
}

const allButtons = document.querySelectorAll(
    '.imageButton, .peachButton, .melonButton'
);

const leverButton = document.getElementById('slush-lever');
const trashButton = document.getElementById('trash-button');

const POUR_DURATION_MS = 1000; // Duration of pour animation in milliseconds

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
        // For each description object, create piece of html
        desciptionContainer.innerHTML = currentDescription.map(htmlDescription).join('');
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

// trash button to reset the juices (AKA emptying the cup)
trashButton.addEventListener("click", trashPressed)

function trashPressed(){
    slushCount = 0;
    slushesContainer.textContent = "";
}

