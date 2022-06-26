import './App.css';
import { useState , useEffect } from 'react';

function App() {
  const [state, changeState] = useState('rock')
  const [comState, comChangeState] = useState('rock')
  const [userPoint, userChangePoint] = useState(0)
  const [comPoint, comChangePoint] = useState(0)

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className='board'>
        <div className='user'>
          <span>User Score : {userPoint}</span>
        </div>
        <div className='computer'>
          <span>Computer Score : {comPoint}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
