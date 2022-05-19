const slideBarItem = document.querySelectorAll(".slidebar-list__item");

slideBarItem.forEach(function (i) {
  i.addEventListener("click", function () {
    if (i.children[1].classList.contains("items")) {
      i.children[1].classList.toggle("items_active");
      i.children[0].children[1].classList.toggle("slidebar-list__item-icon_active");
    }
  });
});
