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
    expect((new Validator('яnickname')).validateUsername()).toBe(false);
    expect((new Validator('nicknameя')).validateUsername()).toBe(false);
    expect((new Validator('$nickname')).validateUsername()).toBe(false);
    expect((new Validator('nickname$')).validateUsername()).toBe(false);
    expect((new Validator('nick1234name')).validateUsername()).toBe(false);
    expect((new Validator('nic123k4567n789ame')).validateUsername()).toBe(false);
    expect((new Validator('nic1234k456n789ame')).validateUsername()).toBe(false);
    expect((new Validator('nic123k456n7890ame')).validateUsername()).toBe(false);

})

test('should wright e-mail', () => {

    expect((new Validator('nickname')).validateUsername()).toBe(true);
    expect((new Validator('nick456name')).validateUsername()).toBe(true);
    expect((new Validator('nick-name')).validateUsername()).toBe(true);
    expect((new Validator('nick_name')).validateUsername()).toBe(true);
    expect((new Validator('nic4k456n7ame')).validateUsername()).toBe(true);
    expect((new Validator('nic123k456n789ame')).validateUsername()).toBe(true);
    expect((new Validator('a123z')).validateUsername()).toBe(true);
    expect((new Validator('a')).validateUsername()).toBe(true);

})
