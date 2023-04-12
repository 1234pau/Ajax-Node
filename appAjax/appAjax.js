import { BrainHttp } from "./apiDir/brainHttp.js"
const addemp = document.querySelector(".addemp")
const close = document.querySelector(".close")
const dialog = document.querySelector("dialog")
addemp.addEventListener("click", () => {
    dialog.showModal()
})
close.addEventListener("click", () => {
    dialog.close()
})

const addEmployee = document.querySelector(".addEmployee") // POST
const putItem = document.querySelector(".put") // PUT
const deleteItem = document.querySelector(".delete") // DELETE

const baseURL = "http://127.0.0.1:3000/api"

// GET*************************************
window.addEventListener("DOMContentLoaded", () => { // GET
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
                          <td style="border: 1px solid black; width: 100px;">${x.id}</td>
                          <td style="border: 1px solid black; width: 100px;">${x.first_name}</td>
                          <td style="border: 1px solid black; width: 100px;">${x.last_name}</td>
                          <td style="border: 1px solid black; width: 100px;">${x.email}</td>
                          <td style="border: 1px solid black; width: 100px;">${x.ip_address}</td>
                          <td style="border: 1px solid black; width: 100px;">
                            <button class="put">Update</button>
                            <button class="delete">Delete</button>
                          </td>
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
    let empId = "_abedef"
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