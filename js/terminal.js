$(document).ready(function() {
  $("#terminal-input").val("MA:\\ResumeOS>");

  $("#terminal-close").click(function() {
    $("#terminal").hide();
  });


  document.getElementById('terminal-input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){ //enter key
      console.log("asdf?");
      // var input = document.getElementById("t")
      var addedLine = "<div class='terminal-line-history'>" + $("#terminal-input").val()
        + "</div>";
      $("#terminal-history").append(addedLine);
      $("#terminal-input").val("MA:\\ResumeOS>");
    }
  }
});
