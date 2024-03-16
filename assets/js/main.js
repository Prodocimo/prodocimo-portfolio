const linksContatos = document.querySelectorAll('.links');

for (const link of linksContatos) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        setTimeout(() => {
            window.location.href = link.href;
        }, 700);
    });
}