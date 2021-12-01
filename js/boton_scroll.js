const d = document,
    w = window;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", e => {
        let scrollTop = d.documentElement.scrollTop;
        
        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
    });

    $scrollBtn.addEventListener("click", e => {
        e.preventDefault();
        w.scrollTo({
            behavior: 'smooth',
            top: 0
        });
    });
}