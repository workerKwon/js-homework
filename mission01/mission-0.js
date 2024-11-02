export function getValueAtObject(obj, key) {
    if (obj.hasOwnProperty(key)) return obj[key];
    else console.error("그런키는 없습니다.");
}

window.getValueAtObject = getValueAtObject;
