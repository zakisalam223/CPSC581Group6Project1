import './mainstyle.css';

// Enum of Slush Flavours
const SlushFlavours = Object.freeze({
    PERFECT: 'Perfect',
    PEACH: 'Pixel Peach',
    DRAGONFRUIT: 'Adventurous Dragon Fruit',
    WATERMELON: 'Watermelon Blast',
    FIG: 'Funky Fig'
});

// Array of description objects 
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

// TODO: Change details to be specific to descriptions, personalities, etc.
const receiptDetails = {
    // Perfect Blend (25% for each)
    [SlushFlavours.PERFECT]: "WOW! This is great!",
    // Peach
    [SlushFlavours.PEACH]: "Hmm peachy...",
    // Dragon Fruit
    [SlushFlavours.DRAGONFRUIT]: "Dragon (fruit) AHHHHHHH!",
    // Watermelon
    [SlushFlavours.WATERMELON]: "WatermelOOOOOOONEEE",
    // Fig
    [SlushFlavours.FIG]: "There once was a fig that did a jig"
}

// HTML CODES //
// HTML Code for each flavour description
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

// HTML Code for each flavour combination in receipt
const htmlReceiptDetails = (percentageRows, details) => `
    <div class="receiptRows">
        ${percentageRows}
    </div>
    <div class="receiptDetails">
        <span class="">${details}</span>
    </div>
`
// CONSTANTS //
const POUR_DURATION_MS = 1000; // Duration of pour animation in milliseconds
const PRINT_DURATION_MS = 500; // Duration of printing of receipt in milliseconds

// TODO: consolidate use of slushCounts and slushyContents 
// (get rid of one and use one of these for all slush logic)
const slushCounts = {
    "btn1": 0,
    "btn2": 0,
    "btn3": 0,
    "btn4": 0
};

const slushes = {
    "btn1": SlushFlavours.PEACH,
    "btn2": SlushFlavours.DRAGONFRUIT,
    "btn3": SlushFlavours.WATERMELON,
    "btn4": SlushFlavours.FIG
}

const allButtons = document.querySelectorAll('.imageButton');
const leverButton = document.getElementById('slush-lever');
const trashButton = document.getElementById('trash-button');

const desciptionContainer = document.getElementById('description-container');
const slushesContainer = document.getElementById('slushes-container');
const receiptContainer = document.getElementById('receipt-container');

let slushyContents = new Array(4).fill("");
let selectedButtonKey = "";
let slushCount = 0;
let slushMajority = SlushFlavours.PERFECT;
let isPouring = false;

// FUNCTIONS //
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

// Helper function to prevent 50-50 edge case
function canAddSlush() {
    // If this is the second layer, check whether another slushy already has 2 layers
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

// Function to print receipt
function printReceipt() {
    const flavourCounts = {};
    slushyContents.forEach(flavour => {
        flavourCounts[flavour] = (flavourCounts[flavour] || 0) + 1;
    });

    const total = slushyContents.length;
    const percentageResults = {};

    Object.keys(flavourCounts).forEach(key => {
        const count = flavourCounts[key];
        const percentage = ((count / total) * 100);
        const percentageString = `${percentage}%`;
        percentageResults[key] = percentageString;

        // Check for majority flavour
        if (percentage >= 50) {
            slushMajority = key;
        }
    });

    // Create html for receipt details
    const htmlReceiptRows = Object.keys(percentageResults).map(flavour => `
        <div class="receiptRow">
            <span class="rowFlavour">${flavour}</span>
            <span class="rowPercent">${percentageResults[flavour]}</span>
        </div>
    `).join('');

    receiptContainer.innerHTML = htmlReceiptDetails(htmlReceiptRows, receiptDetails[slushMajority]);
}

function trashPressed() {
    slushCount = 0;
    Object.keys(slushCounts).forEach(btn => slushCounts[btn] = 0);
    while (slushesContainer.firstChild) {
        slushesContainer.removeChild(slushesContainer.firstChild);
    }
    desciptionContainer.textContent = "Press a button above to see a description.";
    receiptContainer.textContent = "Once your cup is full your receipt will print.";
}

// EVENT LISTENERS //
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

// Lever - to add slush
leverButton.addEventListener("click", () => {
    if (selectedButtonKey == "") {
        window.alert("OOPS! Select a button first to pour slush.");
    } else if (slushCount == 4) {
        window.alert("Too much slush! Press the garbage icon to reset.");
    }
    else if (slushCount < 4 && !isPouring && canAddSlush()) {
        const addedSlush = slushes[selectedButtonKey];

        if (addedSlush == undefined) {
            window.alert("Error adding slush! Please try again.");
        }

        // Add in slush and store contents
        addSlushLayer();
        slushCounts[selectedButtonKey]++;
        slushyContents[slushCount] = addedSlush;
        slushCount++;

        // Switch to pour state
        isPouring = true;
        leverButton.classList.add('pouring');

        setTimeout(() => {
            leverButton.classList.remove('pouring');
            isPouring = false;

            // Check if cup is full after lever animation
            if (slushCount == 4) {
                receiptContainer.textContent = "Printing receipt...";

                setTimeout(() => {
                    printReceipt();
                }, PRINT_DURATION_MS); // Wait 1/2 second before printing
            }
        }, POUR_DURATION_MS); // Lever waits a second before returning to normal state
    }
});

// Trash button - to reset the slush (AKA emptying the cup)
trashButton.addEventListener("click", trashPressed)

