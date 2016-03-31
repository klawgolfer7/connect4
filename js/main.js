// Jquery and Javascript for Connect4

$(document).ready(function() {

	var currentPlayer = ('player1');

	var state = [[],
				 [],
				 [],
				 [],
				 [],
				 [],
				 []];

		$(".col-1").on('click', function(e) {
			var $col = $(e.currentTarget);
			var colindex = $col.index();

			state[colindex].push(currentPlayer);

			var colarray= state[colindex];

			for (var i=0; i<colarray.length; i++);
				var $cell= $col.find('.cell').get(5-i);
				$cell.addClass(currentPlayer)




    });


});