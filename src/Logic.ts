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
    
};