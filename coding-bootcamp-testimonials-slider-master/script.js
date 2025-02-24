const testimonials = [
    {
        text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: "Tanya Sinclair",
        designation: "UX Engineer",
        image: "images/image-tanya.jpg"
    },
    {
        text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        name: "John Tarkpor",
        designation: "Junior Front-end Developer",
        image: "images/image-john.jpg"
    }
];

let currentIndex = 0;

const textElement = document.querySelector(".box-a p");
const nameElement = document.querySelector(".box-a .name");
const designationElement = document.querySelector(".box-a .designation");
const imageElement = document.querySelector(".box-b .img img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

textElement.style.transition = "opacity 0.5s ease";
nameElement.style.transition = "opacity 0.5s ease";
designationElement.style.transition = "opacity 0.5s ease";
imageElement.style.transition = "opacity 0.5s ease";

function updateTestimonial(index) {
    textElement.style.opacity = 0;
    nameElement.style.opacity = 0;
    designationElement.style.opacity = 0;
    imageElement.style.opacity = 0;

    setTimeout(() => {
        textElement.textContent = testimonials[index].text;
        nameElement.textContent = testimonials[index].name;
        designationElement.textContent = testimonials[index].designation;

        imageElement.onload = () => {
            textElement.style.opacity = 1;
            nameElement.style.opacity = 1;
            designationElement.style.opacity = 1;
            imageElement.style.opacity = 1;
        };

        imageElement.src = testimonials[index].image;
    }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
    updateTestimonial(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
});
