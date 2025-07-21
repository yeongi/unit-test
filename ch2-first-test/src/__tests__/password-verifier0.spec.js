import { verifyPassword } from "../password-verifier0";

test('badly named test', ()=> {
    const fakeRule = input => ({
        passed: false,
        reason: 'fake reason'
    })

    const errors = verifyPassword('any value', [fakeRule]);

    expect(errors[0]).toMatch('fake reason');
})

// 준비 Arrange - 실행 Act - 검증 Assert  AAA 패턴으로 작성
