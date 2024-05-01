let text = document.getElementById("text");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let input = document.getElementById("input").value;

  if (input >= 1 && input <= 10) {
    text.innerHTML = "Читаем мысли...";

    setTimeout(() => {
      text.innerHTML = "Вы загадали число " + input;
    }, 3000);
  } else if (input < 1) {
    text.innerHTML = "Вы загадали число меньше 1";
  } else if (input > 10) {
    text.innerHTML = "Вы загадали число больше 10";
	} else {
    text.innerHTML = "Вы загадали не число(";
  }
});
