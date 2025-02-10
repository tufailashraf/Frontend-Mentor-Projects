document.querySelector('#btn').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  })

  function updateImageSource() {
    const img = document.getElementById("heroImg");
    if (window.innerWidth <= 624) {
      img.src = "images/hero-mobile.jpg";
      // img.setAttribute("src", "images/hero-mobile.jpg");
    } else {
      img.src = "images/hero-desktop.jpg";
      // img.setAttribute("src", "images/hero-desktop.jpg");
    }
  }
  window.addEventListener("load", updateImageSource);
  window.addEventListener("resize", updateImageSource);