
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxContent = document.querySelector(".lightbox-content");
const closeButton = document.querySelector(".close-button");
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  }
});

// Close when clicking the close button
closeButton.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImg.src = "";
});

// Prevent closing when clicking the image itself
lightboxContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

