// 这是一个测试的生命周期钩子
// 其中包括了beforeEach、 afterEach、beforeAll、afterAll


import { test } from 'vitest';
import { it, expect, describe, beforeEach, beforeAll, afterEach, afterAll } from 'vitest'

beforeEach(() => {
    console.log(1);
});
afterEach(() => {
    console.log(2);
});

beforeAll(() => {
    console.log(3);
});
afterAll(() => {
    console.log(4);
});


describe("setup and teardown", () => {
    test("test", () => {
        beforeEach(() => {
            console.log(5);
        });
        afterEach(() => {
            console.log(6);
        });
        beforeAll(() => {
            console.log(7);
        });
        afterAll(() => {
            console.log(8);
        });
    })
})

// 执行输出的结果是  1 2 6 3 4 8