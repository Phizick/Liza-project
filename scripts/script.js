const slideBarItem = document.querySelectorAll(".slidebar__list-item");
slideBarItem.forEach(function (i) {
  i.addEventListener("click", function () {
    i.children[1] ? i.children[1].classList.toggle("items__list_active") : null; // получаем элемент со списком
    i.children[0].children[1].classList.toggle("list-item__icon_active"); // получаю элемент ^ или v
  });
});
