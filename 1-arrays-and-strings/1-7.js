// Rotate Matrix

/* 
Given an image represented by an NxN matrix, where each pixel in the image is
4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
place?  
*/

/*

            A----B----C            G----D----A 
            |         |            |         | 
            D    E    F    ==>     H    E    B 
            |         |            |         | 
            G----H----I            I----F----C


Our NxN matrix can be rephrased as a two dimensional array or an Array of arrays
where the length of the Array is equivalent to the arrays it contains (an array
of 2 length 2 arrays, an array of 3 length 3 arrays, etc).

In order to rotate the matrix 90 degrees, we need to change the coordinates of
each value such that [0][0] becomes [0][N-1], [N-1][0] becomes [N-1][N-1],
[N-1][N-1] becomes [0][N-1]. 
*/

function rotateMatrix(arr) {
    // create a new array to hold our rotated values
    let newArr = []
    // fill the array with the appropriate number of sub-arrays
    for ( let i = 0; i < arr.length; i++) {
        newArr.push([]);
    }
    // iterate throught the horizontal rows of our matrix and...
    for ( let i = 0; i < arr.length; i++) {
        // fill them with the values from the side rotated around the center
        for (let j = arr.length - 1; j >= 0 ; j--) {
            newArr[i].push(arr[j][i]);
        }
    }
    return newArr;
}

console.log(rotateMatrix([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]))     
