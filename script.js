let model;

// Load MobileNet Model
async function loadModel() {
    model = await mobilenet.load();
    console.log("Model Loaded Successfully");
}
loadModel();

// Preview Image After Upload
document.getElementById("imageUpload").addEventListener("change", function() {
    const file = this.files[0];
    const img = document.getElementById("preview");

    img.src = URL.createObjectURL(file);
    img.style.display = "block";
});

// Fruit Keywords
const fruitLabels = {
    "apple": ["apple", "granny smith", "fruit"],
    "banana": ["banana", "plantain", "fruit"],
    "orange": ["orange", "citrus", "tangerine"],
    "grapes": ["grape", "vine", "raisin"],
    "mango": ["mango", "tropical fruit"],
    "pineapple": ["pineapple", "ananas"]
};

// Match Prediction to Fruit Class
function getFruitClass(prediction) {
    const lower = prediction.toLowerCase();

    for (let fruit in fruitLabels) {
        for (let keyword of fruitLabels[fruit]) {
            if (lower.includes(keyword)) {
                return fruit.toUpperCase();
            }
        }
    }
    return "Unknown Fruit";
}

// Classify Image Function
async function classifyImage() {
    if (!model) {
        alert("Model is loading, please wait...");
        return;
    }

    const imgElement = document.getElementById("preview");
    if (!imgElement.src) {
        alert("Please upload an image first!");
        return;
    }

    const predictions = await model.classify(imgElement);
    console.log(predictions);

    const label = predictions[0].className;
    const fruit = getFruitClass(label);

    document.getElementById("resultBox").innerHTML = `
        <strong>Predicted Fruit:</strong> ${fruit} <br><br>
        <small>Model Output: ${label}</small>
    `;
}
