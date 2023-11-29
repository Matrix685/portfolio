const toolbar = document.getElementById("toolbar");

window.onscroll = () => {
  const scrollHeight = document.documentElement.scrollTop;

  if (scrollHeight > 30) {
    toolbar.classList.add("scrolled");
  }

  if (scrollHeight < 30) {
    toolbar.classList.remove("scrolled");
  }

  const header = document.getElementById("header"),
    img = document.getElementById("img"),
    percent = (scrollHeight / header.clientHeight) * -25 + 30;

  img.style.backgroundPosition = `center ${percent}%`;
};
