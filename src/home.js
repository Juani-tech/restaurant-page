import restaurantImage from './restaurant4k.jpg';



export default function homePageLoad() { 
    const content = document.getElementById('content');
    
    const home = document.createElement('div');
    home.style = `
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: black;
    `;

    const title = document.createElement('h1');
    title.textContent = 'Welcome to our restaurant!';

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.alt = 'restaurant';

    img.style.width = '70%';
    img.style.height = 'auto';


    const p = document.createElement('p');
    p.textContent = 'We serve the best food in town!';
    
    p.style.color = 'white';
    p.style.fontSize = '1rem';
    p.style.textAlign = 'center';

    title.style.color = 'white';
    // title.style.fontSize = '2rem';
    title.style.textAlign = 'center';
    
    home.appendChild(title);
    home.appendChild(img);
    home.appendChild(p);
    
    content.appendChild(home);
}