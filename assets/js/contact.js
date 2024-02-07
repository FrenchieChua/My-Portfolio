    // JavaScript for form submission with AJAX
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Perform validation (You can add more advanced validation if needed)
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }
        
        // Prepare form data
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        
        // Send form data via AJAX
        fetch("https://formspree.io/f/xleqjooj", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // If submission is successful, display success message
                document.getElementById("success-message").style.display = "block";
                document.getElementById("contact-form").reset(); // Optionally reset the form
            } else {
                // If an error occurs, display error message
                document.getElementById("error-message").style.display = "block";
            }
        })
        .catch(error => {
            // If an error occurs, display error message
            document.getElementById("error-message").style.display = "block";
            console.error("Error:", error);
        });
    });