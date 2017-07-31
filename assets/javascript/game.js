// declaring variables
var wins = 0;
var losses = 0;
var finalScore = 0;
var score = 0;

// generating a random number for beginning the game
var random = Math.floor((Math.random()* 100)+ 19);

//generating random numbers for the crystals
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);

//updating scores total, wins, and losses
var updatedScore = function() {
	$('#wins').empty();
	$('#wins').append(wins);

	$('#losses').empty();
	$('#losses').append(losses);

	$('.finalScore').empty();
	$('.finalScore').append(finalScore);

}

//when the game restarts it should..
var restartGame = function() {
	score = 0;
	random = Math.floor((Math.random()* 100)+ 19);

	$('.random').empty();
	$('.random').append(random);

	var crystal1 = Math.floor((Math.random() * 12) + 1);
	var crystal2 = Math.floor((Math.random() * 12) + 1);
	var crystal3 = Math.floor((Math.random() * 12) + 1);
	var crystal4 = Math.floor((Math.random() * 12) + 1);

	updatedScore();

}

//game process 
var gameProcess = function() {
	if(score == random) {
		wins = wins + 1;
		alert("You win!");
		restart();
	}
	else if (score > random) {
		losses = losses + 1;
		alert("You Lost!");
		restart();
	}
	else {
		updatedScore();
	}

}

// updating results
$('.random').append(random);
$('.finalScore').append(finalScore);


//adding numbers to final scores when crystals are clicked
$(document).ready(function(){
	$('#crystal1').click(function(){
 		finalScore = finalScore + crystal1;
 		gameProcess();
 	})

 	$('#crystal2').click(function(){
 		finalScore = finalScore + crystal2;
 		gameProcess();
 	})

 	$('#crystal3').click(function(){
 		finalScore = finalScore + crystal3;
 		gameProcess();
 	})

 	$('#crystal4').click(function(){
 		finalScore = finalScore + crystal4;
 		gameProcess();
 	})

});
