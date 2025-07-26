import { PasswordVerifier1 } from "../password-verifier0";

// 또한 beforeEach를 대체할 수 있다.
const makeVerifier = () => new PasswordVerifier1();
const passingRule = () => ({ passed: true, reason: "" });

const makeVerifierWithPassingRule = () => {
  const verifier = makeVerifier();
  verifier.addRule(passingRule);
  return verifier;
};

const makeVerifierWithFailedRule = (reason) => {
  const verifier = makeVerifier();
  const fakeRule = () => ({ passed: false, reason: reason });
  verifier.addRule(fakeRule);
  return verifier;
};

describe("veriftPassword", () => {
  describe("with a failing rule", () => {
    it("has an error message based on thre rule.reason", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      const errors = verifier.verify("any input");
      expect(errors[0]).toContain("fake reason");
    });

    it("has exactly one error", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      const errors = verifier.verify("any input");
      expect(errors.length).toBe(1);
    });
  });

  describe("with a passing rule", () => {
    it("has no errors", () => {
      const verifier = makeVerifierWithPassingRule();
      const errors = verifier.verify("any value");
      expect(errors.length).toBe(0);
    });
  });

  describe("with a failing and passing rule", () => {
    it("has one errors", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      verifier.addRule(passingRule);
      const errors = verifier.verify("any input");
      expect(errors.length).toBe(1);
    });

    it("error text belongs to failed rule", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      verifier.addRule(passingRule);
      const errors = verifier.verify("any input");
      expect(errors[0]).toContain("fake reason");
    });
  });
});

// 테스트 코드에 한해서는 모든 로직을 공통화해 버리면 오히려 코드 결합도가 과도하게 높아지고 유연성이 떨어져
// 추후에 유지보수 해야할 수도 있다.
// 테스트 수정보다 공통 로직을 사용하는 다른 코드에서 어떤 영향이 있을지 살펴보아야 하는 배보다 배꼽이 더 커지는 상황을 피하기 위함인 것이다.
// 물론 이는 개인적인 선호도 영역이다.
