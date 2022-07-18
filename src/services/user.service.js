import axios from "axios"

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.headers = {
    'Content-Type' : 'application/json'
}


export default class {
    localStorage = window.localStorage

    isLoggined() {
        return !!this.localStorage.getItem('userIssue') //TODO push to env
    }

    getIdCurrentUser() {
        return this.localStorage.getItem('userIssue') //TODO push to env
    }

    // isRegistred() {
    //     let user = false 

    //     if(this.localStorage.getItem('userIssue')) 
    //         test()

    //     return user
    // }

    // async requestUser(user) {
    //     await axios.post('/auth/isset-user', user)
    //         .then(response => {
    //             if(response)
    //                 user = response
    //         }
    //     )
    // }

} 