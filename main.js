$('.parallax-window').parallax({imageSrc: ''});

function displayMessage() {
    var messages = ["Hey there!",
                    "It's pronnounced ya-na-kit",
                    "This message was pre-programmed",
                    "I like polar bears",
                    "(It's a Thai name)",
                    "Wow!",
                    "Creator &#9679; Designer &#9679; Developer"]
    var num = Math.floor(Math.random() * (messages.length - 1 - 0) + 0);
    document.getElementById("textToChange").innerHTML = messages[num];
}
