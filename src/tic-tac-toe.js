const Players=['x','o'];
class TicTacToe {
    constructor() {
        this.matrix=[ 
            [null,null,null],
            [null,null,null],
            [null,null,null]            
        ];
        this.currentPlayer=0;
    }

    getCurrentPlayerSymbol() {
        return Players[this.currentPlayer];
    }

    nextTurn(rowIndex, columnIndex) {
        this.rowIndex=rowIndex;
        this.columnIndex=columnIndex;
        if(this.matrix[rowIndex][columnIndex]==null) {
            this.matrix[rowIndex][columnIndex]=Players[this.currentPlayer];
            this.currentPlayer ? this.currentPlayer--: this.currentPlayer++; 
        }
        
    }
 
    isFinished() {
        if(this.noMoreTurns() || this.getWinner()) return true;
       return false;
    }

    getWinner() {
       let massRow=[];
        let massCol=[];
       let  massDiag1=[];
       let  massDiag2=[];
        for(let i=0;i<3;i++) {
            for(let j=0;j<3;j++) {
                massRow+=this.matrix[i][j];
                massCol+=this.matrix[j][i];
            }
            massRow+=' ';
            massCol+=' ';
            massDiag1+=this.matrix[i][i];
            massDiag2+=this.matrix[i][2-i];
        }
        let checkX=this.checkLineIsWinner(massRow,massCol,massDiag1,massDiag2,'xxx'); 
        let checkO=this.checkLineIsWinner(massRow,massCol,massDiag1,massDiag2,'ooo'); 
        if(checkX && checkO) return null;
        else if(!checkX && !checkO) return null;
        else if(checkX) return 'x';
        else if(checkO) return 'o';
    }
    checkLineIsWinner(massRow,massCol,massDiag1,massDiag2,value) {
        if(massRow.includes(value) || massCol.includes(value) ||
        massDiag1.includes(value) || massDiag2.includes(value)) return true;
        return false;
    }

    noMoreTurns() {
        return this.matrix.every(check => check.every(checkV=>checkV));
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return  this.matrix[rowIndex][colIndex];            
    }
}

module.exports = TicTacToe;
