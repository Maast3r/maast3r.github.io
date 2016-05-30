$(document).ready(function() {
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

  $("#close").click(function() {
    $("#modal-wrapper").hide();
    $("#modal-bar").hide();
    $("#java-folder-modal").hide();
    $("#c-folder-modal").hide();
    $("#python-folder-modal").hide();
    $("#web-folder-modal").hide();
    $("#instructions-modal").hide();
  });

});
