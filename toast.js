function showToastFade() {
    var toast = document.getElementById("toast-fade");
    toastfade.classList.add("show");
    setTimeout(function() {
        toastfade.classList.remove("show");
    }, 3000); // Hide the toast after 3 seconds
}

function showToastSlide() {
    var toast = document.getElementById("toast-slide");
    toastslide.classList.add("show");
    setTimeout(function() {
        toastslide.classList.remove("show");
    }, 3000); // Hide the toast after 3 seconds
}