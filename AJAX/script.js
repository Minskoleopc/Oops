// let q1 = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }



// let buttonA = document.querySelector('button')

// buttonA.addEventListener('click', function () {
//     q1.data.forEach(function (el) {
//         // console.log(el.email)
//         // console.log(el.id)
//         // console.log(el.first_name)
//         // console.log(el.last_name)
//         // console.log(el.avatar)
//         document.write(`<h1>${el.id}</h2>`)
//         document.write(`<h3>${el.first_name}${el.last_name}</h3>`)
//         document.write(`<p>${el.email}</p>`)
//         document.write(`<img src = ${el.avatar}>`)
//     })

// })


// fetch()


// program 2 
let buttonA = document.querySelector('button')
function getUsers() {
    fetch('https://reqres.in/api/users?page=1')
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            res.data.forEach(el => {
                document.write(`<h1>${el.id}</h2>`)
                document.write(`<h3>${el.first_name}${el.last_name}</h3>`)
                document.write(`<p>${el.email}</p>`)
                document.write(`<img src = ${el.avatar}>`)
            });
        })
}

buttonA.addEventListener('click',getUsers)






