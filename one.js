const welcomeImage = document.getElementById('welcome-image');
const mainContent = document.getElementById('main-content');

setTimeout(() => {
  welcomeImage.style.opacity = 0; // Fade out the image
  mainContent.style.display = 'block'; // Show the content
}, 3000); // Delay for 2 seconds
