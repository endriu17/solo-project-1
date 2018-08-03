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

var ctx = document.getElementById('myChart').getContext('2d');

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

// links import to general

var linksContent = document.querySelector('link[rel="import"]');

var generalContent = linksContent.import.querySelector('#content-links_export');
var clone = document.importNode(generalContent, true);

document.querySelector('#content-links_import').appendChild(clone);

// modal functions

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