// Program 1
// class Person {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let chinmay = new Person()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// chinmay.displayName()

// let amol = new Person()
// console.log(amol.firstName)
// console.log(amol.lastName)
// chinmay.displayName()

// Program2
// class Person {

//     constructor(firstName , lastName){
//         this.firstName = firstName
//         this.lastName = lastName    
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// let ninad = new Person("ninad","dani")
// let vijeet = new Person("vijeet","dani")
// ninad.displayName()
// vijeet.displayName()



// program 3

// class PersonC {
//     setFirstName(fn){
//         this.firstName = fn
//     }
//     setLastName(ln){
//         this.lastName = ln
//     }
//     getFirstName(){
//         return this.firstName
//     }
//     getLastName(){
//         return this.lastName
//     }
// }

// let amol = new PersonC() 
// console.log(amol)
// amol.setFirstName("amol")
// amol.setLastName("rao")
// console.log(amol)

// console.log(amol.getFirstName())
// console.log(amol.getLastName())

// Program 4 
//set and get keyword


class PersonD {
    set firstN(fn){
        this.firstName = fn
    }
    set lastN(ln){
        this.lastName = ln
    }
    get firstN(){
        return this.firstName
    }
    get lastN(){
        return this.lastName
    }

}

let a = new PersonD()
console.log(a)

a.firstN = "chinmay"
console.log(a.firstN)

a.lastN = "deshpande"
console.log(a.lastN)













// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// console.log(info.firstName)
// console.log(info['lastName'])
// info.firstName = "tanmay"















