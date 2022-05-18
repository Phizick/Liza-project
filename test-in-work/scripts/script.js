const slideBarItem = document.querySelectorAll(".slidebar__list-item");
slideBarItem.forEach(function (i) {
  i.addEventListener("click", function () {
    if (i.children[1].classList.contains("items__list")) {
      i.children[1].classList.toggle("items__list_active");
      i.children[0].children[1].classList.toggle("list-item__icon_active");
    }
  });
});

const Labels = document.querySelectorAll('.form__label')
Labels.forEach(function(label) {
  label.addEventListener('click',function() {
    label.children[0].classList.contains('form__checkbox') || label.children[0].classList.contains('form__radio') ? label.children[0].checked ? label.children[2].classList.toggle('form__pseudo-text_select') : null : null
  })
})