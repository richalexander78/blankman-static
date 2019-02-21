/**
* ------------------------------------------------------------------------
* Animate on Scroll (https://github.com/michalsnik/aos)
* ------------------------------------------------------------------------
*/
AOS.init({
	once: true, // whether animation should happen only once - while scrolling down
	offset: 0, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 500, // values from 0 to 3000, with step 50ms
	easing: 'ease-in', // default easing for AOS animations
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});