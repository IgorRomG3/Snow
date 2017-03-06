// FOR FIXED NAVBAR
var mainNav = document.getElementById('navbar'),
    lightLogo = document.getElementsByClassName('logo-light')[0],
    darkLogo = document.getElementsByClassName('logo-dark')[0],
    mainNavSourceBottom = mainNav.getBoundingClientRect().bottom + window.pageYOffset;

    window.onscroll = function() {
      if (window.pageYOffset > mainNavSourceBottom) {
        mainNav.classList.add('fixed');
        lightLogo.style.display = "none";
        darkLogo.style.display = "block";
      } else if (window.pageYOffset < mainNavSourceBottom) {
        mainNav.classList.remove('fixed');
        lightLogo.style.display = "block";
        darkLogo.style.display = "none";
      }
    };

// FOR HEADER DOWN BUTTON
var downBtn = document.getElementsByClassName('header-down-btn')[0],
    downBtnLocation = downBtn.getBoundingClientRect().bottom + window.pageYOffset;

downBtn.onclick = function() {
  window.scrollTo(downBtnLocation,660);
} 
  
