var form = document.querySelector("form");
var name_form = form.querySelector("[name=name-form]");
var weight = form.querySelector("[name=weight");
var email = form.querySelector("[name=email]");
var tel = form.querySelector("[name=tel]");
var input = form.querySelector(".input-required");

form.addEventListener("submit", function(evt) {
  if (!name_form.value || !email.value || !tel.value || !weight.value) {
    evt.preventDefault();
    form.classList.remove("input-error");
    form.offsetWidth = input.offsetWidth;
    form.classList.add("input-error");
  }
});
