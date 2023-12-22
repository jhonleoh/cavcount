// Get the text area and count elements
var textInput = document.getElementById('text-input');
var wordCountElement = document.getElementById('word-count');
var sentenceCountElement = document.getElementById('sentence-count');

// Add an event listener to the text area
textInput.addEventListener('input', function() {
    // Get the text from the text area
    var text = textInput.value;

    // Count the words by splitting the text on any whitespace character and filtering out empty strings
    var words = text.split(/\s+/).filter(function(word) {
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

// OCR
document.getElementById('start-ocr').addEventListener('click', function() {
    var fileSelector = document.getElementById('file-selector');
    if (fileSelector.files.length > 0) {
        var file = fileSelector.files[0];
        Tesseract.recognize(
            file,
            'eng',
            {
                logger: m => console.log(m)
            }
        ).then(({ data: { text } }) => {
            textInput.value = text; // Set the recognized text as input
            textInput.dispatchEvent(new Event('input')); // Trigger the input event to update counts
        });
    }
});
