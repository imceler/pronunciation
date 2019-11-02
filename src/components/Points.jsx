import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import '../styles/components/Points.css'

const tm = TweenMax;

const Points = (props) => {   
    let playPoints = useRef(null);

    useEffect(() => {
        tm.fromTo(playPoints, 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, delay: 0.6 });
    }, [])

        return(
            <div className='play--points' ref={(p) => { playPoints = p; }}>
                <div className='play--points-word'>
                <h3>Points</h3>
                </div>
                <div className='play--points-number'>
                <h3 id='points'>
                    { props.points }
                </h3>
                </div>
            </div>
        )
}

export default Points