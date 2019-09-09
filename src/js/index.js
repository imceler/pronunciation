import '../css/styles.css'

const pointsDiv = document.getElementById('points')
const word = document.getElementById('words')
// const speak = document.getElementById('speak')
const speakBtn = document.getElementById('speak-button')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
const grammar = '#JSGF V1.0'

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
    recognition.lang = 'en-US';
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.interimResults = false;

var words = [
    'hello', 
    'Wall',
    'guitar',
    'Goodnight',
    'phone',
    'luis',
    'gustavo'
]

var points = 0
var wordToSay 

function wordsToLearn() {   
    function NumberToWord (n) {
        switch(n) {
        case n:
            return words[n]
        }
}

var numberWords = words.length

var number = Math.floor(Math.random() * numberWords)

wordToSay = NumberToWord(number)

word.textContent = wordToSay
} 
wordsToLearn()

//puntuacion

function increasePoints() {
        points++
        pointsDiv.textContent = points
    }


pointsDiv.textContent = points


recognition.onstart = function () {
    console.log('voice is active')
}


recognition.onresult = function(event) {
    console.log(event)
    const current = event.resultIndex

    const wordSaid = event.results[current][0].transcript
    // content.textContent = transcript;
    
    if (wordSaid == wordToSay) {
        console.log('We did it')
        increasePoints()
        wordsToLearn()
    }
    
    // readOutLoud(transcript)
}

//start listening

speakBtn.addEventListener('click', function () {
    recognition.start()
})
recognition.onspeechend = function() {
    recognition.stop()
}

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}

// readOutLoud(NumberToWord(number))

