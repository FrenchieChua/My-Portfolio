$(document).ready(function() {

    // Function to load content based on the clicked navigation link
    function loadContent(href) {
        const contentArea = $('.main-content');
        contentArea.empty();

        switch (href) {
            case '#about':
                contentArea.load('include/about.php');
                break;
            case '#skills':
                contentArea.load('include/skills.php');
                break;    
            case '#resume':
                contentArea.load('include/resume.php');
                break;
            case '#work':
                contentArea.load('include/work.php');
                break;
            case '#contact':
                contentArea.load('include/contact.php');
                break;
            default:
                contentArea.html('<p>Content not found.</p>');
        }
    }

    // Load "About" content on page load
    loadContent('#about');

    // Click event for navigation links
    $('.navigation a').click(function(e) {
        e.preventDefault();
        const href = $(this).attr('href');
        loadContent(href);
    });



});
