$(document).ready(function() {
    var currentPage = 1;
    var worksPerPage = 2; // Adjust as needed

    function loadWorks(page) {
        $.ajax({
            url: 'include/data/works-data.php',
            type: 'GET',
            dataType: 'json',
            data: { page: page, worksPerPage: worksPerPage },
            success: function(data) {
                displayWorks(data);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    }

    function displayWorks(works) {
        var worksContainer = $('.works-container');
        worksContainer.empty();

        $.each(works, function(index, work) {
            var workCard = $('<div class="work-card">');
            var imgContainer = $('<div class="img-container">');
            var img = $('<img>').attr('src', work.image).attr('alt', work.title);
            var details = $('<div class="details">');
            var subheading = $('<h2 class="subheading">').text(work.subheading);
            var likes = $('<div class="likes">').html('<i class="fa fa-heart"></i> <span class="like-count">' + work.likes + '</span>');
            var title = $('<h3 class="title">').text(work.title);
       
       
            details.append(subheading).append(likes).append(title);
            imgContainer.append(img); // Append the image to the image container
            workCard.append(imgContainer).append(details);
            worksContainer.append(workCard);
        });
        
    }
    function loadPagination(totalPages) {
        var paginationContainer = $('.pagination');
        paginationContainer.empty();
    
        for (var i = 1; i <= totalPages; i++) {
            var button = $('<button>').text(i);
            button.on('click', { pageNumber: i }, function(event) {
                var page = event.data.pageNumber;
                currentPage = page;
                loadWorks(currentPage);
            });
            paginationContainer.append(button);
        }
    }
    
    

    // Load works on page load
    loadWorks(currentPage);
    loadPagination();
});
