import './mainstyle.css';

const slushCounts = {
    btn1: 0,
    btn2: 0,
    btn3: 0,
    btn4: 0
};

// Array of description objects 
// TODO: Fill Individual Descriptions here - 2 positive, 2 negative
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
    // Dragon Fruit
    "btn2": [
        {
            emoji: "≽^•⩊•^≼",
            fruitAttribute: "open faced fruit",
            personality: "open and trusting to new experiences"
        },
        {
            emoji: "(•؎ •)",
            fruitAttribute: "light and refreshing",
            personality: "kind but not too sweet"
        },
        {
            emoji: "𖧧",
            fruitAttribute: "many seeds throughout",
            personality: "highly introspective; prone to overthinking"
        },
        {
            emoji: "✧˖°",
            fruitAttribute: "dragon fruit has spikey skin",
            personality: "often disconnected from others"
        }
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

    // Fig
    "btn4": [
        {
            emoji: "^_^",
            fruitAttribute: "Sweet and rich flavour with a relaxed expression",
            personality: "Cooperative and friendly"
        },
        {
            emoji: "★_★",
            fruitAttribute: "Thick slush consistency and thick outlines",
            personality: "Introverted and assertive"
        },

        {
            emoji: ". ~ .",
            fruitAttribute: "Purple motif",
            personality: "Higher emotionality, lower agreeableness"
        },

        {
            emoji: "- ᵕ -",
            fruitAttribute: "Hand drawn and animated",
            personality: "Interest in art"
        },
    ],
}

// Array of slush layers
const slushLayers = [
    {
        "btn1": "./assets/peachlayer-1.png",
        "btn2": "./assets/dragonfruit-layer1.png",
        "btn3": "./assets/wm-layer1.png",
        "btn4": "./assets/figlayer-1.png"
    },
    {
        "btn1": "./assets/peachlayer-2.png",
        "btn2": "./assets/dragonfruit-layer2.png",
        "btn3": "./assets/wm-layer2.png",
        "btn4": "./assets/figlayer-2.png"
    },
    {
        "btn1": "./assets/peachlayer-2.png",
        "btn2": "./assets/dragonfruit-layer2.png",
        "btn3": "./assets/wm-layer2.png",
        "btn4": "./assets/figlayer-2.png"
    },
    {
        "btn1": "./assets/peachlayer-2.png",
        "btn2": "./assets/dragonfruit-layer2.png",
        "btn3": "./assets/wm-layer2.png",
        "btn4": "./assets/figlayer-2.png"
    }
];

// Function to add each slush layer
function addSlushLayer() {
    const layer = slushLayers[slushCount];
    const slushImage = layer[selectedButtonKey];

    const img = document.createElement("img");
    img.src = slushImage;
    img.classList.add("slush-layer");
    img.classList.add(`layer-${slushCount + 1}`);

    slushesContainer.appendChild(img);
}

// Helper function to prevent multiple slush layers and 50-50 edge case
function canAddSlush() {
    // Slush already has 2 layers
    if (slushCounts[selectedButtonKey] >= 2) {
        window.alert("Can't add more of this slush!");
        return false;
    }

    // If this would become the second layer, check whether another slushy already has 2 layers.
    if (slushCounts[selectedButtonKey] === 1) {
        const anotherHalfSlush = Object.keys(slushCounts).some(key =>
            key !== selectedButtonKey && slushCounts[key] === 2
        );

        if (anotherHalfSlush) {
            window.alert("You can only have one 50% flavour!");
            return false;
        }
    }

    return true;
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

const allButtons = document.querySelectorAll('.imageButton');

const leverButton = document.getElementById('slush-lever');
const trashButton = document.getElementById('trash-button');

const POUR_DURATION_MS = 1000; // Duration of pour animation in milliseconds

const desciptionContainer = document.getElementById('description-container');
const slushesContainer = document.getElementById('slushes-container');

let selectedButtonKey = "";
let slushCount = 0;
let isPouring = false;

// Main buttons - to select slushy
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Change selected button to current
        allButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        // Show current slush description
        selectedButtonKey = button.getAttribute('data-key');
        const currentDescription = descriptions[selectedButtonKey] || "Description not found.";
        // For each description object, create piece of html
        desciptionContainer.innerHTML = currentDescription.map(htmlDescription).join('');
    });
});

// Lever - to add slushy
leverButton.addEventListener("click", () => {
    if (slushCount < 4 && !isPouring && selectedButtonKey !== "" && canAddSlush()) {
        addSlushLayer();
        slushCounts[selectedButtonKey]++;
        slushCount++;

        // Switch to pour state
        isPouring = true;
        leverButton.classList.add('pouring');

        setTimeout(() => {
            leverButton.classList.remove('pouring');
            isPouring = false;
        }, POUR_DURATION_MS); // Lever waits 1 seconds before returning to normal state
    }
});

// trash button to reset the slushy (AKA emptying the cup)
trashButton.addEventListener("click", trashPressed)

function trashPressed() {
    slushCount = 0;
    slushesContainer.textContent = "";
}

