$(() => {
  $('.navbar').on('click', function () {
    $('.navigation').animate({
      width: 'toggle',
      height: 'toggle',
    });
  });
  $('.search-bar').on('click', function () {
    $('#search').animate({
      width: 'toggle',
    });
  });

  $('.back-btn').on('click', function () {
    window.history.back();
  });
});
