// Get the text area and count elements
var textInput = document.getElementById('text-input');
var wordCountElement = document.getElementById('word-count');
var sentenceCountElement = document.getElementById('sentence-count');

// Add an event listener to the text area
textInput.addEventListener('input', function() {
    // Get the text from the text area
    var text = textInput.value;

    // Count the words by splitting the text on spaces and filtering out empty strings
    var words = text.split(' ').filter(function(word) {
        return word !== '';
    });
    var wordCount = words.length;

    // Count the sentences by splitting the text on periods, exclamation marks, and question marks
    var sentences = text.split(/[.!?]/).filter(function(sentence) {
        return sentence !== '';
    });
    var sentenceCount = sentences.length;

    // Update the word and sentence count elements
    wordCountElement.textContent = 'Word Count: ' + wordCount;
    sentenceCountElement.textContent = 'Sentence Count: ' + sentenceCount;
});


Version 2 of CSS-code

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: radial-gradient(white, lightblue);
; /* Change the background color to sky blue */
}

#logo {
    /* Use max-width instead of width to prevent overflow */
    max-width: 300px; /* Adjust the logo width as needed */
    height: 100px; /* Adjust the logo height as needed */
    text-align: center;
}

#logo h1 {
    text-indent: -9999px; /* Hide the text */
    background: url('logo.png') no-repeat center center; /* Replace with your logo image URL */
    background-size: contain; /* Scale the image to fit the logo size */
}

#logo span {
    display: block; /* Display the text below the logo */
    color: #333;
    /* Use rem instead of px to make the font size relative to the root element */
    font-size: 0.875rem;
}

textarea {
    /* Use percentage instead of fixed width to make the element responsive */
    width: 80%;
    height: 200px;
    margin: 20px 0;
    padding: 10px;
    /* Use rem instead of px to make the font size relative to the root element */
    font-size: 1rem;
}

#word-count, #sentence-count {
    /* Use rem instead of px to make the font size relative to the root element */
    font-size: 1.25rem;
    font-weight: bold;
}

/* Use media query to change the font size of h1 based on the screen width */
@media (max-width: 600px) {
    h1 {
        font-size: 8vw;
    }
}
