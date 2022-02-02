const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);