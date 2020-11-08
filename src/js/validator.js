'use strict'

export default class Validator {
    constructor(username) {
        this.username = username
    }

    validateUsername() {
        return /^[a-z]+(\d{0,3})[a-z\-\_]+(\d{0,3})[a-z\-\_]+(\d{0,3})[a-z]+$/ig.test(this.username)
    }

}
