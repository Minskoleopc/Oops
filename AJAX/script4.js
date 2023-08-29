function userOne() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("userOne")
        }, 2000)
    })
}
function userTwo() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("usertwo")
        }, 3000)
    })
}
function userThree() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("userthree")
        }, 2000)
    })
}

// program 1
async function getUser() {
    try {
        let a = await Promise.all([
            userOne(),
            Promise.reject('bye'),
            userTwo(),
            userThree()
        ])
        console.log(a)
    }
    catch {
        console.log("error found")
    }
}
getUser();

async function getUsersTwo() {
    let b = await Promise.allSettled([
        userOne(),
        Promise.reject('bye'),
        userTwo(),
        userThree()
    ])
    console.log(b)
}
getUsersTwo()

async function getUserThree() {
    try {
        let b = await Promise.race([
            userTwo(),
            userOne()
            
        ])
        console.log(b)
    }
    catch {
        console.log("error")
    }
}
getUserThree()

async function getUserFour() {
    try {
        let b = await Promise.any([
            Promise.reject("bye"),
            userTwo(),
            userOne(),
            userThree(), 
        ])
        console.log(b)
    }
    catch {
        console.log("error")
    }
}
getUserFour()












