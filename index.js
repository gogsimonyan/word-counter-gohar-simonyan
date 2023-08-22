function renderText(domElement, text) {
    domElement.innerText = text;
}

function countWords(string) {
    const wordsArray = string.split(" ");
    const regex = /[a-zA-Z0-9]/;
    let wordCount = 0;

    for(word of wordsArray) {
        if(regex.test(word)) {
            wordCount += 1;
        }
    }

    return wordCount;
}

function countLetters(string) {
    const regex = /[^a-zA-Z]/gi;
    const letterCount = string.replace(regex, "").length;

    return letterCount;
}

function countChars(string) {
   return string.length;
}

function countSentences(string) {
    const sentenceArray = string.split(".");
    let sentenceCount = 0;

    for(sentence of sentenceArray) {
        if(sentence) {
            sentenceCount += 1;
        }
    }

    return sentenceCount - 1;
}

function init() {
    const textArea = document.getElementById('text')
    const charDOM = document.getElementById('charNum');
    const letterDOM = document.getElementById('letterNum');
    const wordDOM = document.getElementById('wordNum');
    const sentenceDOM = document.getElementById('sentenceNum');

    
    textArea.addEventListener("input", event => {
        const text = event.target.value.trim();
        
        renderText(charDOM, countChars(text));
        renderText(letterDOM, countLetters(text));       
        renderText(wordDOM, countWords(text));
        renderText(sentenceDOM, countSentences(text));
    });
}

init();
