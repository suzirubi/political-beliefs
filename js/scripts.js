$(function() {
  $("form#beliefs ").submit(function(event) {
    var wallInput = parseInt($("select#wall").val());
    var emailInput = parseInt($("select#email").val());
    var putinInput = parseInt($("select#putin").val());

    console.log()

    if (wallInput + emailInput + putinInput > 1) {
      alert("You should NOT vote");
    } else {
      alert("You should vote for Hillary");
    }

    event.preventDefault();
  });
});
