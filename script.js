function submitQuiz() {
  let score = 0;
  let corrections = [];


  const q1 = [...document.querySelectorAll('input[name="q1"]:checked')].map(i => i.value);
  if (q1.includes("B") && q1.includes("C") && q1.length === 2) score++;
  else corrections.push("Question 1 : Les bonnes réponses étaient B et C.");

  if (document.querySelector('input[name="q2"]:checked')?.value === "A") score++;
  else corrections.push("Question 2 : La bonne réponse était A.");

  if (document.querySelector('input[name="q3"]:checked')?.value === "C") score++;
  else corrections.push("Question 3 : La bonne réponse était C.");

  if (document.querySelector('input[name="q4"]:checked')?.value === "C") score++;
  else corrections.push("Question 4 : La bonne réponse était C.");

  if (document.querySelector('input[name="q5"]:checked')?.value === "B") score++;
  else corrections.push("Question 5 : La bonne réponse était B.");

  if (document.querySelector('input[name="q6"]:checked')?.value === "A") score++;
  else corrections.push("Question 6 : La bonne réponse était A.");

  if (document.querySelector('input[name="q7"]:checked')?.value === "B") score++;
  else corrections.push("Question 7 : La bonne réponse était B.");

  if (document.querySelector('input[name="q8"]:checked')?.value === "C") score++;
  else corrections.push("Question 8 : La bonne réponse était C.");

  if (document.querySelector('input[name="q9"]:checked')?.value === "B") score++;
  else corrections.push("Question 9 : La bonne réponse était B.");

  if (document.querySelector('input[name="q10"]:checked')?.value === "C") score++;
  else corrections.push("Question 10 : La bonne réponse était C.");

  if (document.querySelector('input[name="q11"]:checked')?.value === "C") score++;
  else corrections.push("Question 11 : La bonne réponse était C.");
  
  if (document.querySelector('input[name="q12"]:checked')?.value === "C") score++;
  else corrections.push("Question 12 : La bonne réponse était C.");
  
  if (document.querySelector('input[name="q13"]:checked')?.value === "B") score++;
  else corrections.push("Question 13 : La bonne réponse était B.");
  
  if (document.querySelector('input[name="q14"]:checked')?.value === "C") score++;
  else corrections.push("Question 14 : La bonne réponse était C.");
  
  if (document.querySelector('input[name="q15"]:checked')?.value === "B") score++;
  else corrections.push("Question 15 : La bonne réponse était B.");
  
  if (document.querySelector('input[name="q16"]:checked')?.value === "B") score++;
  else corrections.push("Question 16 : La bonne réponse était B.");
  
  if (document.querySelector('input[name="q17"]:checked')?.value === "B") score++;
  else corrections.push("Question 17 : La bonne réponse était B.");
  
  if (document.querySelector('input[name="q18"]:checked')?.value === "C") score++;
  else corrections.push("Question 18 : La bonne réponse était C.");
  
  if (document.querySelector('input[name="q19"]:checked')?.value === "C") score++;
  else corrections.push("Question 19 : La bonne réponse était C.");
  
  if (document.querySelector('input[name="q20"]:checked')?.value === "C") score++;
  else corrections.push("Question 20 : La bonne réponse était C.");
    

  if (document.querySelector('input[name="q21"]:checked')?.value === "B") score++;
  else corrections.push("Question 21 : La bonne réponse était B.");

  if (document.querySelector('input[name="q22"]:checked')?.value === "B") score++;
  else corrections.push("Question 22 : La bonne réponse était B.");

  if (document.querySelector('input[name="q23"]:checked')?.value === "C") score++;
  else corrections.push("Question 23 : La bonne réponse était C.");

  if (document.querySelector('input[name="q24"]:checked')?.value === "C") score++;
  else corrections.push("Question 24 : La bonne réponse était C.");

  if (document.querySelector('input[name="q25"]:checked')?.value === "D") score++;
  else corrections.push("Question 25 : La bonne réponse était D.");

  if (document.querySelector('input[name="q26"]:checked')?.value === "C") score++;
  else corrections.push("Question 26 : La bonne réponse était C.");

  if (document.querySelector('input[name="q27"]:checked')?.value === "C") score++;
  else corrections.push("Question 27 : La bonne réponse était C.");

  if (document.querySelector('input[name="q28"]:checked')?.value === "B") score++;
  else corrections.push("Question 28 : La bonne réponse était B.");

  if (document.querySelector('input[name="q29"]:checked')?.value === "B") score++;
  else corrections.push("Question 29 : La bonne réponse était B.");

  if (document.querySelector('input[name="q30"]:checked')?.value === "C") score++;
  else corrections.push("Question 30 : La bonne réponse était C.");

  if (document.querySelector('input[name="q31"]:checked')?.value === "B") score++;
  else corrections.push("Question 31 : La bonne réponse était B.");

  if (document.querySelector('input[name="q32"]:checked')?.value === "C") score++;
  else corrections.push("Question 32 : La bonne réponse était C.");

  if (document.querySelector('input[name="q33"]:checked')?.value === "D") score++;
  else corrections.push("Question 33 : La bonne réponse était D.");

  if (document.querySelector('input[name="q34"]:checked')?.value === "B") score++;
  else corrections.push("Question 34 : La bonne réponse était B.");

  if (document.querySelector('input[name="q35"]:checked')?.value === "C") score++;
  else corrections.push("Question 35 : La bonne réponse était C.");

  // Affichage des résultats
  const results = document.getElementById("results");
  let appreciation = "";

  if (score === 35) {
    appreciation = "Tu es prêt pour la ligue des robots ! 🏆";
  } else if (score >= 25) {
    appreciation = "Solide ! Un peu plus de pratique et tu seras prêt. 🚀";
  } else if (score >= 15) {
    appreciation = "Pas mal, mais tu peux faire mieux. Reprends les bases. 💪";
  } else {
    appreciation = "Courage ! Chaque expert a été un débutant. 🔧";
  }

  results.innerHTML = `<p>Tu as obtenu ${score} / 35. ${appreciation}</p>` +
    corrections.map(c => `<div class="correction">${c}</div>`).join("");
}












function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;
  
      // Formatage des minutes et secondes
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = `Temps restant : ${minutes}:${seconds}`;
  
      if (--timer < 0) {
        clearInterval(interval);
        alert("Temps écoulé ! Le quiz sera soumis automatiquement.");
        submitQuiz(); // Appelle la fonction pour soumettre le quiz
      }
    }, 1000);
  }
  
  // Démarrer le compte à rebours de 15 minutes
  window.onload = function () {
    const timerDisplay = document.getElementById("timer");
    const fifteenMinutes = 15 * 60; // 15 minutes en secondes
    startTimer(fifteenMinutes, timerDisplay);
  };