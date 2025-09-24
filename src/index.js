function generateAffirmation(event) {
  event.preventDefault();

  const userInput = document.querySelector(".instructions").value.trim();
  const affirmationElement = document.querySelector(".affirmation");

  const affirmations = [
    "I am worthy of love and happiness.",
    "I attract positive energy into my life.",
    "I am capable of achieving my goals.",
    "I choose to see the good in every situation.",
    "I am enough just as I am.",
    "I radiate confidence and inner peace.",
    "Every day I grow stronger and more resilient.",
    "I trust the journey of my life.",
    "I am grateful for all that I have.",
    "I create my own happiness and success.",
  ];

  const randomAffirmation =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  affirmationElement.innerHTML = "";
  affirmationElement.classList.add("show");

  new Typewriter(".affirmation", {
    strings: `About <strong>${userInput}</strong>:<br><br>"${randomAffirmation}"`,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

document
  .getElementById("affirmation-form")
  .addEventListener("submit", generateAffirmation);
