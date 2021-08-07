var business = 450;
var minister = 350;
var army = 750;


// local system 
// if (business > minister){
//     console.log('business is the power')
// }
// else{
//     console.log('minstry Is the power')
// }
// comoare three 

/* if (business > minister && business > army){
    console.log('business is the power')
}
else if (minister > business && minister > army){
    console.log('minstry Is the power')
}
else{
    console.log('army is the power')
} */


var max = Math.max(business,minister, army);
console.log('The largest is', max)

/* 
function findLargest (first, sceond){
    if(first > sceond){
    return first;
}
    else{
    return sceond;
}
}

console.log('the largest is = ', findLargest(345,986)) */


function findLargest (first, sceond, third){
    if(first > sceond && first > third){
    return first;
}
    else if(sceond > first && sceond > third){
    return sceond;
}
else {
    return third;
}
}

console.log('the largest is = ', findLargest(345,986,2084))


function findSmallest (first, sceond, third){
    if(first < sceond && first < third  ){
    return first;
}
    else if(sceond < first && sceond < third){
    return sceond;
}
else {
    return third;
}
}

console.log('the smallest is = ', findSmallest(345,986,23))


// largest number in an array
const array1 = [2,3,9,5,4]
let largestElement1 = Math.max(...array1);
console.log('largest number in the array = ',largestElement1);

// smallest number in an array
const array2 = [2,3,9,5,4]
let smallestElement1 = Math.min(...array2);
console.log('samllest number in the array = ',smallestElement1);