import { oneUpperCaseRule } from "../password-rules";

describe("one uppercase rule", () => {
  test("given no upper case, it failed", () => {
    const res = oneUpperCaseRule("abc");
    expect(res.passed).toEqual(false);
  });

  test("given one uppercase, it passes", () => {
    const res = oneUpperCaseRule("Abc");
    expect(res.passed).toEqual(true);
  });

  test("given a different uppercase, it passes", () => {
    const res = oneUpperCaseRule("aBc");
    expect(res.passed).toEqual(true);
  });
});
