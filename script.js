// Smooth scrolling
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close when clicking outside the popup
window.onclick = function(event) {
    const popup = document.getElementById("popup");

    if (event.target === popup) {
        closePopup();
    }
}
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


console.log("Maham Khalid Portfolio Loaded");
