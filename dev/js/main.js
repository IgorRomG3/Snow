var mainNav = document.getElementById('navbar');

var mainNavSourceBottom = mainNav.getBoundingClientRect().bottom + window.pageYOffset;

    window.onscroll = function() {
      if (window.pageYOffset > mainNavSourceBottom) {
        mainNav.classList.add('fixed');
      } else if (window.pageYOffset < mainNavSourceBottom) {
        mainNav.classList.remove('fixed');
      }
    };