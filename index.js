const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');


openBtn.addEventListener('click', () => {
    var element = document.getElementById("menu");
    element.classList.add("active");
});

closeBtn.addEventListener('click', () => {
    var element = document.getElementById("menu");
    element.classList.remove("active");
});