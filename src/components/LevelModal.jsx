import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { TweenMax } from 'gsap';
import { levelUp, levelAlert, setConfirmation } from '../actions'

import '../styles/components/LevelModal.css'

const tm = TweenMax;

const LevelModal = props => {
  const modal = document.getElementById('level-modal')
  let upAlert = useRef(null)

  const [next, setNext] = React.useState(false)

  const fadeOut = () => {
    upAlert.style.display = 'none'
    modal.style.display = 'none'
  }

  const confirmation = () => {
    props.setConfirmation(true)
    fadeOut()
  }

  const nextLevel = () => {
    setNext(true)
    setTimeout(() => {
      setNext(false); 
      props.levelAlert(false)
    }, 1200);
    fadeOut()
  };
  
    let alertClasses = classNames({
      'play--level-modal': true,
      'next': next,
    })

  useEffect(() => {
    tm.fromTo(modal, .6, {display: 'none'}, {display: 'flex'})
    tm.fromTo(upAlert, .6, { display: 'none', opacity: 0, x: -120 },
    { display: 'flex', opacity: 1, x: 0 });
  }, [])
  return ReactDOM.createPortal(
      <>
        <div className={alertClasses} ref={ (l) => {upAlert = l} }>
        <div className='level-modal--wrap'>
          
          <div onClick={() => {fadeOut(); confirmation()}}>
            <div className='level-modal--return' />
          </div>

          <h2>Level complete</h2>
          <h4>It was amazing</h4>

        <div className="buttons-wrap">

        <div 
            className='back-home' 
            onClick={() => {fadeOut(); confirmation()}}>
              <h3>
                Back Home
              </h3>
          </div>

          <div className='next-level'>
            <h3 onClick={() => {    
              props.levelUp() 
              props.start
              nextLevel()}}>
              Next Level
            </h3>
          </div>

          </div>
        </div>
      </div>
      </>
      ,
      document.getElementById('level-modal')
    )
}

const mapDispatchToProps = {
  levelUp,
  levelAlert,
  setConfirmation,
}

const mapStateToProps = state => {
  return {
    level: state.level,
    confirmation: state.confirmation,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelModal)