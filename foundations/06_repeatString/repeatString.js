const repeatString = function(str, n) {
    str1 = ''; 
    for (let i = 0; i<n; i++){
        str1 = str1.concat(str);
    }
    return (str1);
};

// Do not edit below this line
module.exports = repeatString;
