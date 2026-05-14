const userInput = document.querySelector(".user-input");
const voice = document.querySelector(".voice");
const sendButton = document.querySelector(".sendButton");
const interaction = document.querySelector(".interaction");

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

userInput.addEventListener("input", changeButton);
