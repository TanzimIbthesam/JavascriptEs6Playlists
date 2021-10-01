//First define an object
let myprofile={
    myname:"Tanzim",
    1:"One to Many"
}
// console.log(myprofile);
// console.log(myprofile."1");
console.log(myprofile[1]);
// console.log(myprofile.myname);
//Bracket notation 
console.log(myprofile["myname"]);
//Add new properties with bracket notation 

console.log(myprofile["age"]=25);

console.log(myprofile);

const profileObj="myname";
console.log(myprofile[profileObj]);