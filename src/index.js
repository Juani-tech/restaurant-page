import homePageLoad from './home.js';  
import aboutPageLoad from './about.js';
import menuPageLoad from './menu.js';
import './style.css'


homePageLoad();

const homeButton = document.getElementById('home-button');
const aboutButton = document.getElementById('about-button');
const menuButton = document.getElementById('menu-button');

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

homeButton.addEventListener('click', () => {
    clearContent();
    homePageLoad();
}
);

aboutButton.addEventListener('click', () => {
    clearContent();
    aboutPageLoad();
}
);

menuButton.addEventListener('click', () => {
    clearContent();
    menuPageLoad();
}
);


