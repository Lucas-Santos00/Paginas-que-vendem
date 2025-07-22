// Faq dorpdown
const faqItens = Array.from(document.getElementsByClassName('faq-item'));
const addOpenFaqItem = (item) => item.classList.toggle('open');

faqItens.forEach(element => {
    element.addEventListener('click', (event) => {
        element.classList.toggle('active')
        const toggleItem = element.querySelector('.toggle-element');
        addOpenFaqItem(toggleItem);
    });
});

// Carrossel script
const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');
const carrossel = document.getElementById('carrossel');

let indice = 0;

const atualizarBotoes = () => {
  // Esconde "voltar" se estiver no primeiro item
  if (indice === 0) {
    backBtn.style.display = 'none';
  } else {
    backBtn.style.display = 'flex';
  }

  // Esconde "próximo" se estiver no último item
  if (indice >= carrossel.children.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'flex';
  }
};

const moveCarrossel = (option) => {
  if (option === 'next') {
    indice++;
  } else if (option === 'back') {
    indice--;
  }

  // Limita o índice
  if (indice < 0) indice = 0;
  if (indice > carrossel.children.length - 1) indice = carrossel.children.length - 1;

  carrossel.style.transform = `translateX(-${indice * 100}%)`;

  atualizarBotoes();
};

// Listeners
nextBtn.addEventListener('click', () => moveCarrossel('next'));
backBtn.addEventListener('click', () => moveCarrossel('back'));

// Inicializa botões
atualizarBotoes();
