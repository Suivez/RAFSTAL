let lastScroll = 0;
const header = document.getElementsByClassName("site-header")[0];

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll w dół → chowamy
        header.classList.add("hide-header");
        console.log("w dół");
    } else {
        // Scroll w górę → pokazujemy
        header.classList.remove("hide-header");
        console.log("w góre");
    }

    lastScroll = currentScroll;
});