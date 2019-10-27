import React, {useRef, useEffect} from 'react'
import { connect } from 'react-redux'
import '../styles/Game.css'
import { TweenMax } from 'gsap'
import Pronunciation from '../logic/game'

const tm = TweenMax;

const Game = props => {
  const words = props.words
  
  const Game = new Pronunciation(words)
  Game.start()

    let game = useRef(null)
    let playLevel = useRef(null)
    let playWord = useRef(null)
    let playPoints = useRef(null)
    let playSpeak = useRef(null)
    let listenButton = useRef(null)

    const print = {
      word: Game.wordToSay,
      points: Game.points,
      level: Game.level,
    }
    const action = {
      read: Game.readOut
    }

   const listenNow = () => {
      tm.fromTo(listenButton, 1, {background: 'transparent'}, {background: '#FF8080'})
      action.read(Game.wordToSay)
      tm.fromTo(listenButton, 1, {background: '#FF8080'}, {background: 'transparent', delay: 1})
  }

    useEffect(() => {
      tm.fromTo(playLevel, 1, {x: -200, opacity: 0}, {x: 0, opacity: 1})
      tm.fromTo(playWord, 1, {x: -200, opacity: 0}, {x: 0,opacity: 1, delay: 0.4})
      tm.fromTo(playPoints, 1, {x: -200, opacity: 0}, {x: 0,opacity: 1, delay: 0.6})
      tm.fromTo(playSpeak, 1, {opacity: 0}, {opacity: 1, delay: 0.8})
    })
    return (
        <section 
          id='game' 
          className="section--play"
          ref={g => {game = g}}
        >
        <div className="play--level" ref={l => {playLevel = l}}>
          <h3>Level</h3>
          <h3 id="level">
              { print.level }
          </h3>
        </div>
        <div className="play--word" ref={w => {playWord = w}}>
            <div id="match" className="play--word-match">
            </div>
            <h2 id="words">
              { print.word }
            </h2>
            <div className="icon-wrap" ref={lb => {listenButton = lb}}>
              <i 
                id="listenMe" 
                className="icon" 
                onClick={() => listenNow()}
                ></i>
            </div>
        </div>
        <div className="play--points" ref={p => {playPoints = p}}>
          <div className="play--points-word">
            <h3>Points</h3>
          </div>
            <div className="play--points-number">
            <h3 id="points">
              { print.points }
            </h3>
          </div>
        </div>
        <div id="speak" className="play--speak" ref={s => {playSpeak = s}}>
            <h4 id="speak-button">Press to speak</h4>
        </div>
        <div id="upAlert"className="play--level-up">
            <div className="level-up--wrap">
              <div id="return" className="level-up--return"></div>
              <h2>Level <span id="actualLevel"></span> complete</h2>
              <h4>It was amazing</h4>
              <div id="levelUp" className="next-level">
                  <h3>Next Level</h3>
              </div>
            </div>
        </div>
      </section>
    )
}

const mapStateToProps = state => {
  return {
    // word: state.word,
    words: state.level,
  }
}

export default connect(mapStateToProps, null)(Game)