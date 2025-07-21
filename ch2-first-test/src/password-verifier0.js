export const verifyPassword = (input, rules) => {
    const errors = [];
    rules.forEach( rule => {
        const res = rule(input);
        if(!res.passed) {
            errors.push(`error ${res.reason}`);
        }
    })

    return errors;
}