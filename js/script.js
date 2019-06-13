var contactsLink = document.querySelector(".main-contacts__link");
var modalFeedback = document.querySelector(".modal-feedback");
var closeFeedback = modalFeedback.querySelector(".modal-close");
var textFeedback = modalFeedback.querySelector("[name=text]");
var emailFeedback = modalFeedback.querySelector("[name=email]");
var nameFeedback = modalFeedback.querySelector("[name=name]");
var formFeedback = modalFeedback.querySelector("form");
var isStorageSupport = true;
var storageNameFeedback = "";
var storageEmailFeedback = "";

try {
  storageNameFeedback = localStorage.getItem("nameFeedback");
  storageEmailFeedback = localStorage.getItem("emailFeedback");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-show");
    if (storageNameFeedback) {
        nameFeedback.value = storageNameFeedback;
        emailFeedback.focus();
    } 
    if(storageEmailFeedback){
        emailFeedback.value = storageEmailFeedback;
        textFeedback.focus();
    } else {
        nameFeedback.focus();
    }
});

closeFeedback.addEventListener("click", function (evt){
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
});

formFeedback.addEventListener("submit", function (evt) {
    if ((!nameFeedback.value || !emailFeedback.value) || !textFeedback.value){
        evt.preventDefault();
        console.log("Пожалуйста, заполните все поля формы!");
    } else {
        if (isStorageSupport){
            localStorage.setItem("nameFeedback", nameFeedback.value);
            localStorage.setItem("emailFeedback", emailFeedback.value);
        }
    }
});

window.addEventListener ("keydown", function (evt){
    if (evt.keyCode === 27){
        evt.preventDefault();
        if (modalFeedback.classList.contains("modal-show")){
            modalFeedback.classList.remove("modal-show");
        }
    }
});