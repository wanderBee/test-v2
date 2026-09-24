const button = document.querySelector("#actionBtn");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  const now = new Date().toLocaleString();
  result.textContent = `Demo 已运行：${now}`;
});
