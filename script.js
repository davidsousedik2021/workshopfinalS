const image = document.getElementById("image"); 
        const details = document.getElementById("details");

        image.addEventListener("mouseenter", () => {
            details.style.display = "block";
        });

        image.addEventListener("mouseleave", () => {
            details.style.display = "none";
        });