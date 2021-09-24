let posts={
    // allblogs:["First Blog","Second Blog"]
    //Array of objects 

    allblogs:[
        {id:"1",title:"First Blog Post",description:"First blog description"},
        {id:"2",title:"Second Blog Post",description:"Second blog description"},
    ]
}
//Looping through array
// posts.allblogs.forEach(allblog=>console.log(allblog))
//Loop through an array of objects
posts.allblogs.forEach(allblog=>console.log(allblog))
//Show the title and description 
posts.allblogs.forEach(allblog=>console.log(allblog.title,allblog.description))
