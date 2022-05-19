const slideBarItem = document.querySelectorAll(".slidebar__list-item");
slideBarItem.forEach(function (i) {
  i.addEventListener("click", function () {
    if (i.children[1].classList.contains("items__list")) {
      i.children[1].classList.toggle("items__list_active");
      i.children[0].children[1].classList.toggle("list-item__icon_active");
    }
  });
});
