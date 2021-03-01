import React from 'react'
import './App.css'
import Chess from "./chess/chess";

function App() {
  // const [board, setBoard] = useState([])
  // const [isGameOver, setIsGameOver] = useState(false)
  // const [result, setResult] = useState()
  // const [turn, setTurn] = useState()
  // const [check, setCheck] = useState()
  // const [checked, setChecked] = useState()
  //
  // useEffect(() => {
  //   initGame()
  //   const subscribe = gameSubject.subscribe(game => {
  //     setBoard(game.board)
  //     setIsGameOver(game.isGameOver)
  //     setResult(game.result)
  //     setTurn(game.turn)
  //     setCheck(game.check)
  //     setChecked(game.checked)
  //   })
  //   return () => subscribe.unsubscribe()
  // }, [])

  return (
    <Chess />
    // <div className="container">
    //
    //   {isGameOver && (
    //     <h2 className="vertical-text">
    //       GAME OVER
    //       <button onClick={() => resetGame()}>
    //         <span className="vertical-text">NEW GAME</span>
    //       </button>
    //     </h2>
    //   )}
    //
    //   {!isGameOver && (
    //     <p className="vertical-text">
    //       TURN - {turn === 'w' ? 'WHITE' : 'BLACK'}
    //       <button onClick={() => resetGame()}>
    //         <span className="vertical-text">NEW GAME</span>
    //       </button>
    //
    //       <button onClick={() => takeBack()}>
    //         <span className="vertical-text">TAKEBACK</span>
    //       </button>
    //     </p>
    //   )}
    //
    //   <div className="board-container">
    //     <Board board={board} turn={turn}/>
    //   </div>
    //
    //   {!isGameOver && check && checked && (
    //     <p className="vertical-text">
    //       {checked} IN CHECK
    //     </p>
    //   )}
    //
    //   {result && <p className="vertical-text">{result}</p>}
    // </div>
  )
}

export default App
