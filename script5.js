// program 1
// Object literal

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     display:function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// console.log(amol)
// amol.display()
// console.log(chinmay)
// chinmay.display()

// function contructor

// function Human(fn,ln){
//     this.firstName = fn
//     this.lastName  = ln
//     this.display = function(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// let amol2  = new Human("amol2","rao2")
// let chinmay2  = new Human("chinmay2","deshpande2")


// console.log(amol2)
// console.log(chinmay2)


// amol2.display()
// chinmay2.display()

// Prototype inheritance


function Human(fn,ln){
    this.firstName = fn
    this.lastName  = ln
    // this.display = function(){
    //     console.log(this.firstName+this.lastName)
    // }
}

let amol2  = new Human("amol2","rao2")
let chinmay2  = new Human("chinmay2","deshpande2")

console.log(amol2)
console.log(chinmay2)

// Every object has one property __proto__  == Parent.Proptype

console.log(amol2.__proto__=== Human.prototype)
console.log(chinmay2.__proto__ === Human.prototype)

Human.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Human.prototype.country = "India"

amol2.display()
chinmay2.display()

console.log(chinmay2.country)
console.log(amol2.country)

console.log(chinmay2 instanceof Human)
console.log(amol2 instanceof Human)

console.log(chinmay2.hasOwnProperty('firstName'))
console.log(chinmay2.hasOwnProperty('country'))







// es6 class


//object.create 