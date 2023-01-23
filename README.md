# _Transportation Survery_

#### By _**Molly Donegan**_

#### _Javascript Practice_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_A web application made to practice forms in Javascript._

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open transportation-survey.html in your browser_

## Tests

Describe: wordCounter()

    Test: "It should return 1 if a passage has just one word."
    Code:
        const text = "hello";
        wordCounter(text);
    Expected Output: 1

    Test: "It should return 2 if a passage has two words."
    Code:
        const text = "hello there";
        wordCounter(text);
    Expected Output: 2

    Test: "It should return 0 for an empty string."
    Code: 
        wordCounter("");
    Expected Output: 0

    Test: "It should return 0 for a string that is only spaces."
    Code: 
        wordCounter("            ");
    Expected Output: 0

    Test: "It should not count numbers as words."
    Code: 
        wordCounter("hi there 77 19");
    Expected Output: 2

Describe: numberOfOccurencesInText()

    Test: "It should return 0 occurences of a word for an empty string."
    Code:
        const text = "";
        const word = "red";
        numberOfOccurrencesInText(word, text);
    Expected Output: 0

    Test: "It should return 1 occurrence of a word when the word and the text are the same."
    Code:
        const text = "red";
        const word = "red";
        numberOfOccurrencesInText(word, text);
    Expected Output: 1

    Test: "It should return 0 occurrences of a word when the word and the text are different."
    Code:
        const text = "red";
        const word = "blue";
        numberOfOccurrencesInText(word,text);
    Expected Output: 0

    Test: "It should return the number of occurrences of a word."
    Code:
        const text = "red blue red red red green";
        const word = "red";
        numberOfOccurrencesInText(word, text);
    Expected Output: 4

    Test: "It should return a word match regardless of case."
    Code:
        const text = "red RED red green Green GREEN";
        const word = "Red";
        numberOfOccurrencesInText(word, text);
    Expected Output: 3

    Test: "It should return a word match regardless of puncuation."
    Code:
        const text = "Red! Red. I like red, green, and yellow.";
        const word = "Red";
        numberOfOccurrencesInText(word, text);
    Expected Output: 3

    Test: "If an empty string is passed in as a word, it should return 0."
    Code:
        const word = "";
        const text = "red RED Red!";
        numberOfOccurrencesInText(word, text);
    Expected Output: 0

Describe: boldPassage()

    Test: "It should return null if no word or text is entered."
    Code:
        const text = "";
        const word = "";
        boldPassage(word, text);
    Expected Output: null

    Test: "It should return a non-matching word in a p tag."
    Code:
        const word = "hello";
        const text = "yo";
        boldPassage(word, text);
    Expected Output: <p>yo</p>

    Test: "It should return a matching word in a strong tag."
    Code:
        const word = "hello";
        const text = "hello";
        boldPassage(word, text);
    Expected Output: <p><strong>hello</strong></p>

    Test: "It should wrap words that match in strong tags but not words that don't."
    Code:
        const word = "hello";
        const text = "hello there";
        boldPassage(word, text);
    Expected Output: <p><strong>hello</strong> there</p>

## Known Bugs

* _NA_

## License

* _MIT_

Copyright (c) _2023_ _Molly Donegan_