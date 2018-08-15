var x = window.matchMedia("(max-width: 767px)");
var contentMargin = document.querySelector('.content');
// open Sidebar menu on click on Hamburger menu
function sidebarOpen() {

  if (x === true) {
    document.getElementById("sidebar_hide").style.display = "block";
    document.getElementById("hamburger-menu__hiden").style.display = "none";
  } else {
    document.getElementById("sidebar_hide").style.display = "block";
    document.getElementById("hamburger-menu__hiden").style.display = "none";
  }
}
// hide Sidebar on click on Hamburger menu, Hamburger menu visible
function sidebarHide() {
  if (x === true) {
    document.getElementById("sidebar_hide").style.display = "none";
    document.getElementById("hamburger-menu__hiden").style.display = "block";
  } else {
    document.getElementById("sidebar_hide").style.display = "none";
    document.getElementById("hamburger-menu__hiden").style.display = "block";
  }
}

// Topbar menu hidde on max-width: 767px and visible on min-width: 768px
function mediaCheck(x) {
  if (x.matches) { // If media query matches
    document.getElementById("topbar_hide").style.display = "none";
    document.getElementById("sidebar-topbar").style.display = "block";
    contentMargin.style.margin = "0 0 0 0";
    sidebarHide();
  } else {
    document.getElementById("sidebar_hide").style.display = "block";
    document.getElementById("sidebar-topbar").style.display = "none";
    document.getElementById("topbar_hide").style.display = "block";
    document.getElementById("hamburger-menu__hiden").style.display = "none";
    sidebarOpen();
    contentMargin.style.margin = "50px 0 0 200px";
  }
}
// Attach listener function on state changes
mediaCheck(x);
x.addListener(mediaCheck);
