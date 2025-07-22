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
