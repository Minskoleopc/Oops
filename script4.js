// Object literal

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:33,
//     display:function(){
//         // this ===> chinmay
//         console.log(this.firstName + this.lastName)
//     }
// }

// chinmay.display()

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:33,
//     display:function(){
//         // this ===> amol
//         console.log(this.firstName + this.lastName)
//     }
// }

// amol.display()

// function construtor 
// function Person(fn,ln,ag){
//     this.firstName = fn
//     this.lastName = ln
//     this.age = ag
//     this.display = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol2 = new Person("amol2","rao2",32)
// let chinmay2 = new Person("chinmay2","deshpande2",32)
// console.log(amol2)
// amol2.display()
// amol2.city = "pune"
// amol2['language'] = "hindi"
// console.log(chinmay2)


// function Vehicle(cl,type){
//     this.color = cl
//     this.type = type
//     this.displayColor = function(){
//         console.log(this.color)
//     }
// }
// let audi = new Vehicle("red","suv")
// console.log(audi)
// audi.displayColor()

// Es6 class
class Person2 {
    constructor(fn,ln,ag){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag
        this.display = function(){
            console.log(this.firstName + this.lastName)
        }
    }
}


let amol3 = new Person2("amol3","rao3",31)
console.log(amol3)
amol3.display()

// Object.create











//Object.create


