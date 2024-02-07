<script type = "text/javascript" src="/playground/ojt_2024/chua/portfolio/assets/js/contact.js" ></script>
<div class="main-content-contact">
    <h1>Contact Me</h1>
   
    <form id="contact-form" method="post">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    <div id="success-message" class="success-message">Message sent successfully!</div>
    <div id="error-message" class="success-message">Message sent successfully!</div>

</div>