export function getValueAtObject(obj, key) {
    if (obj.hasOwnProperty(key)) return obj[key];
    else throw new Error("그런키는 없습니다.");
}

window.getValueAtObject = getValueAtObject;

const obj = {
    name: "tiger",
    age: 40,
};

console.log(getValueAtObject(obj, "aaa"));

// 객체에 키를 입력했을 때 값이 나오길 기대
// 함수는 매개변수를 유연하게 받을수록 재사용성이 증가

// function getValueAtObject(object, key) {
//     // if(!(Object.prototype.toString.call(object).slice(8,-1).toLowerCase() === 'object')){

//     if (!(typeof object === "object")) {
//         throw new TypeError("getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.");
//     }

//     if (typeof key !== "string") {
//         throw new TypeError("getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.");
//     }

//     if (!(key in object)) {
//         throw new SyntaxError("해당 객체에는 key값이 존재하지 않습니다.");
//     }

//     return object[key];
// }

// console.log(getValueAtObject(obj, "aaa"));

function _getValueAtObject(object, key) {
    const entries = Object.entries(object);
    let value;
    // for(let [k,v] of entries) if(k === key ) return v

    entries.forEach(([k, v]) => (k === key ? (value = v) : ""));

    return value;
}
