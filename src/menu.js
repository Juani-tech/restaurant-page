import tacos from './tacos.jpg';
import pizza from './pizza.jpeg';
import hamburguesa from './hamburguesa.jpg';
import sorrentinos from './sorrentinos.jpeg';


export default function menuPageLoad() {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    
    menu.id = 'menu';
    menu.style = `
    flex: 1;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;    
    `;
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    menuTitle.style = `
    text-align: center;
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    `;
    const menuList = document.createElement('div');
    menuList.style = `
    display: grid;
    grid-template: auto / repeat(2, 1fr);
    gap: 2rem;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    `;

    const menuItems = [
        'Tacos',
        'Burgers',
        'Pizza',
        'Sorrentinos'
    ];
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.style = `
        position: relative;
        width: 100%;
        height: 300px;
        `;
        const img = document.createElement('img');
        switch (item) {
            case "Tacos":
                img.src = tacos;
                break;
            case "Burgers":
                img.src = hamburguesa;
                break;
            case "Pizza":
                img.src = pizza;
                break;
            case "Sorrentinos":
                img.src = sorrentinos;
                break;
            default:
                break;
        }
        img.style = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        `;
        menuItem.appendChild(img);
        menuItem.textContent = item;
        menuList.appendChild(menuItem);
    });
    menu.appendChild(menuTitle);
    menu.appendChild(menuList);
    content.appendChild(menu);
}