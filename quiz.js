//# 퀴즈

//Q1. 함수 (화살표 함수)
//문제: 다음 함수를 화살표 함수로 변환하세요.

function add(a, b) {
	return a + b;
}

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => {
    	return a + b;
    }

console.log(add(5, 3)); // 예상 결과: 8

//Q2. 함수 (parameter 정의)
//문제: 두 개의 숫자를 입력받아 그 차이를 계산하는 함수를 화살표 함수로 작성하세요.


// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
    const minus = (a, b) => {
    	return a - b;
    };

// 함수 테스트
console.log(minus(60, 20));// 예상 결과: 40


//Q3. 함수 (argument를 사용한 함수 호출)
//문제: 다음 함수가 주어졌을 때, 이 함수를 호출하여 "안녕하세요, [이름]님. 당신의 나이는 [나이]세입니다."라는 메시지를 출력하는 코드를 작성하세요.


const introduce = (name, age) => {
  return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
}

// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
console.log(introduce('김철수', 25));// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."


//Q4. 보너스
//문제: 샌드위치 주문 함수를 작성하세요. 아래 콘솔 출력 결과를 보고 orderSandwich 함수를 화살표 함수로 구현하세요.

const orderSandwich = (type = 'basic') => 
    type === 'vegan' ? "🥖 + 🥬 + 🍅 + 🥑 + 🥒" : "🥖 + 🥬 + 🍅 + 🧀 + 🥓";

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));
/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

//Q5. 반복문
//문제: 5부터 1까지 카운트다운하는 for문을 작성하세요.

    for(let i = 5; i >= 1; i--) {
        console.log(i);
    }
    

//Q6. 다음 코드에서 각 숫자에 1을 더한 새로운 배열을 만들어 주세요 (`map`)


const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map(number => number + 1);
console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]

//Q7. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (`filter`)

``
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // 예상 결과: [2, 4, 6]


//Q8. 다음 코드에서 각 문제를 풀어보세요. (`find`)
// 학생들의 정보가 담긴 배열
const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" }
];

// 1. 전공이 "Physics"인 학생을 찾으세요.
const physicsStudent = students.find(student => student.major === "Physics");
console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },

// 2. 이름이 "David"인 학생을 찾으세요.
const davidStudent = students.find(student => student.name === "David");

console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
