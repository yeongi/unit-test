test("hello jest" , ()=>{
    expect('hello').toEqual('goodbye');
})

// > ch2-first-test@1.0.0 test
// > jest

//  FAIL  __tests__/my-components.test.js
//   ✕ hello jest (2 ms)

//   ● hello jest

//     expect(received).toEqual(expected) // deep equality

//     Expected: "goodbye"
//     Received: "hello"

//       1 | test("hello jest" , ()=>{
//     > 2 |     expect('hello').toEqual('goodbye');
//         |                     ^
//       3 | })

//       at Object.toEqual (__tests__/my-components.test.js:2:21)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.186 s
// Ran all test suites.


// jest --watch 명령어를 사용하면, 제스트가 파일 변화를 감지 한다.
// >> 지속적인 테스트 프로세스에 큰 도움이 된다.