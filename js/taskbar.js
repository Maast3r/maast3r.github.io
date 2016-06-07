$(document).ready(function(){
  document.getElementById('query').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){ //enter key
      if($("#query").val() == "terminal"){
        $("#terminal").show();
        $("#query").val("");
        $("#terminal-input").select();
      }
    }
  }

  function getMinutes() {
    var currentdate = new Date();
    var mins = currentdate.getMinutes();
    if(mins < 10){
      mins = "0" + mins;
    }
    return mins;
  }
  function setTimeDate() {
    var currentdate = new Date();
    $("#time").html(currentdate.getHours() + ":" + getMinutes());
    $("#date").html((currentdate.getMonth()+1) + "/" + currentdate.getDate() + "/" +
    currentdate.getFullYear());
  }
  setTimeDate();
  setInterval(function() {
    setTimeDate();
  }, 1000);

  //
  // TASKBAR BUTTONS
  //
  $("#github").click(function() {
    var wind = window.open("https://github.com/Maast3r", "_blank");
    wind.focus();
  });

  $("#linkedin").click(function() {
    var wind = window.open("https://www.linkedin.com/in/softwarelover", "_blank");
    wind.focus();
  });

  $("#spotify").click(function() {
    var wind = window.open("https://play.spotify.com/user/1230773325", "_blank");
    wind.focus();
  });

  $("#steam").click(function() {
    var wind = window.open("http://steamcommunity.com/id/maasterma", "_blank");
    wind.focus();
  });

});
