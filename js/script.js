const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("mouseover", () => {
    sidebar.classList.remove("close")
});

sidebar.addEventListener("mouseout", () => {
    sidebar.classList.add("close");
});
