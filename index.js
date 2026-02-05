const noButton = document.getElementById("noBtn");
const yesButton = document.getElementById("yesBtn");
const Giph = document.querySelector("#giphs");
const bodyElement = document.body;

const message = [
  "Are you sure",
  "Really sure",
  "Are you positive",
  "Just think about it ",
  "If u say no, ill be alone and sad",
  "Like really sad",
  "Ok fine, since your so sure ill stop asking ",
  "Just kidding, Say yes please",
  "",
];
let messageIndex = 0;

noButton.addEventListener("click", () => {
  const dimentions = noButton.getBoundingClientRect("width");

  // Calculate random positions within the viewport
  const width = Math.floor(
    Math.random() * window.innerWidth - dimentions.width,
  );
  const width2 = Math.abs(width);
  const height = Math.floor(
    Math.random() * window.innerHeight - dimentions.height,
  );
  const height2 = Math.abs(height);

  // Apply new coordinates
  noButton.classList.add("no-absolute");
  noButton.style.left = width2 + "px";
  noButton.style.top = height2 + "px";

  noButton.textContent = message[messageIndex];
  messageIndex = (messageIndex + 1) % message.length;
  //   console.log(messageIndex);
  //   console.log(message.length);
  if (messageIndex === 8) {
    noButton.classList.add("no-hide");
    yesButton.textContent = "So your answer is yes ";
  }
});


const yesTextContainer = document.querySelector("#yes-or-no");
const h1Tag = document.querySelector(".h1-tag");
yesButton.addEventListener("click", () => {
  Giph.src = "Giphs/giphy (1).gif";
  noButton.style.display = "none";
  yesButton.style.display = "none";
  h1Tag.textContent = "";
  yesTextContainer.innerHTML = /*html*/ `
    <p>I knew you would say yes</p>
    <div>
      <p>I love you</p>
      <!-- <img src="Giphs/heart.png" alt="" srcset=""> -->
    </div>
  `;
  yesTextContainer.classList.remove("yes-or-no");
  yesTextContainer.classList.add("yes-text");
  bodyElement.classList.add("body-change-2");
});


