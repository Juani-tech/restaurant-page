import restaurantImage from './food-wallpaper.jpg';



export default function homePageLoad() { 
    const content = document.getElementById('content');
    
    const home = document.createElement('div');
    home.style = `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-color: rgba(0, 0, 0, 0.4);

    `;

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.style = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    `;


    const title = document.createElement('h1');
    title.textContent = 'Welcome to our restaurant!';

    title.style = `
    text-align: center;
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    color: white;
    font-size: 3rem;
    `;
    
    home.appendChild(img);
    home.appendChild(title);
    
    content.appendChild(home);
}