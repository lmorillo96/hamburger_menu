import hamburgerMenu from "./js/menu_hamburguesa.js";
import {digitalClock, alarm} from "./js/reloj.js";
import {moveBall, shortcuts} from "./js/teclado.js";
import countdown from "./js/coutdown.js";
import scrollTopButton from "./js/boton_scroll.js";
import darkTheme from "./js/theme_dark.js";
import scrollId from "./js/scroll_id.js";
import responsiveMedia from "./js/objeto_responsive.js";
import responsiveTester from "./js/prueba_responsive.js";

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
    scrollId();
    responsiveMedia("youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/zyVed8lxJs0" target="_blank" rel=noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/zyVed8lxJs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/8WyA5S7J7Q4XrRYPA" target="_blank" rel=noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.674265655422!2d-74.78887619999999!3d10.98794075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d64d125c77b%3A0xe21428f2d12ead4e!2sPlaza%20De%20La%20Paz%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1638328141157!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);

    responsiveTester("responsive-tester");
    
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode")