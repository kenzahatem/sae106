$(document).ready(function(){
  $('.slick-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
function changeLanguage() {
  var languageSelect = document.getElementById("language-select");
  var selectedValue = languageSelect.options[languageSelect.selectedIndex].value;
  if (selectedValue === "en") {
    window.location.href = "indexen.html";
  }
}
console.log("Largeur de la fenêtre : " + window.innerWidth);
console.log("Hauteur de la fenêtre : " + window.innerHeight);
