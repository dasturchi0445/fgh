const modmeId = document.querySelector("#modmeId");
const parol = document.querySelector("#parol");
const form = document.querySelector("#register");

const MODME_ID = "688777";
const PAROL = "111111";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (modmeId.value === MODME_ID && parol.value === PAROL) {
    window.location.href = "./home.html";
  } else {
    alert("Iltimos parol yoki modmeId togri ekanligini tekshiring!");
  }
});
