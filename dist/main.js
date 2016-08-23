"use strict"

$("document").ready(function () {
	setLandingImage()
});

// random background images
function setLandingImage () {
	const landingImageArray = [
		"construction",
		"daisy",
		"dandelion",
		"forest",
		"hydrant",
		"lake",
		"river",
		"roots",
		"sunset1"
	];
	const randomNumber = Math.floor(Math.random() * landingImageArray.length);
	const randomImageName = landingImageArray[randomNumber];
	$(".landing").css("background", `url(dist/css/img/${randomImageName}.jpg) no-repeat top`);
};

