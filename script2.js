// // object literal 

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:24
// }

// // retrive
// console.log(info.firstName)
// console.log(info['firstName'])

// // update 

// info.firstName = "tanmay"
// info['firstName'] = "ram"


// // delete 
// delete info.firstName
// delete info['lastName']

// // add
// info.city = "pune"
// info['language'] = "hindi"

// // loop
// let vehicle = {
//     color:"red",
//     type:"sedane"
// }

// for(let key in vehicle){
//     console.log(key,vehicle[key])
// }

// for(let key of Object.keys(vehicle)){
//     console.log(key)
// }

// for(let val of Object.values(vehicle)){
//     console.log(val)
// }

// for(let kv of Object.entries(vehicle)){
//     console.log(kv)
// }

// Object literal

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

amol.display()

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:33,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

chinmay.display()

// 100 object
// template
// user defined datatype


// function construtor  ----- objects
// Es6 class            ----- objects
// Object.Create        ----- objects


// function constructor  
function Person(fn,ln,age){
    this.firstName = fn
    this.lastName  =ln
    this.age = age
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}
let hemant = new Person("hemant","deshmukh",44)
let ram = new Person("ram","dani",33)
console.log(hemant)
console.log(ram)

// retrive 
console.log(ram.firstName)
// update 
ram.firstName = "ram lord"
// add 
ram.language = "sanskrit"
// delete 
delete ram.lastName

console.log(ram)
console.log(hemant)


