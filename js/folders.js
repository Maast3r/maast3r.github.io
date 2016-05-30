$(document).ready(function() {
  function hideAllModals() {
    var modals = document.getElementsByClassName("modal");
    for (var i=0; i<modals.length; i++) {
      modals[i].style.display = "none";
    }
  }

  $("#java").dblclick(function() {
    hideAllModals();
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#java-folder-modal").show();
    $("#modal-title").html("Java Projects");
  });

  $("#c").dblclick(function() {
    hideAllModals();
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#c-folder-modal").show();
    $("#modal-title").html("C/C# Projects");
  });

  $("#python").dblclick(function() {
    hideAllModals();
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#python-folder-modal").show();
    $("#modal-title").html("Python Projects");
  });

  $("#web").dblclick(function() {
    hideAllModals();
    $("#modal-wrapper").show();
    $("#modal-bar").show();
    $("#web-folder-modal").show();
    $("#modal-title").html("Web Projects");
  });

  $("#resume").dblclick(function() {
    hideAllModals();
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
});
