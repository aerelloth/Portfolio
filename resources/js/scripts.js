$(function () {

	/* Scroll progressif */

  $('.scroll').on('click', function(e) {

    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({

      scrollTop: $(this.hash).offset().top

    }, 1000, function(){

      window.location.hash = hash;

    });

  });

  /* Options Masonry */

  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    transitionDuration: '1s'
  });

  /* Initialisation des vignettes */
  function init() {
    $grid.masonry();
  }

  var timer = setTimeout(init, 5000);
  /* Agrandissement du bloc au clic */
  $('.description').on('click', function() {

	var $gridItem = $(this).parent().parent();

    if ($gridItem.hasClass('double-grid')) {
      		$gridItem.removeClass('double-grid');
    }
    else {
      		$gridItem.addClass('double-grid');
    }

    init();

    });

});