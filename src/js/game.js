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
        this.speakBtn = divs.speakBtn
        this.wordWrap = divs.wordWrap
        this.levelWrap = divs.levelWrap
        this.listenMe = divs.listenMe
        this.upAlert = divs.upAlert
        this.matchWord = divs.matchWord
        this.points = 0
        this.subLevel = 6
        this.printPoints(this.points)
        this.level = 0
        this.startListening = this.startListening.bind(this)
        this.start(this.level)
    }
    start(level) {   
        //Probar utilizando vars,lets y const
        this.numberWords = words[level].length
        this.number = Math.floor(Math.random() * this.numberWords)
        this.wordToSay = this.numberToWord(this.number, level)
        this.printLevel(level)
        console.log(this.wordToSay)
        console.log(this.number)
        this.printWords()
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
        this.wordToSay = this.numberToWord(this.number, level)

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
    startListening() {
            recognition.start() 
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

            this.resetPoints()

            this.printLevel(this.level)
            console.log(this.level)

            setTimeout(() => divs.upAlert.style.display = 'none', 900)
            divs.upAlert.classList.add('next')
            setTimeout(() => divs.upAlert.classList.remove('next'), 1300)

            this.start(this.level)
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
}

export default newGame
