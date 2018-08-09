// SIDEBAR hide show functions

function sidebarHide() {
  document.getElementById("sidebar_hide").style.display = "none";
  document.getElementById("hamburger-menu__hiden").style.display = "block";
  document.getElementById("content-margin").style.margin = "50px 0 0 0";
}

function sidebarOpen() {
  document.getElementById("sidebar_hide").style.display = "block";
  document.getElementById("hamburger-menu__hiden").style.display = "none";
  document.getElementById("content-margin").style.margin = "50px 0 0 200px";
}

// Topbar menu hidde on max-width: 767px and visible on min-width: 768px
function mediaCheck(x) {
    if (x.matches) { // If media query matches
      document.getElementById("topbar_hide").style.display = "none";
      document.getElementById("content-margin").style.margin = "50px 0 0 0";
      document.getElementById("sidebar-topbar").style.display = "block";
    } else {
      document.getElementById("sidebar_hide").style.display = "block";
      document.getElementById("sidebar-topbar").style.display = "none";
      document.getElementById("topbar_hide").style.display = "block";
      document.getElementById("content-margin").style.margin = "50px 0 0 200px";
      document.getElementById("hamburger-menu__hiden").style.display = "none";
    }
}

var x = window.matchMedia("(max-width: 767px)");
mediaCheck(x);
x.addListener(mediaCheck); // Attach listener function on state changes
