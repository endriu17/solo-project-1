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

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelectorAll('#overlay .js--cancel-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
}

// var quitModal = document.getElementById('quitModal');

// function openModal(modal) {
//   document.getElementById("overlay").style.display = "flex";
//   document.getElementById("quitModal").style.display = "block";
// }