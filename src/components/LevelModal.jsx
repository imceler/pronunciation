import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TweenMax } from 'gsap';
import { levelUp, levelAlert } from '../actions'
import '../styles/components/levelModal.css'

const tm = TweenMax;

const levelModal = props => {
  const modal = document.getElementById('modal')
  let upAlert = useRef(null)

  const [next, setNext] = React.useState(false)

  const nextLevel = () => {
    setNext(true)
    setTimeout(() => {
      setNext(false); 
      props.levelAlert(false)
    }, 1200);
    fadeOut()
  };
  
  const fadeOut = () => {
    upAlert.style.display = 'none'
    // tm.fromTo(upAlert, 1, { display: 'flex' }, { display: 'none'})
    modal.style.display = 'none'
  }

    let alertClasses = classNames({
      'play--level-modal': true,
      'next': next
    })

   const click = () => {

   }

  useEffect(() => {
    tm.fromTo(modal, 1, {display: 'none'}, {display: 'flex'})
    tm.fromTo(upAlert, 1, { display: 'none', opacity: 0, x: -120 },
    { display: 'flex', opacity: 1, x: 0 });
  }, [])
  return ReactDOM.createPortal(
      <>
        <div className={alertClasses} ref={ (l) => {upAlert = l} }>
        <div className='level-modal--wrap'>
          
          <Link onClick={fadeOut} to={'/'} >
            <div className='level-modal--return' />
          </Link>

          <h2> 
            Level complete
            </h2>
          <h4>It was amazing</h4>

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
      </>
      ,
      document.getElementById('modal')
    )
}

const mapDispatchToProps = {
  levelUp,
  levelAlert
}

const mapStateToProps = state => {
  return {
    level: state.level,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(levelModal)