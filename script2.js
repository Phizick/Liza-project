const formBtn = document.querySelector(".button__result");


const testMarker = document.getElementsByName('question');
const testMarkerCheck = document.getElementsByName("question__first");



testMarker.forEach(item => {
item.addEventListener('click', () => {
    if ( item.checked === true) {
        formBtn.classList.add("button__result_active");
    } if (item.checked === false) {
        formBtn.classList.remove("button__result_active")
    }
})})

testMarkerCheck.forEach(item => {
    item.addEventListener('click', () => {
        if ( item.checked === true) {
            formBtn.classList.add("button__result_active");
        } if (item.checked === false) {
            formBtn.classList.remove("button__result_active")
        }
})})



function resulted() {
    let count = 0;
for (i = 0; i < testMarkerCheck.length; i++) {
    let check = testMarkerCheck[i];    
    if (check.checked === true) {
        count++
    }    
}
return count;
}
 


function countTest() {
    if (formBtn.classList.contains("button__result_active") 
    && (resulted() >= 1)
    & questionFive.checked) {
    this.location.href = 'testPassed.html';
    } else {
        this.location.href = 'testFailed.html'
    }
    
}

