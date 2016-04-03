// Jquery and Javascript for Connect4

$(document).ready(function() {


	var config = {
        blackPlayer: "Player 1",
        redPlayer: "Player 2",
        startingPlayer: "blackPlayer",
    };

	var currentPlayer = config.startingPlayer;

	// Function to change player

	function changePlayer() {
    if (currentPlayer === 'black') {
        currentPlayer = 'red';
    } else {
        currentPlayer = 'black';
    }

    // Empty board 

	var state = [[],
				 [],
				 [],
				 [],
				 [],
				 [],
				 []];

		// trigger the game by clicking on a position on the board

		$(".col-1").on('click', function(e) {

			var $col = $(e.currentTarget);
			var colindex = $col.index();

			state[colindex].push(currentPlayer);

			var colarray= state[colindex];

			for (var i=0; i<colarray.length; i++);

				var $cell= $col.find('.cell').get(5-i);

				$cell.addClass('currentPlayer');


    });


});