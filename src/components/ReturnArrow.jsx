import React from 'react';
import { connect } from 'react-redux'
import { setConfirmation } from '../actions'

import '../styles/components/return.css'

const ReturnArrow = props => {
    const modal = document.getElementById('level-modal')
    const fadeOut = () => {
        modal.style.display = 'none'
      }

    const confirmation = () => {
        props.setConfirmation(true)
        fadeOut()
      }
    return(
        <div className='return--wrap' onClick={() => {confirmation()}}>
            <div className='return' />
        </div>
    )
}

const mapDispatchToProps = {
    setConfirmation,
  }

export default connect(null, mapDispatchToProps)(ReturnArrow)