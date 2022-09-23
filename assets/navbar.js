let dir = 0

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (!isScrolledIntoView(document.getElementById("jumbotron"))) {
    document.getElementById("navbar_center").innerText = "Gregorius Yuristama";
  } else {
    document.getElementById("navbar_center").innerText = "Hi,";
  }
  if(isScrolledIntoView(document.getElementById("aboutme"))){
    document.getElementById("topnav_aboutme").classList.add('active');
    document.getElementById("topnav_resume").classList.remove('active');
  }else {
    document.getElementById("topnav_aboutme").classList.remove('active');
    document.getElementById("topnav_resume").classList.add('active');
  }

}

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemBottom = rect.bottom;

  var isVisible = elemBottom > 100;
  return isVisible;
}

