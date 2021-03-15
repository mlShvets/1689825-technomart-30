const feedbackLink = document.querySelector(".contacts-button");
feedbackPopup = document.querySelector(".modal-feedback");
feedbackClose = feedbackPopup.querySelector(".modal-close");
feedbackForm = feedbackPopup.querySelector(".feedback-form");
feedbackName = feedbackPopup.querySelector("[name=name]");
feedbackEmail = feedbackPopup.querySelector("[name=email]");
feedbackTextarea = feedbackPopup.querySelector("[name=message]");
mapLink = document.querySelector(".map-link img");
mapPopup = document.querySelector(".modal-map");
mapClose = mapPopup.querySelector(".modal-close");

let isStorageSupport = true;
storagename = "";
storageemail = "";

try {
  storagename = localStorage.getItem("name");
  storageemail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storagename || storageemail) {
    feedbackName.value = storagename;
    feedbackEmail.value = storageemail;
    feedbackTextarea.focus()
  } else { feedbackName.focus() }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error")
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackTextarea.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error")
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
