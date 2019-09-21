import '../css/home.css'
import '../css/game.css'
import newGame from './game.js'

const home = document.getElementById('home')
const playGame = document.getElementById('play-game')
const game = document.getElementById('game')

const tl = new TimelineMax();

playGame.addEventListener('click', () => {
    tl.fromTo(home, 1, {display: 'flex', opacity: '1'}, {display: 'none', opacity: '0'})
    .fromTo(game, .9, {display: 'none',opacity: '.4'}, {display: 'flex',opacity: '1'}, '-=0.2')
    .fromTo(".play--level", 1, {x: -200, opacity: '0'}, {x: 0, opacity: '1'}, '-=0.4')
    .fromTo(".play--word", 1, {x: -200, opacity: '0'}, {x: 0,opacity: '1'}, '-=0.6')
    .fromTo(".play--points", 1, {x: -200, opacity: '0'}, {x: 0,opacity: '1'}, '-=0.6')
    .fromTo(".play--speak", 1, {opacity: '0'}, {opacity: '1'})
    newGame()
})
