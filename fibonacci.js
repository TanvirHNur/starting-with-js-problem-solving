/* [0,1,1,2,3,5,8,13,21,34,55]

3rd= first + second
4th = third + second
5th = 4th + 3rd
166th = 165th + 164th
50th = 49th +48th
ntn = (n-1)th + (n-2)th
ith = (i-1)th + (i - 2)th
*/

/* const fibo=[0,1]
for(let i = 2; i < 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

const fibo1 =[3,5];
for (let i= 2; i < 12; i++){
    fibo1[i] = fibo1[i-1] +fibo1[i-2];
}
console.log(fibo1) */


// fibo by function
/* function fiboseries(num){
    let fibo = [0,1];
    for (let i = 2; i< num; i++){
        fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
console.log(fiboseries(1)); */



function fibonacciSeries(num){
    if (typeof num != 'number'){
        return ('Please input number');
    }
    if (num < 2){
        return 'please enter a number greater than 1'
    }
    let fibo = [0,1];
    for (let i = 2; i< num; i++){
        fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
let fiboseries = fibonacciSeries(-23);
console.log(fiboseries);