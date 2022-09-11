const btnMenu = document.getElementById('menu-icon');
console.log(btnMenu)
btnMenu.addEventListener("click", function() {
  const optionsMenu = document.getElementsByClassName('options-menu');
  console.log(optionsMenu);
  optionsMenu[0].classList.toggle("show")
})