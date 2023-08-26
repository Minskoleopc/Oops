let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:31,
        skills:["python","java","javascript"]
    },

    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        skills:["java","selenium"]
    },
    {
        firstName:"sarika",
        lastName:"pansare",
        age:30,
        skills:["java","javascript","selenium","cypress"]
    },

    {
        firstName:"mayuri",
        lastName:"katwe",
        age:26,
        skills:["python","java","javascript","selenium","sql","excel"]

    }

]

//console.log(students[0].firstName)

// program 1
students.forEach(function(el,index,arr){
    console.log(el.firstName)
})

// program 2 (firstName+lastName)

students.forEach(function(el){
    console.log(el.firstName+ el.lastName)
})

// program 3 chinmay:5
students.forEach(function(el){
    console.log(el.firstName + ":"+el.skills.length)
})

// program 4 "prompt enginner"
students.forEach(function(el){
    el.skills.push("prompt enginner")
})
console.log(students)

// program 5 (age > 30)

students.forEach(function(el,index,arr){
    if(el.age > 30){
        console.log(el.firstName)
    }
})

// program 6 user with python skills

students.forEach(function(el){
    if(el.skills.includes('python')){
        console.log(el.firstName)
    }
})

// program 7  name of studentes age > 30  and should have skill js 
students.forEach(function(el,index,arr){
    if(el.age > 30 && el.skills.includes("javascript")){
        console.log(el.firstName)
    }
})

