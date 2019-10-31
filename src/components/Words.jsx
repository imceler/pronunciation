import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import '../styles/components/Words.css'

const tm = TweenMax;

const Words = (props) => {
    let Match = useRef(null);
    let playWord = useRef(null);
    let Word = useRef(null);

    let listenButton = useRef(null);
    useEffect(() => {
        tm.fromTo(playWord, 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, delay: 0.4 });
    })

    const listenNow = () => {
        tm.fromTo(listenButton, 1, { background: 'transparent' }, { background: '#FF8080' });
        props.read(props.word);
        tm.fromTo(listenButton, 1, { background: '#FF8080' }, { background: 'transparent', delay: 1 });
      };
    return (
        <div className='play--word' ref={(w) => { playWord = w; }}>
            <div id='match' className='play--word-match' ref={(x) => { Match = x; }} />
            <h2 id='words' ref={(w) => { Word = w; }}>
            { props.word }
            </h2>
            <div className='icon-wrap' ref={(lb) => { listenButton = lb; }}>
            <i
                id='listenMe'
                className='icon'
                onClick={() => listenNow()}
            />
            </div>
        </div>
    )
}  

export default Words