import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import '../styles/components/Level.css'

const tm = TweenMax;

const Level = (props) => {
    let playLevel = useRef(null);

    useEffect(() => {
        tm.fromTo(playLevel, 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
      });

    return (
    <div className='play--level' ref={(l) => { playLevel = l; }}>
        <h3>Level</h3>
        <h3 id='level'>
          { props.level }
        </h3>
      </div>
    )
}

export default Level