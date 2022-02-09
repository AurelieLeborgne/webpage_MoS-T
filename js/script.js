$(window).scroll(function (event) {
  // A chaque fois que l'utilisateur va scroller (descendre la page)
  var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

  //si cette valeur > à 200 on ajouter la class
  if (y >= 300) {
    $('.contNav').addClass('opacity');
    $('#backToTop').show();
  } else {
    // sinon, on l'enlève
    $('.contNav').removeClass('opacity');
    $('#backToTop').hide();
  }
});


$(document).ready(function () {

  $('#backToTop').click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

