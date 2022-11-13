var skills = {
  ht: 90,
  cs: 80,
  js: 60,
  rc: 50,
  jq: 60
};

$.each(skills, function(key, value) {
  var skillbar = $("." + key);

  skillbar.animate(
    {
      width: value + "%"
    },
    3000,
    function() {
      $(".speech-bubble").fadeIn();
    }
  );
}); 