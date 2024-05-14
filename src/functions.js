'use strict';
function add(a, b){
    return a + b;
}

// function expression (przypisanie deklaracji funkcji do zmiennej)
const add1 = function(a, b){
    return a + b;
}

//console.log(add1(1, 2));

const add2 = (a, b) => {
    return a + b;
}



const add3 = () => 42;
const add4 = a => 42;

const add5 = (a, b) => a + b;
// max
function max_1(coll){
    let result = coll[0];

    for (const i of coll){
        if (i > result){
            result = i;
        }
    }
    return result;
}

console.log(max_1([1, 2, 9, 4, 5, 2]));

