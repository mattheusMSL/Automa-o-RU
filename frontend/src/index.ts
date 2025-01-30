document.addEventListener('DOMContentLoaded', () => {
  const body: HTMLElement = document.body;
  const createDiv: HTMLDivElement = document.createElement('div');
  const createH1: HTMLHeadingElement = document.createElement('h1');
  const hello: string = 'Hello, World!';


  body.style.margin = '0';
  createDiv.style.margin = 'auto';
  createDiv.style.padding = 'auto';
  createDiv.style.height = '100vh';
  createDiv.style.width = '100%';
  createDiv.style.backgroundColor = 'black';
  createDiv.style.display = 'flex';
  createDiv.style.justifyContent = 'center';
  createDiv.style.alignItems = 'center';

  body.appendChild(createDiv);


  createH1.innerHTML = hello;
  createH1.setAttribute('id', 'animated-text'); 

  createDiv.appendChild(createH1);

  const animatedText = document.getElementById('animated-text') as HTMLElement;

  if (animatedText) {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradientShift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      #animated-text {
        font-size: 3rem;
        font-weight: bold;
        background: linear-gradient(90deg, red, yellow, green, blue, purple);
        background-size: 400% 400%; /* Make the gradient larger than the text */
        -webkit-background-clip: text; /* Clip the background to the text */
        color: transparent; /* Make the text color transparent to see the gradient */
        animation: gradientShift 5s ease infinite;
      }
    `;
    
    document.head.appendChild(style);
  }
});
