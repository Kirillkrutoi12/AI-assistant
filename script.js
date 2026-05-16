const userInput = document.querySelector(".user-input");
const voice = document.querySelector(".voice");
const sendButton = document.querySelector(".sendButton");
const interaction = document.querySelector(".interaction");
const mainChat = document.querySelector(".main-chat");
const dialog = document.querySelector(".dialog");
const userMessage = document.querySelector(".user-message");

const interactionMessage = [
  "Hello user!",
  "Hi, I'm Llama. What can I do for you?",
  "How can I help today?",
  "Hi there. Ask me anything or describe what you need.",
  "Welcome back. How can I assist you today?",
];

const randomMessage =
  interactionMessage[Math.floor(Math.random() * interactionMessage.length)];

interaction.textContent = randomMessage;

const changeButton = () => {
  const userInputValue = userInput.value;
  if (userInputValue.trim() !== "") {
    voice.classList.add("hidden");
    sendButton.classList.remove("hidden");
  } else {
    sendButton.classList.add("hidden");
    voice.classList.remove("hidden");
  }
};

const startDialog = () => {
  interaction.classList.add("hidden");
  document.body.classList.add("chat-started");
  dialog.classList.remove("hidden");

  const userInputValue = userInput.value;
  userMessage.textContent = userInputValue;

  userInput.value = "";
  
  changeButton();
};

userInput.addEventListener("input", changeButton);
sendButton.addEventListener("click", startDialog);
