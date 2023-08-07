const span = document.querySelector("span");

const words = ["design", "frontend", "backend"];
let iWord = 0;
let iLetters = 0;

setInterval(() => {
    if (iLetters === words[iWord].length) {
        iLetters = 0;
        iWord++
        span.innerText = ""
    }
    if (iWord === words.length) {
        iWord = 0;
        iLetters = 0;
    }
    span.innerText += words[iWord][iLetters]
    iLetters++
}, 350);