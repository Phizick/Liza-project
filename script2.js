const formBtn = document.querySelector(".button__result");


const testMarker = document.getElementsByName('question');
const testMarkerCheck = document.getElementsByName("question__first");


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
let radioValueCount = 0
testMarker.forEach(item => {
this.addEventListener('click', () => {
    if ( item.checked === true) {
        formBtn.classList.add("button__result_active");
        radioValueCount++;
    } if (resulted() <= 0) {
        formBtn.classList.remove("button__result_active")
    }
})})

testMarkerCheck.forEach(item => {
    this.addEventListener('click', () => {
        if ((item.checked === true) && (radioValueCount >= 1)) {
            formBtn.classList.add("button__result_active");
        } if (resulted() <= 0) {
            formBtn.classList.remove("button__result_active")
        }
})})


function countTest() {
    if (formBtn.classList.contains("button__result_active") 
    && (resulted() >= 2)
    & questionFive.checked) {
    this.location.href = 'testPassed.html';
    } else {
        this.location.href = 'testFailed.html'
    }    
}

