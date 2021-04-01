alert('LEGGERE LE INFORMAZIONI SUL COPYRIGHT PRIMA DI USARE I CODICI PRE-FABBRICATI!!!!! quindi cliccare sulla voce COPYRIGHT a piè di pagina')

function run() {
    const htmlInput = document.querySelector('#html-input').value;
    const cssInput = '<style>' + document.querySelector('#css-input').value + '</style>';
    const javascriptInput = document.querySelector('#javascript-input').value;
    const outputArea = document.querySelector('#output');
    const errorFrame = document.querySelector('#debug-output');
    const error = errorFunction()

    outputArea.contentDocument.body.innerHTML = htmlInput + cssInput;
    
function errorFunction() {   
    try {
        outputArea.contentWindow.eval(javascriptInput);
      }
      catch(err) {
        errorFrame.contentDocument.body.innerHTML = err.message; 
      }
    }
}
document.querySelector('#html-input').addEventListener('keyup', run)
document.querySelector('#css-input').addEventListener('keyup', run)
document.querySelector('#javascript-input').addEventListener('keyup', run)




const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close-menu')
const openedMenu = document.getElementById('opened-menu')

menu.addEventListener('click', () => {
    openedMenu.classList.remove('hide')
    menu.classList.add('hide')
    closeMenu.classList.remove('hide')
})

closeMenu.addEventListener('click', () => {
    openedMenu.classList.add('hide')
    menu.classList.remove('hide')
    closeMenu.classList.add('hide')
})

const htmlWispers = document.getElementById('html-wispers')
const cssWispers = document.getElementById('css-wispers')
const javascriptWispers = document.getElementById('javascript-wispers')

const hideHtmlWispers = document.getElementById('hide-html-wispers')
const hideCssWispers = document.getElementById('hide-css-wispers')
const hideJavascriptWispers = document.getElementById('hide-javascript-wispers')

const hWispers = document.getElementById('h-wispers')
const cWispers = document.getElementById('c-wispers')
const jWispers = document.getElementById('j-wispers')

htmlWispers.addEventListener('click', () => {
    hWispers.classList.remove('hide')
    htmlWispers.classList.add('hide')
    hideHtmlWispers.classList.remove('hide')
})

hideHtmlWispers.addEventListener('click', () => {
    hWispers.classList.add('hide')
    htmlWispers.classList.remove('hide')
    hideHtmlWispers.classList.add('hide')
})

cssWispers.addEventListener('click', () => {
    cWispers.classList.remove('hide')
    cssWispers.classList.add('hide')
    hideCssWispers.classList.remove('hide')
})

hideCssWispers.addEventListener('click', () => {
    cWispers.classList.add('hide')
    cssWispers.classList.remove('hide')
    hideCssWispers.classList.add('hide')
})

javascriptWispers.addEventListener('click', () => {
    jWispers.classList.remove('hide')
    javascriptWispers.classList.add('hide')
    hideJavascriptWispers.classList.remove('hide')
})

hideJavascriptWispers.addEventListener('click', () => {
    jWispers.classList.add('hide')
    javascriptWispers.classList.remove('hide')
    hideJavascriptWispers.classList.add('hide')
})




const about = document.getElementById('about')
const closeAbout = document.getElementById('close-about')
const aboutSection = document.getElementById('about-section')

about.addEventListener('click', () => {
    aboutSection.classList.remove('hide')
    about.classList.add('hide')
    closeAbout.classList.remove('hide')
})

closeAbout.addEventListener('click', () => {
    aboutSection.classList.add('hide')
    about.classList.remove('hide')
    closeAbout.classList.add('hide')
})

const copyright = document.getElementById('copyright')
const closeCopyright = document.getElementById('close-copyright')
const copyrightSection = document.getElementById('copyright-section')

copyright.addEventListener('click', () => {
    copyrightSection.classList.remove('hide')
    copyright.classList.add('hide')
    closeCopyright.classList.remove('hide')
})

closeCopyright.addEventListener('click', () => {
    copyrightSection.classList.add('hide')
    copyright.classList.remove('hide')
    closeCopyright.classList.add('hide')
})