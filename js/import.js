// LINKS import to general
var linksContent = document.querySelector('link[rel="import"]');

var generalContent = linksContent.import.querySelector('#content-links_export');
var clone = document.importNode(generalContent, true);

document.querySelector('#content-links_import').appendChild(clone);

// MODALS import to other sides

// var modalsContentTarget = document.querySelector('link[rel="importModal"]');
// var modalsContent = modalsContentTarget.import.querySelector('#modals-export');
// var cloneModal = document.importNode(modalsContent, true);
//
// document.querySelector('#modals-import').appendChild(cloneModal);
