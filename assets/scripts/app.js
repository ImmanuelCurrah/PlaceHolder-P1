// Imports ---------
import { hamburgerHandler } from "./hamburger.js";
hamburgerHandler();

// Handling Card Data and displaying it -------------------------------------------------------------

const randomizerBtn = document.querySelector(".random-btn");
const firstCardSpecs = document.querySelector(".first-card");
const secondCardSpecs = document.querySelector(".second-card");
const firstImage = document.createElement("img");
const secondImage = document.createElement("img");
const winsDisplay = document.querySelector(".wins");
const losesDisplay = document.querySelector(".loses");
const resetBtn = document.querySelector(".reset");
const winnerAnnouncement = document.querySelector(".winner");
const loserAnnouncement = document.querySelector(".loser");
const progressBar = document.getElementById("progress-bar");
const xpCounter = document.querySelector(".xp-counter");
const scoreKeeper = document.querySelector(".score-keeper");
const levelBar = document.querySelector(".level-handler");
const cardContainer = document.querySelector(".card-name-display");
const winnerName = document.createElement("h2");

let score = 0;
let loses = 0;
let level = 1;
let totalScore = 0;

xpCounter.innerText = `Level: ${level}`;

async function dataHandler() {
  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster";
  let dataContent = await axios.get(url);
  let monsterDataBase = dataContent.data.data;
  monsterDataBaseHandler(monsterDataBase);
}

const endGame = () => {
  if (score > 9) {
    winnerAnnouncement.classList.remove("hidden");
  } else if (loses > 9) {
    loserAnnouncement.classList.remove("hidden");
  }
  if (score > 9) {
    score = 0;
    loses = 0;
    randomizerBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
    totalScore += 500;
    scoreKeeper.innerText = `Score: ${totalScore}`;
    progressBar.value += 20;
    reachedMaxLevel();

    if (progressBar.value == 100) {
      level++;
      xpCounter.innerText = `Level: ${level}`;
      progressBar.value = 0;
      progressBar.max += 40;
    }
  } else if (loses > 1) {
    score = 0;
    loses = 0;
    totalScore;
    progressBar.value;
    randomizerBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
    scoreKeeper.innerText = `Score: ${totalScore}`;
  }
  resetBtn.addEventListener("click", () => {
    winsDisplay.innerText = `Wins: 0`;
    losesDisplay.innerText = `Loses: 0`;
    randomizerBtn.classList.remove("hidden");
    resetBtn.classList.add("hidden");
    winnerAnnouncement.classList.add("hidden");
    loserAnnouncement.classList.add("hidden");
    firstCardSpecs.innerHTML = " ";
    secondCardSpecs.innerHTML = " ";
    winnerName.innerHTML = "";
  });
};

const scoreHandler = (
  attackOne,
  defenceOne,
  attackTwo,
  defenceTwo,
  nameOne,
  nameTwo
) => {
  winnerName.innerHTML = "";
  if (attackOne > defenceTwo) {
    score++;
    winnerName.innerText = `You drew ${nameOne} and won! Draw again!`;
    cardContainer.appendChild(winnerName);
  } else if (attackTwo > defenceOne || defenceTwo > attackOne) {
    loses++;
    winnerName.innerText = `You drew ${nameOne} and lost! Better luck next time.`;
  } else if (
    (attackOne == defenceTwo && attackTwo == defenceOne) ||
    (attackOne > defenceTwo && attackTwo > defenceOne)
  ) {
    score;
    loses;
    winnerName.innerText = `You drew ${nameOne} and tied against ${nameTwo} try again.`;
  }

  winsDisplay.innerText = `Wins: ${score}`;
  losesDisplay.innerText = `Loses: ${loses}`;
  endGame();
};

const firstMonsterSpecs = (name, attack, defence, image) => {
  firstCardSpecs.innerHTML = " ";
  let nameOfMonster = document.createElement("h2");
  nameOfMonster.innerText = name;
  // firstCardSpecs.appendChild(nameOfMonster);

  let atk = document.createElement("h5");
  let def = document.createElement("h5");
  atk.innerText = `attack: ${attack}`;
  def.innerText = `defence: ${defence}`;

  firstCardSpecs.appendChild(atk);
  firstCardSpecs.appendChild(def);

  firstImage.src = image;
  firstImage.alt = `this is a picture of ${name}`;

  firstCardSpecs.appendChild(firstImage);
};

const secondMonsterSpecs = (name, attack, defence, image) => {
  secondCardSpecs.innerHTML = " ";
  let nameOfMonster = document.createElement("h2");
  nameOfMonster.innerText = name;
  // secondCardSpecs.appendChild(nameOfMonster);

  let atk = document.createElement("h5");
  let def = document.createElement("h5");
  atk.innerText = `attack: ${attack}`;
  def.innerText = `defence: ${defence}`;

  secondCardSpecs.appendChild(atk);
  secondCardSpecs.appendChild(def);

  secondImage.src = image;
  secondImage.alt = `this is a picture of ${name}`;

  secondCardSpecs.appendChild(secondImage);
};

const monsterDataBaseHandler = (dataBase) => {
  const firstRandomMonster = dataBase[Math.floor(Math.random() * 200)];
  // console.log(randomMonster);
  let name = firstRandomMonster.name;
  let attack = firstRandomMonster.atk;
  let defence = firstRandomMonster.def;
  let image = firstRandomMonster.card_images[0].image_url_small;

  const secondRandomMonster = dataBase[Math.floor(Math.random() * 200)];
  let nameTwo = secondRandomMonster.name;
  let attackTwo = secondRandomMonster.atk;
  let defenceTwo = secondRandomMonster.def;
  let imageTwo = secondRandomMonster.card_images[0].image_url_small;

  secondMonsterSpecs(nameTwo, attackTwo, defenceTwo, imageTwo);
  firstMonsterSpecs(name, attack, defence, image);
  scoreHandler(attack, defence, attackTwo, defenceTwo, name, nameTwo);
};

const app = (dataBase) => {
  dataHandler(dataBase);
};

randomizerBtn.addEventListener("click", app);

//---------------------------------------------------------------------------------------------------------

// Handling Avatar info and displaying it------------------------------------------------------------------

const avatarSelector = document.querySelector("#avatar-selector");
const imageSpot = document.querySelector(".avatar-image-space");
const label = document.querySelector(".select-avatar-text");
const username = document.querySelector(".username");
const avatarChild = document.querySelector(".user-avatar");
const form = document.querySelector(".user-info-form");
const userNameInput = document.getElementById("name");
const userNameBtn = document.querySelector(".fight-btn");

let avatars = [
  {
    url: "https://joeschmoe.io/api/v1/jabala",
    name: "Jabala",
  },
  {
    url: "https://joeschmoe.io/api/v1/jacques",
    name: "Jacques",
  },
  {
    url: "https://joeschmoe.io/api/v1/jezabelle",
    name: "Jezabelle",
  },
  {
    url: "https://joeschmoe.io/api/v1/jia",
    name: "Jia",
  },
  {
    url: "https://joeschmoe.io/api/v1/julie",
    name: "Julie",
  },
  {
    url: "https://joeschmoe.io/api/v1/jenni",
    name: "Jenni",
  },
];

const setAvatarValuesHandler = (avatars) => {
  avatars.forEach((avatar) => {
    let option = document.createElement("option");
    option.classList.add("avatar-option");
    option.value = avatar.name;
    option.textContent = avatar.name;
    avatarSelector.appendChild(option);
  });
};
setAvatarValuesHandler(avatars);

const displayAvatarHandler = (avatarsImage) => {
  removeImages();

  let img = document.createElement("img");
  img.classList.add("small-pic");
  img.src = avatarsImage[0].url;
  img.alt = `This is an image of a Shmoe, this one is ${avatarsImage[0].name}`;
  imageSpot.appendChild(img);
  form.removeChild(avatarChild);
  label.classList.add("hidden");
};

const removeImages = () => {
  imageSpot.innerHTML = "";
};

const userNameHandler = () => {
  userNameBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const userNameText = userNameInput.value;
    username.innerText = userNameText;
    if (userNameText == "") {
      username.innerText = "Yugi";
    }
    randomizerBtn.classList.remove("hidden");
    winsDisplay.classList.remove("hidden");
    losesDisplay.classList.remove("hidden");
    scoreKeeper.classList.remove("hidden");
    levelBar.classList.remove("hidden");
    userNameInput.classList.add("hidden");
    userNameBtn.classList.add("hidden");
  });
};

avatarSelector.addEventListener("change", (event) => {
  let selected = avatars.filter((singleAvatar) => {
    if (singleAvatar.name == event.target.value) {
      return singleAvatar;
    }
  });
  userNameInput.classList.remove("hidden");
  userNameBtn.classList.remove("hidden");
  // randomizerBtn.classList.remove("hidden");
  // winsDisplay.classList.remove("hidden");
  // losesDisplay.classList.remove("hidden");
  // scoreKeeper.classList.remove("hidden");
  // levelBar.classList.remove("hidden");
  displayAvatarHandler(selected);
  userNameHandler();
});

//--------------------------------------------------------------------------------------------------------
// End game logic handler --------------------------------------------------------------------------------
// called function inside of endGame
const endGameBtn = document.querySelector(".end-game-btn");

const reachedMaxLevel = () => {
  if (level == 9) {
    endGameBtn.classList.remove("hidden");
    resetBtn.classList.add("hidden");
    firstCardSpecs.classList.add("hidden");
    secondCardSpecs.classList.add("hidden");
    winnerAnnouncement.innerText = "Game over. Go again!";
    endGameBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
};

//-----------------------------------------------------------------------------------------------
