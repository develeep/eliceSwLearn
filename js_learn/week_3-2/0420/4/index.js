/*
1. 
getReverse 함수를 return 문 한 줄로 작정하세요.
input: "Happy Thanksgiving!"
output: "!gnivigsknahT yppaH"
*/
function getRevese(s) {
  return s.split('').reverse().join('');
}

console.log(getRevese("Happy Thanksgiving!"));

/*
  2.
  groupByCommas 함수는 입력값의 3자리 단위씩 컴마로 묶어서 반환합니다.
  return 문 한 줄로 작정하세요.
  intput:2443243
  output: 2,443,243
  */
function groupByCommas(n) {
  return n.toLocalString();//소수점은 toLocalString(undefined,{maximumFractionDigits:num})
}

console.log(groupByCommas(2443243));

/*
  3.
  getMiddle 함수는 input String s의 중간에 있는 문자열을 반환합니다.
  이 때 s의 길이가 짝수라면 가운데 두글자를 반환하고 홀수라면 문자 1개만 반환합니다.
  return 문 한 줄로 작정하세요.
  intput: eliceacademy
  output: ac
  intput: christmas
  output: s
  */
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2)-1,s.length%2 === 0 ? 2 : 1); //ceil = 올림
}

console.log(getMiddle("christmas"));
