export function session_set(){ //세션 저장(객체)
    let id = document.querySelector("#typeEmailX");
    let password = document.querySelector("#typePasswordX");
    let random = new Date(); // 랜덤 타임스탬프
    const obj = { // 객체 선언
    id : id.value,
    otp : random
    }
    // 다음 페이지 계속 작성하기
ㄴ
    if (sessionStorage) {
        const objString = JSON.stringify(obj); // 객체-> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_id", id.value);
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_pass", en_text);
        } else {
        alert("세션 스토리지 지원 x");
        }
        }