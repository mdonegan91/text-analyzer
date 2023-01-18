// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
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
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++
        }
    });
    return wordCount;
}



const badArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];

const badWord = "shit";
const text = "holy shit batman";

function omitBadWords(badWord, text) {
    const textArray = text.split(" ");
    console.log('txtarry: ',textArray)
    let replacementWord = "****";
    let updatedText = "";
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(badWord.toLowerCase())) {
            updatedText = updatedText + " " + replacementWord;
        }
        else {
            updatedText = updatedText + " " + element;
        }
    });
    return updatedText.trim();
}

omitBadWords(badWord, text)



