const contactForm = document.querySelector("#contact");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const streetAddress = document.querySelector("#address");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const contactFormError = document.querySelector("#contact-error");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const streetAddressError = document.querySelector("#address-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");

function formValidation() {
  event.preventDefault();

  if (checkLength(firstName.value, 1) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 3) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(streetAddress.value, 24) === true) {
    streetAddressError.style.display = "none";
  } else {
    streetAddressError.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
}

contactForm.addEventListener("submit", formValidation);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchingPatterns = regEx.test(email);
  return matchingPatterns;
}
