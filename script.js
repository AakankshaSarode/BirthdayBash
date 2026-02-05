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

// Love Coupon
const shayariBtn = document.getElementById("shayariBtn");
const couponPopup = document.getElementById("couponPopup");
const closeCoupon = document.getElementById("closeCoupon");

// Typewriter
const typewriter = document.getElementById("typewriter");


// =========================
// DATA
// =========================
const birthdayMessage =
  "Wishing you a day filled with love, laughter & cake 🎂💖";

const pickupLines = [
"waise aapko bata doon mere khayali pulao mein chawal aap hi ho🎀😚", 
"🤭Oops,looks like you're trapped with me forever😘",
"Hotel without el is YOU🤭",
"if you were a worm I'd the earliest bird😁",
 "Here is fan🪭,cause you're way too hot 🫠",
 "💕I love the version of me that never stop loving you 😚",
  "💕 You must be a magician because whenever you smile, the whole world disappears ✨",
  "😂 Are you a keyboard? Because you’re just my TYPE 💻💖",
  "🧁 Calories don’t count today… because YOU are the sweetest 😌",
  "🎂 Another year older, another year CUTER 😎✨",
  "💖 You leveled up today!"
];

let typeIndex = 0;
let pickupIndex = 0;


// =========================
// TYPEWRITER EFFECT
// =========================
function typeEffect() {
  if (typeIndex < birthdayMessage.length) {
    typewriter.textContent += birthdayMessage.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeEffect, 40);
  }
}


// =========================
// SHOW BIRTHDAY CARD ON LOAD
// =========================
window.addEventListener("load", () => {
  birthdayPopup.classList.remove("hidden");

  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 }
  });

  setTimeout(typeEffect, 200);

  // Auto flip after 4s
  setTimeout(() => {
    birthdayFlipCard.classList.add("open");
  }, 4000);
});


// =========================
// CLOSE BIRTHDAY CARD
// =========================
closeBirthday.addEventListener("click", () => {
  birthdayPopup.classList.add("hidden");
  container.classList.remove("hidden");
});


// =========================
// PICKUP LINE CARD
// =========================
surpriseBtn.addEventListener("click", () => {
  surprisePopup.classList.remove("hidden");
  pickupIndex = 0;

  surpriseFlipCard.classList.add("open");
  surpriseLine.textContent = pickupLines[pickupIndex];

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
});

// Flip → Next pickup line
surpriseFlipCard.addEventListener("click", () => {
  surpriseFlipCard.classList.toggle("open");

  setTimeout(() => {
    pickupIndex = (pickupIndex + 1) % pickupLines.length;
    surpriseLine.textContent = pickupLines[pickupIndex];
    surpriseFlipCard.classList.toggle("open");
  }, 1000);
});

closeSurprise.addEventListener("click", (e) => {
  e.stopPropagation();
  surprisePopup.classList.add("hidden");
});


// =========================
// LOVE COUPON
// =========================
shayariBtn.addEventListener("click", () => {
  couponPopup.classList.remove("hidden");

  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 },
    shapes: ["heart"],
    colors: ["#ff4d6d", "#ff758f", "#ffb3c6"]
  });
});

closeCoupon.addEventListener("click", () => {
  couponPopup.classList.add("hidden");
});


// =========================
// FLOATING HEARTS BACKGROUND
// =========================
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}, 1200);
