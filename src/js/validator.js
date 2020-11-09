'use strict'

export default class Validator {
    constructor(username) {
        this.username = username
    }

    validateUsername() {
        return /^[a-z]([\w-]*[a-z])?$/i.test(this.username) && !/\d{4}/.test(this.username);
    }

}
