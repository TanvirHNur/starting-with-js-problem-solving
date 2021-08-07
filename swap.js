var first = 5;
var second = 8;

console.log(first,second);

// var temp = first;
// var first = second;
// var second = first;

// first approach 

// var temp = first;
// var first = second
// var second = temp;

// destructuring = The values ​​on the right side of an array will 
                    // be set as the values ​​on the left side
[first, second] = [second, first]
console.log(first,second);

