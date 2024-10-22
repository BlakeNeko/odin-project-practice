let dropdownMenu = document.querySelectorAll('.dropdown-menu');
let dropdownMenuContent = document.querySelector('.dropdown-menu-content');

dropdownMenu.forEach((dropdown) => {
  let dropdownMenuContent = dropdown.querySelector('.dropdown-menu-content');

  dropdown.addEventListener('mouseenter', () => {
    dropdownMenuContent.classList.remove('hidden');
    dropdownMenuContent.classList.add('visible');
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdownMenuContent.classList.remove('visible');
    dropdownMenuContent.classList.add('hidden');
  });
});
