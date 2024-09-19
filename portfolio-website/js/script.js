
// ==== Transforma o menu hamburguer em um X ===== //
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.classList.add('show');
    } else {
        nav.classList.remove('show');
    }
}

document.querySelectorAll('.services-box .btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const paragraph = this.previousElementSibling;
        paragraph.classList.toggle('show-more');

        if (paragraph.classList.contains('show-more')) {
            this.textContent = 'Leia menos';
        } else {
            this.textContent = 'Leia mais';
        }
    });
});

(function() {
    emailjs.init("rMNBCzouDPYSPI18i");
})();

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

        // Configura os parâmetros do serviço EmailJS
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };

    emailjs.send('service_2y790ci', 'template_irffaer', templateParams)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            console.error("erro", error)
            alert('Erro ao enviar a mensagem. Tente novamente.');
        });
});