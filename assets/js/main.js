$('.parallax-window').parallax({imageSrc: ''});

function displayMessage() {
    var messages = ["Hello",
                    "Hello",
                    "Hello",
                    "I like polar bears",
                    "Hello",
                    "Press Refresh",
                    "Creator &#9679; Designer &#9679; Developer"]


    var num = Math.floor(Math.random() * (messages.length - 1 - 0) + 0);
    document.getElementById("textToChange").innerHTML = messages[num];

}
