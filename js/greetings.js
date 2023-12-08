const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

let now = new Date();
let hour = now.getHours();
let greetingText = "";

if (hour < 12) {
  greetingText = "Good Morning";
} else if (hour < 18) {
  greetingText = "Good Afternoon";
} else {
  greetingText = "Good Evening";
}

function paintGreeting(username) {
  greeting.innerText = `${greetingText}, ${username}.`;
  greeting.classList.remove("hidden");
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreeting(username);
}

const saveUsername = localStorage.getItem("username");

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(saveUsername);
}
