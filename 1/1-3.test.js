import {sum} from "./1.js";

const assertEquals = (expected, actual) => {
    if(actual !== expected) {
        throw new Error(`Expected ${expected} but was ${actual}`)
    }
};

const check = (name, implementation) => {
    try {
        implementation();
        console.log(`${name} passed`);
    }catch(e) {
        console.error(`${name} FAILED`, e.stack);
    }
}

check(`sum with 2 numbers should sum them up`, ()  =>{
    const res= sum("1,2");
    assertEquals(3, res);
})

check(`sum with multiple digit numbers should sum them up`, ()  =>{
    const res= sum("10,20");
    assertEquals(30, res);
})