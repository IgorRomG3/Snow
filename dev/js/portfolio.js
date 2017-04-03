// FOR FIXED NAVBAR
var mainNav = document.getElementById('navbar'),
  lightLogo = document.getElementsByClassName('logo-light')[0],
  darkLogo = document.getElementsByClassName('logo-dark')[0];

window.addEventListener("scroll", setFixedNav);

function setFixedNav() {
  if (window.pageYOffset > 58) {
    mainNav.classList.add('fixed');
    lightLogo.style.display = "none";
    darkLogo.style.display = "block";
  } else if (window.pageYOffset < 58) {
    mainNav.classList.remove('fixed');
    lightLogo.style.display = "block";
    darkLogo.style.display = "none";
  }
}
//PORTFOLIO\BLOG NAVBAR

var displayBtn = document.getElementsByClassName('toggle-btn')[0];
var portfolioNav = document.getElementsByClassName('portfolio-nav')[0];
var portfolioNavElem = document.querySelectorAll('.portfolio-nav > li');

function Appear(data) {
    this.element = data.element;
    this.elNumber = data.elNumber;
    this.time = data.time;
    this.top = data.top;
    var elem = this.element;
    var num = this.elNumber;
    var t = setTimeout(function() {
        elem[num].style.top = data.top + 'px';
    },data.time);
}

displayBtn.addEventListener('click', function() {
  portfolioNav.classList.toggle('portfolio-nav-invisiable');

  if(portfolioNav.classList.contains('portfolio-nav-invisiable')) {
        var elDown1 = new Appear({element: portfolioNavElem, elNumber: 0, time: 100,
            top: 0});
        var elDown2 = new Appear({element: portfolioNavElem, elNumber: 1, time: 300,
            top: 0});
        var elDown3 = new Appear({element: portfolioNavElem, elNumber: 2, time: 500,
            top: 0});
        var elDown4 = new Appear({element: portfolioNavElem, elNumber: 3, time: 700,
            top: 0});
        var elDown5 = new Appear({element: portfolioNavElem, elNumber: 4, time: 900,
            top: 0});
        var elDown6 = new Appear({element: portfolioNavElem, elNumber: 5, time: 1100,
            top: 0});
    }else {
        portfolioNav.style.transition = 'height 1s ease 1s';
        setTimeout(function() {
            portfolioNav.style.transition = 'none';
        }, 1500);
        var elUp1 = new Appear({element: portfolioNavElem, elNumber: 0, time: 100,
            top: -100});
        var elUp2 = new Appear({element: portfolioNavElem, elNumber: 1, time: 300,
            top: -100});
        var elUp3 = new Appear({element: portfolioNavElem, elNumber: 2, time: 500,
            top: -100});
        var elUp4 = new Appear({element: portfolioNavElem, elNumber: 3, time: 700,
            top: -100});
        var elUp5 = new Appear({element: portfolioNavElem, elNumber: 4, time: 900,
            top: -100});
        var elUp6 = new Appear({element: portfolioNavElem, elNumber: 5, time: 1100,
            top: -100});
    }
});
