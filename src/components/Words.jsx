import React, { useRef, useEffect } from 'react';
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

    var wrong = ''

    if (props.matched === false) {
        wrong = 'wrong'
        setTimeout(() => {
            wrong = '', 
            props.validation(null) 
        }, 2000);
    }
    
    useEffect(() => {
        if (props.matched) {
            tm.fromTo(Match, .8, { display: 'none' }, { display: 'block' }) 
            tm.fromTo(Match, .2, { display: 'block' }, { display: 'none', delay: 1 }) 
            setTimeout(() => props.validation(null), 2000)
        }  
        }, [props.matched])

    useEffect(() => {
        tm.fromTo(playWord, 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1, delay: 0.4 });
    }, [])

    const listenNow = () => {
        tm.fromTo(listenButton, 1, { background: 'transparent' }, { background: '#FF8080' });
        props.read(props.wordToSay);
        tm.fromTo(listenButton, 1, { background: '#FF8080' }, { background: 'transparent', delay: 1 });
      };



    return (
        <>
        <div className='play--word' ref={e => {playWord = e}}>

            <div className='play--word-match' ref={(x) => { Match = x; }} />
            
            <h2 id='words' className={wrong} ref={(w) => { Word = w; }}>
                { props.wordToSay }
            </h2>
            <div className='icon-wrap' ref={(lb) => { listenButton = lb; }}>
            <i
                id='listenMe'
                className='icon'
                onClick={() => listenNow()}
            />
            </div>
        </div>

        </>
    )
}  

const mapStateToProps = state => {
    return {
        matched: state.matched,
        wordToSay: state.word
    }
}

const mapDispatchToProps = {
    validation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Words)