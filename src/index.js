const navDownArrow = document.querySelector(".navbar__down-arrow");
const navDropdown = document.querySelector(".navbar__dropdown");
const viewPort = window.visualViewport;

// Displaying or hiding dropdown when arrow is clicked
navDownArrow.addEventListener("click", () => {
    if (navDropdown.style.display === "flex") {
        navDropdown.style.display = "none";
    } else {
        navDropdown.style.display = "flex";
    }
});

// Removing dropdown when viewport width is resized to tablet or larger
viewPort.addEventListener("resize", () => {
    if (window.visualViewport.width >= 768) {
        console.log("Wah!");
        navDropdown.style.display = "none";
    }
});

// Removing dropdown if viewport width is size of tablet or larger
if (viewPort.width >= 768) {
    console.log("Wah!");
    navDropdown.style.display = "none";
}
