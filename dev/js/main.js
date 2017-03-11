// FOR FIXED NAVBAR
var mainNav = document.getElementById('navbar'),
  lightLogo = document.getElementsByClassName('logo-light')[0],
  darkLogo = document.getElementsByClassName('logo-dark')[0];

// window.onscroll = function () {
//   if (window.pageYOffset > 58) {
//     mainNav.classList.add('fixed');
//     lightLogo.style.display = "none";
//     darkLogo.style.display = "block";
//   } else if (window.pageYOffset < 58) {
//     mainNav.classList.remove('fixed');
//     lightLogo.style.display = "block";
//     darkLogo.style.display = "none";
//   }
// };
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

// FOR HEADER DOWN BUTTON
var downBtn = document.getElementsByClassName('header-down-btn')[0],
  downBtnLocation = downBtn.getBoundingClientRect().bottom + window.pageYOffset;

downBtn.onclick = function () {
  // window.scrollTo(downBtnLocation,660);
  var offset = 0;
  var target = 660;
  var t = setInterval(function () {
    window.scrollTo(downBtnLocation, offset);
    offset = offset + 10;
    if (offset >= target) {
      clearInterval(t);
    }
  }, 10);
}
// //NUMBERS
// var numContainer = document.getElementsByClassName('donelist')[0];
// var num = document.getElementsByClassName('numbers');
// var countNum = document.getElementsByClassName('counting');
// var numContainerLocation = numContainer.getBoundingClientRect().top + window.pageYOffset;
// var offset1 = 0;
// var offset2 = 0;
// var offset3 = 0;
// var offset4 = 0;
// window.addEventListener("scroll", getCountingClass);

// function getCountingClass() {
//   if (window.pageYOffset >= numContainerLocation) {
//     for (var i = 0; i < num.length; i++) {
//       num[i].classList.add('counting');
//     }
//   }
// }
// if (num[0].classList.contains('counting') == true && num[1].classList.contains('counting') == true && num[2].classList.contains('counting') == true && num[3].classList.contains('counting') == true) {
//   var numOne = setInterval(function () {
//     var target = 548;
//     offset1 += 1;
//     if (offset1 >= target) {
//       clearInterval(numOne);
//     }
//     num[0].innerHTML = offset1;
//   }, 10);
//   var numTwo = setInterval(function () {
//     var target = 1465;
//     offset2 += 1;
//     if (offset2 >= target) {
//       clearInterval(numTwo);
//     }
//     num[1].innerHTML = offset2;
//   }, 1);
//   var numThree = setInterval(function () {
//     var target = 612;
//     offset3 += 1;
//     if (offset3 >= target) {
//       clearInterval(numThree);
//     }
//     num[2].innerHTML = offset3;
//   }, 10);
//   var numFour = setInterval(function () {
//     var target = 735;
//     offset4 += 1;
//     if (offset4 >= target) {
//       clearInterval(numFour);
//     }
//     num[3].innerHTML = offset4;
//   }, 10);
// }
//CARUSEL

var carusel = document.getElementsByClassName('blaquote-wrap')[0],
  ul = carusel.querySelector('ul');

var dotLeft = document.getElementsByClassName('dotleft')[0],
  dotMiddle = document.getElementsByClassName('dotmiddle')[0],
  dotRight = document.getElementsByClassName('dotright')[0];

var width = -1160;
var position = 0;
dotLeft.onclick = function () {
  position = 0;
  ul.style.marginLeft = position + 'px';
  dotLeft.classList.add('active');
  dotMiddle.classList.remove('active');
  dotRight.classList.remove('active');
}
dotMiddle.onclick = function () {
  position = width;
  ul.style.marginLeft = position + 'px';
  dotLeft.classList.remove('active');
  dotMiddle.classList.add('active');
  dotRight.classList.remove('active');
}
dotRight.onclick = function () {
  position = width * 2;
  ul.style.marginLeft = position + 'px';
  dotLeft.classList.remove('active');
  dotMiddle.classList.remove('active');
  dotRight.classList.add('active');
}

//BLOG-CARUSEL

var blogCarusel = document.getElementsByClassName('blog-wrap')[0],
  ulBlog = blogCarusel.querySelector('ul');

var dotOneBlog = document.getElementsByClassName('dot-blog')[0],
  dotTwoBlog = document.getElementsByClassName('dot-blog')[1],
  dotThreeBlog = document.getElementsByClassName('dot-blog')[2],
  dotFourBlog = document.getElementsByClassName('dot-blog')[3],
  dotFiveBlog = document.getElementsByClassName('dot-blog')[4];

var widthBlog = -370,
  blogPosotion = 0;

dotOneBlog.onclick = function () {
  blogPosotion = 0;
  ulBlog.style.marginLeft = blogPosotion + 'px';
  dotOneBlog.classList.add('selected');
  dotTwoBlog.classList.remove('selected');
  dotThreeBlog.classList.remove('selected');
  dotFourBlog.classList.remove('selected');
  dotFiveBlog.classList.remove('selected');
}
dotTwoBlog.onclick = function () {
  blogPosotion = widthBlog;
  ulBlog.style.marginLeft = blogPosotion + 'px';
  dotOneBlog.classList.remove('selected');
  dotTwoBlog.classList.add('selected');
  dotThreeBlog.classList.remove('selected');
  dotFourBlog.classList.remove('selected');
  dotFiveBlog.classList.remove('selected');
}
dotThreeBlog.onclick = function () {
  blogPosotion = widthBlog * 2;
  ulBlog.style.marginLeft = blogPosotion + 'px';
  dotOneBlog.classList.remove('selected');
  dotTwoBlog.classList.remove('selected');
  dotThreeBlog.classList.add('selected');
  dotFourBlog.classList.remove('selected');
  dotFiveBlog.classList.remove('selected');
}
dotFourBlog.onclick = function () {
  blogPosotion = widthBlog * 3;
  ulBlog.style.marginLeft = blogPosotion + 'px';
  dotOneBlog.classList.remove('selected');
  dotTwoBlog.classList.remove('selected');
  dotThreeBlog.classList.remove('selected');
  dotFourBlog.classList.add('selected');
  dotFiveBlog.classList.remove('selected');
}
dotFiveBlog.onclick = function () {
  blogPosotion = widthBlog * 4;
  ulBlog.style.marginLeft = blogPosotion + 'px';
  dotOneBlog.classList.remove('selected');
  dotTwoBlog.classList.remove('selected');
  dotThreeBlog.classList.remove('selected');
  dotFourBlog.classList.remove('selected');
  dotFiveBlog.classList.add('selected');
}