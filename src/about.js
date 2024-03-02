import emailIcon from './envelope.png';    

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
    font-size: 2rem;
    `;
    

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Us';
    const aboutContainer = document.createElement('div');
    aboutContainer.style = `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0 10rem;
    `;
    const aboutText = document.createElement('p');
    aboutText.textContent = 'We are a small restaurant located in the heart of the city. We serve the best food in town and have a variety of dishes to choose from. We are open every day from 11am to 11pm. We hope to see you soon!';
    aboutText.style = `
    text-align: center;
    `;

    const emailText = document.createElement('p');
    emailText.textContent = 'Make your reservation via E-mail';
    
    const emailImg = document.createElement('img');
    emailImg.src = emailIcon;
    emailImg.style = `
    filter: invert(1);
    width: 2rem;
    height: 2rem;
    margin-top: 0.3rem;
    `;
    const emailLink = document.createElement('a');
    emailLink.href = "";
    emailLink.appendChild(emailImg);

    const emailContainer = document.createElement('div');
    emailContainer.style = `
    display: flex;
    align-items: center;
    gap: 2rem;
    `;
    emailContainer.appendChild(emailText);
    emailContainer.appendChild(emailLink);

    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(emailContainer);
    about.appendChild(aboutTitle);
    about.appendChild(aboutContainer);
    content.appendChild(about);
}