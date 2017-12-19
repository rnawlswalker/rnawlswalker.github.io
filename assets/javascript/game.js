$(document).ready(function(){

	//create variable firstNumber to store function that generates random integer between 19 and 120

	var firstNumber = function getRandomIntInclusive () {
				min = Math.ceil(19);
				max = Math.floor(120);
				return Math.floor(Math.random() * (max - min +1)) + min;
	}

	function getRandomIntInclusive () {
				min = Math.ceil(1);
				max = Math.floor(12);
				return Math.floor(Math.random() * (max - min +1)) + min;
	}
	
	//replace text in the ID randomNumber with the resulting value in firstNumber
	$("#randomNumber").text(firstNumber);


	//create four random variables for each gem containing random value between 1 and 12

		var gem1 = getRandomIntInclusive()
		
		var gem2 = getRandomIntInclusive()
		var gem3 = getRandomIntInclusive()
		var gem4 = getRandomIntInclusive()


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
			//defines firstNumber variable that generates new random number at reset of game
			firstNumber = function getRandomIntInclusive () {
			min = Math.ceil(19);
			max = Math.floor(120);
			return Math.floor(Math.random() * (max - min +1)) + min;
			}

			//append value of firstNumber to id randomNumber
			$("#randomNumber").text(firstNumber);

			function getRandomIntInclusive () {
				min = Math.ceil(1);
				max = Math.floor(12);
				return Math.floor(Math.random() * (max - min +1)) + min;
			}
			
			//defines four gem variables that use the secondNumber variable to generate new random number between 1 and 12 for each gem
				gem1 = getRandomIntInclusive();
				gem2 = getRandomIntInclusive()
				gem3 = getRandomIntInclusive()
				gem4 = getRandomIntInclusive()

				//sets total score to 0 when game resets
				totalScore = 0;
				wins = 0;
				losses = 0;
				$("newRandom").text(totalScore);
		}

	//increase the value of variable wins and reset the game
	
		// function winner () {
		// 	if (totalScore == firstNumber) {
		// 	wins++;
		// 	$("#wins").text(wins);
		// 	reset()
		// 	}
		// }	

	//increase the value of variable wins and reset the game
	
		// function lossers () {
		// 	if (totalScore > firstNumber) {
		// 	losses++;
		// 	$("#losses").text(losses);
		// 	reset()
		// }
		// }	


	//create click function for gem buttons		


	$("#amethyst").on('click',function() {
			totalScore = totalScore + gem1;
			$("#newRandom").text(totalScore);
		
	})


	$("#steven").on('click', function() {
			totalScore = totalScore + gem2;
			$("#newRandom").text(totalScore);
		
	})


	$("#garnett").on('click', function() {
			totalScore = totalScore + gem3;
			$("#newRandom").text(totalScore);
		
	})


	$("#pearl").on('click',function() {
			totalScore = totalScore + gem4;
			$("#newRandom").text(totalScore);
	
	})

	var newrandomNumber = totalScore;

	function winner () {
			if (newrandomNumber == firstNumber) {
			wins++;
			$("#wins").text(wins);
			reset()
			}
		}

			function lossers () {
			if (newrandomNumber > firstNumber) {
			losses++;
			$("#losses").text(losses);
			reset()
		}
		}		



});
