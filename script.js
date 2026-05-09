const userInput = document.querySelector(".user-input");
const voice = document.querySelector(".voice");
const send = document.querySelector(".send");

const changeButton = () => {
  const userInputValue = userInput.value;
  if (userInputValue.trim() !== "") {
    voice.classList.add("hidden");
    send.classList.remove("hidden");
  } else {
    send.classList.add("hidden");
    voice.classList.remove("hidden");
  }
};

userInput.addEventListener("input", changeButton);
