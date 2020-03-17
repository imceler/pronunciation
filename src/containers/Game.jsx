import React from 'react'
import { connect } from 'react-redux';
import Points from '../components/Points';
import Words from '../components/Words';
import Speak from '../components/Speak';
import Level from '../components/Level';
import Confirmation from '../components/Confirmation';
import LevelModal from '../components/LevelModal';
import { setConfirmation } from '../actions'
import ReturnArrow from '../components/ReturnArrow';

import '../styles/Game.css';

const GameVisual = props => {

 return( 
    <>
      <ReturnArrow />
      <div className="section__play-wrap">
      <main id='game' className='section--play'>

          <Level />

          <Words read={props.read} />

          <Points />

          <Speak start={props.speakStart} end={props.speakEnd} />

          {/* <form onSubmit={props.submit}>
            <input type="text" name="color" onChange={props.change}></input>
            <button type="submit">Press</button>
          </form> */}
        
          {props.nextLevel && (
            <LevelModal start={props.again} />
            )}

          {props.confirmation && (
            <Confirmation/>
          )}
      </main>
        </div>
    </>
 )   
}

const mapDispatchToProps = {
  setConfirmation,
}

const mapStateToProps = state => {
  return {
    nextLevel: state.nextLevel,
    confirmation: state.confirmation,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameVisual)