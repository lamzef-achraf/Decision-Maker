const answers = [
  "Yes, go for it! 💪",
  "Maybe later... 😴",
  "Take a breath and think again. 🧘",
  "Not the right time. ⏳",
  "Absolutely yes! ✅",
  "Try it and see what happens!",
  "Just do it with good intentions 🍀"
];

function getAnswer() {
  const question = document.getElementById("userQuestion").value.trim();
  const answerDiv = document.getElementById("answer");

  if (question === "") {
    answerDiv.textContent = "Please enter a question!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * answers.length);
  answerDiv.textContent = answers[randomIndex];
}
