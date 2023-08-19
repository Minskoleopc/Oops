// program 1
function additionA(){
    console.log("A")
}
function additionB(){
    console.log("B")
}
//additionA()
//additionB()

// program 2
function additionC(){
    setTimeout(function(){
        console.log("hello")
    },3000)
}

function additionD(){
    console.log("bye")

}
//additionC()
//additionD()


// program 3
// async --- sync
function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000),
    setTimeout(function(){
        console.log("Get user by id")
    },2000),
    setTimeout(function(){
        console.log("Get info")
    },1000)

}
//getInfo()

// program 4
function getInfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("Get user by id")
            setTimeout(function(){
                console.log("Get info")
            },1000)
        },2000)
    },3000
)}
//getInfo()

//  Promises() ---- async code synchronously

// let pro = new Promise(function(resolve , reject){
//     let a = 10
//     let b = 5
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// consuming promises with  then 
// pro.then(function(q1){
//     console.log(q1)
// },function(q2){
//     console.log(q2)
// })

// consuming promises with  then catch 
// pro.then(function(q1){
//     console.log(q1)
// })
// .catch(function(q2){
//     console.log(q2)
// })

// consuming promises with  then catch finally
// pro.then(function(q1){
//     console.log(q1)
// })
// .catch(function(q2){
//     console.log(q2)
// })
// .finally(function(){
//     console.log("finally")
// })


// program 4
let pro3 = new Promise(function(resolve,reject){
    let name = "chinay"
    if(name.length >= 7){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})

pro3
.then(function(str){
    console.log(str)
    return "hi"
})
.then(function(str2){
    console.log(str2)
})
.catch(function(str3){
    console.log(str3)
})
.finally(function(){
    console.log("finally")
})
























