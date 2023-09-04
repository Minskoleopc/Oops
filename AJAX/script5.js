function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        if(res.status == 404){
            throw new Error('no user found') 
        }
        return res.json()
    })
    .then(function(res){
        return res.data 
    })
    .catch(function(msg){
       console.log(msg)
    })
}
// Promise combinators
async function getUsers(){
    let a = await Promise.all([
        getSingleUser(1),
        getSingleUser(2),
        getSingleUser(3),
        getSingleUser(45645)
    ])
    console.log(a)
}
getUsers().then(function(){
    console.log('Hello')
})
