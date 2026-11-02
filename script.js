const dialog = document.querySelector('dialog');
document.querySelectorAll('[data-image]').forEach(button => {button.addEventListener('click', () => {const image = dialog.querySelector('img'); image.src = button.dataset.image; image.alt = button.querySelector('img').alt; dialog.showModal();});});
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target === dialog) dialog.close();});
// Filter the gallery while keeping each photograph's original collection label.
const photoFilters = document.querySelectorAll('[data-filter]');
photoFilters.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let count = 0;
    document.querySelectorAll('[data-collection]').forEach(figure => {
      figure.hidden = filter !== 'all' && figure.dataset.collection !== filter;
      if (!figure.hidden) count += 1;
    });
    photoFilters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const label = filter === 'all' ? 'all' : filter === 'pure-earth' ? 'Pure Earth Labs' : 'BYU Grounds';
    document.querySelector('.photo-count').textContent = filter === 'all' ? `Showing all ${count} photographs` : `Showing ${count} ${label} photographs`;
  });
});
