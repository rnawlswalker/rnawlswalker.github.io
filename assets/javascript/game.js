$(document).ready(function(){

	//create variable firstNumber to store function that generates random integer between 19 and 120

	function getRandomWin() {
				min = 19;
				max = 121;
				return Math.floor(Math.random() * (max - min)) + min;
	}

	function getRandomGem() {
				min = 1;
				max = 12;
				return Math.floor(Math.random() * (max - min)) + min;
	}
	
	//replace text in the ID randomNumber with the resulting value in firstNumber
	winningNumber = getRandomWin();
	$("#randomNumber").text(winningNumber);

	//create four random variables for each gem containing random value between 1 and 12

	var gem1 = getRandomGem();
		
	var gem2 = getRandomGem();
	var gem3 = getRandomGem();
	var gem4 = getRandomGem();


	//create variable to hold score
	var totalScore = 0;

	//create variables for wins and losses
	var wins = 0;
	var losses = 0;
	//append value of variable wins to id #wins
	$("#wins").text(wins);

	//append value of variable losses to id #losses
	$("#losses").text(losses);
	//create a function to reset game win player wins or losses
		function reset () {
			console.log("in reset");
			//defines firstNumber variable that generates new random number at reset of game
			winningNumber = getRandomWin();
			
			//append value of firstNumber to id randomNumber
			$("#randomNumber").text(winningNumber);
			
			//defines four gem variables that use the secondNumber variable to generate new random number between 1 and 12 for each gem
				gem1 = getRandomGem();
				gem2 = getRandomGem();
				gem3 = getRandomGem();
				gem4 = getRandomGem();
			console.log('newgame');
			console.log(winningNumber,gem1,gem2,gem3,gem4);

				//sets total score to 0 when game resets
				totalScore = 0;
				$("newRandom").text(totalScore);
		}
	
	$("#amethyst").on('click',function() {
			totalScore = totalScore + gem1;
			outcome();
			$("#newRandom").text(totalScore);
		
	})


	$("#steven").on('click', function() {
			totalScore = totalScore + gem2;
			outcome();
			$("#newRandom").text(totalScore);
		
	})


	$("#garnett").on('click', function() {
			totalScore = totalScore + gem3;
		outcome();
			$("#newRandom").text(totalScore);
		
	})


	$("#pearl").on('click',function() {
			totalScore = totalScore + gem4;
		outcome();
			$("#newRandom").text(totalScore);
	
	})


	function outcome() {
			if (totalScore == winningNumber) {
			wins++;
			$("#wins").text(wins);
			reset()
			} 
			if (totalScore > winningNumber) {
			losses++;
			$("#losses").text(losses);
			reset()
			}
		}


		

});
