const cartLink = document.querySelectorAll(".button-buy");
 cartPopup = document.querySelector(".modal-cart");
 cartClose = cartPopup.querySelector(".modal-close");
 resumeLink = cartPopup.querySelector(".button-resume");

cartLink.forEach((elem) => {
  elem.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

resumeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
