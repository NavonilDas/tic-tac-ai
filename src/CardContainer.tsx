import React from 'react';
import Card from './Card';
import { Logic } from './Logic';

interface Props {
    onPlayerChange?: (player: boolean) => void;
    onGameWin?: (player: 'X' | 'O') => void;
    onGameDraw?: () => void;
};

interface State {
    board: ('X' | 'O' | '')[][];
    turn: boolean; // True for X
    fills: number;
    isWin: boolean;
};

class CardContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            board: [['', '', ''], ['', '', ''], ['', '', '']],
            turn: true,
            fills: 0,
            isWin: false
        };
    }

    componentDidMount() {
        if (this.props.onPlayerChange) {
            this.props.onPlayerChange(this.state.turn);
        }
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
                                // if state is not empty , Board is Filled or Game Ends with win
                                if (
                                    this.state.board[i][j] !== '' ||
                                    this.state.fills === 9 ||
                                    this.state.isWin
                                ) return;

                                const board = this.state.board;
                                board[i][j] = this.state.turn ? 'X' : 'O';

                                // Check Win
                                const win = Logic.checkWin(board);
                                if (win !== '') {
                                    // if Win Call Event
                                    if (this.props.onGameWin) {
                                        this.props.onGameWin(win);
                                    }
                                } else {
                                    if (this.props.onPlayerChange) {
                                        this.props.onPlayerChange(!this.state.turn);
                                    }
                                }

                                const fills = this.state.fills + 1;
                                if (win === '' && fills === 9) {
                                    // Call Draw Event
                                    if (this.props.onGameDraw) {
                                        this.props.onGameDraw();
                                    }
                                }

                                this.setState({
                                    board,
                                    turn: !this.state.turn,
                                    fills,
                                    isWin: (win !== '')
                                });
                            }} />
                    )
                )}
            </div>
        );
    }
}


export default CardContainer;