const soupBowl = document.getElementById('soup-container');
const messageBox = document.getElementById('message');

// Array of random soup-related messages
const messages = [
    "Your soup is steaming with goodness!",
    "A healthy glow starts with a hearty soup.",
    "Sip, Relax, and Let Your Skin Shine!",
    "Delicious and Nutritious, just for you.",
    "Hot soup, happy skin!"
];


// Function showing the random message on click
function soupBowl() {
soupBowl.addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    messageBox.textContent = randomMessage;
    
    messageBox.style.opacity = '1';
    messageBox.style.transform = 'scale(1,1)'

    setTimeout(() => {
        messageBox.style.transform = 'scale(1)';
    }, 500);
})};

