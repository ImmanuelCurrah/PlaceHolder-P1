export { helloWorld };

function helloWorld() {
  console.log("hi there");
}

const firstText = document.querySelector("h1");
const text = document.createElement("h2");
text.innerText = "I am here";
firstText.appendChild(text);
