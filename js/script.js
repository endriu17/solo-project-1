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


  var linksContent = document.querySelector('link[rel="import"]');

  var generalContent = linksContent.import.querySelector('#content-links_export');
  var clone = document.importNode(generalContent, true);
  
  document.querySelector('#content-links_import').appendChild(clone);
  
