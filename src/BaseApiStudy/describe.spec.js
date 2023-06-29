import { test, expect, describe } from 'vitest'

// 测试套件，可以组织测试, 内部可以有大量的测试案例也可以嵌套套件。
describe("describe", () => {
    test("test1", () => {
        console.log("is describe test1")
    })
    test("test2", () => {
        console.log("is describe test2")
    })
})

// 一个跳过暂时不运行的测试套件
describe.skip("describe skip", () => {
    test("skip", () => {
        console.log("这是一个跳过测试套件的测试案例")
    })
})
// 
// describe.only("describe only1", () => {
//     test("only2", () => {
//         console.log("当前文件的其他测试套件会被阻碍，只运行带only的测试套件1")
//     })
// })
// describe.only("describe only2", () => {
//     test("only2", () => {
//         console.log("当前文件的其他测试套件会被阻碍，只运行带only的测试套件2")
//     })
// })

describe.todo("describe todo", () => {
    test("todo", () => {
        console.log("一个将要运行测试套件，当前不运行")
    })
})