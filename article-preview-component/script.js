const shareBtn = document.querySelector(".share");
const shareBtn2 = document.querySelector(".share-icons .share");
const sharePopup = document.querySelector(".share-popup");


document.addEventListener("DOMContentLoaded", function () {
    shareBtn.addEventListener("click", () => {
        sharePopup.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!shareBtn.contains(event.target) && !sharePopup.contains(event.target)) {
            sharePopup.classList.remove("active");
        }
    });
});

shareBtn2.addEventListener("click", () => {
    sharePopup.classList.toggle("active");
});