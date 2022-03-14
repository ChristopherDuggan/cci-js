// Zero Matrix

/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire
row and column are set to 0
*/

/* 
This seems like it would have a minimum Big O of n^2 as we have to examine
each item in the matrix. We have to be careful to not make the changes as we go
since altering the rows and columns immediately would 0 out all subsequent rows
and columns that intersect with the inital onces changed. So we have to keep
track of the coordinates of a 0 on our initial sweep through the matrix, then
alter the approprate rows and columns on additional loops.
*/

function zeroMatrix(matrix) {
    // quit if matrix is blank
    if (matrix.length === 0) return 'empty matrix';
    let zeroes = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (matrix[row][column] === 0) zeroes.push([row, column])
        }
    }

    for (let i = 0; i < zeroes.length; i++) {
        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix[row].length; column++) {
                if (row === zeroes[i][0] || column === zeroes[i][1]) {
                    matrix[row][column] = 0;
                }
            }
        }
    }
    return matrix;
}

console.log(zeroMatrix([[1,2,3],[0,'b','c'],[7,8,9],['x',0,'z']]))
