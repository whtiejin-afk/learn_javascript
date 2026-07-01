//logical Operator: 논리적 true, false를 판단하여 반환

/*
1. And(&&)
2. Or(||)
3. Not(!)
*/

const user = {
  isLoggedIn: true,
  role: "admin" // 'guest', 'user' 등
}

// 관리자 페이지 접근 여부 1. 로그인 된 상태, 2. role이 관리자
//And
if (user.isLoggedIn && user.role === "admin"){ 
  console.log("관리자 페이지 접근 가능합니다.")

}else{
  console.log("관리자 페이지 접근 불가합니다.")
}


//Or
// 성인인지 혹은 부모의 동의를 받았느지
const person = {
  age: 16,
  hasPerentalConsent: false
}

//삼항 연산자
// 조건 ? value1:value2

const guideText = person.age > 18 || person.hasPerentalConsent ? "성인또는인증":"🤢둘다아님";
console.log(guideText)


const userInput = "             f               ";

if (!userInput.trim()) {
  // 입력값이 비어있는 경우
  console.log("입력값이 비어있습니다. 값을 입력하세요")
}else{
  console.log(userInput)
}

//미션
// 조건1: 티스토리 블로그에 로그인 세션이 있는경우
// 조건2: ai가 작성한 글의 품질 게이트 점수가 95점이상인 경우

const publishData = {
  isBlogLogginSession: true,
  finalscore: 87
}

if (publishData.isBlogLogginSession && publishData.finalscore > 95) {
  console.log("배포진행")
}else{
  console.log("배포불가")
}

// Default Parameter: 파라메터 기본값 지정
const greeting = (name = '바보') => {
  console.log(`${name}님, 반갑습니다.`)
}
greeting();

//Object Destructuring
const colors = ["red", "blue", "green"];

const [first, second] = colors;

console.log(first);  // red
console.log(second); // blue

const guest = {
  UserName: "홍길동",
  id:"shadow",
  age: 20,
};

const { UserName, age } = guest;

console.log(UserName); // 홍길동
console.log(age);  // 20

//Spread syntax 배열이나 객체를 개별요소로 분해하거나 결합할때 사용
console.log(colors);
console.log(...colors);

// 미션: 오늘 할일 추가
// todoItem에 오늘 할일 추가
const todoItem = {
  id:1,
  isComplete: false
}

const mytodoItem = {
  ...todoItem,
  work: "수업듣기",
  isComplete: true
};
console.log(todoItem);
console.log(mytodoItem);
