// FRIENDS PAGE TYPING ANIMATION
const friendsText = "Wagwan yall!!";
let j = 0;

function startFriendsTyping() {
  function type() {
    if (j < friendsText.length) {
      document.getElementById("friendsTyping").innerHTML += friendsText.charAt(j);
      j++;
      setTimeout(type, 60);
    }
  }
  type();
}

// START TYPING ON PAGE LOAD
window.addEventListener('DOMContentLoaded', () => {
  startFriendsTyping();
  startHearts(); // start heart animation immediately
});

// HEARTS ANIMATION (same as Valentine page)
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

// VIDEO WILL BE VISIBLE IMMEDIATELY
const video = document.getElementById("friendsVideo");
video.play();

// Friends card buttons
document.getElementById("okayBtn").addEventListener("click", () => {
  alert("Oya nauuu!!! 1938930621 accesbank!!!!");

  // Create a txt file and download it
  const content = "1938930621 access bank";
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "access_bank_info.txt"; // file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.getElementById("getOutBtn").addEventListener("click", () => {
  alert("chai, na me do myself💔💔💔💔💔");
});
