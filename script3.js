let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:33,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

info.display()

// retrive (dot notation and bracket notation)

console.log(info.firstName)
console.log(info['firstName'])

// update (dot notation and bracket notation)
info.firstName = "tanmay"
info['lastName'] = "dani"
console.log(info)
// add (dot notation and bracket notation)

info.city = "pune"
info['language'] = "marathi"
// delete (dot notation and bracket notation)
delete info.firstName
delete info['lastName']

console.log(info)


let names = ["ram","sameer","prachi","ninad"]

for(let i = 0 ; i < names.length ; i++){
   // console.log(i)
    console.log(names[i])
}

let vehicle = {
    //property:value
    //key:value
    color:"red",
    model:"Q4",
    name:"Audi"
}
//console.log(vehicle[0])
// Object does not stores by index
// dot notaion will not work inside the loop

for(let prop in vehicle){
    //console.log(prop)
    console.log(prop,vehicle[prop])
}

for(let prop of Object.keys(vehicle)){
    console.log(prop)
}

for(let val of Object.values(vehicle)){
    console.log(val)
}

for(let arr of Object.entries(vehicle)){
    console.log(arr)
}



