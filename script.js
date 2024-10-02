const btn = document.querySelector("button");
let input = document.getElementById("date");
const result = document.getElementById("result");
input.max = new Date().toISOString().split("T")[0];

function calulateAge() {
  let birthDate = new Date(input.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let now = new Date();
  let d2 = now.getDate();
  let m2 = now.getMonth() + 1;
  let y2 = now.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `You are <span>${y3}</span>  ${
    y3 === 0 ? "year" : "years"
  }, <span>${m3}</span> ${m3 === 0 ? "month" : "months"}  and <span>${d3}</span> ${
    d3 === 0 ? "day" : "days"
  } old.`;

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
}

btn.addEventListener("click", calulateAge);
