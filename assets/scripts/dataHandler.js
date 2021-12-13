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
};

const secondMonsterSpecs = (name, attack, defence) => {
  console.log(`first monster: ${name}, atk: ${attack}, def: ${defence}`);
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

randomizerBtn.addEventListener("click", dataHandler);
