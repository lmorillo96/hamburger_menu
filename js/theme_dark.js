const d = document,
    ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

        //console.log($selectors);

    let moon = "🌙",
        sun = "☀️";

    const LightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark))
        $themeBtn.textContent = moon;
        ls.getItem("theme", "light")
    }

    const DarkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark))
        $themeBtn.textContent = sun;
        ls.getItem("theme", "Dark")
    }


    d.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            //console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon) {
                DarkMode();
            } else {
                LightMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", e => {
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");
        if (ls.getItem("theme") === "Light") LightMode();
        if (ls.getItem("theme") === "Dark") DarkMode();
    });
};
