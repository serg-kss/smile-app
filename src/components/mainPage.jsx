import React from 'react';
import Smile from './smile.jsx';
import styles from './mainPage.module.css';


function MainPage (props) {
 
    
      return <div className={styles.smilesContainer}>
        <ul className={styles.smilesList}>
            <li className={styles.smile}><Smile smile = {props.smiles.trollFace}/></li>
            <li className={styles.smile}><Smile smile = {props.smiles.trollFaceShout}/></li>
            <li className={styles.smile}><Smile smile = {props.smiles.trollFaceFuck}/></li>
        </ul>

        <button className={styles.btnSmile} onClick={()=> {

          const trollFaceScore = props.smiles.trollFace.score;
          const trollFaceShoutScore = props.smiles.trollFaceShout.score;
          const trollFaceFuckScore = props.smiles.trollFaceFuck.score;

          if (trollFaceScore > trollFaceShoutScore & trollFaceScore > trollFaceFuckScore) {
            const winner = `Winner is TrollFace with a score ${trollFaceScore}`;
            props.winner.updateWinner(winner)
          } else if (trollFaceShoutScore > trollFaceScore & trollFaceShoutScore > trollFaceFuckScore){
            const winner = `Winner is TrollFaceShout with a score ${trollFaceShoutScore}`;
            props.winner.updateWinner(winner)
          } else if (trollFaceFuckScore > trollFaceScore & trollFaceFuckScore > trollFaceShoutScore){
            const winner = `Winner is trollFaceFuck with a score ${trollFaceFuckScore}`;
            props.winner.updateWinner(winner)
          } else props.winner.updateWinner('no winner motherfuckers')

        }}>Winner</button>

        <p>{props.winner.winner}</p>
        
        <button className={styles.btnSmile} onClick={() => {
            props.smiles.trollFaceShout.removeScore();
            props.smiles.trollFace.removeScore();
            props.smiles.trollFaceFuck.removeScore();
            props.winner.updateWinner('');
        }}>Clean</button>
        
      </div>;
    }


  export default MainPage;