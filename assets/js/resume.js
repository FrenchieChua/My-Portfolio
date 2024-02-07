$(document).ready(function() {
  // Fetch data using AJAX
  // First AJAX call for education data
  $.ajax({
      url: 'include/data/resume-education-data.php',
      method: 'GET',
      dataType: 'json',
      success: function(education) {
          var educationHtml = '';
          $.each(education, function(index, eduExperience) {
              educationHtml += `
                  <div class="resume-card">
                      <div class="resume-line">
                          <h3 class="school">${eduExperience.school}</h3>
                          <p class="course">${eduExperience.course}</p>
                          <p class="date">${eduExperience.date}</p>
                          <p class="address">${eduExperience.address}</p>
                      </div>
                  </div>
              `;
          });
          $('#education-cards').append(educationHtml);

          // Add 'visible' class with animation after appending education cards
          $('#education-cards .resume-card').each(function(index) {
              setTimeout(function(){
                  $(this).addClass('visible');
              }.bind(this), 500 * index); // Change the delay here
          });

          // Second AJAX call for experience data
          $.ajax({
              url: 'include/data/resume-experience-data.php',
              method: 'GET',
              dataType: 'json',
              success: function(experience) {
                  var experienceHtml = '';
                  $.each(experience, function(index, exp) {
                      experienceHtml += `
                          <div class="resume-card">
                              <div class="resume-line">
                                  <h3 class="position">${exp.position}</h3>
                                  <p class="company">${exp.company}</p>
                                  <p class="date">${exp.date}</p>
                                  <p class="address">${exp.address}</p>
                              </div>
                          </div>
                      `;
                  });
                  $('#experience-cards').append(experienceHtml);

                  // Add 'visible' class with animation after appending experience cards
                  $('#experience-cards .resume-card').each(function(index) {
                      setTimeout(function(){
                          $(this).addClass('visible');
                      }.bind(this), 500 * index); // Change the delay here
                  });
              },
              error: function(jqXHR, textStatus, errorThrown) {
                  console.log(textStatus, errorThrown);
              }
          });
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
      }
  });
});
