export default function menuPageLoad() {
    const content = document.getElementById('content');
    const menu = document.createElement('div');

    menu.style = `
    background-color: black;
    color: white;
    height: 100%;
    `;
    menu.id = 'menu';
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    menuTitle.style = `
    text-align: center;
    padding: 0;
    margin: 0;
    `;
    const menuList = document.createElement('ul');
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