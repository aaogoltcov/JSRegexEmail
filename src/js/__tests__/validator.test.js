import Validator from '../validator'
import { test } from "@jest/globals";

test('should wrong e-mail', () => {

    expect((new Validator('_nickname_')).validateUsername()).toBe(false);
    expect((new Validator('123nickname789')).validateUsername()).toBe(false);
    expect((new Validator('-nickname-')).validateUsername()).toBe(false);
    expect((new Validator('nickname_')).validateUsername()).toBe(false);
    expect((new Validator('nickname789')).validateUsername()).toBe(false);
    expect((new Validator('nickname-')).validateUsername()).toBe(false);
    expect((new Validator('_nickname')).validateUsername()).toBe(false);
    expect((new Validator('123nickname')).validateUsername()).toBe(false);
    expect((new Validator('-nickname')).validateUsername()).toBe(false);

})

test('should wright e-mail', () => {

    expect((new Validator('nickname')).validateUsername()).toBe(true);
    expect((new Validator('nick456name')).validateUsername()).toBe(true);
    expect((new Validator('nick-name')).validateUsername()).toBe(true);
    expect((new Validator('nick_name')).validateUsername()).toBe(true);

})
