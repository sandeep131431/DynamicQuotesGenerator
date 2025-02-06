const quotes = [
    "Do what you can, with what you have, where you are.",
    "Happiness depends upon ourselves. — Aristotle",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "Dream big, work hard, stay focused,",
    "Success is not final, failure is not fatal.",
    "Opportunities don't happen. You create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Do something today that your future self will thank you for.",
    "Be a voice, not an echo.",
    "Happiness is not by chance, but by choice.",
    "Every day may not be good, but there's something good in every day.",
    "Stay close to anything that makes you glad you are alive.",
    "Kindness is a language the deaf can hear and the blind can see.",
    "Don’t count the days, make the days count. — Muhammad Ali",
    "Difficult roads often lead to beautiful destinations.",
    "Do more things that make you forget to check your phone.",
    "Time is what we want most, but what we use worst. — William Penn",
    "Life isn’t about finding yourself. Life is about creating yourself."
];
const x = document.querySelector('h2');

function code(){
   let ran = Math.floor(Math.random()*quotes.length);
   x.innerHTML = quotes[ran]; 
}

setInterval(code,2000);
