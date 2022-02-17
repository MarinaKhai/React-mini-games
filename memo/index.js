import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {

  function defineStyles() {
    let styles = {
      color: props.styleColor,
      backgroundColor: props.styleBgColor
    }
    if (props.show !== 'Tail') {
      return (styles);
    }
  }
  return (
    <div onClick={props.onClick} style={ defineStyles() } >
      {props.show}
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: Array(16).fill('Tail'),
      // heads: Array(16).fill('Head'),
      head: 'Head',
      tail: 'Tail',
      headsArr: [
        {text: "blue", color: "blue", backgroundColor: "#ccc"},
        {text: "green", color: "green"},
        {text: "red", color: "red"},
        {text: "yellow", color: "gold"},
        
        {text: "purple", color: "purple"},
        {text: "red", color: "red"},
        {text: "orange", color: "orange"},
        {text: "magenta", color: "magenta"},
        
        {text: "brown", color: "brown"},
        {text: "yellow", color: "gold"},
        {text: "blue", color: "blue"},
        {text: "purple", color: "purple"},
        
        {text: "brown", color: "brown"},
        {text: "green", color: "green"},
        {text: "magenta", color: "magenta"},
        {text: "orange", color: "orange"},
      ],
    }
  }
  handleTurn(i) {
    const tail = this.state.tail;
    const head = this.state.headsArr[i].text;
    const cards = this.state.array.slice();
    
    cards[i] = cards[i] === head ? tail : head;
    
    this.setState({array: cards, head: head});
  }
  renderSquare(i) {
    return (
      <Square
        onClick={() => this.handleTurn(i)}
        show={ this.state.array[i] }
        styleColor={this.state.headsArr[i].color}
        styleBgColor={"#f5ffff"}
        />
    )
  }
  // headsShuffle(arr) {

  // }

  render() {
    return (
      <div>
        <h2>Memo</h2>
        <div className="game-board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
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
