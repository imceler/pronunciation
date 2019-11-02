import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../styles/Game.css';
import { validation } from '../actions'
import { TweenMax } from 'gsap';
// import Pronunciation from '../logic/game';
import Points from '../components/Points'
import Words from '../components/Words'
import Speak from '../components/Speak'
import Level from '../components/Level'

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
  // const [Validation, setValidation] = useState(null)
  // const [Start, setstart] = useState(true)
  class Pronunciation {
    constructor(words, e) {
      this.tryAgain = false
      this.words = words;
      this.previous = [];
      this.level = 0;
      this.subLevel = 6;
      this.points = 0;
      this.startSpeak = this.startSpeak.bind(this);
      this.readOut = this.readOut.bind(this);
    }  
    start(l) {
      const level = (l == true ? l : this.level);
      this.numberWords = this.words[level].length;
      this.number = Math.floor(Math.random() * this.numberWords);
      this.previousNumber(this.number);
      this.wordToSay = this.numberToWord(this.number, level);
      // this.printLevel(level)
      // this.printPoints(this.points)
      this.preValidation();
  
      // this.listen()
      // this.speakBtn.addEventListener('click', () => this.startSpeak())
  
      // this.speakEnd();
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
  
      // this.printWords();
      this.preValidation();
  
      // this.speakBtn.addEventListener('click', () => this.startSpeak());
  
      // recognition.onspeechend = function () {
      //   recognition.stop();
      //   speakBtn.textContent = 'Press to speak';
      //   speakBtn.style.color = '#1FAB89';
      //   speak.style.background = '#FFF';
      // };
    }
  
    nextLevel(level) {
      this.numberWords = words[level].length;
      this.number = Math.floor(Math.random() * this.numberWords);
      this.wordToSay = this.numberToWord(this.number, level);
      this.previousNumber(this.number);
  
      this.printWords();
      this.preValidation();
  
      this.speakBtn.addEventListener('click', () => this.startSpeak());
  
      recognition.onspeechend = function () {
        recognition.stop();
        speakBtn.textContent = 'Press to speak';
        speakBtn.style.color = '#1FAB89';
        speak.style.background = '#FFF';
      };
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
  
    // printPoints(points) {
    //   this.pointsDiv.textContent = points;
    // }
  
    printLevel(level) {
      this.levelWrap.textContent = level + 1;
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
  
    increasePoints() {
      this.points++;
      // this.printPoints(this.points);
    }
  
    resetPoints() {
      this.points = 0;
      this.printPoints(this.points);
    }
  
    resetPrevious() {
      this.previous = [];
    }
  
    increaseLevel() {
      this.level++;
      this.levelUp();
    }
  
    levelUp() {
      tl.fromTo(this.upAlert, 1, { display: 'none', opacity: '0', x: '-120px' }, { display: 'flex', opacity: '1', x: '0px' });
  
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
        props.validation(true)
        this.increasePoints();
        setTimeout(() => {
          if (this.points < this.subLevel) {
            this.nextPoint(this.level);
          } else {
            this.increaseLevel();
          }
        }, 1200);
      } else {
          console.log('hey, try again')
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
      <section
        id='game'
        className='section--play'
        // ref={(g) => { game = g; }}
      >
      <Level level={print.level}/>

      <Words 
        word={print.word} 
        read={action.read}
        // validation={Validation}
      />

      <Points points={print.points}/>

      <Speak start={action.speak} end={action.speakEnd}/>

      <div id='upAlert' className='play--level-up'>
        <div className='level-up--wrap'>
          <div id='return' className='level-up--return' />
          <h2>
              Level {' '}
            <span id='actualLevel' />
              {' '} complete
            </h2>
          <h4>It was amazing</h4>
          <div id='levelUp' className='next-level'>
            <h3>Next Level</h3>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
const mapDispatchToProps = {
  validation,
}
const mapStateToProps = (state) => {
  return {
    // word: state.word,
    words: state.level,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
