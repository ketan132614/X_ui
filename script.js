  window.addEventListener("DOMContentLoaded", () => {
    const chatbot = document.getElementById("myText");
    const showBtn = document.getElementById("show-btn");
    const hideBtn = document.getElementById("hide-btn");

    chatbot.classList.remove("active");
    showBtn.style.display = "block";

    showBtn.addEventListener("click", () => {
      chatbot.classList.add("active");
      showBtn.style.display = "none";
    });

    hideBtn.addEventListener("click", () => {
      chatbot.classList.remove("active");
      showBtn.style.display = "block";
    });
  });
