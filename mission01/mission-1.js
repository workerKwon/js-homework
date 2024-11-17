function getNumberAtArray(arr, index) {
    if (arr[index]) return arr[index];
    else console.error("배열의 범위를 벗어났습니다.");
}

window.getNumberAtArray = getNumberAtArray;

console.log(_getValueAtObject(obj, "name"));

// 뭐 부터 시작하지?

// 1. 함수의 이름
// 2. 함수의 실행부 작성
// 3. 함수의 로직
// 4. validation

const arr = ["정주연", "박혜미", "김영현"];

function getNumberAtArray(array, index) {
    if (!Array.isArray(array)) {
        throw new Error(`전달된 첫 번째 인수의 데이터 타입은 ${typeof array} 타입 입니다. 해당 함수의 첫 번째 인수는 배열 타입 이어야 합니다.`);
    }

    if (index >= 0 && index < array.length) {
        return array[index];
    } else {
        throw new Error("...");
    }
}

console.log(getNumberAtArray(arr, 3));
