const buttons = document.getElementsByClassName("buttons"),
  articles = document.getElementsByTagName("article"),
  toolbar = document.getElementById("toolbar");

for (const button of buttons) {
  button.onclick = () => {
    var activeBtn = document.querySelector("p.active-btn");

    articleIndex(button.id);

    activeBtn.classList.remove("active-btn");
    button.classList.add("active-btn");

    activeBtn = button;
  };
}

function articleIndex(index) {
  var activeArticle = document.querySelector('article[data-status="active"]');

  activeArticle.dataset.status = "inactive";

  for (const article of articles) {
    if (article.dataset.index == index) {
      article.dataset.status = "active";

      activeArticle = article;
    }
  }
}

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
