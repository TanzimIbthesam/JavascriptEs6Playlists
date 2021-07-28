//scope
//Accessability of the current context of the code by which accessability of current variables of Javascript is defined

//Redeclaring the variable
// var a=5;
// var a=7;
// console.log(a);
//let
// let a=5;
// let a=7;
// let a=5;
//  a=7;
// console.log(a);

let globalScope="global";

// if(true){
//     //Local scope
//     let localScope="local";
//     globalScope="Updated global scope"
//     console.log(globalScope);
// }

// console.log(globalScope);
// console.log(localScope);
const globalScope="global";
// globalScope="Updated global"
// const globalScope="global new";
// console.log(globalScope);
if(true){
    //Local scope
    const localScope="local";
    globalScope="Updated global scope"
    console.log(globalScope);
}

console.log(globalScope);

