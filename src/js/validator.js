'use strict'

export default class Validator {
    constructor(username) {
        this.username = username
    }

    validateUsername() {
        return /^[^0-9|\-|\_][a-z|\d|\-|\_]+[^0-9|\-|\_]$/mig.test(this.username)
    }

}
