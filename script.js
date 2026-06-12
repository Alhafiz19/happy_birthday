// --- Login Logic ---
function checkPassword() {
    const input = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const audio = document.getElementById("bg-music");

    if (input === "02.07.03") {
        // Hide Page 1, Show Page 2
        document.getElementById("login-page").style.display = "none";
        document.getElementById("brochure-page").style.display = "block";
        
        // Play the music!
        audio.play().catch(error => {
            console.log("Audio play failed:", error);
        });
    } else {
        // Show error
        errorMessage.style.display = "block";
    }
}

// --- Brochure Slider Logic ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
    // Remove 'active' class from current slide
    slides[currentSlideIndex].classList.remove("active");

    // Calculate new slide index
    currentSlideIndex += direction;

    // Loop back to start or end if out of bounds
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // Go back to first slide
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // Go to last slide
    }

    // Add 'active' class to new slide
    slides[currentSlideIndex].classList.add("active");
}