// MODALS FUNCTIONS

// modal LOGIN functions
// ---get modal, open modal link, close modal button
var modalLogin = document.getElementById('modalLogin');
var loginOpen = document.getElementById('loginLink');
var closeBtn = document.getElementById('loginCloseBtn');
var loginBtn = document.getElementById('loginBtn');

var modalLoginTwo = document.getElementById('modalLogin_two');
var loginOpenTwo = document.getElementById('loginLink_two');
var closeBtnTwo = document.getElementById('loginCloseBtn_two');
var loginBtnTwo = document.getElementById('loginBtn_two');

// ---listen for open click, close click, outside click
loginOpen.addEventListener('click', openLoginModal);
closeBtn.addEventListener('click', closeLoginModal);
loginBtn.addEventListener('click', closeLoginModal);
window.addEventListener('click', outsideLoginClick);

loginOpenTwo.addEventListener('click', openLoginModal);
closeBtnTwo.addEventListener('click', closeLoginModal);
loginBtnTwo.addEventListener('click', closeLoginModal);

// ---functions open, close, outside click for modal LOGIN
function openLoginModal() {
  modalLogin.style.display = 'block';
}

function closeLoginModal() {
  modalLogin.style.display = 'none';
}

function outsideLoginClick(e) {
  if (e.target == modalLogin) {
    modalLogin.style.display = 'none';
  }
}
// modal QUIT functions
// ---get modal, open modal button, close modal, cancel btn
var modalQuit = document.getElementById('modalQuit');
var modalQuitTwo = document.getElementById('modalQuit_two');
var quitModalOpen = document.getElementById('quitModalOpen');
var quitModalOpenTwo = document.getElementById('quitModalOpen_two');
var quitCancelBtn = document.getElementById('quitCancelBtn');
var quitCancelBtnTwo = document.getElementById('quitCancelBtn_two');
var quitButton = document.getElementById('quitButton');
var quitButtonTwo = document.getElementById('quitButton_two');

// ---listen for open click, cancel click, close click,
quitModalOpen.addEventListener('click', openQuitModal);
quitCancelBtn.addEventListener('click', closeQuitModal);
quitButton.addEventListener('click', closeQuitModal);
window.addEventListener('click', outsideQuitClick);

quitModalOpenTwo.addEventListener('click', openQuitModal);
quitCancelBtnTwo.addEventListener('click', closeQuitModal);
quitButtonTwo.addEventListener('click', closeQuitModal);

// ---functions open, close, outside click for modal QUIT
function openQuitModal() {
  modalQuit.style.display = 'block';
}

function closeQuitModal() {
  modalQuit.style.display = 'none';
}

function outsideQuitClick(e) {
  if (e.target == modalQuit) {
    modalQuit.style.display = 'none';
  }
}

// ---function close modal if 'esc' key
document.addEventListener('keyup', function(e) {
  if (e.keyCode === 27) {
    closeLoginModal();
    closeQuitModal()
  }
})
