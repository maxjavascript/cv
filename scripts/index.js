const THEME_ATTRIBUTE = "data-theme";
const Themes = {
    LIGHT: "light",
    DARK: "dark",
};

const root = document.documentElement;
const button = document.querySelector("#theme-toggle-button");

function toggleTheme() {
    const theme = root.getAttribute(THEME_ATTRIBUTE);
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    root.setAttribute(THEME_ATTRIBUTE, newTheme);
    button.classList.toggle("header__button_active");
}

function handleButtonClick(event) {
    event.preventDefault();
    toggleTheme();
}

button.addEventListener("click", handleButtonClick);
