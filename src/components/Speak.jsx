import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import '../styles/components/Speak.css'

const tm = TweenMax;

const Speak = (props) => {
    let speakWrap = useRef(null);
    let speakBtn = useRef(null);

    const speak = () => {
        props.start(speakBtn, speakWrap);
        props.end(speakBtn, speakWrap);
      };

      useEffect(() => {
        tm.fromTo(speakWrap, 1, { opacity: 0 }, { opacity: 1, delay: 0.8 });
      })
      
    return (
        <div
            id='speak'
            className='play--speak'
            ref={(s) => { speakWrap = s; }}
            onClick={() => speak()}
        >
        <h4 id='speak-button' ref={(sb) => { speakBtn = sb; }}>Press to speak</h4>
      </div>
    )
}

export default Speak