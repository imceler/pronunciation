import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { TweenMax } from 'gsap';
import { setConfirmation, levelAlert } from '../actions'
import { connect } from 'react-redux'

import '../styles/components/Confirmation.css'

const tm = TweenMax;

const Confirmation = props => {
    const modal = document.getElementById('confirmation-modal')
    let contentWrap = useRef(null)

    const fadeOut = () => {
        modal.style.display = 'none'
      }

      const returnContinue = () => {
        props.setConfirmation(false)
        fadeOut()
        props.levelAlert(true)
      }

    React.useEffect(() => {
        props.levelAlert(false)
        tm.fromTo(modal, .1, {display: 'none', opacity: 0 }, {display: 'flex', opacity: 1})
        tm.fromTo(contentWrap, 1, {y: 150}, { y: 0} )
      }, [])

    return (ReactDOM.createPortal(
        <>
            <div className="confirmation-modal" ref={cm => {contentWrap = cm}}>
                <div className="text-wrap">
                    <h2>Are you sure you want to leave?</h2>
                    <h4>You are about to lose your progress</h4>
                </div>

                <div className="button-wrap">


                    <div className='button-no' onClick={returnContinue}>
                            <h3>
                                No
                            </h3>
                    </div>

                    <Link 
                        className='button-yes' 
                        onClick={() => {fadeOut()}}
                        to={'/'}>
                            <h3>
                                Yes
                            </h3>
                    </Link>

                </div>
            </div>
        </>, document.getElementById('confirmation-modal')))
}

const mapDispatchToProps = {
    setConfirmation,
    levelAlert,
  }

const mapStateToProps = state => {
    return {
        confirmation: state.confirmation,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)