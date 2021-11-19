import hamburgerMenu from "./js/menu_hamburguesa.js";
import {digitalClock, alarm} from "./js/reloj.js";
import {moveBall, shortcuts} from "./js/teclado.js";
import countdown from "./js/coutdown.js";
import scrollTopButton from "./js/boton_scroll.js";
import darkTheme from "./js/theme_dark.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/car-alarm.mp3" ,"#activar-alarma", "#desactivar-alarma");
    countdown(
    "countdown",
    "Jan 15, 2022 04:00:00",
    "Feliz cumpleaños WebDev 🧑🏿‍💻 Has completado uno de tus objetivos. Sigue asi."
    );
    scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode")