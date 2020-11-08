'use strict'

import Validator from './validator'

console.log((new Validator('_nickname_')).validateUsername())
console.log((new Validator('123nickname789')).validateUsername())
console.log((new Validator('-nickname-')).validateUsername())
console.log((new Validator('nickname_')).validateUsername())
console.log((new Validator('nickname789')).validateUsername())
console.log((new Validator('nickname-')).validateUsername())
console.log((new Validator('_nickname')).validateUsername())
console.log((new Validator('123nickname')).validateUsername())
console.log((new Validator('-nickname')).validateUsername())

console.log((new Validator('nickname')).validateUsername())
console.log((new Validator('nick-name')).validateUsername())
console.log((new Validator('nick_name')).validateUsername())
console.log((new Validator('nick456name')).validateUsername())
