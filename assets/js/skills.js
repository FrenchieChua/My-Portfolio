$(document).ready(function() {
    $('.skill').each(function () {
        var skill = $(this).data('skill');
        var progress = $(this).data('progress');
  
        $(this).append('<div class="progress" style="width: ' + progress + '%;"><span class="progress-percent"> '+ progress +'%</span></div>');
        
      });
});
