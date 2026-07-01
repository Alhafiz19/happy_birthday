// --- Login Logic ---
function checkPassword() {
    const input = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const audio = document.getElementById("bg-music");

    if (input === "02.07.03") {
        // Hide Page 1, Show Page 2
        document.getElementById("login-page").style.display = "none";
        document.getElementById("brochure-page").style.display = "block";
        
        // ADD THIS NEW LINE: Show the music player
        document.getElementById("music-player").style.display = "flex";
        
        // ADD THIS NEW LINE: Show the music player
        document.getElementById("music-player").style.display = "flex";

        // Grab the audio element
        const audio = document.getElementById("bg-music");
        
        // 1. Set where the song starts the VERY FIRST time she loads the page (e.g., 0 seconds)
        const firstPlayTime = (1 * 60) + 33; 
        
        // 2. Set where the song loops back to (Your custom time of 1 min 32 sec)
        const loopBackTime = (1 * 60) + 33; 
        
        // Start the song at the first play time
        audio.currentTime = firstPlayTime; 
        
        // Play the music!
        audio.play().catch(error => {
            console.log("Audio play failed:", error);
        });

        // 3. The Custom Loop: Listens for the song to end, then jumps to 1:32 and replays
        audio.addEventListener("ended", function() {
            audio.currentTime = loopBackTime;
            audio.play();
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

// --- Gallery Logic ---
function showGallery() {
    document.getElementById("brochure-page").style.display = "none";
    document.getElementById("gallery-page").style.display = "block";
    window.scrollTo(0, 0); // Always start at the top of the gallery
}

function backToBrochure() {
    document.getElementById("gallery-page").style.display = "none";
    document.getElementById("brochure-page").style.display = "block";
    window.scrollTo(0, 0);
}
// --- Final Wishes Logic ---
function showWishes() {
    document.getElementById("gallery-page").style.display = "none";
    // We use "flex" instead of "block" to keep the card perfectly centered
    document.getElementById("wishes-page").style.display = "flex"; 
    window.scrollTo(0, 0);
}

function backToGallery() {
    document.getElementById("wishes-page").style.display = "none";
    document.getElementById("gallery-page").style.display = "block";
    window.scrollTo(0, 0);
}
