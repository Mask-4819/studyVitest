import { test, it, expect, describe } from 'vitest'

// test 的别名是it，在vitest中。test的作用是定义一组测试
test("test", () => {
    console.log("I am test");
});

test.skip("skip test", () => {
    console.log("这是一个跳过测试，运行结果会在控制台提示有跳过的测试")
})

test.only("only test", () => {
    console.log("使用only时,只允许带有only的测试可以运行，其他的都会跳过")
});

test.todo("todo test", () => {
    console.log("使用todo来标记未进行的测试案例, 不会执行， 运行输出的结果带有 todo")
});