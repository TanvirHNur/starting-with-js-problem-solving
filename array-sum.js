
let numbers = [10,20,30,40,50];
let sum = 0
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}

// console.log(sum);

function arrayTotal(numbers){
    let sum =0;
    for(var i =0; i <numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var total = arrayTotal([10,29,39,50]);
console.log('total = ', total)