


async function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
}


async function getUsers() {
    // try {
    //     let q1 = await Promise.all([
    //         getSingleUser(1),
    //         getSingleUser(2),
    //         getSingleUser(3),
    //     ])
    //     console.log(q1)
    //     q1.forEach(function (el) {
    //         document.write(`<h1>${el.data.id}</h2>`)
    //         document.write(`<h3>${el.data.first_name}${el.data.last_name}</h3>`)
    //         document.write(`<p>${el.data.email}</p>`)
    //         document.write(`<img src = ${el.data.avatar}>`)
    //     })
    // }
    // catch {
    //     console.log("error found")
    // }


    // all settled

    // let b1  = await Promise.allSettled([
    //     getSingleUser(1),
    //     getSingleUser(2),
    //     getSingleUser(3),
    // ])
    // b1.forEach(function (el) {
    //         document.write(`<h1>${el.value.data.id}</h2>`)
    //         document.write(`<h3>${el.value.data.first_name}${el.value.data.last_name}</h3>`)
    //         document.write(`<p>${el.value.data.email}</p>`)
    //         document.write(`<img src = ${el.value.data.avatar}>`)
    //     })

    // any
    let b2 = await Promise.any([
        Promise.reject("fail1"),
        Promise.reject("fail1"),
        Promise.reject("fail1"),
        getSingleUser(1),
        getSingleUser(2),
        Promise.reject("fail1"),
        getSingleUser(3),
    ])
    console.log(b2)

    document.write(`<h1>${b2.data.id}</h2>`)
    document.write(`<h3>${b2.data.first_name}${b2.data.last_name}</h3>`)
    document.write(`<p>${b2.data.email}</p>`)
    document.write(`<img src = ${b2.data.avatar}>`)

    // race()

    try {

        let b3 = await Promise.race([
            getSingleUser(1),
            getSingleUser(2),
            getSingleUser(3),
        ])

        console.log(b3)

    }
    catch {
        console.log("error found")
    }

}
getUsers()






