(function() {
  var words = [
      'moon-shuttle conductor',
      'bricklayer',
      'psychiatrist',
      'physicist',
      'escalator',
      'magician',
      'mechanic',
      'coal miner',
      'torpedo technician'

    ],
    i = 0;
  setInterval(function() {
    $('#changingword').show(function() {
      $(this).html(words[i = (i + 1) % words.length]);
    });
  }, 400);

})();