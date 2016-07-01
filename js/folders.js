$(document).ready(function() {
  function hideAllModals() {
    var modals = document.getElementsByClassName("modal");
    for (var i=0; i<modals.length; i++) {
      modals[i].style.display = "none";
    }
  }

  function showModalTop() {
    $("#modal-wrapper").show();
    $("#modal-bar").show();
  }

  $(".folder-wrapper").click(function() {
    $(".folder-wrapper").removeClass("folder-focused");
    $(this).addClass("folder-focused");
  });

  $("#java").dblclick(function() {
    hideAllModals();
    showModalTop();
    $("#java-folder-modal").show();
    $("#modal-title").html("Java Projects");
  });

  $("#c").dblclick(function() {
    hideAllModals();
    showModalTop();
    $("#c-folder-modal").show();
    $("#modal-title").html("C/C# Projects");
  });

  $("#python").dblclick(function() {
    hideAllModals();
    showModalTop();
    $("#python-folder-modal").show();
    $("#modal-title").html("Python Projects");
  });

  $("#web").dblclick(function() {
    hideAllModals();
    showModalTop();
    $("#web-folder-modal").show();
    $("#modal-title").html("Web Projects");
  });

  $("#model").dblclick(function() {
    hideAllModals();
    showModalTop();
    $("#model-folder-modal").show();
    $("#modal-title").html("Modeling Languages Projects");
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
    showModalTop();
    $("#instructions-modal").show();
    $("#modal-title").html("Instructions");
  });

  $("#work").dblclick(function() {
    showModalTop();
    $("#work-history").show();
    $(".loading-wrapper").show();
    $("#fathom-voice").show();
    $("#modal-title").html("Work History");
  });

});
