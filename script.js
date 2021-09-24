console.log("On Line one",this);
 let posts={
     title:"First Post",Description:"First post desc",
     allPostDesc(){
          console.log(this.title);

          (function(){
                console.log("On line eight",this);
          })()
     }
 }
 posts.allPostDesc();

 console.log("On Line ten",this);