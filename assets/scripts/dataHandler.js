const randomizerBtn = document.querySelector(".random-btn");
const firstCardSpecs = document.querySelector(".first-card");
const secondCardSpecs = document.querySelector(".second-card");
const firstImage = document.createElement("img");
const secondImage = document.createElement("img");

async function dataHandler() {
  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster&race=Dragon";
  let dataContent = await axios.get(url);
  let monsterDataBase = dataContent.data.data;
  console.log(monsterDataBase);
  monsterDataBaseHandler(monsterDataBase);
}

const firstMonsterSpecs = (name, attack, defence, image) => {
  firstCardSpecs.innerHTML = " ";
  let nameOfMonster = document.createElement("h2");
  nameOfMonster.innerText = name;
  firstCardSpecs.appendChild(nameOfMonster);

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
  secondCardSpecs.appendChild(nameOfMonster);

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
  const firstRandomMonster = dataBase[Math.floor(Math.random() * 10)];
  // console.log(randomMonster);
  let name = firstRandomMonster.name;
  let attack = firstRandomMonster.atk;
  let defence = firstRandomMonster.def;
  let image = firstRandomMonster.card_images[0].image_url_small;

  const secondRandomMonster = dataBase[Math.floor(Math.random() * 10)];
  let nameTwo = secondRandomMonster.name;
  let attackTwo = secondRandomMonster.atk;
  let defenceTwo = secondRandomMonster.def;
  let imageTwo = secondRandomMonster.card_images[0].image_url_small;

  secondMonsterSpecs(nameTwo, attackTwo, defenceTwo, imageTwo);
  firstMonsterSpecs(name, attack, defence, image);
};

const app = (dataBase) => {
  dataHandler(dataBase);
};

randomizerBtn.addEventListener("click", app);
