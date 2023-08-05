// program 1
// let info = {
//     firstName:"chinmay",
//     lastName:"deshande",
//     // function expression
//     display:function(){
//         // this ----> info
//         console.log(this.firstName+ this.lastName)
//     }
// }

// console.log(info.firstName)
// console.log(info.lastName)
// info.display()

// program 2

var firstName = "vijeet"
var lastName = "dani"

// let info = {
//     firstName:"chinmay",
//     lastName:"deshande",
//     // function expression
//     display:function(){
//         // this ----> info
//         console.log(this.firstName+ this.lastName)
//         let display2 = function(){
//             // this - window
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }

// console.log(info.firstName)
// console.log(info.lastName)
// info.display()

// program 3
// let info = {
//     firstName:"chinmay",
//     lastName:"deshande",
//     // function expression
//     display:function(){
//         // this ----> info
//         console.log(this.firstName+ this.lastName)
//         let display2 = ()=>{
//             // this -  info
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }

// console.log(info.firstName)
// console.log(info.lastName)
// info.display()

// program 4

let info = {
    firstName:"chinmay",
    lastName:"deshande",
    // function expression
    display:()=>{
        // this ----> window
        console.log(this.firstName+ this.lastName)
        let display2 = ()=>{
            // this -  window
            console.log(this.firstName + this.lastName)
        }
        display2()
    }
}

console.log(info.firstName)
console.log(info.lastName)
info.display()

