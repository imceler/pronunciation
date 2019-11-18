import React from 'react'
import { connect } from 'react-redux';
import Points from '../components/Points';
import Words from '../components/Words';
import Speak from '../components/Speak';
import Level from '../components/Level';
import LevelModal from '../components/LevelModal';

import '../styles/Game.css';

const GameVisual = props => {
 return(
    <>
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
        
          {props.levelUp && (
            <LevelModal start={props.again} />
            )}

      </main>
        </div>
    </>
 )   
}

const mapStateToProps = state => {
  return {
    levelUp: state.nextLevel
  }
}

export default connect(mapStateToProps, null)(GameVisual)