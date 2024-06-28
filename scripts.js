document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('download-btn').addEventListener('click', () => {
        alert('Iniciando download do ebook...');
        window.location.href = 'ebook.pdf';
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cadastro realizado com sucesso, boa sorte!');
    });
});
