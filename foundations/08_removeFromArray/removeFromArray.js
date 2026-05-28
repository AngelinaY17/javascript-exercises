const removeFromArray = function(arr, n) {
    let arr1 = []; 
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != n) {
            arr1.push(arr[i]);
        }
    }
    return arr1; 
};

// Do not edit below this line
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// arrays do not have the remove() function 
// arr1 = arr does not make a copy of the array



module.exports = removeFromArray;
