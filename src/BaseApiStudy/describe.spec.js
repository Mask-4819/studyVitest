import { test, expect, describe } from 'vitest'

// 测试套件，可以组织测试, 内部可以有大量的测试案例也可以嵌套套件
describe("describe", () => {
    test("test1", () => {
        console.log("is test1")
    })
    test("test2", () => {
        console.log("is test2")
    })
})