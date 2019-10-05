const home = document.getElementById('home')
const game = document.getElementById('game')
const toPrintPoints = document.getElementById('points')
const toPrintWords = document.getElementById('words')
const speakBtn = document.getElementById('speak-button')
const speak = document.getElementById('speak')
const wordWrap = document.querySelector(".play--word h2")
const levelWrap = document.getElementById('level')
const listenMe = document.getElementById('listenMe')
const actualLevel = document.getElementById('actualLevel')
const levelUp = document.getElementById('levelUp')
const upAlert = document.getElementById('upAlert')
const returnArrow = document.getElementById('return')
const matchWord = document.getElementById('match')

const divs = {
    toPrintPoints,
    toPrintWords,
    speakBtn,
    speak,
    wordWrap,
    levelWrap,
    listenMe,
    actualLevel,
    levelUp,
    upAlert,
    returnArrow,
    home,
    game,
    matchWord
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
    'American',
    'Speaker',
    'Box'
]

const level2 = [
    'Tv',
    'Iron',
    'Car',
    'Light',
    'Shoes',
    'Lite',
    'Smart',
    'Amazing'
]

const level3 = [
    'skin',
    'pillow',
    'router',
    'street'
]

words.push(level1)
words.push(level2)
words.push(level3)
class Pronunciation {
    constructor(words, divs) {
        this.wordsDiv = divs.toPrintWords
        this.pointsDiv = divs.toPrintPoints
        this.speak = divs.speak
        this.speakBtn = divs.speakBtn
        this.wordWrap = divs.wordWrap
        this.levelWrap = divs.levelWrap
        this.listenMe = divs.listenMe
        this.upAlert = divs.upAlert
        this.matchWord = divs.matchWord
        this.previous = []
        this.level = 0
        this.subLevel = 6
        this.points = 0
        this.startListening = this.startListening.bind(this)
    }
    start(l) {   
        let level = (l == true ? l : this.level)
        
        this.numberWords = words[level].length
        this.number = Math.floor(Math.random() * this.numberWords)
        this.prevNum(this.number)
        this.wordToSay = this.numberToWord(this.number, level)
        
        this.printLevel(level)
        this.printWords()
        this.printPoints(this.points)
        this.preValidation()

        this.listen()
        this.speakBtn.addEventListener('click', () => this.startListening())

        recognition.onspeechend = function() {
            recognition.stop()
            speakBtn.textContent = 'Press to speak'
            speakBtn.style.color = '#1FAB89'
            speak.style.background = '#FFF'
        }
    }
    nextPoint(level) {
        this.numberWords = words[level].length
        this.number = Math.floor(Math.random() * this.numberWords)
        let numberChecked = this.noRepeat(this.number, this.previous)
        this.prevNum(numberChecked)
        this.wordToSay = this.numberToWord(numberChecked, level)
        
        this.printWords()
        this.preValidation()

        this.speakBtn.addEventListener('click', () => this.startListening())

        recognition.onspeechend = function() {
            recognition.stop()
            speakBtn.textContent = 'Press to speak'
            speakBtn.style.color = '#1FAB89'
            speak.style.background = '#FFF'
        }
    }
    nextLevel(level) {
        this.numberWords = words[level].length
        this.number = Math.floor(Math.random() * this.numberWords)
        this.wordToSay = this.numberToWord(this.number, level)
        // this.noRepeat(this.number, this.previous)
        this.prevNum(this.number)
        
        this.printWords()
        this.preValidation()
        
        this.speakBtn.addEventListener('click', () => this.startListening())
        
        recognition.onspeechend = function() {
            recognition.stop()
            speakBtn.textContent = 'Press to speak'
            speakBtn.style.color = '#1FAB89'
            speak.style.background = '#FFF'
        }
    }
    prevNum(n) {
        this.previous.push(n)
    }
    noRepeat(number, prev) { 
        console.log(`entro este ${number}`)
        function is (a, n) {
            let found = a.find(element => element == n)
            return found >= 1 ? true : false 
        }
        if (prev.length >= 1) {
                        console.log(prev)
            let isThere = is(prev, number)
                        console.log(isThere)
            if (isThere) {
                this.number = Math.floor(Math.random() * this.numberWords)
                console.log(`Se cambio por este ${this.number}`)
                let isThere = is(prev, this.number) 
                if (isThere) {
                    this.number = Math.floor(Math.random() * this.numberWords)
                    console.log(`Se re-cambio por este ${this.number}`)
                }
            }
        }
        console.log(`Y salio este ${this.number}`)
        return this.number
    }
    startListening() {
        try {recognition.start()}catch{} 
        this.speakBtn.textContent = 'Listening you'
        this.speakBtn.style.color = '#FF8080'
        divs.speak.style.background = '#C6F1D6'

    }
    listen() {
       this.listenMe.addEventListener('click', () => {
       this.listenIcon()
       this.readOut(this.wordToSay)
     })
    }
    listenIcon() {
      tl.fromTo('.icon-wrap', 1, {background: 'transparent'}, {background: '#FF8080'})
      tl.fromTo('.icon-wrap', 1, {background: '#FF8080'}, {background: 'transparent'})
    }
    printPoints(points) {
        this.pointsDiv.textContent = points
    }
    printLevel(level) {
        this.levelWrap.textContent = level + 1
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
    match() {
        this.matchWord.style.display = 'block'
        setTimeout(() => divs.matchWord.style.display = 'none', 1200)
        this.increasePoints()
    }
    resetPoints() {
        this.points = 0
        this.printPoints(this.points)
    }
    resetPrevious() {
        this.previous = []
        console.log(this.previous)
    }
    increaseLevel() {
        this.level++
        this.levelUp()
    }
    levelUp() {
        tl.fromTo(this.upAlert, 1, {display: 'none', opacity: '0', x: '-120px'}, {display: 'flex', opacity: '1',x: '0px'})
        
        divs.returnArrow.addEventListener('click', () => {
            tl.fromTo(divs.home, 1.5, {display: 'none', opacity: '0'}, {display: 'flex', opacity: '1'})
            .fromTo(divs.game, 1.4, {display: 'flex',opacity: '1'}, {display: 'none',opacity: '.4'}, '-=0.6')
        })

        divs.levelUp.addEventListener('click', () => {
            this.subLevel++

            setTimeout(() => divs.upAlert.style.display = 'none', 900)
            divs.upAlert.classList.add('next')
            setTimeout(() => divs.upAlert.classList.remove('next'), 1300)
            
            this.resetPrevious()
            this.resetPoints()

            this.printLevel(this.level)
            
            this.nextLevel(this.level)
        })
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
            this.match()
            setTimeout(() => { if (this.points < this.subLevel) {
                this.nextPoint(this.level)
            } else {
                this.increaseLevel()
            }
        }, 1200)
        } else {
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
    startGame.start()
}

export default newGame
