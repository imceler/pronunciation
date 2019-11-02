import React, { useRef, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'
import '../styles/Home.css';
import { TweenMax } from 'gsap';

const tm = TweenMax;

const Home = () => {
  let home = useRef(null);
  let title = useRef(null);
  let titleWrap = useRef(null);
  let subTitle = useRef(null);
  let playGame = useRef(null);


  useEffect(() => {
    tm.fromTo(title, 0.6, { x: -200, opacity: 0, display: 'none' }, { x: 0, opacity: 1, display: 'block' });
    tm.fromTo(titleWrap, 0.6, { height: '10%', display: 'none' }, { height: '60%', display: 'flex' });
    tm.fromTo(subTitle, 0.6, { y: -200, opacity: 0, display: 'none' }, { y: 0, opacity: 1, display: 'flex', delay: -0.2 });
    tm.fromTo(playGame, 0.6, { x: -200, opacity: 0, display: 'none' }, { x: 0, opacity: 1, display: 'flex', delay: -0.2 });
  }, []);

  return (
    <main id='home' ref={(h) => { home = h; }}>
      <section className='section--home'>
        <div className='section--title-wrap'>
          <div
              id='titleWrap'
              className='section__div--title'
              ref={(title) => { titleWrap = title ; }}
            >
              <h1 id='title' ref={(tit) => { title = tit; }}>PRONUNCIATION</h1>
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
            id='play-game'
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

// export default connect(null, null)(Home)
export default Home;
