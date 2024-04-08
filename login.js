document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.back-button');

    function navigateToIndex() {
        window.location.href = 'index.html';
    }

    backButton.addEventListener('click', navigateToIndex);
});

function login() {
    // Get form data
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    // Create AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Handle response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Response received successfully
                if (xhr.responseText === "success") {
                    // Login successful, redirect to loggedin.html
                    window.location.href = "loggedin.html";
                } else {
                    // Login failed, show error message
                    alert("Incorrect username or password. Please try again.");
                }
            } else {
                // Error occurred
                alert("An error occurred while processing your request.");
            }
        }
    };

    // Send form data
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
}

