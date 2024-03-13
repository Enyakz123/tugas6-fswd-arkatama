let slideIndex = 0;

function carousel() {
  const slides = document.querySelectorAll('.carousel-slide img');
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

carousel(); // Start carousel
