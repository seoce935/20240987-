// 올바른 경로로 import (파일명 오타 수정)
import { session, session_get, session_check } from './js_session.js';
import { encrypt_text, decrypt_text } from './js_crypto.js';
import { generateJWT, checkAuth } from './js_session.js';

function init() {
    const emailInput = document.getElementById('typeEmail'); // 오타: getElementBuId → getElementById
    const idsave_check = document.getElementById('idSaveCheck');

    const get_id = getCookie("id"); // 'let' 오타: 'iet' → 'let'
    if (get_id) {
        emailInput.value = get_id;
        idsave_check.checked = true;
    }

    session_check();
}

function init_logined() {
    if (sessionStorage) {
        decrypt_text(); // 실제로는 decrypt_text()에 인자 필요할 수 있음. 구현에 따라 수정해야 함.
    } else {
        console.warn("세션 스토리지를 사용할 수 없습니다.");
    }
}

