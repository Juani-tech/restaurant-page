export default function aboutPageLoad() {
    const content = document.getElementById('content');
    const about = document.createElement('div');
    about.id = 'about';
    about.style = `
    flex: 1;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;    
    `;
    

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Us';
    const aboutText = document.createElement('p');
    aboutText.textContent = 'We are a small restaurant located in the heart of the city. We serve the best food in town and have a variety of dishes to choose from. We are open every day from 11am to 11pm. We hope to see you soon!';
    about.appendChild(aboutTitle);
    about.appendChild(aboutText);
    content.appendChild(about);
}