import "./app.css";

const Form = () => {
  const form = document.getElementById("input-form");
  const button = document.getElementById("form-button");
  const result = document.getElementById("result-text");

  button.addEventListener("click", (e) => {
    const formData = formDataToObject(new FormData(form));
    // formData 정보를 이용해 손익분기점 매출액을 계산하세요.
    // 적절하게 변환하여, 결과 텍스트를 출력하세요.
    const {revenue,variableCost,expense} = parseUserInputs(formData)
    const amount = calculator(revenue,variableCost,expense)
    const result_tx = `손익분기점 매출액은 ${amount.toLocaleString()}원 입니다.`
    result.innerHTML = result_tx
  });

  result.innerText = "";
};

const app = () => {
  Form();
};

module.exports = app;
function parseUserInputs(form) {
  const {revenue, variableCost, expense} = form
  return {
    revenue : Number(revenue),
    variableCost : Number(variableCost).toFixed(2),
    expense : Number(expense).toFixed(2), 
  }
}
function formDataToObject(formData) {
  return Array.from(formData.entries()).reduce(
    (acc, [k, v]) => ((acc[k] = Number(v)), acc),
    {}
  );
}
function calculator(revenue,variableCost,expense) {
  const amount = expense / (1-(variableCost/revenue));
  return amount;
}