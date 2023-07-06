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
        // toBeCloseTo 用于浮点数的断言，如果用toBe，会因为浮点数精度丢失的问题而报错
        expect(0.1 + 0.2).toBeCloseTo(0.3)
        // 用于断言是否等于undefined
        expect(undefined).toBeUndefined();
        // 判断是真值还是假值 
        // JavaScript 中除了 false ，0 ，'' ，null ，undefined 和 NaN，其他一切都是为真。
        expect(1).toBeTruthy();
        expect(0).toBeFalsy();


        // toEqual 用于断言对象是否相等
        const obj1 = {
            name: "zs",
            age: 18
        }
        const obj2 = {
            name: "zs",
            age: 18
        }
        expect(obj1).toEqual(obj2);
    });
})

