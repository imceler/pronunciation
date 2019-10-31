import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/Game.css';
import { TweenMax } from 'gsap';
import Pronunciation from '../logic/game';
import Points from '../components/Points'
import Words from '../components/Words'
import Speak from '../components/Speak'
import Level from '../components/Level'

const tm = TweenMax;

const Game = (props) => {
  const { words } = props;

  const Game = new Pronunciation(words);
  Game.start();

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

      <Words word={print.word} read={action.read}/>

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

const mapStateToProps = (state) => {
  return {
    // word: state.word,
    words: state.level,
  };
};

export default connect(mapStateToProps, null)(Game);
