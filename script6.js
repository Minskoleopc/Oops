// // object literal 
// // let amol = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     age:33,
// //     display:function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }
// // console.log(amol)
// // amol.display()

// // function contrcuctor 

// function Person(firstName,lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amol1 = new Person("amol1","rao1")
// let amol2 = new Person("amol2","rao2")




// Every obj has one __proto__ == Parent.prototype
// console.log(amol1.__proto__ === Person.prototype)
// console.log(amol2.__proto__ === Person.prototype)


// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// Person.prototype.country = "India"


// amol1.display()
// amol2.display()

// console.log(amol1)
// console.log(amol2)

// console.log(amol1.country)
// console.log(amol1.country)

// console.log(amol1.hasOwnProperty('country'))
// console.log(amol1.hasOwnProperty('firstName'))


// console.log(amol1 instanceof Person)
// console.log(amol2 instanceof Person)

class PersonB {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln 
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }

    }

    display(){
        console.log(this.firstName + this.lastName) 
    }
}

let amolq = new PersonB("amolq","raoq")
let amolr = new PersonB("amolr","raor")
console.log(amolq)
console.log(amolr)

amolq.display()
amolr.display()


// Program 3


// let amolk = Object.create({})
// console.log(amolk)
// amolk.firstName = "amolk"
// amolk.lastName = "raok"
// amolk.display = function(){
//     console.log(this.firstName  + this.lastName)
// }

// console.log(amolk)
// amolk.display()


let obj = {
    init:function(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amolj = Object.create(gi)
console.log(amolj)
amolj.init('amolj','raoj')
amolj.display()
console.log(amolj)









