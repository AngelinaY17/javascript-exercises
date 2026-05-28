const reverseString = function(str) {
    str1 = '';
    for (let i = str.length-1; i >= 0; i--)
        str1 = str1.concat(str[i]);
    return str1;
};

// Do not edit below this line
module.exports = reverseString;
