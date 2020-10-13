// Content HTML Selector
const content = document.querySelector(".content");
const title = document.querySelector(".title");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");
const imgContent = document.querySelector(".img");

//Buttons Selector
const homeBtn = document.querySelector(".home");
const whoBtn = document.querySelector(".who");
const earlyBtn = document.querySelector(".early");
const educationBtn = document.querySelector(".education");
const edisonBtn = document.querySelector(".edison");
const soloBtn = document.querySelector(".solo");
const inventionsBtn = document.querySelector(".inventions");
const electricalBtn = document.querySelector(".electrical");
const hidroelectricBtn = document.querySelector(".hidroelectric");
const coilBtn = document.querySelector(".coil");
const energyBtn = document.querySelector(".free-energy");
const rayBtn = document.querySelector(".death-ray");
const endBtn = document.querySelector(".end-s");

// Event Listeners
homeBtn.addEventListener("click", hideContent);
whoBtn.addEventListener("click", whoWas);
earlyBtn.addEventListener("click", earlyLife);
educationBtn.addEventListener("click", education);
edisonBtn.addEventListener("click", edison);
soloBtn.addEventListener("click", soloVenture);
inventionsBtn.addEventListener("click", inventions);
electricalBtn.addEventListener("click", electrical);
hidroelectricBtn.addEventListener("click", hidroelectric);
coilBtn.addEventListener("click", coil);
energyBtn.addEventListener("click", energy);
rayBtn.addEventListener("click", ray);
endBtn.addEventListener("click", endOfStory);

// Content area functions
function showContent() {
  content.classList.remove("hide");
}

function hideContent() {
  content.classList.add("hide");
}

function clear() {
  title.innerHTML = "";
  content1.innerHTML = "";
  content2.innerHTML = "";
  content3.innerHTML = "";
  content4.innerHTML = "";
  imgContent.innerHTML = "";
}

function generateImg(src, alt) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  imgContent.appendChild(img);
}

// Content display functions
function whoWas() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[0].title;
      content1.innerHTML = data[0].content1;
      content2.innerHTML = data[0].content2;
      generateImg("./img/tesla.jpg", data[0].title);
    });
}

function earlyLife() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[1].title;
      content1.innerHTML = data[1].content1;
      content2.innerHTML = data[1].content2;
      content3.innerHTML = data[1].content3;
      generateImg("./img/early.jpg", data[1].title);
    });
}

function education() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[2].title;
      content1.innerHTML = data[2].content1;
      content2.innerHTML = data[2].content2;
      generateImg("./img/education.jpg", data[2].title);
    });
}

function edison() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[3].title;
      content1.innerHTML = data[3].content1;
      content2.innerHTML = data[3].content2;
      content3.innerHTML = data[3].content3;
      generateImg("./img/edison.jpg", data[3].title);
      generateImg("./img/edison2.jpg", data[3].title);
    });
}

function soloVenture() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[4].title;
      content1.innerHTML = data[4].content1;
      content2.innerHTML = data[4].content2;
      generateImg("./img/solo.jpg", data[4].title);
    });
}

function inventions() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[5].title;
      content1.innerHTML = data[5].content1;
      content2.innerHTML = data[5].content2;
      generateImg("./img/inventions.jpg", data[5].title);
    });
}

function electrical() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[6].title;
      content1.innerHTML = data[6].content1;
      content2.innerHTML = data[6].content2;
      content3.innerHTML = data[6].content3;
      content4.innerHTML = data[6].content4;
      generateImg("./img/electrical.jpg", data[6].title);
    });
}

function hidroelectric() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[7].title;
      content1.innerHTML = data[7].content1;
      content2.innerHTML = data[7].content2;
      generateImg("./img/hidroelectric.jpg", data[7].title);
    });
}

function coil() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[8].title;
      content1.innerHTML = data[8].content1;
      content2.innerHTML = data[8].content2;
      generateImg("./img/coil.jpg", data[8].title);
    });
}

function energy() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[9].title;
      content1.innerHTML = data[9].content1;
      content2.innerHTML = data[9].content2;
      content3.innerHTML = data[9].content3;
      content4.innerHTML = data[9].content4;
      generateImg("./img/free.jpg", data[9].title);
    });
}

function ray() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[10].title;
      content1.innerHTML = data[10].content1;
      content2.innerHTML = data[10].content2;
      content3.innerHTML = data[10].content3;
      generateImg("./img/ray.jpg", data[10].title);
    });
}

function endOfStory() {
  showContent();
  clear();
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data[11].title;
      content1.innerHTML = data[11].content1;
      content2.innerHTML = data[11].content2;
      generateImg("./img/ends.jpg", data[11].title);
    });
}
