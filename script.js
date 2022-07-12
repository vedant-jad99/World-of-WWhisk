let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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

function sendMail() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var occassion = document.getElementById("occassion").value;
	var date = document.getElementById("date").value;
	var textarea = document.getElementById("message").value;
	var message = "Name: " + name + "%0A" + "Email: " + email + "%0A" + "Occasion: " + occassion + "%0A" + "Date: " + date + "%0A" + "Message: " + textarea + "%0A";


	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("occassion").value = "";
	document.getElementById("date").value = "";
	document.getElementById("message").value = "";

	window.open('mailto:chefsara8910@gmail.com?subject=Heyy! Make my celebration go WWow!&body=' + message);
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
