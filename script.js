const dialog = document.querySelector('dialog');
document.querySelectorAll('[data-image]').forEach(button => {button.addEventListener('click', () => {const image = dialog.querySelector('img'); image.src = button.dataset.image; image.alt = button.querySelector('img').alt; dialog.showModal();});});
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target === dialog) dialog.close();});