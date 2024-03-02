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
    const menuList = document.createElement('ul');
    menuList.style = `
    list-style-type: none;
    display: grid;
    gap: 2rem;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    `;

    const menuItems = [
        'Pizza',
        'Pasta',
        'Burger',
        'Sandwich',
        'Salad',
        'Dessert'
    ];
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        menuList.appendChild(menuItem);
    });
    menu.appendChild(menuTitle);
    menu.appendChild(menuList);
    content.appendChild(menu);
}