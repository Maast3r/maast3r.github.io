$(document).ready(function() {
    var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60)
    };

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $("#pong").hide();
            $("#terminal-input").focus();
            gameStarted = false;
        }
    });

    function pongHandler(command) {
        $("#pong").show();
        $("#pong").focus();
        paintStartBackground();
        player1 = new Player(30, height / 2 - 50, 15, 100);
        player2 = new Player(width - 45, height / 2 - 50, 15, 100);
        ball = new Ball(width / 2, height / 2);

        p1Score = 0;
        p2Score = 0;
    }

    function parseInput(command) {
        switch (command) {
            case "ls":
            case "dir":
                // list dirs/files
                break;
            case "cd..":
                // go up dir
                break;
            case "cd blah":
                // enter dir
                break;
            case "open blah":
                // open blah
            case "pong":
                pongHandler();
                break;
            case "help":
                helpHandler();
                break;
            default:
                defaultHandler();
                break;
        }
    }

    // document.getElementById('terminal-input').onkeypress = function(e) {
    //     if (!e) e = window.event;
    //     var keyCode = e.keyCode || e.which;
    //     if (keyCode == '13') { //enter key
    //         var addedLine = "<div>AM:\\ResumeOS> " + $("#terminal-input").val() + "</div>";
    //         $("#terminal-history").append(addedLine);
    //         parseInput($("#terminal-input").val());
    //         $("#terminal-input").val("");
    //     }
    // }

    var width = 800;
    var height = 600;
    var canvas = document.getElementById("pong");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");


    //Game objects
    var player1 = new Player(30, height / 2 - 50, 15, 100);
    var player2 = new Player(width - 45, height / 2 - 50, 15, 100);
    var ball = new Ball(width / 2, height / 2);

    var gameStarted = false;

    var p1Score = 0;
    var p2Score = 0;

    var keysDown = {};

    function paintStartBackground() {
        ctx.background = "black";
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.rect(0, 0, width, height);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.font = "18px PT Sans, sans-serif";
        ctx.fillStyle = 'white';
        ctx.fillText("Press Enter to Start", 255, 50);
        ctx.fillText("Press Esc to leave", 5, 20);
        ctx.stroke();
        canvas.onkeydown = function(event) {
            event = event || window.event;
            enterKeyHandler(event.keyCode);
        };
    }

    function paintGameOverBackground() {
        ctx.beginPath();
        ctx.background = "black";
        ctx.strokeStyle = "white";
        ctx.fillStyle = "black";
        ctx.rect(0, 0, width, height);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.font = "18px PT Sans, sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText("P1 Score: " + p1Score, 100, 50);
        ctx.fillText("Press Esc to leave", 5, 20);
        ctx.fillText("P2 Score: " + p2Score, 600, 50);
        if (p1Score == 10) {
            ctx.fillText("P1 Wins!!", 320, 50);
        } else if (p2Score == 10) {
            ctx.fillText("P2 Wins!!", 320, 50);
        }
        ctx.fillText("Press Enter to play again!", 190, 80);
        ctx.stroke();

        player1 = new Player(30, height / 2 - 50, 15, 100);
        player2 = new Player(width - 45, height / 2 - 50, 15, 100);
        ball = new Ball(width / 2, height / 2);

        gameStarted = false;

        p1Score = 0;
        p2Score = 0;

        player1.keyPress();
    }

    function paintBackground() {
        ctx.beginPath();
        ctx.background = "black";
        ctx.strokeStyle = "white";
        ctx.rect(0, 0, width, height);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.font = "18px PT Sans, sans-serif";
        ctx.fillStyle = "#D3D3D3";
        ctx.fillText("P1 Score: " + p1Score, 100, 50);
        ctx.fillText("Press Esc to leave", 5, 20);
        ctx.fillText("P2 Score: " + p2Score, 600, 50);
        ctx.stroke();
    }

    function Player(x, y, width, height) {
        this.paddle = new Paddle(x, y, width, height);
    }

    function Paddle(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.x_speed = 0;
        this.y_speed = 0;
    }

    function Ball(x, y) {
        this.x = x;
        this.y = y;
        this.x_speed = 10;
        this.y_speed = 0;
    }

    var render = function() {
        player1.render();
        player2.render();
        ball.render();
    };

    var update = function() {
        player1.update();
        player2.update();
        ball.update(player1.paddle, player2.paddle);
    };

    var step = function() {
        if (gameStarted) {
            console.log("animating");
            paintBackground();
            player1.keyPress();
            ball.update(player1.paddle, player2.paddle);
            render();
            animate(step);

            if (p1Score === 10 || p2Score === 10) {
                gameStarted = false;
                paintGameOverBackground();
                return;
            }
        }
    };

    Paddle.prototype.render = function() {
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    };

    Paddle.prototype.move = function(x, y) {
        this.x += 2 * x;
        this.y += 2 * y;
        this.x_speed = x;
        this.y_speed = y;
        if (this.y < 0) {
            this.y = 0;
            this.y_speed = 0;
        } else if (this.y + this.height > 600) {
            this.y = 600 - this.height;
            this.y_speed = 0;
        }
    };

    Player.prototype.render = function() {
        this.paddle.render();
    };

    Player.prototype.keyPress = function() {
        var playerMoveSpeed = 2.3;
        for (var key in keysDown) {
            var value = Number(key);
            if (value === 87 && gameStarted) {
                //w
                player1.paddle.move(0, -playerMoveSpeed);
            } else if (value === 83 && gameStarted) {
                //s
                player1.paddle.move(0, playerMoveSpeed);
            } else if (value === 38 && gameStarted) {
                //up arrow
                player2.paddle.move(0, -playerMoveSpeed);
            } else if (value === 40 && gameStarted) {
                //down arrow
                player2.paddle.move(0, playerMoveSpeed);
            } else if (value === 13 && gameStarted === false) {
                //enter
                gameStarted = true;
                animate(step);
            }
        }
    };

    function enterKeyHandler(keyCode) {
        if (keyCode == 13 && gameStarted == false) {
            gameStarted = true;
            animate(step);
        }
    }

    Ball.prototype.render = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 2 * Math.PI, false);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.stroke();
    };

    Ball.prototype.update = function(paddle1, paddle2) {
        this.x += this.x_speed;
        this.y += this.y_speed;
        var right_x = this.x + 5;
        var top_y = this.y - 5;
        var bottom_x = this.x + 5;
        var bottom_y = this.y + 5;

        //top boundry
        if (this.y - 5 < 0) {
            this.y = 5;
            this.y_speed = -this.y_speed;
        }
        //bottom boundry
        else if (this.y + 5 > 600) {
            this.y = 595;
            this.y_speed = -this.y_speed;
        }

        //respawn ball
        if (this.x < 0) {
            this.y_speed = 0;
            this.x_speed = 10;
            this.x = 400;
            this.y = 300;
            p2Score++;
        } else if (this.x > 800) {
            this.y_speed = 0;
            this.x_speed = -10;
            this.x = 400;
            this.y = 300;
            p1Score++;
        }

        //hits right paddle
        if (right_x == paddle2.x && this.y >= paddle2.y && this.y <= paddle2.y + paddle2.height) {
            this.x_speed = -this.x_speed;
            if (paddle2.y_speed != 0) {
                this.y_speed = 1.5 * paddle2.y_speed;
            }
        }
        //hits left paddle
        else if (right_x == paddle1.x + 25 && this.y >= paddle1.y && this.y <= paddle1.y + paddle1.height) {
            this.x_speed = -this.x_speed;
            if (paddle1.y_speed != 0) {
                this.y_speed = 1.5 * paddle1.y_speed;
            }
        }
    };

    window.addEventListener("keydown", function(event) {
        keysDown[event.keyCode] = true;
    });

    window.addEventListener("keyup", function(event) {
        delete keysDown[event.keyCode];
    });
});
