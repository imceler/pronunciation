import '../css/styles.css'
import '../css/game.css'
import newGame from './game.js'

const home = document.getElementById('home')
const playGame = document.getElementById('play-game')
const game = document.getElementById('game')

const tl = new TimelineMax();

playGame.addEventListener('click', () => {
    tl.fromTo(home, 1, {display: 'flex', opacity: '1'}, {display: 'none', opacity: '.0'})
    .fromTo(game, .2, {display: 'none',opacity: '.4'}, {display: 'flex',opacity: '1'})
    .fromTo('.div--play-container', 1, {x: -120, opacity: '.4'}, {x: 0,opacity: '1'}, '-=0.4')
    .fromTo(".section__div--points", 1, {opacity: '0'}, {opacity: '1'})
    newGame()
})