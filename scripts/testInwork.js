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

function btnAddedVsbl() {
    formBtn.classList.add("button_color_orang");
    formBtn.classList.remove("button_text_gray", "button_color_gray");
}

function btnRemovedVsbl() {
    formBtn.classList.add("button_text_gray", "button_color_gray");
    formBtn.classList.remove("button_color_orang");
}

testMarker.forEach((item) => {
    this.addEventListener("click", () => {
        if (item.checked === true) {
            btnAddedVsbl();
        }
        if (resulted() <= 0) {
            btnRemovedVsbl();
        }
    });
});

let radioValueCount = 0;
testMarkerCheck.forEach((item) => {
    this.addEventListener("click", () => {
        if (item.checked === true && radioValueCount >= 1) {
            btnAddedVsbl();
            radioValueCount++;
        }
        if (resulted() <= 0) {
            btnRemovedVsbl();
        }
    });
});

function countTest() {
    if (formBtn.classList.contains("button_color_orang") & (resulted() >= 2) & questionFive.checked) {
        this.location.href = "testResultWin.html";
    } else if (formBtn.classList.contains("button_color_orang")) this.location.href = "testResultLoss.html";
}
