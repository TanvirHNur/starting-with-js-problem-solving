function fiboSeries(n){
    if (n == 0){
        return 0;
    }
    if (n== 1){
        return 1;
    }
    return fiboSeries(n-1) + fiboSeries(n-2)
}
let fibo = fiboSeries(7);
console.log(fibo)