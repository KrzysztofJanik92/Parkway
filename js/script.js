var main = function () {
    $('section').on('click', function() {
      $(this).find('.contentBox').slideToggle(400);
    });
   }



$(document).ready(main);
