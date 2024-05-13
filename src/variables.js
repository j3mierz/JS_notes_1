// // re deklaracja
// var x = 42;
// let x1 = 42
// const x2 = 42
//
// var x =10 można re deklarować ale tylko quirks mode'
// let x1 = 10 nie można
// const x2 = 10 nie można

// re-inicjalizacja
//
// var x = 42
// let x1 = 42
// const x2 = 42
//
// x = 10 można
// x1 = 10 można
// x2 = 10 nie można

//hoisting
//przenoszenie deklaracji zmiennych, funkcji, klas na górę
// aktualnie przetwarzanego zasięgu (można wywołać funkcję, zanim została zadeklarowana w kodzie
//
// console.log(x);
// var x = 42;
//
// |
// V
//
// var x_;
// console.log(x_)
// x_ = 42;

// (TDZ = temporary dead zone
// console.log(x)
// let x = 42;

//Scope
//widoczność, dostępność identyfikatorów
//typy zasięgu block(klamry), function(ciało funkcji)

// if (1){
//     var x = 42;
//     let x1 = 42;
//     const x2 = 42;
//
// }
//
// console.log(x);
// console.log(x1);
// console.log(x2);


// let x = 42;
// function magic(){
//     x = 666;
//     console.log(x)//666
// }
//
// console.log(x);//42
// magic();
// console.log(x);//666
//
//
// const x = [1, 2, 3]
//
// function magic(collection, value){
//     collection.push(value);
// }
//
// magic(x, 42);
// console.log(x);