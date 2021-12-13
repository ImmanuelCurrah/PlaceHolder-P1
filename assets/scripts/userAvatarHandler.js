const avatarSelector = document.querySelector("#avatar-selector");
const imageSpot = document.querySelector(".avatar-image-space");
const label = document.querySelector(".select-avatar-text");

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
  img.src = avatarsImage[0].url;
  img.alt = `This is an image of a Shmoe, this one is ${avatarsImage[0].name}`;
  imageSpot.appendChild(img);
  avatarSelector.classList.add("hidden");
  label.classList.add("hidden");
};

const removeImages = () => {
  imageSpot.innerHTML = "";
};

avatarSelector.addEventListener("change", (event) => {
  let selected = avatars.filter((singleAvatar) => {
    if (singleAvatar.name == event.target.value) {
      return singleAvatar;
    }
  });
  displayAvatarHandler(selected);
});
