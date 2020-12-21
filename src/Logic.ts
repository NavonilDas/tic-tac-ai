export interface Position {
    i: number;
    j: number;
};

export class Logic {
    /**
     * Check if Someone Wins
     * @param board Tic Tac Toe Board
     */
    static checkWin(board: ('X' | 'O' | '')[][]): 'X' | 'O' | '' {
        // Check Left Diagonal
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[1][1];
        }

        // Check Right Diagonal
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[1][1];
        }

        for (let i = 0; i < 3; ++i) {
            // Check Row
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return board[i][0];
            }
            // Check Column
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return board[0][i];
            }
        }

        return '';
    }

    static generateMoves(board: ('X' | 'O' | '')[][], turn: boolean): Position | null {
        let ans: Position | null = null;
        let bestScore = -Infinity;

        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (board[i][j] === '') {
                    board[i][j] = 'O';
                    const score = Logic.minimax(board, true);
                    board[i][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        console.log(score);
                        ans = { i, j };
                    }
                }
            }
        }
        console.log(bestScore, ans);
        return ans;
    }

    static Scores = {
        X: -1,
        O: 1,
    };

    static minimax(board: ('X' | 'O' | '')[][], turn: boolean, depth: number = 32) {
        // if turn is true it means Human is Playing and we have to minimize ans

        if (depth === 0) {
            return 0;
        }

        const res = Logic.checkWin(board);
        if (res !== '') {
            if (Logic.Scores[res] === 1) {
                // console.table(board);
                //     // console.log(res,board);
            }
            return Logic.Scores[res];
        }

        let ans: number | null = null;

        if (turn) {
            // minimize ans
            ans = Infinity;
            for (let i = 0; i < 3; ++i) {
                for (let j = 0; j < 3; ++j) {

                    if (board[i][j] === '') {
                        board[i][j] = 'X';
                        const score = Logic.minimax(board, false, depth - 1);
                        board[i][j] = '';
                        ans = Math.min(ans, score);
                    }


                }
            }
        } else {
            // maximize ans
            ans = -Infinity;
            for (let i = 0; i < 3; ++i) {
                for (let j = 0; j < 3; ++j) {

                    if (board[i][j] === '') {
                        board[i][j] = 'O';
                        const score = Logic.minimax(board, true, depth - 1);
                        board[i][j] = '';
                        ans = Math.max(ans, score);
                    }


                }
            }

        }

        // for (let i = 0; i < 3; ++i) {
        //     for (let j = 0; j < 3; ++j) {


        //         if (board[i][j] === '') {
        //             board[i][j] = turn ? 'X' : 'O';
        //             const score = Logic.minimax(board, !turn, depth - 1);
        //             board[i][j] = '';

        //             if (turn) {
        //                 ans = Math.min(ans, score);
        //             } else ans = Math.max(ans, score);

        //         }

        //     }
        // }

        if (ans !== -Infinity || ans !== Infinity)
            return ans;

        return 0;
    }
};