const answers = [
  "Yes, go for it! 💪",
  "Maybe later... 😴",
  "Take a breath and think again. 🧘",
  "Not the right time. ⏳",
  "Absolutely yes! ✅",
  "Ask your mom 😂",
  "Try it and see what happens!",
  "Just do it with good intentions 🍀"
];


  const randomIndex = Math.floor(Math.random() * answers.length);
  answerDiv.textContent = answers[randomIndex];
}
