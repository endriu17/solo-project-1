// sidebar show hidde

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

// chart
var chart = document.getElementById('myChart');

if(chart) {
  var ctx = chart.getContext('2d');

  var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
    options: {
      legend: {
        display: true,
        labels: {
        padding: 30,
        boxWidth: 20,
        radius: 10,
        usePointStyle: true,
        pointStyle: 5,
        }
      }
    }
  });

}

// MODALS FUNCTIONS

// modal LOGIN functions
// ---get modal, open modal link, close modal button
var modalLogin = document.getElementById('modalLogin');
var loginOpen = document.getElementById('loginLink');
var closeBtn = document.getElementById('loginCloseBtn');
var loginBtn = document.getElementById('loginBtn');
// ---listen for open click, close click, outside click
loginOpen.addEventListener('click', openLoginModal);
closeBtn.addEventListener('click', closeLoginModal);
loginBtn.addEventListener('click', closeLoginModal);
window.addEventListener('click', outsideLoginClick);
// ---functions open, close, outside click for modal LOGIN
function openLoginModal(){
  modalLogin.style.display = 'block';
}
function closeLoginModal(){
  modalLogin.style.display = 'none';
}
function outsideLoginClick(e){
  if(e.target == modalLogin){
    modalLogin.style.display = 'none';
  }
}
// modal QUIT functions
// ---get modal, open modal button, close modal, cancel btn
var modalQuit = document.getElementById('modalQuit');
var quitModalOpen = document.getElementById('quitModalOpen');
var quitCancelBtn = document.getElementById('quitCancelBtn');
var quitButton = document.getElementById('quitButton');
// ---listen for open click, cancel click, close click,
quitModalOpen.addEventListener('click', openQuitModal);
quitCancelBtn.addEventListener('click', closeQuitModal);
quitButton.addEventListener('click', closeQuitModal);
window.addEventListener('click', outsideQuitClick);
// ---functions open, close, outside click for modal QUIT
function openQuitModal(){
  modalQuit.style.display = 'block';
}
function closeQuitModal(){
  modalQuit.style.display = 'none';
}
function outsideQuitClick(e){
  if(e.target == modalQuit){
    modalQuit.style.display = 'none';
  }
}

// ---function close modal if 'esc' key
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeLoginModal();
    closeQuitModal()
  }
})

// LINKS import to general
var linksContent = document.querySelector('link[rel="import"]');

var generalContent = linksContent.import.querySelector('#content-links_export');
var clone = document.importNode(generalContent, true);

document.querySelector('#content-links_import').appendChild(clone);
