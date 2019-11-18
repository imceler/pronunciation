import React from 'react';
import { connect } from 'react-redux';
// import '../styles/Game.css';
import { validation, increasePoints, resetPoints, levelAlert, levelUp, addWordToSay } from '../actions'
import GameVisual from './Game'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const grammar = '#JSGF V1.0';

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
recognition.lang = 'en-US';
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.interimResults = false;

const Game = (props) => {
  const { words } = props;

  class Pronunciation {
    constructor(words) {
      this.words = words;
      this.previous = [];
      this.points = 0
      this.level = 0;
      this.subLevel = 2;
      this.startSpeak = this.startSpeak.bind(this);
      this.readOut = this.readOut.bind(this);
    }  
    start(level = this.level) {
      if (this.points === 0) {
        
        this.numberWords = this.words[level].length;
        this.number = Math.floor(Math.random() * this.numberWords);
        
        this.previousNumber(this.number);
  
        this.wordToSay = this.numberToWord(this.number, level);
        props.addWordToSay(this.wordToSay)

        this.preValidation(this.wordToSay);
      } else {
      this.numberWords = this.words[level].length;
      
      this.number = Math.floor(Math.random() * this.numberWords);
      
      const numberChecked = this.noRepeat(this.number, this.previous);
      
      this.previousNumber(numberChecked);
  
      this.wordToSay = this.numberToWord(numberChecked, level);
      props.addWordToSay(this.wordToSay)
      
      this.preValidation(this.wordToSay);
      }
    }

    speakEnd(speakBtn, speakWrap) {
      recognition.onspeechend = function () {
        recognition.stop();
        speakBtn.textContent = 'Press to speak';
        speakBtn.style.color = '#1FAB89';
        speakWrap.style.background = '#FFF';
      };
    }
  
    previousNumber(n) {
      this.previous.push(n)
    }
  
    noRepeat(number, prev) {
        function is (a, n) {
            let found = a.find(element => element == n)
            return found >= 0
        }
        if (prev.length >= 1) {
            let isThere = is(prev, number)
            if (isThere) {             
                do {
                    this.number = Math.floor(Math.random() * this.numberWords)
                    var isIt = is(prev, this.number)
                } while(isIt)
                return this.number
            } else {
                    return this.number
                }
            }
        }
  
    startSpeak(speakBtn, speakWrap) {
      try { recognition.start(); }catch {}
      speakBtn.textContent = 'Listening to you';
      speakBtn.style.color = '#FF8080';
      speakWrap.style.background = '#C6F1D6';
    }
    
    numberToWord(n, level) {
      switch (n) {
        case n:
          return this.words[level][n];
      }
    }
  
    readOut(word) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = word;
      speech.lang = 'en-US';
      speech.volume = 1;
      speech.rate = 0.5;
      speech.pitch = 0.5;
  
      window.speechSynthesis.speak(speech);
    }
    
    resetPrevious() {
      this.previous = [];
    }

    resetPoints() {
      this.points = 0;
      props.resetPoints()
    }
  
    preValidation(word) {
      this.wordToValidate = word.toLowerCase();
      this.onResult(this.wordToValidate, this);
    }
  
    saidToValidate(said) {
      return said.toLowerCase();
    }

    pointsUp() {
      this.points++
      props.increasePoints()
    }

    increaseLevel() {
      this.level++
    }

    onResult(say, self) {
      recognition.onresult = function (event) {
        const current = event.resultIndex;
        const said = event.results[current][0].transcript;
        const WORD_SAY = say;
        const WORD_SAID = self.saidToValidate(said);
        self.resultToValidate(WORD_SAID, WORD_SAY);
      };
    }

    resultToValidate(said, say) {
      validation(said, say)
    }
  
    validation(Said, Say = this.wordToValidate) {
      if (Said == Say) {

        this.pointsUp()
        props.validation(true)
        
        setTimeout(() => {

          if (this.points < this.subLevel) {
            
          this.start(this.level);
          
        } else {
          props.levelAlert(true)

          this.increaseLevel()
          this.resetPrevious();
          
          this.resetPoints()
          
          this.subLevel++;

          this.start(this.level)
          }
        }, 1000)

      } else {
        props.validation(false)
      }
    }
  }

  const Game = new Pronunciation(words);
  Game.start()

  const print = {
    word: Game.wordToSay,
    points: Game.points,
    level: Game.level,
  };
  const action = {
    read: Game.readOut,
    speak: Game.startSpeak,
    speakEnd: Game.speakEnd,   
  };

  // var toText = ''

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   Game.validation(toText)
  // }
  // const handleChange = e => {
  //   toText = e.target.value
  // }

  return (
    <GameVisual 
      word={print.word}
      read={action.read} 
      speakStart={action.speak}
      speakEnd={action.speakEnd}
      // change={handleChange} 
      // submit={handleSubmit}
    />
  );
};

const mapDispatchToProps = {
  validation,
  increasePoints,
  resetPoints,
  levelAlert,
  levelUp,
  addWordToSay,
}

const mapStateToProps = (state) => {
  return {
    words: state.words,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
