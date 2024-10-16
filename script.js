let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menuClose = document.querySelector(".menu__close");

burger.addEventListener("click", () => {
	menu.classList.toggle("active")
})

menuClose.addEventListener("click", () => {
	menu.classList.remove("active")
})

$(document).ready(function(){
	$('.reviews__slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		draggable: false,
		responsive: [
		{
			breakpoint: 1369,
			settings: {
				arrows: false,
			}
		},
		{
			breakpoint: 790,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		}
		]
	});
})

const menuItems = document.querySelectorAll(".menu__item");

for (menuItem of menuItems) {
	menuItem.addEventListener("click", () => {
		menu.classList.remove("active")
	})
}