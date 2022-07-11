let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let myTimer;

function showSlides(slideIndex) {
	let i;
  	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
    	dots[i].className = dots[i].className.replace(" active", "");
  	}
	slideIndex++;

  	if (slideIndex > slides.length) {
		slideIndex = 1
	}
  	slides[slideIndex - 1].style.display = "block";
  	dots[slideIndex - 1].className += " active";
	myTimer = setTimeout(showSlides, 5000);
}

function currentSlide(no) {
	let i;
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
    	dots[i].className = dots[i].className.replace(" active", "");
	}
	slideIndex = no;
	slides[no - 1].style.display = "block";
	dots[no - 1].className += "active";
	clearTimeout(myTimer);
	myTimer = setTimeout(showSlides, 5000);
}

function plusSlides(n) {
	let newSlideIndex = slideIndex + n;
	console.log(newSlideIndex);
	if(newSlideIndex < slides.length && newSlideIndex > 0) {
		currentSlide(newSlideIndex);
	}
}

function display_on () {
	var home = document.getElementById("home-para");
	home.style.color = "black";
	home.style.animation = "fade-in 3s";
}

function Toggle() {
	var menu = document.getElementById("menu");
	menu.classList.toggle("menu-active");
}

function ViewMore() {
	var menu = document.getElementsByClassName("column");
	for(let i = 4; i < 10; i++) {
		if(menu[i].style.display != "none") {
			menu[i].style.display = "none";
		}
		else {
			menu[i].style.display = "flex";
		}
	}
}

$(document).ready(function() {
	$('#view-more-on').click(function() {
		$('.column-min').slideDown('fast');
		var arrow1 = document.getElementById("view-more-on");
		var arrow2 = document.getElementById("view-more-off");
		arrow1.style.display = "none";
		arrow2.style.display = "inline-block";
	});
	$('#view-more-off').click(function() {
		$('.column-min').slideUp('fast');
		var arrow1 = document.getElementById("view-more-on");
		var arrow2 = document.getElementById("view-more-off");
		arrow1.style.display = "inline-block";
		arrow2.style.display = "none";
	});
});

window.onload = function() {
	setTimeout(display_on, 100);
	ViewMore();
	showSlides(slideIndex);
}
