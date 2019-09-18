const toPrintPoints = document.getElementById('points')
const toPrintWords = document.getElementById('words')
const speakBtn = document.getElementById('speak-button')
const wordWrap = document.querySelector(".play--word")

const divs = {
    toPrintPoints,
    toPrintWords,
    speakBtn,
    wordWrap
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
const grammar = '#JSGF V1.0'

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
    recognition.lang = 'en-US';
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.interimResults = false;

var words = new Array(0)

const level1 = [
    'Hello',
    'Window',
    'Guitar',
    'Thunder',
    'Phone',
    'Mouse',
    'Keyboard',
    'Glass', 
    'Speaker',
    'Box'
]

const level2 = [
    'Tv',
    'Cup',
    'Car',
    'Light',
    'Shoes',
    'Air',
    'Smart',
    'Amazing'
]

words.push(level1)
words.push(level2)

class Pronunciation {
    constructor(words, divs) { 
        this.wordsDiv = divs.toPrintWords
        this.pointsDiv = divs.toPrintPoints
        this.wordWrap = divs.wordWrap
        this.points = 0
        this.subLevel = 6
        this.level = 0
        this.numberWords = words[this.level].length
        this.start()
        this.printPoints(this.points)
    }
    start() {
        this.number = Math.floor(Math.random() * this.numberWords)
        this.wordToSay = this.numberToWord(this.number, this.level)
        this.printWords()
        this.preValidation()

        speakBtn.addEventListener('click', function () {
            recognition.start()
        })
        recognition.onspeechend = function() {
            recognition.stop()
        }
    }
    printPoints(points) {
        this.pointsDiv.textContent = points
    }
    printWords() {
        this.wordsDiv.textContent = this.wordToSay
    }
    numberToWord(n,level) {
        switch(n) {
            case n:
                return words[level][n]
            }
    }
    increasePoints() {
        this.points++
        this.printPoints(this.points)
    }
    preValidation() {
        this.wordToSay = this.wordToSay.toLowerCase()
        this.onResult(this.wordToSay, this)
    }
    saidToLower(said) {
        return said.toLowerCase()
    }
    onResult(say, self) {
        recognition.onresult = function(event) {
            console.log(event)
            const current = event.resultIndex
            const wordSaid = event.results[current][0].transcript
            const wordSay = say

            // content.textContent = transcript;

            const WORD_SAID = self.saidToLower(wordSaid)
            self.validation(WORD_SAID, wordSay)
        }
    }
    validation(Said, Say) {
        if (Said == Say) {
            console.log('You did it!')
            this.increasePoints()
            if (this.points < this.subLevel) {
                this.start()
            } else {
                this.level++
                this.subLevel++
                this.start()
            }
        } 
        else {
            this.tryAgain() 
        }
    }
    tryAgain() {
            this.wordWrap.classList.add('wrong') 
            setTimeout(() => this.wordWrap.classList.remove('wrong'), 1500) 
    }
}

function newGame () {
    const startGame = new Pronunciation(words, divs)
}

export default newGame