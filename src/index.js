const navDownArrow = document.querySelector(".navbar__down-arrow");

navDownArrow.addEventListener("click", () => {
    const navDropdown = document.querySelector(".navbar__dropdown");
    console.log(navDropdown.childNodes);

    if (navDropdown.style.display === "flex") {
        navDropdown.style.display = "none";
    } else {
        navDropdown.style.display = "flex";
    }
});
