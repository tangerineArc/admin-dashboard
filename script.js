document.querySelectorAll(".heart-icon").forEach(icon => {
    icon.addEventListener("click", event => {
        if (icon.style.stroke !== "crimson") {
            icon.style.stroke = "crimson";
            icon.style.fill = "crimson";
        } else {
            icon.style.stroke = getComputedStyle(document.documentElement).getPropertyValue("--primary-text-color");
            icon.style.fill = "none";
        }
    });
});

setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);

document.querySelector(".theme-toggler").addEventListener("click", event => {
    setTheme(document.querySelector(".theme-toggler").id === "sun-icon");
});

function setTheme(checker) {
    const themeToggler = document.querySelector(".theme-toggler");
    const root = document.documentElement;

    const drawSun = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`;
    const drawMoon = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`;

    if (checker) {
        root.className = "dark";
        themeToggler.id = "moon-icon";
        themeToggler.innerHTML = drawMoon;
        root.className = "dark";
    } else {
        themeToggler.id = "sun-icon";
        themeToggler.innerHTML = drawSun;
        root.className = "light";
    }

    document.querySelectorAll(".heart-icon").forEach(icon => {
        if (icon.style.stroke !== "crimson") {
            icon.style.stroke = getComputedStyle(document.documentElement).getPropertyValue("--primary-text-color");
        }
    });
}