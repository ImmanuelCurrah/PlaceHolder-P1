const randomizerBtn = document.querySelector(".random-btn");
const firstCardSpecs = document.querySelector(".first-card");
const secondCardSpecs = document.querySelector(".second-card");

async function dataHandler() {
  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster&race=Dragon";
  let dataContent = await axios.get(url);
  let monsterDataBase = dataContent.data.data;
  // console.log(monsterDataBase);
  monsterDataBaseHandler(monsterDataBase);
}

const firstMonsterSpecs = (name, attack, defence) => {
  console.log(`second monster: ${name}, atk: ${attack}, def: ${defence}`);
  let nameOfMonster = document.createElement("h2");
  nameOfMonster.innerText = name;
  firstCardSpecs.appendChild(nameOfMonster);

  let atk = document.createElement("h5");
  let def = document.createElement("h5");
  atk.innerText = `attack: ${attack}`;
  def.innerText = `defence: ${defence}`;

  firstCardSpecs.appendChild(atk);
  firstCardSpecs.appendChild(def);
};

const secondMonsterSpecs = (name, attack, defence) => {
  console.log(`first monster: ${name}, atk: ${attack}, def: ${defence}`);
  let nameOfMonster = document.createElement("h2");
  nameOfMonster.innerText = name;
  secondCardSpecs.appendChild(nameOfMonster);

  let atk = document.createElement("h5");
  let def = document.createElement("h5");
  atk.innerText = `attack: ${attack}`;
  def.innerText = `defence: ${defence}`;

  secondCardSpecs.appendChild(atk);
  secondCardSpecs.appendChild(def);
};

const monsterDataBaseHandler = (dataBase) => {
  const firstRandomMonster = dataBase[Math.floor(Math.random() * 10)];
  // console.log(randomMonster);
  let name = firstRandomMonster.name;
  let attack = firstRandomMonster.atk;
  let defence = firstRandomMonster.def;

  const secondRandomMonster = dataBase[Math.floor(Math.random() * 10)];
  let nameTwo = secondRandomMonster.name;
  let attackTwo = secondRandomMonster.atk;
  let defenceTwo = secondRandomMonster.def;

  secondMonsterSpecs(nameTwo, attackTwo, defenceTwo);
  firstMonsterSpecs(name, attack, defence);
};

const app = (dataBase) => {
  dataHandler(dataBase);
};

randomizerBtn.addEventListener("click", app);
