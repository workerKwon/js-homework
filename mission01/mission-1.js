function getNumberAtArray(arr, index) {
    if (arr[index]) return arr[index];
    else console.error("배열의 범위를 벗어났습니다.");
}

window.getNumberAtArray = getNumberAtArray;
