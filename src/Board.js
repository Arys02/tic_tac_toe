import React from 'react'
import Square from './Square'

class Board extends React.Component {



    renderSquare(i) {
        return <Square value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}/>;
    }

    generateBoardRow(i){
        let rows = [];
        for (let j = i[0]; j < i[0] + 3; ++j) {
           rows.push(this.renderSquare(j));
        }

        i[0] += 3;
        return (
              <div className="board-row">
                {rows}
            </div>
        );
    }

    render(){
        let i = [0];
        return (
            <div>
                <div className="status">{status}</div>
                {this.generateBoardRow(i)}
                {this.generateBoardRow(i)}
                {this.generateBoardRow(i)}
            </div>
        )
    }





}




export default Board;