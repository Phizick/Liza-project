const testResTwo = JSON.parse(localStorage.getItem('resultTwo'))
const testResOne = JSON.parse(localStorage.getItem('resultOne'))

if (testResOne.a == true) {     
    textOne.classList.add("form__input-pseudo-text_style_correct")
    iconOne.classList.add("form__input-checkbox_style_correct-active")
} if (testResOne.b == true) {
    textTwo.classList.add("form__input-pseudo-text_style_correct")
    iconTwo.classList.add("form__input-checkbox_style_correct-active")
} if (testResOne.c == true) {
    textThree.classList.add("form__input-pseudo-text_style_correct") 
    iconThree.classList.add("form__input-checkbox_style_correct-active")

} if (testResTwo.a == true) {
    textFour.classList.add("form__input-pseudo-text_style_fail")
    iconFour.classList.add("form__input-radio_style_fail-active")
} if (testResTwo.b == true) {
    textFive.classList.add("form__input-pseudo-text_style_correct")
    iconFive.classList.add("form__input-checkbox_style_correct-active")
    iconFive.classList.remove("form__input-radio_style_correct")
}if (testResTwo.c == true) {
    textSix.classList.add("form__input-pseudo-text_style_fail")
    iconSix.classList.add("form__input-radio_style_fail-active")
}



