const profileInputs = document.querySelectorAll(".personal-info__input");
const profileSubmitForms = document.querySelectorAll(".personal-info__form");
const profileSubmitBttn = document.querySelector(".personal-info__button-submit");
const profileAvatar = document.querySelector(".sidebar-account__image");
const profileName = document.querySelector(".sidebar-account__title");
const formAvatar = document.querySelector("#form-avatar");
const formName = document.querySelector("#form-name");
profileName.textContent = [formName.value];
profileAvatar.setAttribute("src", `${"./images/" + formAvatar.value}`);

const dateMask = IMask(document.querySelector("#form-birth"), {
	mask: Date,
	min: new Date(1900, 0, 1),
	max: new Date(2100, 0, 1),
	lazy: false,
});

const numberMask = IMask(document.querySelector("#form-phone"), {
	mask: Number,
	min: 0,
	max: 1000000000000000,
	thousandsSeparator: " ",
});

function disableRemove(elem) {
	elem.removeAttribute("disabled");
}

function disableAdd(elem) {
	elem.setAttribute("disabled", "disabled");
}

function submitForm() {
	profileInputs.forEach(item => {
		if (item.value.length !== 0) {
			item.textContent = item.value;
			profileName.textContent = formName.value;
			profileAvatar.setAttribute(
				"src",
				`${"./images/" + formAvatar.value}`
			);
		}
	});
}

profileInputs.forEach(item => {
	item.oninput = () => {
		let parentForm = item.closest("form");
		const profileSubmitBttn = parentForm.querySelector(
			".personal-info__button-submit"
		);
		disableRemove(profileSubmitBttn);
	};
});

profileSubmitForms.forEach(form =>
	form.addEventListener("submit", evt => {
		evt.preventDefault();
		submitForm();
		disableAdd(form.lastElementChild);
	})
);
