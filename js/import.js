// MODALS import to other sides

var modalsContentTarget = document.querySelector('link[rel="import"]');
var modalsContent = modalsContentTarget.import.getElementById('modals-export');
var cloneModal = document.importNode(modalsContent, true);

document.getElementById('modals-import').appendChild(cloneModal);

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
