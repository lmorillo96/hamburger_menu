export default function scrollId() {
    
    const d = document,
        w = window;
    const links = d.querySelectorAll("a[href^='#']")

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            
            let idSection = e.target.getAttribute("href")
            console.log(idSection);
            let element = d.querySelector(`${idSection}`);
            /* console.log(position) */

            element.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });

        })
    })
}