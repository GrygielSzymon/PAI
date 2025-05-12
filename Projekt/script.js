/* hamburger */
function toggleMenu() {
    const menu = document.getElementById('nav-links');
    menu.classList.toggle('show');
}

/* gallery */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length){
    {slideIndex = 1}
  }

  if (n < 1) {
    {slideIndex = slides.length}
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* types */
const images = [
    { src: "assets/mtb.jpg", description: "rowery do jazdy w trudnym terenie", bikeName: "Rower MTB" },
    { src: "assets/road.jpg", description: "szybka jazda po asfalcie", bikeName: "Rower szosowy" },
    { src: "assets/gravel.jpg", description: "uniwersalny na asfalt i szuter", bikeName: "Rower grawelowy" },
    { src: "assets/city.jpg", description: "wygoda na co dzień", bikeName: "Rower miejski" },
    { src: "assets/velotric-e-bike-0026-67ace81554b22.jpg", description: "brak zmęczenia", bikeName: "Rower elektryczny" },
    { src: "assets/wethepeople-envy-carbonic-20-i2.jpg", description: "idealny na scatepark", bikeName: "Rower BMX" }
];

const mainImage = document.getElementById('mainImage');
const description = document.getElementById('description');
const bikeName = document.getElementById('bikeName');
const thumbnails = document.querySelectorAll('.thumbnail');

function showImage(index) {
    mainImage.src = images[index].src;
    description.textContent = images[index].description;
    bikeName.textContent = images[index].bikeName;

    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('selected', i === index);
    });
}

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('mouseover', () => showImage(index));
    thumb.addEventListener('mouseout', () => {
        if (!thumb.classList.contains('selected')) {
            mainImage.src = images[0].src;
            description.textContent = images[0].description;
            bikeName.textContent = images[0].bikeName;
        }
    });
});

/* accessbility panel */
let fontSize = 16;

function adjustFontSize(direction) {
  if (direction === 'increase') fontSize += 2;
  if (direction === 'decrease') fontSize = Math.max(12, fontSize - 2);
  document.body.style.fontSize = fontSize + 'px';
}

function toggleGrayscale() {
  document.body.classList.toggle('grayscale');
}

function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
}

function toggleReadableFont() {
  document.body.classList.toggle('readable-font');
}

function resetAccessibility() {
  fontSize = 16;
  document.body.style.fontSize = '';
  document.body.classList.remove('grayscale', 'high-contrast', 'readable-font');
}