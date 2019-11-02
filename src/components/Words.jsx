import React, { useRef, useEffect,useState } from 'react';
import { TweenMax } from 'gsap';
import { connect } from 'react-redux';
import { validation } from '../actions'
import '../styles/components/Words.css'

const tm = TweenMax;

const Words = (props) => {
    let Match = useRef(null);
    let playWord = useRef(null);
    let Word = useRef(null);
    let listenButton = useRef(null);

    let wrong = ''
    
    if (props.matched === false) {
        console.log(`Validation es: ${props.matched}`)
        wrong = 'wrong'
        setTimeout(() => wrong = '', 1500);
        props.validation(null)
    }
    
    useEffect(() => {
        tm.fromTo(playWord, 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, delay: 0.4 });
    }, [])

    const listenNow = () => {
        tm.fromTo(listenButton, 1, { background: 'transparent' }, { background: '#FF8080' });
        props.read(props.word);
        tm.fromTo(listenButton, 1, { background: '#FF8080' }, { background: 'transparent', delay: 1 });
      };

    useEffect(() => {
    if (props.matched) {
        tm.fromTo(Match, 1, { display: 'none' }, { display: 'block' }) 
        tm.fromTo(Match, .5, { display: 'block' }, { display: 'none', delay: 0.5 }) 
        props.validation(null)
    }  
    }, [props.matched])

    return (
        <div className='play--word' ref={e => {playWord = e}}>

            <div className='play--word-match' ref={(x) => { Match = x; }} />
            
            <h2 id='words' className={wrong} ref={(w) => { Word = w; }}>
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

const mapStateToProps = state => {
    return {
        matched: state.matched,
    }
}

const mapDispatchToProps = {
    validation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Words)