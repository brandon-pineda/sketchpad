var hue = function()
{
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' +
  (Math.floor(Math.random() * 256)) + ')';
};

$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            $('.grid').append('<div class="grid_square"></div>');
        }
        $('.grid').append('<div class="grid_row"></div>');
    }

    var square_size = $('.grid').width()/16 - 6;
    $('.grid_square').css('width', square_size);
    $('.grid_square').css('height', square_size);

    $('.grid_square').mouseenter(function() {
      $(this).addClass('grid_square_hover');
      $(this).css('background-color', hue);
    });
});
