
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

    }






