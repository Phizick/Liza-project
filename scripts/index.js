document.querySelectorAll(".sidebar-content__order-item").forEach(item => item.addEventListener('click',() => {
  item.children[0].children[1].classList.toggle("sidebar-content__order-icon_active");
  Accordion(item);
}));

function Accordion(elem) {
  if (elem.children[1] === undefined) {
    return null;
  }
  if (elem.children[1].classList.contains("sidebar-content__under-list")) {
    elem.children[1].classList.toggle("sidebar-content__under-list_visible");
  }
}
document.querySelectorAll('.range').forEach(item => item.addEventListener('input',() => item.style.background = 'linear-gradient(90deg, #FF6600 ' + item.value + '%, #9397A3 ' + item.value + '%)'));




