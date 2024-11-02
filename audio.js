const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-toggle");

let isPermissionGranted = false; // Flag to track permission status

function requestPermission() {
    // Check if the browser supports the Web Audio API
    const playPromise = music.play();
    
    // Check if playPromise is not undefined
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isPermissionGranted = true; // User granted permission
            music.muted = false; // Unmute music since permission is granted
            musicButton.textContent = "Mute Music"; // Update button text
        }).catch((error) => {
            console.log("User did not grant permission: ", error);
            alert("Please enable sound in your browser to hear the music.");
        });
    }
}

function toggleMusic() {
    if (!isPermissionGranted) {
        requestPermission(); // Request permission before playing
    } else {
        if (music.muted) {
            music.muted = false; // Unmute music
            musicButton.textContent = "Mute Music"; // Update button text
        } else {
            music.muted = true; // Mute music
            musicButton.textContent = "Unmute Music"; // Update button text
        }
    }
}
