export class BrainHttp {
    constructor() {
        this.http = new XMLHttpRequest()
    }

    get = (url, callback) => {
        this.http.open("GET", url, true)
        this.http.send()
        this.http.onload = () => {
            if (this.http.status === 200) {
                const data = this.http.responseText
                const jsonData = JSON.parse(data)
                callback(null, jsonData)
            } else {
                callback(`Error : ${this.http.status}`);
            }

        }
    }
    post = (url, employee, callback) => {
        this.http.open("POST", url, true)
        this.http.setRequestHeader("Content-Type", "application/json")
        this.http.send(JSON.stringify(employee)) // here will be the post data
        this.http.onload = () => {
            if (this.http.status === 200) {
                const data = this.http.responseText
                const jsonData = JSON.parse(data)
                callback(jsonData)
            }
        }
    }
    put = (url, employee, callback) => {
        this.http.open("PUT", url, true)
        this.http.setRequestHeader("Content-Type", "application/json")
        this.http.send(JSON.stringify(employee)) // here will be the post data
        this.http.onload = () => {
            if (this.http.status === 200) {
                const data = this.http.responseText
                const jsonData = JSON.parse(data)
                callback(jsonData)
            }
        }
    }
    delete = (url, callback) => {
        this.http.open("DELETE", url, true)
        this.http.setRequestHeader("Content-Type", "application/json")
        this.http.send()
        this.http.onload = () => {
            if (this.http.status === 200) {
                const data = this.http.responseText
                const jsonData = JSON.parse(data)
                callback(jsonData)
            }
        }
    }
}