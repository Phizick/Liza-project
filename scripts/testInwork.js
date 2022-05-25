const formBtn = document.getElementById("btn-result");
const testMarker = document.getElementsByName("question");
const testMarkerCheck = document.getElementsByName("question__first");

function resulted() {
    let count = 0;
    for (i = 0; i < testMarkerCheck.length; i++) {
        const check = testMarkerCheck[i];
        if (check.checked === true) {
            count++;
        }
    }
    return count;
}

testMarker.forEach((item) => {
    this.addEventListener("click", () => {
        if (item.checked === true) {
            formBtn.classList.add("button__color_orang");
            formBtn.classList.remove("button__text_gray", "button__color_gray")
        }
        if (resulted() <= 0) {
            formBtn.classList.add("button__text_gray", "button__color_gray");
            formBtn.classList.remove("button__color_orang")
        }
    });
});
let radioValueCount = 0
testMarkerCheck.forEach((item) => {
    this.addEventListener("click", () => {
        if (item.checked === true && radioValueCount >= 1) {
            formBtn.classList.add("button__color_orang");
            formBtn.classList.remove("button__text_gray", "button__color_gray")
            radioValueCount++;
        }
        if (resulted() <= 0) {
            formBtn.classList.add("button__text_gray", "button__color_gray");
            formBtn.classList.remove("button__color_orang")
        }
    });
});

function countTest() {
    if (formBtn.classList.contains("button__color_orang") & (resulted() >= 2) & questionFive.checked) {
        this.location.href = "testResultWin.html";
    } else {
        this.location.href = "testResultLoss.html";
    }
}
