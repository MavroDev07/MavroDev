document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('menu-icon');
    const slideMenu = document.getElementById('slide-menu');
    const closeIcon = document.getElementById('close-icon');
  
    hamburgerIcon.addEventListener('click', () => {
      slideMenu.style.right = '0';
    });
  
    closeIcon.addEventListener('click', () => {
      slideMenu.style.right = '-100%';
    });
  });