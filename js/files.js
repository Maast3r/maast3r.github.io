$(document).ready(function() {
  function hideAllDesc() {
    var descs = document.getElementsByClassName("description");
    for (var i=0; i<descs.length; i++) {
      descs[i].style.display = "none";
    }
  }

  //
  // JAVA
  //

  $("#evolution").click(function() {
    hideAllDesc();
    $("#evolution-description").show();
  });
  $("#evolution").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/Evolution", "_blank");
    wind.focus();
  });

  $("#uml-maker").click(function() {
    hideAllDesc();
    $("#uml-maker-description").show();
  });
  $("#uml-maker").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/UMLMaker", "_blank");
    wind.focus();
  });

  $("#editor-trees").click(function() {
    hideAllDesc();
    $("#editor-trees-description").show();
  });
  $("#editor-trees").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/EditorTrees", "_blank");
    wind.focus();
  });

  $("#doublets").click(function() {
    hideAllDesc();
    $("#doublets-description").show();
  });
  $("#doublets").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/Doublets", "_blank");
    wind.focus();
  });

  //
  // C/C#
  //
  $("#bare-os").click(function() {
    hideAllDesc();
    $("#bare-os-description").show();
  });
  $("#bare-os").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/BareOS", "_blank");
    wind.focus();
  });
});
