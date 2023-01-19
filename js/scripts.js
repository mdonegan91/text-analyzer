// Utility Logic

function isEmpty(testString) {
    return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
    if (isEmpty(text)) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (element) {
        if (!Number(element)) {
            wordCount++;
        }
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {
    if (isEmpty(word)) {
        return 0;
    }
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    });
    return wordCount;
}

function totalWordCounter(words) {
    const listOfAllWords = words.split(" ");
    let listOfUniqueWords = [];
    let wordCount = 0;
    if (isEmpty(words)) {
        return null;
    } else {
        listOfAllWords.forEach((newWord) => {
            if (listOfUniqueWords.includes(newWord.toLowerCase())) {
                // do nothing
            } else {
                // found unique word!
                wordCount = 0
                listOfUniqueWords.push(newWord.toLowerCase());
                // loop again to count new word you just found!
                listOfAllWords.forEach( (compareWord) => {
                    if (compareWord.toLowerCase() === newWord.toLowerCase()) {
                        // found match! Tally up!
                        wordCount++
                    }
                    // Compare next word
                });
                // Done: counting unique
                listOfUniqueWords.push(wordCount.toString());
            }
            //  Done: finding unique
        });
        return listOfUniqueWords;
    }
}

// UI Logic

function boldPassage(word, text) {
    if (isEmpty(word) || isEmpty(text)) {
        return null;
    }
    const p = document.createElement("p");
    let textArray = text.split(" ");
    textArray.forEach(function (element, index) {
        if (word === element) {
            const bold = document.createElement("strong");
            bold.append(element);
            p.append(bold);
        } else {
            p.append(element);
        }
        if (index !== (textArray.length - 1)) {
            p.append(" ");
        }
    });
    return p;
}

function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
        document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
        document.querySelector("div#bolded-passage").innerText = null;
    }
}

window.addEventListener("load", function () {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
