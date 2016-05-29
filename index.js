$(document).ready(function(){

  //
  // FOLDERS
  //
  $("#resume").dblclick(function() {
    var wind = window.open("Resume.pdf", "_blank");
    wind.focus();
  });


  $("#rose").dblclick(function() {
    var wind = window.open("http://www.rose-hulman.edu/news/academics/2015/rose-hulman-ranked-nations-top-undergraduate-engineering-college-for-17th-straight-year-in-us-news-world-reports-annual-college-guide.aspx", "_blank");
    wind.focus();
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
