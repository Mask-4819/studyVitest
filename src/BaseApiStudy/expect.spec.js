import { test, expect, describe } from 'vitest'
//  expect 断言

describe('study expect', () => {
    test('toBe', () => {
        const expectObj = {
            type: 'apples',
            count: 13,
        }
        // toBe 用于断言基础类型
        expect(expectObj.count).toBe(13);

    });
    // fails
    test.fails("test fails", () => {
        // toBe 最好不要使用来断言浮点数，会因为精度丢失导致出错
        expect(1 + 2).toBe(3) // 出错，断言的结果为 0.300000000000004
        // expect(0.1 + 0.2).toBe(0.3) // 出错，断言的结果为 0.300000000000004
    })
})

