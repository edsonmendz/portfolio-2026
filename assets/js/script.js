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

/* --- Geração Dinâmica das Tecnologias (Marquee) --- */
const techData = [
    // Linha 1
    {
        repeat: 8,
        items: [
            { name: 'HTML', icon: 'devicon-html5-plain', type: 'icon', class: 'tech-html' },
            { name: 'CSS', icon: 'devicon-css3-plain', type: 'icon', class: 'tech-css' },
            { name: 'Javascript', icon: 'devicon-javascript-plain', type: 'icon', class: 'tech-js' },
            { name: 'React', icon: 'devicon-react-original', type: 'icon', class: 'tech-react' },
            { name: 'Kotlin', icon: 'devicon-kotlin-plain', type: 'icon', class: 'tech-kotlin' }
        ]
    },
    // Linha 2
    {
        repeat: 8,
        items: [
            { name: 'Android', icon: 'devicon-android-plain', type: 'icon', class: 'tech-android' },
            { name: 'XML', icon: 'devicon-xml-plain', type: 'icon', class: 'tech-xml' },
            { name: 'Retrofit', imgSrc: 'https://static.thenounproject.com/png/retrofit-icon-5979846-512.png', type: 'img', class: 'tech-retrofit' },
            { name: 'AdMob', imgSrc: 'https://img.icons8.com/?size=100&id=J3caGozFXTk1&format=png&color=000000', type: 'img', class: 'tech-admob' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain', type: 'icon', class: 'tech-node' }
        ]
    },
    // Linha 3
    {
        repeat: 8,
        items: [
            { name: 'TypeScript', icon: 'devicon-typescript-plain', type: 'icon', class: 'tech-ts' },
            { name: 'Express', icon: 'devicon-express-original', type: 'icon', class: 'tech-express' },
            { name: 'Supabase', icon: 'devicon-supabase-plain', type: 'icon', class: 'tech-supabase' },
            { name: `Postgre`, icon: 'devicon-postgresql-plain', type: 'icon', class: 'tech-postgres' },
            { name: 'Python', icon: 'devicon-python-plain', type: 'icon', class: 'tech-python' }
        ]
    },
    // Linha 4
    {
        repeat: 12,
        items: [
            { name: 'IA', imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/artificial-intelligence.png', type: 'img', class: 'tech-ai' },
            { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', type: 'icon', class: 'tech-bootstrap' },
            { name: 'JQuery', icon: 'devicon-jquery-plain', type: 'icon', class: 'tech-jquery' }
        ]
    }
];

const techContainer = document.querySelector('.tech-container');

if (techContainer) {
    techData.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'tech-row';
        
        const trackDiv = document.createElement('div');
        trackDiv.className = 'tech-track';
        
        // Gera o HTML para um único grupo de itens
        let groupHTML = '';
        row.items.forEach(item => {
            let content = '';
            if (item.type === 'icon') {
                content = `<i class="${item.icon}"></i>`;
            } else if (item.type === 'img') {
                content = `<img src="${item.imgSrc}" alt="${item.name}">`;
            }
            groupHTML += `<div class="tech-card ${item.class}">${content}<span>${item.name}</span></div>`;
        });
        
        // Repete o grupo HTML conforme definido (8 ou 12 vezes)
        trackDiv.innerHTML = groupHTML.repeat(row.repeat);
        
        rowDiv.appendChild(trackDiv);
        techContainer.appendChild(rowDiv);
    });
}

/* --- Alteração Dinâmica do Título do Header --- */
const headerTitle = document.querySelector('#nome h1');
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const titles = {
                'hero': 'Edson Mendes',
                'projetos': 'Projetos',
                'tecnologias': 'Tecnologias',
                'contato': 'Contato'
            };
            if (titles[id]) headerTitle.textContent = titles[id];
        }
    });
}, { threshold: 0.5 }); // Aciona quando 50% da seção está visível

sections.forEach(section => observer.observe(section));