$(document).ready(function(){
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "Most likely", "Outlook good", "Signs point to yes", "yes", "Reply hazy", "try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
	$("#answer").hide();

	magic8Ball.askQuestion = function (question) {
		var randomNumber = Math.random();
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor (randomNumberForListOfAnswers);
		var answer = this.listOfAnswers [randomIndex];
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#answer").text(answer);
		console.log (question);
		console.log (answer);
	};
	var onClick = function(){
		$("#answer").hide();
		$("#answer").fadeIn(4000);
		setTimeout(
			function(){
				$("#8ball").effect( "shake" );
				var question = prompt("Ask A Yes/No Question!");
				magic8Ball.askQuestion(question);
			}, 500);
	};
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	$("#questionButton").click(onClick );
});