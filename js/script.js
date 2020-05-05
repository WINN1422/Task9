jQuery(document).ready(function() // Wait for the document to fully load.
{
    $("#form-input").on("submit", function(event) // Runs when the form is submitted.
    {
        event.preventDefault(); // Stop the form from submitting.

        var text = $("#form-text-input").val(); // Get the text from the input.
        if(text == "") // Check if text is blank. If blank, display alert, else prepend paragraph to the div element.
            alert("text can't be blank");
        else
            $("#tasks").prepend('<p class="display-4" style="color: #' + GenerateHexString(6) +';">' + text + "</p>");
    });
});

/*
    Name:           GenerateHexString
    Description:    Generates a random hex string with the specified size.
    Parameters:     
                    @len    The length of the desired hex string.
*/
function GenerateHexString(len) 
{
    const hex = '0123456789ABCDEF'; // Define hex characters.
    var output = ''; // Output string.

    for (let i = 0; i < len; i++) // Generate random hex string.
        output += hex.charAt(Math.floor(Math.random() * hex.length));

    return output; // Return resulting hex string.
}