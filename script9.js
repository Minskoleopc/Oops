// program 1
// class Student {
//     firstName ="chinmay"
//     lastName = "deshpande"
//     adharNo = 123

//     displayInfo(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher  extends Student {
//     salary = 1000
//     specialization(){
//         console.log("sceince")
//     }
// }

// let amol = new Teacher()

// console.log(amol.salary)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.adharNo)

// amol.specialization()
// amol.displayName()



// program 2
// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln 
//         this.adharNo = adharNo 

//     }

//     displayInfo(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher extends Student {
//     salary = 1000

//     specilaization(){
//         console.log('science')
//     }
// }

// let teacherA = new Teacher("chinmaya","deshpandea",123)
// console.log(teacherA.firstName)
// console.log(teacherA.lastName)
// console.log(teacherA.salary)
// console.log(teacherA.adharNo)
// teacherA.specilaization()
// teacherA.displayInfo()

// program 3
// class Student {
//     constructor(fn, ln, adharNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo
//     }
//     displayInfo() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     constructor(fn, ln, adharNo,salary){
//         super(fn, ln, adharNo)
//         this.salary = salary
//     }

//     specialization(){
//         console.log('science')
//     }
// }

// let chinmayD = new Teacher("chinmay","deshpande",123,1000)

// console.log(chinmayD.firstName)
// console.log(chinmayD.lastName)
// console.log(chinmayD.adharNo)
// console.log(chinmayD.salary)

// chinmayD.displayInfo()
// chinmayD.specialization()

// program 4
class GrandFather {
    constructor(fn , ln ){
        this.firstName =  fn
        this.lastName = ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends  GrandFather{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fatherFname = ffn
    }
    displayFatherName(){
        console.log(this.fatherFname + this.lastName)
    }

}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sName = ssn
    }

    displaySName(){
        console.log(this.sName + this.lastName)
    }
}

let chinmay = new Son("manoharrao","deshpande","shirish","chinmay")
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sName)
console.log(chinmay.fatherFname)
chinmay.displaySName()
chinmay.displayGName()
chinmay.displayFatherName()












