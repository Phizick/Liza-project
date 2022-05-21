const listItems = document.querySelectorAll(".sidebar__order-item");
listItems.forEach(function (item) {
  item.addEventListener("click", function() {
    item.children[0].children[1].classList.toggle("sidebar__order-icon_active");
    Accordion(item);
  });
});
function Accordion(elem) {
  if (elem.children[1] === undefined) {
    return null;
  }
  if (elem.children[1].classList.contains("sidebar__under-list")) {
    elem.children[1].classList.toggle("sidebar__under-list_visible");
  }
}
