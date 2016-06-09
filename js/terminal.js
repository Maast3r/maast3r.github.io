$(document).ready(function() {
    $("#terminal-close").click(function() {
        $("#terminal").hide();
    });
});

function helpHandler() {
    var addedLine = "<div class='terminal-line-history'>ls/dir Lists all files/directories in current directory</div>";
    $("#terminal-history").append(addedLine);
    addedLine =  "<div class='terminal-line-history'>cd.. Goes up a directory</div>";
    $("#terminal-history").append(addedLine);
    addedLine =  "<div class='terminal-line-history'>cd [directory name] Enters given directory</div>";
    $("#terminal-history").append(addedLine);
    addedLine =  "<div class='terminal-line-history'>open [file/directory name] Opens file/direcotry</div>";
    $("#terminal-history").append(addedLine);
    addedLine =  "<div class='terminal-line-history'>pong Starts a game of Pong (w/s and up/down keys)</div>";
    $("#terminal-history").append(addedLine);
    addedLine =  "<div class='terminal-line-history'>help Displays all commands</div>";
    $("#terminal-history").append(addedLine);
}

function defaultHandler() {
    var addedLine = "<div class='terminal-line-history'>Sorry, the command: "
        + command + " is not supported</div>";
    $("#terminal-history").append(addedLine);
}
