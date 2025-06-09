// 기본 자료형 예시
let number = 5;
let str = "문자열 입력"; // ' ' 또는 " " 모두 가능
let prime = 1.5123;
let is_ok = true; // 참
let is_not = false; // 거짓
let undefi; // 선언만 하고 초기화하지 않음
let empty = null; // 값이 비어 있음

console.log(undefi, empty); // 여러 개 동시 출력

// 심볼 자료형
const sym1 = Symbol("test"); // 심볼 값 생성
let symbolVar1 = sym1;
console.log(symbolVar1.toString()); // 문자열로 변환해 출력

// 배열: 다양한 타입을 포함 가능
const airline = ["비행기", 320, "airbus", ["V1", true]];
console.log(airline); // 배열 전체 출력

// 객체 생성 예시
const obj1 = {}; // 빈 객체
const obj2 = {
  name: "John Doe",
  age: 30,
  isMale: true,
};
console.log(obj1, obj2); // 여러 객체 동시 출력

// Map 객체 사용 예시 (키-값 구조)
const users = new Map();
users.set("user1", { id: 1, password: "password123" });
users.set("user2", { id: 2, password: "password456" });

// Map 순회
for (const [username, user] of users) {
  console.log(`사용자 이름: ${username}`, `ID: ${user.id}`);
  console.log(`비밀번호: ${user.password}`);
}

// Set 객체 사용 예시 (중복 없는 값의 집합)
const usernames = new Set();
usernames.add("user1");
usernames.add("user2");

// Set 순회
for (const username of usernames) {
  console.log(`사용자 이름: ${username}`);
}

function logout(){
    session_del(); // 세션 삭제
    location.href='../index.html';
    }