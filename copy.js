document.getElementById('copyButton').addEventListener('click', function() {
    // Create a textarea element to hold the text to copy
    var textarea = document.createElement('textarea');
    textarea.innerHTML = 'haoryu'; // Text to copy
    textarea.style.position = 'fixed';
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.opacity = 100;

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // Show popup
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000); // Hide popup after 2 seconds
});