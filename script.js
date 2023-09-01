document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector("input[name='display']");

  function updateDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  const buttons = document.querySelectorAll(".kalkulator input[type='button']");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;
      if (value === "=") {
        calculate();
      } else if (value === "AC") {
        clearDisplay();
      } else if (value === "DE") {
        deleteLastCharacter();
      } else {
        updateDisplay(value);
      }
    });
  });

  const darkModeSwitch = document.getElementById("dark-mode");
  darkModeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    updateNumberColor();
  });

  function updateNumberColor() {
    const displayStyle = getComputedStyle(display);
    const color = displayStyle.color;
    const numbers = document.querySelectorAll(
      ".kalkulator input[type='button']:not(.operator)"
    );
    numbers.forEach((number) => {
      number.style.color = color;
    });
  }

  updateNumberColor();
});
