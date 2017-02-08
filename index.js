let isDown = false;
let startX;
let scrollLeft;

window.onload = function () {
    const items = document.querySelectorAll('.item');
    const slider = document.querySelector('.items');
    colorAndRotateDivs(items);

    /*
    * Anker down when yopu click, calculate how much you moved the mouse during its clicked
    * then scroll this calculated value
    */
    slider.addEventListener("mousedown", (e) => {
        slider.classList.add("active");
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
        slider.classList.remove("active");
        isDown = false;
    });
    slider.addEventListener("mouseup", () => {
        slider.classList.remove("active");
        isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
    });
}

function colorAndRotateDivs(items) {
    items.forEach(item => {
        const count = 1;
        const inside = item.querySelector('.inside');
        if (item.dataset.index % 2) {
            inside.style.backgroundColor = "var(--color-highlight1_dark)";
            inside.style.transform = "rotateY(45deg)";
            item.style.marginRight = "-40px";
        }
        else {
            inside.style.backgroundColor = "var(--color-highlight1)";
            inside.style.transform = "rotateY(-45deg)";
        }
    });
}