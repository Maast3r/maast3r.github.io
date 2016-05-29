$(document).ready(function(){

  //
  // FOLDERS
  //
  $("#java").dblclick(function() {
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#java-folder-modal").show();
    $("#modal-title").html("Java Projects");
  });

  $("#c").dblclick(function() {
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#c-folder-modal").show();
    $("#modal-title").html("C/C# Projects");
  });

  $("#python").dblclick(function() {
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#python-folder-modal").show();
    $("#modal-title").html("Python Projects");
  });

  $("#web").dblclick(function() {
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#web-folder-modal").show();
    $("#modal-title").html("Web Projects");
  });

  $("#resume").dblclick(function() {
    var wind = window.open("Resume.pdf", "_blank");
    wind.focus();
  });


  $("#rose").dblclick(function() {
    var wind = window.open("http://www.rose-hulman.edu/news/academics/2015/rose-hulman-ranked-nations-top-undergraduate-engineering-college-for-17th-straight-year-in-us-news-world-reports-annual-college-guide.aspx", "_blank");
    wind.focus();
  });

  $("#instructions").dblclick(function() {
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#instructions-modal").show();
    $("#modal-title").html("Instructions");
  });

  //
  // MODAL
  //

  function mouseUp(){
    window.removeEventListener('mousemove', divMove, true);
  }

  function mouseDown(e){
    window.addEventListener('mousemove', divMove, true);
  }

  function divMove(e){
    var div = document.getElementById('modal-wrapper');
    div.style.position = 'absolute';
    div.style.top = e.pageY + 'px';
    div.style.left = e.pageX + 'px';
  }

  document.getElementById('modal-bar').addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  $("modal-wrapper").resizable();

  $("#close").click(function() {
    $("#modal-wrapper").hide();
    $("#modal-bar").hide();
    $("#java-folder-modal").hide();
    $("#c-folder-modal").hide();
    $("#python-folder-modal").hide();
    $("#web-folder-modal").hide();
    $("#instructions-modal").hide();
  });

  //
  // CLOCK
  //
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
