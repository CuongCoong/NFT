const searchFrom = document.querySelector(".search-form");
const toTop = document.querySelector(".backtop");
document.querySelector("#search-btn").onclick = () => {
	searchFrom.classList.toggle("active");
};
const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".header-menu");
menu.onclick = () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
};

$(window).scroll(function () {
	const pos_body = $("html,body").scrollTop(); // check how much page scroll position
	// console.log(pos_body)
	if (pos_body > 100) {
		$(".back-to-top").addClass("show");
	} else {
		$(".back-to-top").removeClass("show");
	}
});
$(".back-to-top").click(function () {
	$("html , body").animate(
		{
			scrollTop: 0,
		},
		10
	);
});
