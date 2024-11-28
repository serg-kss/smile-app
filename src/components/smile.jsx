import React from 'react';
import styles from './smile.module.css';

function Smile (props){
    
      return <div>
        <img className={styles.smileImg} src={props.smile.img} alt="pic" onClick={props.smile.increaseScore}/>
        <p>Score {props.smile.score}</p>
      </div>;
    }


  export default Smile;