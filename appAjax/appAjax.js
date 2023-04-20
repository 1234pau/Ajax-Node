import { BrainHttp } from "./apiDir/brainHttp.js"
const addemp = document.querySelector(".addemp")
const close = document.querySelector(".close")
const dialog = document.querySelector("dialog")
const close_ = document.querySelector(".close_")
const modalUpdate = document.querySelector(".modalUpdate")
addemp.addEventListener("click", () => {
    dialog.showModal()
})
close.addEventListener("click", () => {
    dialog.close()
})
close_.addEventListener("click", () => {
    modalUpdate.close()
})

const addEmployee = document.querySelector(".addEmployee") // POST

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
const createID = () => {
        return '_' + Math.random().toString(36).substr(2, 9)
    }
    // POST*************************************
const id = document.querySelector(".id")
const first_name = document.querySelector(".first_name")
const last_name = document.querySelector(".last_name")
const email = document.querySelector(".email")
const ip_addres = document.querySelector(".ip_addres")
addEmployee.addEventListener("click", (e) => {
    e.preventDefault()
    let employee = {
        id: createID(),
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        ip_address: ip_addres.value
    }
    let http = new BrainHttp();
    let URL = `${baseURL}/employees`;
    http.post(URL, employee, (jsonData) => {
        fetchAPI()
        console.log(jsonData)
    })
    id.value = ""
    first_name.value = "",
        last_name.value = "",
        email.value = "",
        ip_addres.value = ""
    dialog.close()
})

// PUT***************************************
const id_ = document.querySelector(".id_")
const first_name_ = document.querySelector(".first_name_")
const last_name_ = document.querySelector(".last_name_")
const email_ = document.querySelector(".email_")
const ip_addres_ = document.querySelector(".ip_addres_")
const tbody_tag = document.querySelector(".tbody_tag")
const addEmployee_ = document.querySelector(".addEmployee_")
tbody_tag.addEventListener("click", (e) => {
    const getUpdateButton = e.target
    if (getUpdateButton.className === "put") {
        const selectedEmp = getUpdateButton.parentElement.parentElement.firstElementChild.innerHTML
        console.log(selectedEmp)
        let http = new BrainHttp();
        let URL = `${baseURL}/employees`;
        http.get(URL, (err, jsonData) => {
            if (err) throw err

            let selectedId = jsonData.find((x) => {
                return x.id === selectedEmp.trim()
            })
            console.log(selectedId)
                // id_.value = selectedId.id
                // first_name_.value = selectedId.first_name
                // last_name_.value = selectedId.last_name
                // email_.value = selectedId.email
                // ip_addres_.value = selectedId.ip_address
        })
        modalUpdate.showModal()

    } else if (getUpdateButton.className === "delete") {
        const selectedEmp = getUpdateButton.parentElement.parentElement.firstElementChild.innerHTML
        console.log(selectedEmp)
        let http = new BrainHttp();
        let URL = `${baseURL}/employees/${selectedEmp.trim()}`;
        http.delete(URL, (jsonData) => {
            console.log(jsonData)
            fetchAPI()
        })
    }
})

// let empId = id_.value.trim()
// let newEmployee = {
//     first_name: first_name_.value,
//     last_name: last_name_.value,
//     email: email_.value,
//     ip_address: ip_addres_.value
// }
// addEmployee_.addEventListener("click", (e) => {
//     e.preventDefault()
//     let http = new BrainHttp();
//     let URL = `${baseURL}/employees/${empId}`;
//     http.put(URL, newEmployee, (jsonData) => {
//         fetchAPI()
//         console.log(jsonData)
//     })
//     modalUpdate.close()
// })

// DELETE************************************
// deleteItem.addEventListener("click", () => {
//     let empId = "_lala"
//     let http = new BrainHttp();
//     let URL = `${baseURL}/employees/${empId}`;
//     http.delete(URL, (jsonData) => {
//         console.log(jsonData)
//         fetchAPI()
//     })
// })