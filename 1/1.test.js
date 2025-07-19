import {sum} from "./1.js";

const parserTest = () => {
    try {
        const result = sum("1,2");

        if(result === 3) {
            console.log("parserTest example 1 Passed");

        }else {
            throw new Error(`parserTest: expected 3 but was ${result}`);
        }
    }catch(e) {
        console.error(e.stack);
    }
};

parserTest()