const sumAll = function(n, m) {
    let sum = 0; 
    if (n<m){
        for (let i = n; i<=m; i++){
            sum += i;
         }
    }
   else if (n>m){
         for (let i = m; i<=n; i++){
            sum += i;
         }
    }
   else if (n==m){ 
    return n; 
   }
   return sum;

};


//Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:
// Do not edit below this line
module.exports = sumAll;
