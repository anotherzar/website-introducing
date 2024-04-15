const btnMore = document.querySelector('.btn-more');

btnMore.addEventListener('mouseover', function() {
  btnMore.style.opacity = '0.5'; // Atur opacity saat dihover
});

btnMore.addEventListener('mouseout', function() {
  btnMore.style.opacity = '1'; // Kembalikan opacity saat mouse keluar
});

//   href="https://example.com" target="_blank"