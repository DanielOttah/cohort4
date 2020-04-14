import React from 'react';
import './Game.css';
// import Board from './Board';

// export class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [
//                 {
//                     squares: Array(9).fill(null)
//                 }
//             ],
//             stepNumber: 0,
//             xIsNext: true
//         };
//     }

//     handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length - 1];
//         const squares = current.squares.slice();
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = this.state.xIsNext ? "X" : "O";
//         this.setState({
//             history: history.concat([
//                 {
//                     squares: squares
//                 }
//             ]),
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext
//         });
//     }

//     jumpTo(step) {
//         this.setState({
//             stepNumber: step,
//             xIsNext: (step % 2) === 0
//         });
//     }

//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = calculateWinner(current.squares);

//         const moves = history.map((step, move) => {
//             const desc = move ?
//                 'Go to move #' + move :
//                 'Go to game start';
//             return (
//                 <li key={move}>
//                     <button onClick={() => this.jumpTo(move)}>{desc}</button>
//                 </li>
//             );
//         });

//         let status;
//         if (winner) {
//             status = "Winner: " + winner;
//         } else {
//             status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//         }

//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board
//                         squares={current.squares}
//                         onClick={i => this.handleClick(i)}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }

const Square = (props) => {
    return (
        <button className="square" onClick={props.onClick} > {/* A button square cannot pass messages to board on which button was clicked and if its an 'X' or 'O' */}
            {props.value} {/*so instaed the parent - board tells the square which button was clicked and the letter. */}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />; //{/*displays each square and assigns an onClick property */ }
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            xIsNext: true,
            stepNumber: 0
        };
    }
    handleClick(i) {

        const historyOfPreviousMoves = this.state.history.slice(0, this.state.stepNumber + 1); // this is an array with an object inside and an array is inside the object
        const currentMove = historyOfPreviousMoves[historyOfPreviousMoves.length - 1]; // access the last item in the array i.e latest move
        const squaresWithLatestMove = currentMove.squares.slice(); // access the array in the object, this holds the latest/current move

        if (calculateWinner(squaresWithLatestMove) || squaresWithLatestMove[i]) {
            return;
        }
        squaresWithLatestMove[i] = this.state.xIsNext ? 'X' : 'O'; // other player makes move
        this.setState({
            history: historyOfPreviousMoves.concat([{ squares: squaresWithLatestMove }]), // set new state after player makes move
            stepNumber: historyOfPreviousMoves.length,
            xIsNext: !this.state.xIsNext, // set new state after player to make maove
        });

    }
    jumpTo(step) {
        this.setState({ stepNumber: step, xisNext: (step % 2) === 0 });
    }
    render() {

        const history = this.state.history; // this is the current state of the board
        const current = history[this.state.stepNumber]; // access last item in array (state/move/object)
        const winner = calculateWinner(current.squares); // pass the array in the object to check for winner
        const moves = history.map((step, move) => {
            const descp = move ? "Go to move #" + move : "Start another game";
            return (
                <li key={move} style={{ paddingBottom: "5px" }}>
                    <button onClick={() => this.jumpTo(move)}>{descp}</button>
                </li>
            )
        });

        let status;
        if (winner) {
            status = "The winner is player: " + winner; // declare winner
        } else { // or
            status = 'Next Player:' + (this.state.isXnext ? 'X' : 'O'); // next players' move
        }
        return (
            <div className="game" style={{ paddingBottom: '20px' }}>
                <div><h2>
                    Tic-Tac-Toe App. There are only 8 possible outcomes for a winner to emerge. Player 'X' starts...
                </h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
                    <div className="game-board" >
                        <Board squares={current.squares} onClick={(i) => this.handleClick(i)} /> {/*render board*/}
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
