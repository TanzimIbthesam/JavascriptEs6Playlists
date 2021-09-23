


//callback 
// function newPromo(promocode){
//     console.log('His discount is'+promocode);
// }

// newPromo(25)
// function newPromo(callbackFunc){
//     let promocode=25;
//   callbackFunc(promocode)
// }

// newPromo(function(promocode){
//     console.log(`My promocode is ${promocode}`);
// })
//Es6 way

const newPromoTwo=(callbackFunc)=>{
     let promocode=25;
     callbackFunc(promocode)
}

newPromoTwo((promocode)=>{
  console.log(`The promocode is ${promocode}`);
});