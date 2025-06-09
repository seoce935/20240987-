function pop_up() {
    const cookieCheck = getCookie("popupYN");
    if (cookieCheck !== "N") {
      window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
    }
  }
  
  function setCookie(name, value, expiredays) {
    const date = new Date();
    date.setDate(date.getDate() + expiredays);
    const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
    document.cookie = cookie;
  }
  
  function getCookie(name) {
    console.log("쿠키를 요청합니다.");
    const cookie = document.cookie;
    if (cookie !== "") {
      const cookieArray = cookie.split("; ");
      for (const item of cookieArray) {
        const [cookieName, cookieValue] = item.split("=");
        if (cookieName === name) {
          return decodeURIComponent(cookieValue);
        }
      }
    }
    return null;
  }
  
  // 팝업 자동 닫기
  let close_time;        // 타이머 ID
  let close_time2 = 50;  // 남은 시간 (초)
  
  // 기존 타이머 제거
  clearTimeout(close_time);
  
  // 50초 후 창 닫기
  close_time = setTimeout(() => {
    close_window();
  }, 50000);
  
  // 실시간 타이머 시작
  show_time();
  
  function show_time() {
    const divClock = document.getElementById("Time");
    if (!divClock) return;
  
    if (close_time2 < 0) {
      divClock.innerText = "팝업 종료됨";
      return;
    }
  
    divClock.innerText = `남은 시간: ${close_time2}초`;
    close_time2--;
  
    setTimeout(show_time, 1000);
  }
  
  function close_window() {
    window.close();
  }
  