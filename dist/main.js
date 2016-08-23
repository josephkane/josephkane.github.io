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
	$(".landing-image").html(`<img src="dist/css/img/${randomImageName}.jpg" alt="${randomImageName}">`);
};

