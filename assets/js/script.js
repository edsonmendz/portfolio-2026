const projetos = document.querySelectorAll('.card-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function updateCarousel() {
    projetos.forEach((projeto, index) => {
        // (index - currentIndex) * 100% coloca os cards lado a lado
        // Ex: Se currentIndex é 0: Card 0 fica em 0%, Card 1 em 100%, Card 2 em 200%
        projeto.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : projetos.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < projetos.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

updateCarousel();