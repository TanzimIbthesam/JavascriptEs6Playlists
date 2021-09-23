//Anaonymous Function 

let profilename=()=>{
    console.log("Profile Name");
}

profilename();

//Es5 way 

(function (){
    console.log("Profile Func");
})
();
// profileFunc();
//Es6 way of writing it 

(()=>{
    console.log("Hello World");
})

()