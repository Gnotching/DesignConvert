const menuToggle = document.querySelector('.menu-Toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click',function () {
	nav.classList.toggle('slide');
});