document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var createDiv = document.createElement('div');
    var createH1 = document.createElement('h1');
    var hello = 'Hello, World!';
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
    var animatedText = document.getElementById('animated-text');
    if (animatedText) {
        var style = document.createElement('style');
        style.innerHTML = "\n      @keyframes gradientShift {\n        0% {\n          background-position: 0% 50%;\n        }\n        50% {\n          background-position: 100% 50%;\n        }\n        100% {\n          background-position: 0% 50%;\n        }\n      }\n\n      #animated-text {\n        font-size: 3rem;\n        font-weight: bold;\n        background: linear-gradient(90deg, red, yellow, green, blue, purple);\n        background-size: 400% 400%; /* Make the gradient larger than the text */\n        -webkit-background-clip: text; /* Clip the background to the text */\n        color: transparent; /* Make the text color transparent to see the gradient */\n        animation: gradientShift 5s ease infinite;\n      }\n    ";
        document.head.appendChild(style);
    }
});
