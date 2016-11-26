
// Jquery and Javascript for Connect4
$(document).ready(function() {


    var config = {
        blackPlayer: "Player 1",
        redPlayer: "Player 2",
        startingPlayer: "blackPlayer",
        playerPrefix: "Current Player is: "
    };

    var currentPlayer = config.startingPlayer;

    // Function to change player

    function changePlayer() {
        if (currentPlayer === 'blackPlayer') {
            currentPlayer = 'redPlayer';
        } else {
            currentPlayer = 'blackPlayer';
        };
    };

    // Empty board 

    var state = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    // trigger the game by clicking on a position on the board

    $(".col-1").on('click', function(e) {
        var $col = $(e.currentTarget);
        var colindex = $col.index();
         // put currents players into the boards(state) array
        state[colindex].push(currentPlayer);

        var colarray = state[colindex];

        for (var i = 0; i < colarray.length; i++) {
            var $cell = $col.find('.cell').get(5 - i)
            $($cell).addClass(colarray[i])
            // $($cell).addClass(currentPlayer)
        };

      // Initiates the change player function 
    changePlayer();



    });
});





