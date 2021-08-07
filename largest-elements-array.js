function findLargest(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element =numbers[i];
        if(element > largest){
            largest = element;
        } 
    }
    return largest;
}

let ages =[1,2,6,3,4,5,7];
let oldest = findLargest(ages);
console.log('oldest = ', oldest)


function findSmallest(numbers){
    let  smallest = numbers[1];
    for (let i =0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}

let smallest = findSmallest(ages);
console.log('smallest', smallest);




/* function largestElement (numbers){
    let largestElement1 =Math.max(numbers);
    return largestElement1;
}

console.log(largestElement(6,9,2,3,4)) */ 