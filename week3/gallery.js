// Variable to keep track of the current slide
let currentSlide = 1;

// Function to update the slide's visibility
function showSlide(slideNumber) {
  const slides = document.querySelectorAll('.mySlide');
  
  // Check if slideNumber is out of bounds
  if (slideNumber < 1) {
    currentSlide = slides.length;
  } else if (slideNumber > slides.length) {
    currentSlide = 1;
  }
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  // Show the current slide
  slides[currentSlide - 1].style.display = 'block';

  // Update the slide number display
  const slideNumberDisplay = document.querySelectorAll('.numbertext');
  for (let i = 0; i < slideNumberDisplay.length; i++) {
    slideNumberDisplay[i].textContent = currentSlide + ' / ' + slides.length;
  }
}

// Function to increment/decrement the current slide number
function changeSlide(direction) {
  if (direction === 'next') {
    currentSlide++;
  } else if (direction === 'prev') {
    currentSlide--;
  }
  showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

// Add event listeners to the 'prev' and 'next' buttons
document.querySelector('.prev').addEventListener('click', function() {
  changeSlide('prev');
});

document.querySelector('.next').addEventListener('click', function() {
  changeSlide('next');
});
