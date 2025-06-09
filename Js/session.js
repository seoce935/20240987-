// ✅ crypto.js가 같은 디렉터리에 있어야 하며, encrypt_text 함수는 export 되어야 함
import { encrypt_text } from './crypto.js';

/**
 * 간단한 세션 저장 (ID만 저장)
 */
export function session_set_simple() {
  const session_id = document.querySelector("#typeEmailX");
  if (!session_id) {
    alert("이메일 입력 요소를 찾을 수 없습니다.");
    return;
  }

  if (sessionStorage) {
    sessionStorage.setItem("Session_Storage_test", session_id.value);
  } else {
    alert("세션 스토리지를 지원하지 않는 브라우저입니다.");
  }
}

/**
 * 간단한 세션 읽기
 */
export function session_get_simple() {
  if (sessionStorage) {
    return sessionStorage.getItem("Session_Storage_test");
  } else {
    alert("세션 스토리지를 지원하지 않는 브라우저입니다.");
    return null;
  }
}

/**
 * 세션 저장 (암호화 포함한 객체 저장)
 */
export async function session_set() {
  const id = document.querySelector("#typeEmailX");
  const password = document.querySelector("#typePasswordX");

  if (!id || !password) {
    alert("입력 필드를 찾을 수 없습니다.");
    return;
  }

  const timestamp = new Date();
  const obj = {
    id: id.value,
    otp: timestamp.toISOString()
  };

  if (sessionStorage) {
    try {
      const objString = JSON.stringify(obj);
      const encrypted = await encrypt_text(objString); // ✅ 비동기 처리

      sessionStorage.setItem("Session_Storage_id", id.value);
      sessionStorage.setItem("Session_Storage_object", objString);
      sessionStorage.setItem("Session_Storage_pass", encrypted);
    } catch (error) {
      console.error("암호화 실패:", error);
      alert("세션 저장 중 오류가 발생했습니다.");
    }
  } else {
    alert("세션 스토리지를 지원하지 않는 브라우저입니다.");
  }
}
