function calculateScore(mood, answers) {
  const moodScore = {
    happy: 10,
    okay: 30,
    stressed: 60,
    very_stressed: 80
  }[mood];

  const total = moodScore + answers.reduce((a, b) => a + b, 0);

  const risk =
    total <= 40 ? "Normal" :
    total <= 70 ? "Medium" : "High";

  return { total, risk };
}
