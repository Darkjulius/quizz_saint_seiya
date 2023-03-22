const responses = ["c", "c", "c", "c", "b"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();

  const results = [];

  // Récupération de tous les inputs de type radio qui ont été cochés.
  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  /**Pour chaques bouton radio coché, j'envoie les reponses dans le tableau results. Si la réponse est vraie, j'envoi true.
   * Sinon, j'envoie false.*/
  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
  });
  // console.log(radioButtons);
  // console.log(results);

  showResults(results);
  addColors(results);
}

const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results) {
  // J'affiche le nombre de réponses qui sont fausses.
  const errorsNumber = results.filter((el) => el === false).length;
  console.log(errorsNumber);
  switch (errorsNumber) {
    case 0:
      titleResult.textContent = "✔️ Bravo, c'est un sans faute ! ✔️";
      helpResult.style.display = "block";
      helpResult.textContent = "Vous maîtrisez votre sujet !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score: <span>5 / 5</span";
      break;
    case 1:
      titleResult.textContent = "✨ Vous y êtes presque ! ✨";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score: <span>4 / 5</span";
      break;
    case 2:
      titleResult.textContent = "✨ Encore un effort ... 👀";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score: <span>3 / 5</span";
      break;
    case 3:
      titleResult.textContent = "👀 Il reste quelques erreurs. 😭";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score: <span>2 / 5</span";
      break;
    case 4:
      titleResult.textContent = "😭 Peut mieux faire ! 😭";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score: <span>1 / 5</span";
      break;
    case 5:
      titleResult.textContent = "👎 Peut mieux faire ! 👎";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score: <span>0 / 5</span";
      break;
    default:
      titleResult.textContent = "Wops, cas innatendu.";
  }
}

/**
 * Mise en place d'une couleur en fonction de la réponse. Si la réponse est correcte alors c'est la couleur du block if sinon, c'est la couleur du block else.
 */
const questions = document.querySelectorAll(".question-block");
function addColors(results) {
  results.forEach((response, index) => {
    if (results[index]) {
      questions[index].style.backgroundImage =
        "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      questions[index].style.backgroundImage =
        "linear-gradient(to right, #f5567b, #fd674c)";
    }
  });
}

/**
 * Je réinitialise la couleur si l'utilisateur s'est trompé.
 */
const inputs = document.querySelectorAll("input[type='radio']");
inputs.forEach((input) => input.addEventListener("input", resetColor));

function resetColor(e) {
  // Je récupère l'attribut name et slice afin de récupérer le nombre. Je démarre à 0 grâce à -1.
  const index = e.target.getAttribute("name").slice(1) - 1;
  const parentQuestionBlock = questions[index];
  parentQuestionBlock.style.backgroundColor = "#f1f1f1";
  parentQuestionBlock.style.backgroundImage = "none";
}
