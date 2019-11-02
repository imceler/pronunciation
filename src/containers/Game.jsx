import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../styles/Game.css';
import { validation, increasePoints, resetPoints, setNextLevel, levelUp} from '../actions'
import { TweenMax } from 'gsap';
import Points from '../components/Points'
import Words from '../components/Words'
import Speak from '../components/Speak'
import Level from '../components/Level'
import LevelUp from '../components/LevelUp'


const tm = TweenMax;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const grammar = '#JSGF V1.0';

export const recognition = new SpeechRecognition();
export const speechRecognitionList = new SpeechGrammarList();
recognition.lang = 'en-US';
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.interimResults = false;

const Game = (props) => {
  const { words } = props;
  class Pronunciation {
    constructor(words, e) {
      this.tryAgain = false
      this.words = words;
      this.previous = [];
      this.level = props.actualLevel;
      this.subLevel = 1;
      this.startSpeak = this.startSpeak.bind(this);
      this.readOut = this.readOut.bind(this);
    }  
    start(l) {
      const level = (l == true ? l : this.level);
      this.numberWords = this.words[level].length;
      this.number = Math.floor(Math.random() * this.numberWords);
      this.previousNumber(this.number);
      this.wordToSay = this.numberToWord(this.number, level);

      this.preValidation();
      
    }
  
    // eslint-disable-next-line class-methods-use-this
    speakEnd(speakBtn, speakWrap) {
      recognition.onspeechend = function () {
        recognition.stop();
        speakBtn.textContent = 'Press to speak';
        speakBtn.style.color = '#1FAB89';
        speakWrap.style.background = '#FFF';
      };
    }
  
    nextPoint(level) {
      this.numberWords = words[level].length;
      this.number = Math.floor(Math.random() * this.numberWords);

      const numberChecked = this.noRepeat(this.number, this.previous);

      this.previousNumber(numberChecked);
      this.wordToSay = this.numberToWord(numberChecked, level);
  
      this.preValidation();

    }
  
    nextLevel(level) {

      this.numberWords = words[level].length;
      this.number = Math.floor(Math.random() * this.numberWords);
      this.wordToSay = this.numberToWord(this.number, level);
      this.previousNumber(this.number);
  
      this.preValidation();
  
    }
  
    previousNumber(n) {
      this.previous.push(n);
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
                } while(isIt == true)
                return this.number
            } else {
                    return this.number
                }
            }
        }
  
    startSpeak(speakBtn, speakWrap) {
      try { recognition.start(); }catch {}
      speakBtn.textContent = 'Listening you';
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
  
    increaseLevel() {
      props.setNextLevel(true)
    }
  
    levelUp() {
      
  
      divs.returnArrow.addEventListener('click', () => {
        tl.fromTo(divs.home, 1.5, { display: 'none', opacity: '0' }, { display: 'flex', opacity: '1' })
          .fromTo(divs.game, 1.4, { display: 'flex', opacity: '1' }, { display: 'none', opacity: '.4' }, '-=0.6');
      });
  
      divs.levelUp.addEventListener('click', () => {
        this.subLevel++;
  
        setTimeout(() => divs.upAlert.style.display = 'none', 900);
        divs.upAlert.classList.add('next');
        setTimeout(() => divs.upAlert.classList.remove('next'), 1300);
  
        this.resetPrevious();
        this.resetPoints();
  
        this.printLevel(this.level);
  
        this.nextLevel(this.level);
      });
    }
  
    preValidation() {
      this.wordToSay = this.wordToSay.toLowerCase();
      this.onResult(this.wordToSay, this);
    }
  
    saidToLower(said) {
      return said.toLowerCase();
    }
  
    onResult(say, self) {
      recognition.onresult = function (event) {
        const current = event.resultIndex;
        const wordSaid = event.results[current][0].transcript;
        const wordSay = say;
        const WORD_SAID = self.saidToLower(wordSaid);
        self.validation(WORD_SAID, wordSay);
      };
    }
  
    validation(Said, Say) {
      // eslint-disable-next-line eqeqeq
      if (Said == Say) {
        props.increasePoints();
        props.validation(true)
        
        setTimeout(() => {
          console.log(props.points)
          if (props.points < this.subLevel) {
            this.nextPoint(this.level);
          } else {

            this.increaseLevel();
          
          }
        }, 1200);

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
    tryAgain: Game.tryAgain,   
  };

  return (
    <>
      <main
        id='game'
        className='section--play'
      >
      <Level level={print.level}/>

      <Words 
        word={print.word} 
        read={action.read}
      />

      <Points points={props.points} />

      <Speak start={action.speak} end={action.speakEnd}/>
    
      {props.nextLevel && (
        <LevelUp />
      )}

    </main>
    </>
  );
};

const mapDispatchToProps = {
  validation,
  increasePoints,
  resetPoints,
  levelUp,
  setNextLevel,
}
const mapStateToProps = (state) => {
  return {
    words: state.level,
    points: state.points,
    nextLevel: state.nextLevel,
    actualLevel: state.actualLevel,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
