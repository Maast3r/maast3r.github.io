$(document).ready(function() {
  function hideAllDesc() {
    var descs = document.getElementsByClassName("description");
    for (var i=0; i<descs.length; i++) {
      descs[i].style.display = "none";
    }
  }

  $(".file-wrapper").click(function() {
    $(".file-wrapper").removeClass("file-focused");
    $(this).addClass("file-focused");
  });

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

  $("#julia").click(function() {
    hideAllDesc();
    $("#julia-description").show();
  });
  $("#julia").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/Julia-Set", "_blank");
    wind.focus();
  });

  $("#pandemic").click(function() {
    hideAllDesc();
    $("#pandemic-description").show();
  });
  $("#pandemic").dblclick(function() {
    var wind = window.open("https://github.com/cbudo/Pandemic-Windows", "_blank");
    wind.focus();
  });

  //
  // PYTHON/OTHER
  //
  $("#poker").click(function() {
    hideAllDesc();
    $("#poker-description").show();
  });
  $("#poker").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/EnovaPokerBot", "_blank");
    wind.focus();
  });

  $("#scheme-interpreter").click(function() {
    hideAllDesc();
    $("#scheme-interpreter-description").show();
  });
  $("#scheme-interpreter").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/Scheme-Intrepreter", "_blank");
    wind.focus();
  });

  $("#irobot").click(function() {
    hideAllDesc();
    $("#irobot-description").show();
  });
  $("#irobot").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/iRobot", "_blank");
    wind.focus();
  });

  //
  // WEB
  //
  $("#twitch2go").click(function() {
    hideAllDesc();
    $("#twitch2go-description").show();
  });
  $("#twitch2go").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/Twitch2Go", "_blank");
    wind.focus();
  });

  $("#capital-one").click(function() {
    hideAllDesc();
    $("#capital-one-description").show();
  });
  $("#capital-one").dblclick(function() {
    var wind = window.open("https://github.com/baseballlover723/capital-one", "_blank");
    wind.focus();
  });

  $("#syst").click(function() {
    hideAllDesc();
    $("#syst-description").show();
  });
  $("#syst").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/SysT", "_blank");
    wind.focus();
  });

  $("#lse").click(function() {
    hideAllDesc();
    $("#lse-description").show();
  });
  $("#lse").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/League-Skill-Efficiency", "_blank");
    wind.focus();
  });

  $("#lfs").click(function() {
    hideAllDesc();
    $("#lfs-description").show();
  });
  $("#lfs").dblclick(function() {
    var wind = window.open("https://github.com/baseballlover723/league_flash_stats", "_blank");
    wind.focus();
  });

  //
  // MODELING
  //
  $("#sudoku").click(function() {
    hideAllDesc();
    $("#sudoku-description").show();
  });
  $("#sudoku").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/SudokuSolver", "_blank");
    wind.focus();
  });

  $("#sender-receiver").click(function() {
    hideAllDesc();
    $("#sender-receiver-description").show();
  });
  $("#sender-receiver").dblclick(function() {
    var wind = window.open("https://github.com/baseballlover723/373AlloyProject", "_blank");
    wind.focus();
  });


  $("#tictactoe").click(function() {
    hideAllDesc();
    $("#tictactoe-description").show();
  });
  $("#tictactoe").dblclick(function() {
    var wind = window.open("https://github.com/Maast3r/TicTacToe-ModelChecker", "_blank");
    wind.focus();
  });


});
