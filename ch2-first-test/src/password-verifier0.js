export const verifyPassword = (input, rules) => {
  const errors = [];
  rules.forEach((rule) => {
    const res = rule(input);
    if (!res.passed) {
      // 이런 큰 실수를 !
      // errors.push(`error ${res.reason}`);
    }
  });

  return errors;
};

// 상태값을 다루는 함수 특성 상 두 함수가 반드시 결합 되어야 한다.
// addRule
// verify
export class PasswordVerifier1 {
  constructor() {
    this.rules = [];
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  verify(input) {
    const errors = [];
    this.rules.forEach((rule) => {
      const res = rule(input);
      if (!res.passed) {
        errors.push(res.reason);
      }
    });
    return errors;
  }
}
