"use strict"

$("document").ready(function () {
	setLandingImage()
});

// random background images
function setLandingImage () {
	const landingImageArray = [
		"construction-rs",
		"daisy-rs",
		"dandelion-rs",
		"forest-rs",
		"hydrant-rs",
		"lake-rs",
		"river-rs",
		"roots-rs",
		"sunrise-rs"
	];
	const randomNumber = Math.floor(Math.random() * landingImageArray.length);
	const randomImageName = landingImageArray[randomNumber];
	$(".landing").css("background", `url(dist/css/img/${randomImageName}.jpg) no-repeat center`)
};

// toggle section divs
function navigateLanding (page) {
	$(".landing").toggleClass("hide")
	$(".section").each(function (index) {
		if ($(this).attr("id") == page) {
			$(this).show()
		} else {
			$(this).hide()
		}
	})
}

// go back to landing page
function backToLanding (page) {
	$(`.${page}`).hide()
	$(".landing").toggleClass("hide")
}
