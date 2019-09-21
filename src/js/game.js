const toPrintPoints = document.getElementById('points')
const toPrintWords = document.getElementById('words')
const speakBtn = document.getElementById('speak-button')
const wordWrap = document.querySelector(".play--word h2")
const levelWrap = document.getElementById('level')
const listenMe = document.getElementById('listenMe')

const divs = {
    toPrintPoints,
    toPrintWords,
    speakBtn,
    wordWrap,
    levelWrap,
    listenMe
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

const tl = new TimelineMax();

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
        this.levelWrap = divs.levelWrap
        this.listenMe = divs.listenMe
        this.points = 0
        this.subLevel = 6
        this.level = 0
        this.numberWords = words[this.level].length
        this.start()
        this.printPoints(this.points)
        this.printLevel(this.level)
    }
    start() {
        this.number = Math.floor(Math.random() * this.numberWords)
        this.wordToSay = this.numberToWord(this.number, this.level)
        this.printWords()
        this.preValidation()

         this.listenMe.addEventListener('click', () => {
         this.Listen()
          this.readOut(this.wordToSay)
        })

        speakBtn.addEventListener('click', function () {
            recognition.start()
        })
        recognition.onspeechend = function() {
            recognition.stop()
        }
    }
    Listen() {
      tl.fromTo('.icon-wrap', 1.5, {background: 'transparent'}, {background: '#FF8080'})
      tl.fromTo('.icon-wrap', 1.5, {background: '#FF8080'}, {background: 'transparent'})
      this.listenMe.classList.remove('icon')
      this.listenMe.classList.add('listen-me')
      setTimeout(() => this.listenMe.classList.add('icon'), 1700)
      setTimeout(() => this.listenMe.classList.remove('listen-me'), 1500)
    }
    printPoints(points) {
        this.pointsDiv.textContent = points
    }
    printLevel(level) {
        this.levelWrap.textContent = level
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

    readOut(word) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = word
    speech.lang = 'en-US'
    speech.volume = 1
    speech.rate = .5
    speech.pitch = .5

    window.speechSynthesis.speak(speech)
    }
    increasePoints() {
        this.points++
        this.printPoints(this.points)
    }
    increaseLevel() {
      this.level++
      this.printLevel(this.level)
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
            const current = event.resultIndex
            const wordSaid = event.results[current][0].transcript
            const wordSay = say

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
                this.increaseLevel()
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
