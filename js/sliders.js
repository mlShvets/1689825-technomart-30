const prevBtn = document.querySelector(".prev-slide");
nextBtn = document.querySelector(".next-slide");
slides = document.querySelectorAll(".slide");
dots = document.querySelectorAll(".dot");
deliveryBtn = document.querySelector(".delivery-btn");
garantyBtn = document.querySelector(".garanty-btn");
creditBtn = document.querySelector(".credit-btn");
deliveryService = document.querySelector(".service-delivery");
garantyService = document.querySelector(".service-garanty");
creditService = document.querySelector(".service-credit");

let index = 0;

// gallery slider

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove("slide-current");
  }
  slides[n].classList.add("slide-current");
}

const activeDot = n => {
  for (dot of dots) {
    dot.classList.remove("dot-current");
  }
  dots[n].classList.add("dot-current");
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
    activeDot(index);
  } else {
    index++;
    activeSlide(index);
    activeDot(index);
  }
}
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
    activeDot(index);
  } else {
    index--;
    activeSlide(index);
    activeDot(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    activeSlide(index);
    activeDot(index);
  })
})

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);


// Services slider

deliveryBtn.addEventListener("click", function () {
  deliveryBtn.classList.add("serviсes-current");
  garantyBtn.classList.remove("serviсes-current");
  creditBtn.classList.remove("serviсes-current");
  deliveryService.classList.add("service-offers-current");
  garantyService.classList.remove("service-offers-current");
  creditService.classList.remove("service-offers-current");
})

garantyBtn.addEventListener("click", function () {
  deliveryBtn.classList.remove("serviсes-current");
  garantyBtn.classList.add("serviсes-current");
  creditBtn.classList.remove("serviсes-current");
  deliveryService.classList.remove("service-offers-current");
  garantyService.classList.add("service-offers-current");
  creditService.classList.remove("service-offers-current");
})
creditBtn.addEventListener("click", function () {
  deliveryBtn.classList.remove("serviсes-current");
  garantyBtn.classList.remove("serviсes-current");
  creditBtn.classList.add("serviсes-current");
  deliveryService.classList.remove("service-offers-current");
  garantyService.classList.remove("service-offers-current");
  creditService.classList.add("service-offers-current");
})
