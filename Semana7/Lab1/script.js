function playVideoSound() {
    var video = document.getElementById("video-eco-bloques");
    if (video.muted) {
        video.muted = false;
        document.getElementById("video-cover").style.opacity = 0.2;
        document.getElementById("video-text").hidden = true;
    } else {
        video.muted = true;
        document.getElementById("video-cover").style.opacity = 0.7;
        document.getElementById("video-text").hidden = false;
    }
}