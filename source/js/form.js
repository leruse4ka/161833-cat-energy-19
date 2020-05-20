var form = document.querySelector("form");
var name_form = document.querySelector("[name=name-form]");
var weight = document.querySelector("[name=weight");
var email = document.querySelector("[name=email]");
var tel = document.querySelector("[name=tel]");
var input = document.querySelector(".input-required");

if (form) {
form.addEventListener("submit", function(evt) {
  if (!name_form.value || !email.value || !tel.value || !weight.value) {
    evt.preventDefault();
    form.classList.remove("input-error");
    form.offsetWidth = input.offsetWidth;
    form.classList.add("input-error");
  }
});
}
