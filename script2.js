const formBtn = document.querySelector(".button__result");



const testMarker = document.getElementsByName('question');


testMarker.forEach(item => {
item.addEventListener('click', () => {
    if ( item.checked === true) {
        formBtn.classList.add("button__result_active");
    } if (item.checked === false) {
        formBtn.classList.remove("button__result_active")
    }
})})

let inp = document.getElementsByName('question')

// function check() {
//     for (i = 0; i < inp.length; i++) {
//         if (inp[i].type == "radio" && inp[i].checked) {
//             a = true;
//         }
//     }
//     return a
// }



function countTest() {
    if (formBtn.classList.contains("button__result_active") 
    && ((questionTwo.checked & questionThree.checked) 
    || (questionTwo.checked & questionOne.checked) 
    || (questionOne.checked & questionThree.checked)
    || (questionOne.checked & questionTwo.checked)
    && inp.checked)) {
    this.location.href = 'testPassed.html';
    }
    
}

