// // Incorrect way

// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     salary = 1000
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }

// }


// Program 2
// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// class Teacher  extends Student {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }

// }

// let amol = new Teacher()
// console.log(amol.salary)
// console.log(amol.firstName)
// console.log(amol.lastName)
// amol.displayName()
// amol.displaySalary()

// Program 3

// class Student {

//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher extends Student {
//     salary  = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amol  = new Teacher("chinmay","deshpande");
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.salary)
// amol.displayName()
// amol.displaySalary()

// program 4

class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}


class Teacher  extends Student{
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}

let n1 = new Teacher("chinmay","deshpande",9000) 
console.log(n1.firstName)
console.log(n1.lastName)
console.log(n1.salary)
n1.displayName()
n1.displayName()



































