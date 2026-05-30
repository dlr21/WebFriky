function togglePost(id) {
    const post = document.getElementById(id);

    if (post.style.display === "block") {
        post.style.display = "none";
    } else {
        post.style.display = "block";
    }
}

const images = document.querySelectorAll(".carousel-image");

let current = 0;

function updateCarousel() {

    const total = images.length;

    images.forEach((img, index) => {

        let offset = index - current;

        // loop infinito
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        img.style.opacity = "0";
        img.style.transform = "translate(-50%, -50%) scale(0.6)";
        img.style.zIndex = "0";

        // ⭐ CENTRO
        if (offset === 0) {

            img.style.opacity = "1";
            img.style.zIndex = "5";
            img.style.transform = "translate(-50%, -50%) scale(2)";
        }

        // 👉 1 A LA DERECHA
        else if (offset === 1) {

            img.style.opacity = "0.6";
            img.style.zIndex = "4";
            img.style.transform = "translate(calc(-50% + 280px), -50%) scale(1.5)";
        }

        // 👉 2 A LA DERECHA
        else if (offset === 2) {

            img.style.opacity = "0.3";
            img.style.zIndex = "3";
            img.style.transform = "translate(calc(-50% + 520px), -50%) scale(1)";
        }

        // 👈 1 A LA IZQUIERDA
        else if (offset === -1) {

            img.style.opacity = "0.6";
            img.style.zIndex = "4";
            img.style.transform = "translate(calc(-50% - 280px), -50%) scale(1.5)";
        }

        // 👈 2 A LA IZQUIERDA
        else if (offset === -2) {

            img.style.opacity = "0.3";
            img.style.zIndex = "3";
            img.style.transform = "translate(calc(-50% - 520px), -50%) scale(1)";
        }
    });
}

function moveSlide(dir) {

    current += dir;

    if (current < 0) current = images.length - 1;
    if (current >= images.length) current = 0;

    updateCarousel();
}

// importante: esperar a que cargue el DOM
window.addEventListener("DOMContentLoaded", updateCarousel);