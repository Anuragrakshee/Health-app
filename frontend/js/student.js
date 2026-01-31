import { sendChatMessage } from "./api.js";

let selectedLang = "en";
let chatHistory = [];

const greetings = {
  en: "Hi! I'm Healix 💙 How are you feeling today?",
  hi: "नमस्ते! मैं Healix हूँ 💙 आप कैसे हैं?",
  ta: "வணக்கம்! நான் Healix 💙",
  gu: "નમસ્તે! હું Healix છું 💙"
};

window.selectLanguage = function (lang) {
  selectedLang = lang;
  document.getElementById("langOverlay").classList.add("hidden");
  addMessage(greetings[lang], "bot");
};

window.handleSendMessage = async function () {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  const data = await sendChatMessage(
    text,
    selectedLang,
    chatHistory.slice(-10)
  );

  addMessage(data.text, "bot");
};

function addMessage(text, sender) {
  const chat = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.textContent = text;
  chat.appendChild(div);

  chatHistory.push({
    role: sender === "user" ? "user" : "assistant",
    content: text
  });

  chat.scrollTop = chat.scrollHeight;
}
