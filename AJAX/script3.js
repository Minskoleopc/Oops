function userOne() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('userOne')
        }, 2000)
    })
}
function userTwo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('userTwo')
        }, 2000)
    })
}
function userThree() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('userThree')
        }, 2000)
    })
}

// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()

// Promise.all() --- parallel promises -- 4 ---> 
// [1,2,3,4]
// If any one of promise is rejected , it will throw error

async function getUsers() {
    let a = await Promise.all([
        userOne(),
        userTwo(),,
        //Promise.reject("fail"),
        userThree()


    ])
    console.log(a)
}
//getUsers()


// Promise.allSettled()

async function getUserTwo(){
    let b = await Promise.allSettled([
        userOne(),
        userTwo(),
        Promise.reject("fail"),
        userThree()

    ])

    console.log(b)

}
//getUserTwo()

// Promise.race()

async function getUserThree(){
    try {
        let c = await Promise.race([
            userTwo(),
            Promise.reject("bye"),
          
        ])
        console.log(c)

    }
    catch{
        console.log("error occured")
    }   
}
//getUserThree()



async function getUserFour(){
    try {
        let d = await Promise.any([
            Promise.reject("bye"),
            Promise.reject("bye2 "),
            Promise.reject("bye3 "),
            userOne(),
            Promise.reject("bye4"),
            userTwo(),
          
        ])
        console.log(d)

    }
    catch{
        console.log("error occured")
    }   
}
getUserFour()























