const counterValue = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let count = 0;
btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) count--;
    else if (style.contains("increase")) count++;
    else count = 0;
    if (count > 0) counterValue.style.color = "green";

    if (count < 0) counterValue.style.color = "red";

    if (count === 0) counterValue.style.color = "black";
    counterValue.textContent = count;
  })
);
