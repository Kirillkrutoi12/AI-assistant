const userInput = document.querySelector(".user-input");
const voice = document.querySelector(".voice");
const sendButton = document.querySelector(".sendButton");
const interaction = document.querySelector(".interaction");
const mainChat = document.querySelector(".main-chat");
const dialog = document.querySelector(".dialog");

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

const startDialog = async () => {
  interaction.classList.add("hidden");
  document.body.classList.add("chat-started");
  dialog.classList.remove("hidden");

  const userDiv = document.createElement("div");
  userDiv.classList.add("user");
  const userMessage = document.createElement("p");
  userMessage.classList.add("user-message");
  userDiv.appendChild(userMessage);

  const ChatBotDiv = document.createElement("div");
  ChatBotDiv.classList.add("chatbot");
  const chatbotMessage = document.createElement("p");
  chatbotMessage.classList.add("chatbot-message");
  ChatBotDiv.appendChild(chatbotMessage);

  dialog.appendChild(userDiv);
  dialog.appendChild(ChatBotDiv);
  try {
    const response = await fetch("http://localhost:3000/server", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: userInput.value,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("API error");
    }

    chatbotMessage.textContent = data.choices[0].message.content;
  } catch (error) {
    chatbotMessage.textContent = "Something went wrong.";

    console.log(error);
  }

  window.scrollTo(0, document.body.scrollHeight);

  const userInputValue = userInput.value;
  userMessage.textContent = userInputValue;

  userInput.value = "";

  changeButton();
};

userInput.addEventListener("input", changeButton);
sendButton.addEventListener("click", startDialog);
