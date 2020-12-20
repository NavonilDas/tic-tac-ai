import React from 'react';
import Card from './Card';

interface Props {
    onPlayerChange?: (player: boolean) => void;
};

interface State {
    board: ('X' | 'O' | '')[][];
    turn: boolean; // True for X   
};

class CardContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            board: [['', '', ''], ['', '', ''], ['', '', '']],
            turn: true
        };
    }

    render() {
        return (
            <div className="card-container">
                {this.state.board.map((row, i) =>
                    row.map((ele, j) =>
                        <Card
                            key={3 * i + j}
                            value={ele}
                            row={i}
                            col={j}
                            onClick={() => {
                                if (this.state.board[i][j] !== '') return;
                                const board = this.state.board;
                                board[i][j] = this.state.turn ? 'X' : 'O';
                                if (this.props.onPlayerChange) {
                                    this.props.onPlayerChange(!this.state.turn);
                                }
                                this.setState({ board, turn: !this.state.turn });
                            }} />
                    )
                )}
            </div>
        );
    }
}


export default CardContainer;