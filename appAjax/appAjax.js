import { BrainHttp } from "./apiDir/brainHttp.js"

const getItem = document.querySelector(".get")
const postItem = document.querySelector(".post")
const putItem = document.querySelector(".put")
const deleteItem = document.querySelector(".delete")

const baseURL = "http://127.0.0.1:3000/api"

// GET*************************************
getItem.addEventListener("click", () => {
    fetchAPI()
})

let fetchAPI = () => {
    let http = new BrainHttp()
    let URL = `${baseURL}/employees`
    http.get(URL, (err, jsonData) => {
        if (err) throw err
        console.log(jsonData)
        let template = ''
        for (let x of jsonData) {
            template += `
                        <tr>
                          <td style="border: 1px solid black">${x.id}</td>
                          <td style="border: 1px solid black">${x.first_name}</td>
                          <td style="border: 1px solid black">${x.last_name}</td>
                          <td style="border: 1px solid black">${x.email}</td>
                          <td style="border: 1px solid black">${x.ip_address}</td>
                        </tr>
                        `
            document.querySelector("tbody").innerHTML = template
        }

    })
}

// POST*************************************
postItem.addEventListener("click", () => {
    let employee = {
        id: '_lala',
        first_name: "Lebron",
        last_name: "Carasas",
        email: 'lebron@gmail.com',
        ip_address: '447.330.330.31'
    }
    let http = new BrainHttp();
    let URL = `${baseURL}/employees`;
    http.post(URL, employee, (jsonData) => {
        fetchAPI()
        console.log(jsonData)
    })
})

// PUT***************************************
putItem.addEventListener("click", () => {
    let empId = "_lala"
    let employee = {
        id: empId,
        first_name: "Valery",
        last_name: "Caragea",
        email: 'valy@gmail.com',
        ip_address: '00000000000'
    }
    let http = new BrainHttp();
    let URL = `${baseURL}/employees/${empId}`;
    http.put(URL, employee, (jsonData) => {
        fetchAPI()
        console.log(jsonData)
    })
})

// DELETE************************************
deleteItem.addEventListener("click", () => {
    let empId = "_lala"
    let http = new BrainHttp();
    let URL = `${baseURL}/employees/${empId}`;
    http.delete(URL, (jsonData) => {
        console.log(jsonData)
        fetchAPI()
    })
})