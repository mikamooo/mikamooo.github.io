const text = document.querySelector(".main"); // Get the main header
const strText = text.textContent; // Get the text from the main header
const splitText = strText.split(""); // Split the text into characters
console.log(splitText);
text.textContent = ""; // Clear the text in the header

for (let i = 0; i < splitText.length; i++) // Iterate through each char and put it in a span
{
    text.innerHTML += "<span>" + splitText[i] + "</span>"; // Create span elements for each char
}

let char = 0;
let timer = setInterval(onTick, 50); // Run the onTick function every 50ms to print each char

var unhide = document.getElementById('desc'); // Get the page description
var unhideTable = document.getElementById('allTypes'); // Get the table

/* Change the opacity of the description and table after 5 seconds so that they remain 
   visible after the animation */
setTimeout(function() { 
    unhide.style.opacity = "1";
    unhideTable.style.opacity = "1";
}, 5000);

function onTick()
{
    const span = text.querySelectorAll('span')[char]; // Get each char from each span
    span.classList.add('fade'); // Add a class to the span
    char++; // Increment to go to the next char the next time the function is called
    if (char === splitText.length) // When char is equal to the string length, we have added classes to all the spans
    {
        complete(); // So stop the timer and return
        return; 
    }
}

function complete() // Function to clear the timer
{
    clearInterval(timer);
    timer = null;
}