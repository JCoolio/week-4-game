$(document).ready(function() {
	var wins = 0;
	var winsText = $("#wins");
	var losses = 0;
	var lossesText = $("#losses");
	var userScore = 0;
	// set variable for score wins and losses
	var computerNumber = Math.floor((Math.random() * 100) + 1);
	$("#computer-number").text("Crystals To Sell: "+ computerNumber);
	$("#wins").text("Wins: " + wins);
	$("#losses").text("Losses: " + losses);
// set computer number math logic + win loss text
	function resetGame2() {
		computerNumber = Math.floor((Math.random() * 100) + 1);
		userScore = 0
// reset game function
		$("#score").text("Crystals Sold " + userScore);
		$("#computer-number").text("Crystals To Sell: "+ computerNumber);
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);
		$("#crystalImg").html(" ");
		startGame();
		$(".imgCrystal").on("click", function(){
			$("#instruction").show()
		})
	}
//set reset game logic
	function resetGame() {
		computerNumber = Math.floor((Math.random() * 100) + 1);
		userScore = 0
//set score board text and add images log score
		$("#score").text("Your total score is: " + 0);
		$("#computer-number").text("Crystals To Sell: "+ computerNumber);
		$("#wins").text("Wins: " + 0);
		$("#losses").text("Losses: " + 0);
		$("#crystalImg").html(" ");
		startGame();
		console.log(computerNumber);
		console.log(userScore);

	}
// set start game var i  the loop to add 4 options set math of those 4 options  add image attributes for crystal class
function startGame() {

	for (var i = 0; i < 4; i++) {

		var crystalNumber = Math.floor(Math.random() * 10 + 1);

		var imgCrystal = $("<img>");

		imgCrystal.addClass("crystal-img");

		imgCrystal.attr("src", "assets/images/Crystal.png");

		imgCrystal.attr("data-crystalvalue", crystalNumber);
		imgCrystal.css("width: 250px");

		$("#crystalImg").append(imgCrystal);



	}
// set on click function add to user score
	$(".crystal-img").on("click", function() {

		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);

		userScore += crystalValue;

		$("#score").text("Crystals To Sell: " + userScore);
		$("#instructions").hide();

// if statement for win or lose
		if (userScore === computerNumber) {
			resetGame();
			wins++;
			console.log("wins ran");



		}

		else if (userScore >= computerNumber) {
			resetGame();
			losses++;
			console.log("losses ran");



		}
		$("#wins").text("Wins: " + wins);
		$("#losses").text("Losses: " + losses);


	});
}
// start / reset on click function
startGame();
$("#resetButton").on("click", function() {
	resetGame2();
	$("#instruction").show();
})



});
