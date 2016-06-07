$(document).ready(function() {

  $("#terminal-close").click(function() {
    $("#terminal").hide();
  });

  function parseTerminal(command) {
    if(command == "pong") {
      $("#pong").show();
      $("#pong").focus();
      $("#terminal").hide();
    }
  }

  document.getElementById('terminal-input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){ //enter key
      parseTerminal($("#terminal-input").val());
      var addedLine = "<div class='terminal-line-history'>AM:\\ResumeOS>" + $("#terminal-input").val()
        + "</div>";
      $("#terminal-history").append(addedLine);
      document.getElementById('terminal-input').value = "";
      $("#terminal-input").val("");
    }
  }
});
