import './App.css';
import { useState } from 'react';

function App() {
  const [state, changeState] = useState('Rock')
  const [comState, comChangeState] = useState('Rock')
  const [userPoint, userChangePoint] = useState(0)
  const [comPoint, comChangePoint] = useState(0)
  const [game, gameState] = useState('false')

  function changeHand(clicked){
    changeState(clicked)
    const choice = ['Rock','Paper','Scissors']
    var comState = choice[Math.floor(Math.random()*choice.length)];
    comChangeState(comState)
    changeScore(clicked , comState)
  }

  function changeScore(user,com){
    if (user === com){
    } else{
      if (user === 'Rock' && com === 'Scissors'){
        userChangePoint(userPoint => userPoint + 1)
      }else if (user === 'Paper' && com === 'Rock'){
        userChangePoint(userPoint => userPoint + 1)
      }else if (user === 'Scissors' && com === 'Paper'){
        comChangePoint(comPoint => comPoint + 1)
      }else if (com === 'Rock' && user === 'Scissors'){
        comChangePoint(comPoint => comPoint + 1)
      }else if (com === 'Paper' && user === 'Rock'){
        comChangePoint(comPoint => comPoint + 1)
      }else if (com === 'Scissors' && user === 'Paper'){
        comChangePoint(comPoint => comPoint + 1)
      }
    }
    return gameState(false)
  }

  function reset(){
    changeHand('Rock')
    userChangePoint(0)
    comChangePoint(0)
    comChangeState('Rock')
    gameState(true)
  }

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className='board'>
        <div className='user'>
          <h4>User Score : {userPoint}</h4>
          <img className='hand' src={`../images/${state}.png`} alt={state}/>
        </div>
        <div className='computer'>
          <h4>Computer Score : {comPoint}</h4>
          <img className='hand' src={`../images/${comState}.png`} alt={comState}/>
        </div>
      </div>
      {game && (
      <div className='buttons'>
        <button onClick={()=> {changeHand('Rock')}}>Rock</button>
        <button onClick={()=> {changeHand('Paper')}}>Paper</button>
        <button onClick={()=> {changeHand('Scissors')}}>Scissors</button>
      </div>
      )}
      {!game && userPoint<comPoint &&(
        <div>
          <h4>You lose</h4>
          <button onClick={()=>{reset()}}>Restart</button>
        </div>
      )}
      {!game && userPoint>comPoint &&(
        <div>
          <h4>You Win</h4>
          <button onClick={()=>{reset()}}>Restart</button>
        </div>
      )}
      {!game && userPoint===comPoint &&(
        <div>
          <h4>Draw</h4>
          <button onClick={()=>{reset()}}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;
