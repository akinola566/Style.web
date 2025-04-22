function sendMessage() {
  const input = document.getElementById("message");
  const chat = document.getElementById("chat");

  if (input.value.trim() === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = input.value;
  chat.appendChild(userMsg);

  // Fake AI reply
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = "Thinking...";

  setTimeout(() => {
    botMsg.textContent = "This is a demo reply from Blackonster-AI.";
  }, 1000);

  chat.appendChild(botMsg);
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
