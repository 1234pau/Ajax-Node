const express = require("express")
const router = express.Router()

let employees = [{
        id: '_abedef',
        first_name: "John",
        last_name: "Wilson",
        email: 'john@gmail.com',
        ip_address: '127.0.0.1'
    },
    {
        id: '_gijklm',
        first_name: "Andreea",
        last_name: "Wilson",
        email: 'andrea@gmail.com',
        ip_address: '127.067.03.14'
    }
]

// GET method
router.get('/employees', (req, res) => {
    res.json(employees)
    console.log('GET request')
        // res.json({ msg: 'GET Request is Success' })
})

// POST method
router.post('/employees', (request, res) => {
    const employee = {
            id: request.body.id,
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            email: request.body.email,
            ip_address: request.body.ip_address
        }
        // const employee = {
        //     id: request.id,
        //     first_name: request.first_name,
        //     last_name: request.last_name,
        //     email: request.email,
        //     ip_address: request.ip_address
        // }

    employees.push(employee)
    console.log('POST request')
    res.json({ msg: 'POST Request is Success' })
})

// PUT(UPDATE) method
router.put('/employees/:id', (req, res) => {
    const getId = req.params.id
    let updateEmployee = {
        id: getId,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        ip_address: req.body.ip_address
    }
    let existingEmployee = employees.find((employee) => {
        return employee.id === getId
    })
    employees.splice(employees.indexOf(existingEmployee), 1, updateEmployee)
    console.log('PUT request')
        // res.json({ msg: 'PUT Request is Success' })

})

// DELETE method
router.delete('/employees/:id', (req, res) => {
    const getId = req.params.id
    employees = employees.filter((employee) => {
        return employee.id !== getId
    })
    console.log('DELETE request')
        // res.json({ msg: 'DELETE Request is Success' })
})

module.exports = router