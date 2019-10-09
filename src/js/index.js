import '../css/home.css'
import '../css/game.css'
import newGame from './game.js'
import tl from './tl'

const home = document.getElementById('home')
const game = document.getElementById('game')
const playGame = document.getElementById('play-game')
const title = document.getElementById('title')
const titleWrap = document.getElementById('titleWrap')
const subTitle = document.getElementById('subTitle')

function callback(entries, observer) {
    if (entries[0].isIntersecting) {
        tl.fromTo(title, .6, {x: '-200px', opacity: '0', display: 'none'}, {x: '0px', opacity: '1', display: 'block'})
        .fromTo(titleWrap, .6, {height: '10%', display: 'none'}, {height: '60%', display: 'flex'})
        .fromTo(subTitle, .6, {y: '-200px', opacity: '0', display: 'none'}, {y: '0px', opacity: '1', display: 'flex'}, '-=0.2')
        .fromTo(playGame, .6, {x: '-200px', opacity: '0', display: 'none'}, {x: '0px', opacity: '1', display: 'flex'}, '-=0.2' )
    } 
}

const observer = new IntersectionObserver(callback)
observer.observe(home) 

playGame.addEventListener('click', () => {
    tl.fromTo(home, 1, {display: 'flex', opacity: '1'}, {display: 'none', opacity: '0'})
    .fromTo(game, .9, {display: 'none',opacity: '.4'}, {display: 'flex',opacity: '1'}, '-=0.2')
    .fromTo(".play--level", 1, {x: -200, opacity: '0'}, {x: 0, opacity: '1'}, '-=0.4')
    .fromTo(".play--word", 1, {x: -200, opacity: '0'}, {x: 0,opacity: '1'}, '-=0.6')
    .fromTo(".play--points", 1, {x: -200, opacity: '0'}, {x: 0,opacity: '1'}, '-=0.6')
    .fromTo(".play--speak", .2, {opacity: '0'}, {opacity: '1'})
    newGame()
})