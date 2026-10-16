
const savedTheme = localStorage.getItem("avengers-theme") || "dark";

document.documentElement.dataset.theme = savedTheme;

const themeButton = document.createElement("button");
themeButton.id = "theme-toggle";
themeButton.type = "button";
themeButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";
themeButton.setAttribute("aria-label", "Перемкнути тему");

document.body.appendChild(themeButton);

themeButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("avengers-theme", newTheme);

    themeButton.textContent =
        newTheme === "dark" ? "☀️" : "🌙";
});
