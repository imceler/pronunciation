import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { resetGame, setConfirmation } from '../actions'
import '../styles/Home.css';
import { TweenMax } from 'gsap';

const tm = TweenMax;

const Home = props => {

  useEffect(() => {
    props.setConfirmation(false)
    props.resetGame()
  }, [])

  let title = useRef(null);
  let titleWrap = useRef(null);
  let subTitle = useRef(null);
  let playGame = useRef(null);

  useEffect(() => {
    tm.fromTo(title, 0.8, { x: -200, opacity: 0, display: 'none' }, { x: 0, opacity: 1, display: 'block' });
    tm.fromTo(titleWrap, 0.8, { height: '10%', display: 'none' }, { height: '60%', display: 'flex' });
    tm.fromTo(subTitle, 0.8, { y: -200, opacity: 0, display: 'none' }, { y: 0, opacity: 1, display: 'flex', delay: -0.2 });
    tm.fromTo(playGame, 0.8, { x: -200, opacity: 0, display: 'none' }, { x: 0, opacity: 1, display: 'flex', delay: -0.2 });
  }, []);

  return (
    <main id='home' className='main'>
      <section className='section--home'>
        <div className='section--title-wrap'>
          <div
              id='titleWrap'
              className='section__div--title'
              ref={(title) => { titleWrap = title ; }}
            >
              <h1 ref={(tit) => { title = tit; }}>PRONUNCIATION</h1>
            </div>
          <div
              id='subTitle'
              className='section__div--subtitle'
              ref={(sub) => { subTitle = sub ; }}
            >
              <h3>Learning and speaking</h3>
            </div>
        </div>
        <div className='section--play-wrap'>
          <Link
            to='/game'
            className='section__div--play'
            ref={(play) => { playGame = play ; }}
          >
            <h3>Start to learn</h3>
          </Link>
        </div>
      </section>
    </main>
  );
};

const mapDispatchToProps = {
  resetGame,
  setConfirmation,
}

export default connect(null, mapDispatchToProps )(Home)
