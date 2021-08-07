// lottery 
/* const number = Math.random();

let lottery = number * 100;
let winner =Math.round(lottery);
console.log(winner); */

// for loop 
let selected = []
for(let i = 0; i <10; i++){
    let random = Math.random() * 100;
    const picked = Math.round(random);
    if(selected.indexOf(picked) == -1){
        selected.push(picked);
    }
    else{
        console.log('found duplicate', selected, picked)
    }

 
}
console.log(selected);