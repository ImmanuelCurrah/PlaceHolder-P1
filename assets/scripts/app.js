async function dataHandler() {
  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster";
  let dataContent = await axios.get(url);
  console.log(dataContent.data.data);
}

dataHandler();
