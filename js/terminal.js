$(document).ready(function() {
    $("#terminal-close").click(function() {
        $("#terminal").hide();
    });
});

function helpHandler() {
    var addedLine = "<div class='terminal-line-history'>pong        Starts a game of Pong</div>";
    $("#terminal-history").append(addedLine);
    addedLine =  "<div class='terminal-line-history'>help        Displays all commands</div>";
    $("#terminal-history").append(addedLine);
}

function defaultHandler() {
    var addedLine = "<div class='terminal-line-history'>Sorry, the command: "
        + command + " is not supported</div>";
    $("#terminal-history").append(addedLine);
}
