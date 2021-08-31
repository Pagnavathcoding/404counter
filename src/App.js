import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import "./index.css";
const { Component, useState } = React;
// Counter App
function Counter() {
  const local = Number(window.localStorage.getItem("counter") || 0);
  const [counter, setCounter] = useState(local);
  function increaseCounter() {
    setCounter(counter + 1)
  }
  function decreaseCounter() {
    setCounter(counter - 1)
  }
  useEffect(() => {
    window.localStorage.setItem("counter", counter);
  })
  const winCount = Math.floor(counter / 404);
  return (
    <div className="counter" style={{ background: counter < 0 ? "#ff7a90" : "#fff" && counter > 0 ? "#03494e" : "#fff", color: counter < 0 || counter > 0 ? "#fff" : "#000" }}>
      <div className="congrats" style={{ display: counter >= 404 ? "block" : "none" }}>
        <h1 style={{ fontSize: "50px" }}>🎉</h1>
        <b style={{ color: "orangered" }}>Congratulations!</b><br />
        <i>You have increased {counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} points {counter > 404 ? "> 404" : null}.</i>
      </div>
      <h1 onClick={() => {
        window.location.reload();
      }} style={{ cursor: "pointer" }}>404 points to win</h1>
      <p style={{ fontFamily: "cursive" }}>{counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span style={{ fontSize: "30px", fontFamily: "cursive" }}>{counter > 1 ? "points" : "point"}</span></p>
      <button onClick={increaseCounter}>Increase Counter: +1</button>
      <button onClick={decreaseCounter}>Decrease Counter: -1</button>
      <div className="win" style={{ display: counter >= 404 ? "block" : "none" }}>
        <p>You have won <span style={{ fontFamily: "cursive" }} className="win-counter">{winCount}</span> {winCount > 1 ? "times" : "time"}</p>
      </div>
      <div className="coder">
        <a href="https://www.facebook.com/pagnavath.js.3">PagnavathJS</a>
      </div>
    </div>
  )
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: <Counter />
    }
  }
  render() {
    return (
      <div>
        {this.state.number}
      </div>
    )
  }
}
export default App;