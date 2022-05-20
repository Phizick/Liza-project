const listItems = document.querySelectorAll('.sidebar__order-item');
listItems.forEach(function(item) {
    item.addEventListener('click',Accordion);
})
function Accordion() {
    if(this.children[1] === undefined) {
        return null
    } else {
        this.children[1].classList.toggle('sidebar__under-list_visible');
        this.children[0].children[1].classList.toggle('sidebar__order-icon_active');
    }
}