
// CLICK SCREEN SYSTEM
const screens = document.querySelectorAll(".screen");
let currentScreen = 0;

screens.forEach((screen, index) => {
  screen.addEventListener("click", () => {
    if (index === currentScreen && currentScreen < screens.length - 1) {
      screens[currentScreen].style.display = "none";
      currentScreen++;
      screens[currentScreen].style.display = "flex";

      if (screens[currentScreen].id === "valentineScreen") {
        startHearts();
        typeWriter();
      }
    }
  });
});

// HEARTS
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function startHearts() {
  setInterval(createHeart, 300);
}

// WHO BUTTON RANDOM JUMP
const whoBtn = document.getElementById("whoBtn");
whoBtn.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - whoBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - whoBtn.offsetHeight);
  whoBtn.style.left = x + "px";
  whoBtn.style.top = y + "px";
});

// VALENTINE TYPING
const text = "Hey Esther and Chiamaka, you guys have been really amazing home girls!!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
