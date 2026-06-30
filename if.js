/*
function developerLevelTest() {
  const userName = window.prompt("이름을 입력하세요.");
  const htmlScore = Number(window.prompt("HTML 점수를 입력하세요."));
  const cssScore = Number(window.prompt("CSS 점수를 입력하세요."));
  const jsScore = Number(window.prompt("JavaScript 점수를 입력하세요."));

  const average = (htmlScore + cssScore + jsScore) / 3;

  let level = "";

  if (average >= 90) {
    level = "개발자 마스터";
  } else if (average >= 70) {
    level = "실전 투입 가능";
  } else if (average >= 50) {
    level = "성장 중인 개발자";
  } else {
    level = "기초부터 다시 다지기";
  }

  const result = `${userName}님의 평균 점수는 ${average}점이고, 등급은 "${level}"입니다.`;

  console.log(result);
}

developerLevelTest();

*/
const score = 100;
console.log(score >= 60 ?  "합격" : "불합격");
