/*var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("owl-item");
  var dots = document.getElementsByClassName("owl-dot");
  var y = document.getElementsByClassName(".owl-carousel.owl-loaded");
  if (slideIndex > 3) {slideIndex = 2}
  if (slideIndex < 1) {slideIndex = 3}
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex-1].className += " active";  
  dots[slideIndex-2].className += " active";
  slideIndex++;
  setTimeout(showDivs, 3000);
} */


var owl = $('.owl-carousel');
owl.owlCarousel({
  autoplay:true,
  items:1,
  autoplaytimeout:100,
  loop:true,
});
//Nav arrow
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})
