"use strict"

$("document").ready(function () {
	setLandingImage()
});

// random background images
function setLandingImage () {
	var imageFolder;
	var chosenImageArray;

	var fullSizeImageArray = [
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

	var mobileImageArray = [
		"hydrant",
		"sunrise",
		"lights",
		"tree",
		"fan",
		"beach"
	];

	if (screen.width <= 699) {
		imageFolder = "mobile"
		chosenImageArray = mobileImageArray
	} else {
		imageFolder = "full_screen"
		chosenImageArray = fullSizeImageArray
	}

	var randomNumber = Math.floor(Math.random() * chosenImageArray.length);
	var randomImageName = chosenImageArray[randomNumber];
	$(".landing").css("background", `url(dist/css/img/${imageFolder}/${randomImageName}.jpg) no-repeat center`)
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
