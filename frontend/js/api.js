const API_BASE_URL = "https://chatbot-9sq4.onrender.com";

/* 🔹 Chat API */
export async function sendChatMessage(message, language, history) {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message,
        target_language: language,
        chat_history: history
      })
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    return await response.json();
  } catch (error) {
    return { text: "⚠️ Server not reachable. Try again later." };
  }
}
