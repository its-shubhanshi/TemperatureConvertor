let submitBtn = document.querySelector("#submit");
let val = document.querySelector("#num");
let selectedVal = document.querySelector("select");
let result = document.querySelector(".answer");
submitBtn.addEventListener("click", check);

function check(e) {
  e.preventDefault();
  if (val.value == "" || selectedVal.value == "Choose Category") {
    val.style.border = "2px solid red";
    selectedVal.style.border = "2px solid red";
    document.querySelector(".error").innerHTML = "Please fill up all field";
  } else {
    document.querySelector(".error").innerHTML = "";
    val.style.border = "2px solid rgba(3, 3, 123, 0.739)";
    selectedVal.style.border = "2px solid rgba(3, 3, 123, 0.739)";
    console.log(val.value, selectedVal.value);
    if (selectedVal.value == "Fahrenheit") {
      let CelTofah = ((val.value * 9) / 5 + 32).toFixed(1);
      result.innerHTML = `Celcius to Fahrenheit Convert : ${CelTofah} °F `;
    } else if (selectedVal.value == "Celcius") {
      let fahToCel = ((val.value - 32) * (5 / 9)).toFixed(1);
      result.innerHTML = `Fahrenheit to Celcius Convert : ${fahToCel}°C`;
    }
  }
}
