const suggestions = [
  "confidence",
  "health",
  "career",
  "love",
  "peace",
  "happiness",
  "success",
  "self-care",
];

const randomSuggestion =
  suggestions[Math.floor(Math.random() * suggestions.length)];
const suggestionElement = document.getElementById("suggestion");
suggestionElement.innerText = randomSuggestion;

suggestionElement.style.cursor = "pointer";
suggestionElement.addEventListener("click", () => {
  document.getElementById("user-focus").value = randomSuggestion;
});

async function generateAffirmation(event) {
  event.preventDefault();

  const userInput = document.getElementById("user-focus").value.trim();
  const affirmationElement = document.querySelector(".affirmation");

  affirmationElement.classList.add("show");
  affirmationElement.innerHTML =
    "<p><strong>✨ Generating your affirmation... ✨</strong></p>";

  try {
    const apiKey = "1e727d4ba820234do43d1fdac4t01e53";
    const prompt = `Write 5 short uplifting affirmations about ${userInput}, each on a new line.`;

    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&context=affirmation&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const affirmations = data.answer
      ?.split("\n")
      .map((a) => a.trim())
      .filter((a) => a) || ["I am strong, capable, and full of potential."];

    const firstAffirmation = affirmations[0];

    affirmationElement.innerHTML = "";
    new Typewriter(".affirmation", {
      strings: `About <strong>${userInput}</strong>:<br><br>"${firstAffirmation}"`,
      autoStart: true,
      delay: 30,
      cursor: "",
    });
  } catch (error) {
    affirmationElement.innerHTML =
      "⚠️ Oops! Something went wrong. Please try again.";
    console.error(error);
  }
}

document
  .getElementById("suggestion-container")
  .addEventListener("click", () => {
    document.getElementById("user-focus").value = randomSuggestion;
  });
