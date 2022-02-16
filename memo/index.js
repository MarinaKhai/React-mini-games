import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.bmp';

function Square(props) {
  return (
    <div onClick={props.onClick}>
      {props.show}
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: Array(16).fill('Tail'),
    }
  }
  handleTurn(i) {
    const cards = this.state.array.slice();
    cards[i] = cards[i] === i+1 ? 'Tail' : i+1;
    this.setState({array: cards});

  }
  render() {
    return (
      <div>
        <h2>Memo</h2>
        <div className="game-board">
          <Square id={0} onClick={() => this.handleTurn(0)} show={this.state.array[0]} />
          <Square id={1} onClick={() => this.handleTurn(1)} show={this.state.array[1]}/>
          <Square id={2} onClick={() => this.handleTurn(2)} show={this.state.array[2]}/>
          <Square id={3} onClick={() => this.handleTurn(3)} show={this.state.array[3]}/>
          
          <Square id={4} onClick={() => this.handleTurn(4)} show={this.state.array[4]}/>
          <Square id={5} onClick={() => this.handleTurn(5)} show={this.state.array[5]}/>
          <Square id={6} onClick={() => this.handleTurn(6)} show={this.state.array[6]}/>
          <Square id={7} onClick={() => this.handleTurn(7)} show={this.state.array[7]}/>
          
          <Square id={8} onClick={() => this.handleTurn(8)} show={this.state.array[8]}/>
          <Square id={9} onClick={() => this.handleTurn(9)} show={this.state.array[9]}/>
          <Square id={10} onClick={() => this.handleTurn(10)} show={this.state.array[10]}/>
          <Square id={11} onClick={() => this.handleTurn(11)} show={this.state.array[11]}/>
          
          <Square id={12} onClick={() => this.handleTurn(12)} show={this.state.array[12]}/>
          <Square id={13} onClick={() => this.handleTurn(13)} show={this.state.array[13]}/>
          <Square id={14} onClick={() => this.handleTurn(14)} show={this.state.array[14]}/>
          <Square id={15} onClick={() => this.handleTurn(15)} show={this.state.array[15]}/>
        </div>
        <p>Number of steps: 5</p>
        <h3>You win!</h3>
      </div>
    );
  }
}

class Game extends React.Component {
    render() {
      return (
        <div>
          <Board />
          <button>Start New Game</button>
        </div>
      );
    }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
