import { verifyPassword } from "../password-verifier0";

// USE 전략을 이용해서
// 테스트 이름을 수정했다
// unit under test , scenario, expactation
// 테스트할 대상, 시나리오, 기대동작  >> use
// 비밀번호를 검증한다, 하지만 failing rule을 얻었다, 그러면 에러가 예상된다.

// use
describe("veriftPassword", () => {
  // scenario
  describe("with a failing rule", () => {
    //함수를 한단계 올릴 수도 있다.
    const fakeRule = (input) => ({
      passed: false,
      reason: "fake reason",
    });

    // expactation
    // test 대신 it을 사용할 수도 있다. > 이러면 좀 더 직관적으로 코드를 짤 수 있다
    it("returns errors", () => {
      const errors = verifyPassword("any value", [fakeRule]);

      expect(errors[0]).toMatch("fake reason");
    });
  });
});
