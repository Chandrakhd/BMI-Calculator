let message = document.querySelector(".error_message");

function calculateBMI() {
  const weightInput = parseFloat(document.getElementById("weight").value);
  const heightInput = parseFloat(document.getElementById("height").value);

  if (
    isNaN(weightInput) ||
    isNaN(heightInput) ||
    weightInput <= 0 ||
    heightInput <= 0
  ) {
    message.classList.add("message_show");
    setTimeout(function () {
      message.classList.remove("message_show");
    }, 3000);

    return;
  }

  const bmi = weightInput / (heightInput / 100) ** 2;

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}
