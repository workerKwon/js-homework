const user = {
    id: "asd@naver.com",
    pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const loginForm = document.querySelector(".login-form");
const nodeEmail = document.getElementById("userEmail");
const nodePw = document.getElementById("userPassword");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    validateEmailForm(nodeEmail);
    validatePasswordForm(nodePw);

    const email = checkAuth(nodeEmail);
    const password = checkAuth(nodePw);

    if (email && password) {
        handleLogin();
    } else {
        alert("이메일과 비밀번호를 다시 확인해주세요.");
    }
});

function validateEmailForm(node) {
    if (!emailReg(node.value)) {
        node.classList.add("is--invalid");
    } else {
        node.classList.remove("is--invalid");
    }
}

function validatePasswordForm(node) {
    if (!pwReg(node.value)) {
        node.classList.add("is--invalid");
    } else {
        node.classList.remove("is--invalid");
    }
}

function checkAuth(node) {
    const value = node.value;
    if (value === user.id || value === user.pw) {
        return true;
    }
    return false;
}

function handleLogin() {
    window.location.href = "welcome.html";
}

function emailReg(text) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(text).toLowerCase());
}

function pwReg(text) {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
}
