// List of sentences related to SQU StudentHub
var sentences = [
    "We build websites in COMP3700 at Sultan Qaboos University",
    "Students calculate their semester GPA using StudentHub",
    "Join the programming workshop at the Computer Science Lab"
];

var currentRound = 0;
var score = 0;
var bankWords = [];
var chosenWords = [];

// Load the first sentence when the page opens
window.onload = function () {
    loadRound();
};

// Shuffle words randomly and reset the game areas for the current round
function loadRound() {
    var words = sentences[currentRound].split(" ");
    bankWords = words.slice();
    chosenWords = [];

    // Randomly swap words in bankWords
    for (var i = bankWords.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = bankWords[i];
        bankWords[i] = bankWords[j];
        bankWords[j] = temp;
    }

    document.getElementById("roundInfo").textContent = "Sentence " + (currentRound + 1) + " of " + sentences.length + " | Score: " + score;
    document.getElementById("gameMessage").className = "alert d-none mt-3";
    document.getElementById("nextBtn").className = "btn btn-success d-none";

    displayWords();
}

// Dynamically create buttons in HTML for chosen words and available bank words
function displayWords() {
    var sentenceBox = document.getElementById("sentenceArea");
    var bankBox = document.getElementById("wordBank");

    // Clear old elements before rebuilding
    sentenceBox.innerHTML = "";
    bankBox.innerHTML = "";

    // Create buttons for words added to the user's sentence
    for (var i = 0; i < chosenWords.length; i++) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-primary btn-sm m-1";
        btn.textContent = chosenWords[i];
        btn.setAttribute("onclick", "removeWord(" + i + ")");
        sentenceBox.appendChild(btn);
    }

    // Create buttons for remaining words in the word bank
    for (var j = 0; j < bankWords.length; j++) {
        var bankBtn = document.createElement("button");
        bankBtn.type = "button";
        bankBtn.className = "btn btn-outline-dark btn-sm m-1";
        bankBtn.textContent = bankWords[j];
        bankBtn.setAttribute("onclick", "addWord(" + j + ")");
        bankBox.appendChild(bankBtn);
    }
}

// Move a word from the word bank to the user's sentence
function addWord(index) {
    var word = bankWords.splice(index, 1)[0];
    chosenWords.push(word);
    displayWords();
}

// Return a word from the user's sentence back to the word bank
function removeWord(index) {
    var word = chosenWords.splice(index, 1)[0];
    bankWords.push(word);
    displayWords();
}

// Move all chosen words back to the word bank
function clearSentence() {
    while (chosenWords.length > 0) {
        bankWords.push(chosenWords.pop());
    }
    document.getElementById("gameMessage").className = "alert d-none mt-3";
    displayWords();
}

// Check if the user's sentence matches the target sentence
function checkSentence() {
    var msg = document.getElementById("gameMessage");

    // Make sure all words are used first
    if (bankWords.length > 0) {
        msg.className = "alert alert-warning mt-3";
        msg.textContent = "Please use all words before checking.";
        return;
    }

    // Compare joined words with the correct sentence
    if (chosenWords.join(" ") === sentences[currentRound]) {
        score += 10;
        document.getElementById("roundInfo").textContent = "Sentence " + (currentRound + 1) + " of " + sentences.length + " | Score: " + score;
        msg.className = "alert alert-success mt-3";

        if (currentRound < sentences.length - 1) {
            msg.textContent = "Correct! Click Next for the next sentence.";
            document.getElementById("nextBtn").className = "btn btn-success";
        } else {
            msg.textContent = "Congratulations! You completed all sentences. Final Score: " + score;
        }
    } else {
        msg.className = "alert alert-danger mt-3";
        msg.textContent = "Incorrect order. Click words to rearrange and try again.";
    }
}

// Go to the next sentence
function nextRound() {
    currentRound++;
    loadRound();
}
