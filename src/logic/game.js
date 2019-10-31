/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
// import { listenButton } from '../containers/Game';



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const grammar = '#JSGF V1.0';

export const recognition = new SpeechRecognition();
export const speechRecognitionList = new SpeechGrammarList();
recognition.lang = 'en-US';
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.interimResults = false;


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
    // console.log(e.Match)
    this.numberWords = this.words[level].length;
    this.number = Math.floor(Math.random() * this.numberWords);
    this.previousNumber(this.number);
    this.wordToSay = this.numberToWord(this.number, level);

    // this.printLevel(level)
    // this.printPoints(this.points)
    this.preValidation();

    // this.listen()
    // this.speakBtn.addEventListener('click', () => this.startSpeak())

    this.speakEnd();
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
    function is(a, n) {
      const found = a.find((element) => element == n);
      return found >= 0;
    }
    if (prev.length >= 1) {
      const isThere = is(prev, number);
      if (isThere) {             
        do {
          this.number = Math.floor(Math.random() * this.numberWords);
          const isIt = is(prev, this.number);
        } while (isIt === true);
        return this.number;
      } 

      return this.number;         
    }
  }

  startSpeak(speakBtn, speakWrap) {
    try { recognition.start(); }catch {}
    speakBtn.textContent = 'Listening you';
    speakBtn.style.color = '#FF8080';
    speakWrap.style.background = '#C6F1D6';
  }

  printPoints(points) {
    this.pointsDiv.textContent = points;
  }

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
    this.printPoints(this.points);
  }

  match() {
    e.style.display = 'block';
    setTimeout(() => e.style.display = 'none', 1200);
    this.increasePoints();
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
      const luis = () => self.validation(WORD_SAID, wordSay);
      validation(luis())
    };
  }

  validation(Said, Say) {
    // eslint-disable-next-line eqeqeq
    if (Said == Say) {
      this.match();
      setTimeout(() => {
        if (this.points < this.subLevel) {
          this.nextPoint(this.level);
        } else {
          this.increaseLevel();
        }
      }, 1200);
      return true
    } else {
        console.log('hey, try again')
      this.tryAgain = true
      return false
    }
  }

//   tryAgain(wrap) {
//       wrap.className.add('wrong');
//       setTimeout(() => wrap.className.remove('wrong'), 1500);
//   }
}

export default Pronunciation
