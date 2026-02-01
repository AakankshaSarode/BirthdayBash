// =========================
// ELEMENTS
// =========================
const birthdayPopup = document.getElementById("birthdayPopup");
const closeBirthday = document.getElementById("closeBirthday");
const birthdayFlipCard = document.querySelector("#birthdayPopup .flip-card");
const container = document.querySelector(".container");

// Surprise Pickup Line Card
const surpriseBtn = document.getElementById("surpriseBtn");
const surprisePopup = document.getElementById("surprisePopup");
const closeSurprise = document.getElementById("closeSurprise");
const surpriseFlipCard = document.querySelector("#surprisePopup .flip-card");
const surpriseLine = document.getElementById("surpriseLine");

// Shayari/Poems Card
const shayariBtn = document.getElementById("shayariBtn");
const shayariPopup = document.getElementById("shayariPopup");
const closeShayari = document.getElementById("closeShayari");
const shayariFlipCard = document.querySelector("#shayariPopup .flip-card");
const shayariMessages = shayariPopup.querySelectorAll(".message");

// Typewriter
const typewriter = document.getElementById("typewriter");
const birthdayMessage = "Wishing you a day filled with love, laughter & cake 🎂💖";

let index = 0;
let pickupIndex = 0;
let shayariIndex = 0;

// =========================
// TYPEWRITER EFFECT
// =========================
function typeEffect() {
  if (index < birthdayMessage.length) {
    typewriter.textContent += birthdayMessage.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

// =========================
// SHOW BIRTHDAY CARD ON LOAD
// =========================
window.addEventListener("load", () => {
  birthdayPopup.classList.remove("hidden");
  confetti({ particleCount: 300, spread: 120, origin: { y: 0.6 } });
  setTimeout(typeEffect, 500);

  // Auto flip after 3 seconds
  setTimeout(() => birthdayFlipCard.classList.add("open"), 3000);
});

// =========================
// CLOSE BIRTHDAY CARD
// =========================
closeBirthday.addEventListener("click", () => {
  birthdayPopup.classList.add("hidden");
  container.classList.remove("hidden"); // show main buttons
});

// =========================
// PICKUP LINES CARD
// =========================
const pickupLines = [
  "💕 You must be a magician because whenever you smile, the whole world disappears ✨",
  "😂 Are you a keyboard? Because you’re just my TYPE 💻💖",
  "🧁 Calories don’t count today… because YOU are the sweetest thing here 😌",
  "🎂 Another year older, another year CUTER 😎✨",
  "💖 You leveled up today!"
];

// Open pickup line card
surpriseBtn.addEventListener("click", () => {
  surprisePopup.classList.remove("hidden");
  surpriseFlipCard.classList.add("open");
  surpriseLine.textContent = pickupLines[pickupIndex];
  confetti({ particleCount: 250, spread: 100, origin: { y: 0.6 } });
});

// Flip to next pickup line
surpriseFlipCard.addEventListener("click", () => {
  surpriseFlipCard.classList.toggle("open");
  setTimeout(() => {
    pickupIndex = (pickupIndex + 1) % pickupLines.length;
    surpriseLine.textContent = pickupLines[pickupIndex];
    surpriseFlipCard.classList.toggle("open");
  }, 500); // match flip duration
});

// Close pickup line card
closeSurprise.addEventListener("click", () => {
  surprisePopup.classList.add("hidden");
  pickupIndex = 0;
});

// =========================
// SHAYARI/POEMS CARD
// =========================
const shayaris = [
  "तुम्हारी मुस्कान मेरी ज़िन्दगी की सबसे खूबसूरत कविता है 💕",
  "हर लम्हा तुम्हारे साथ, जैसे खुशियों की बारिश 🌸",
  "तुम हो मेरे ख्वाबों की शायरी, और मैं उसका दीवाना 😍",
  "तेरे होने से मेरी दुनिया रंगीन हो गई है 🎨💖"
];
shayariBtn.addEventListener("click", () => {
  shayariPopup.classList.remove("hidden");
  shayariFlipCard.classList.add("open");
  shayariText.textContent = shayaris[shayariIndex];
  confetti({ particleCount: 250, spread: 100, origin: { y: 0.6 } });
});

shayariFlipCard.addEventListener("click", () => {
  shayariFlipCard.classList.toggle("open");
  setTimeout(() => {
    shayariIndex = (shayariIndex + 1) % shayaris.length;
    shayariText.textContent = shayaris[shayariIndex];
    shayariFlipCard.classList.toggle("open");
  }, 500); // match flip animation duration
});
closeShayari.addEventListener("click", () => {
  shayariPopup.classList.add("hidden");
  shayariIndex = 0;
});
