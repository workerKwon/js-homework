/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const cachedAudio = {};

data.forEach((item, index) => {
    cachedAudio[index + 1] = createAudioPlayer(item.name);
});

document.addEventListener("DOMContentLoaded", () => {
    const activeElement = document.querySelector(".nav .is-active");
    if (activeElement) {
        const dataIndex = activeElement.getAttribute("data-index");
        cachedAudio[dataIndex].play();
    }
});

const body = document.querySelector("body");
const visualImg = body.querySelector(".visual img");
const nickName = body.querySelector(".nickName");

const navList = document.querySelector(".nav ul");

navList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "IMG") {
        navList.querySelectorAll("li").forEach((li) => {
            removeActive(li);
        });

        clickBtn(e.target.closest("li"));
    }
});

function createAudioPlayer(name) {
    const source = `./assets/audio/${name.toLowerCase()}.m4a`;
    return new AudioPlayer(source);
}

function setBgColor(index) {
    body.style.background = `linear-gradient(to bottom, ${data[index - 1].color[0]}, ${data[index - 1].color[1]})`;
}

function setImg(index) {
    visualImg.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
    visualImg.alt = data[index - 1].alt;
}

function setNameText(index) {
    nickName.textContent = data[index - 1].name;
}

function setActive(elem) {
    elem.classList.add("is-active");
}

function removeActive(elem) {
    elem.classList.remove("is-active");
}

function playAudio(elemIdx) {
    Object.values(cachedAudio).forEach((value) => {
        value.stop();
    });
    cachedAudio[elemIdx].play();
}

function clickBtn(elem) {
    const elemIdx = elem.getAttribute("data-index");
    setActive(elem);
    setBgColor(elemIdx);
    setImg(elemIdx);
    setNameText(elemIdx);
    playAudio(elemIdx);
}
