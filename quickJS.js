var questionCount=1;
var score=0;
var finalScore=0;
var result = []
var letter;

function QuestionOne(){
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 1:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%">' +
    '</div></div>'+
	"</div> <p><strong>What would you most likely be doing at a party?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input id="q1" type="radio"  value=1 name="EorI" onclick="Selection()" >With friends and socialising between groups,<em> or</em></input></label> </div> <div class="radio">' +
      '<label><input id="q2" type="radio" value=-1 name="EorI" onclick="Selection()" >Talking to just the people you know</input></label> </div> </form>'+
	  '<button type="button" class="btn btn-info btn-md" onclick= parent.location="index.html" >Home</button>'+
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionTwo()" style="margin-left:70px;">Next</button>';
  }

function QuestionTwo(){
	finalScore=finalScore+score;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 2:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100" style="width:8%">' +
    '8%</div></div>'+
	"</div><p><strong>How do you prefer to solve a problem?</strong></p><form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="EorI" value=-1>Working it out by yourself,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="EorI" value=1>Working as part of a team</label></div> </form>'+
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionOne()">Back</button>'+
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionThree()" style="margin-left:70px;">Next</button> ';
}

function QuestionThree(){
	finalScore=finalScore+score;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 3:</h2> " +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100" style="width:16%">' +
    '16%</div></div>'+
	"</div><strong><p>How do you prefer to communicate with others?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="EorI" value=1>Meet someone face to face,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="EorI" value=-1>Communicate through text or email</label> </div> </form> ' +
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionTwo()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionFour()" style="margin-left:70px;">Next</button>';
}
function QuestionFour(){
	finalScore=finalScore+score;
	GetResultsEorI();
	finalScore=0;
	score=0;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 4:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="24" aria-valuemin="0" aria-valuemax="100" style="width:24%">' +
    '24%</div></div>'+
	"</div><p><strong>How do you normally remember events?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="NorS" value=-1>As an impression of what it was like,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="NorS" value=1>Based on snapshots of what actually happened</label> </div> </form>' +
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionThree()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionFive()" style="margin-left:70px;">Next</button>';
}
function QuestionFive(){
	finalScore=finalScore+score;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 5:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style="width:32%">' +
    '32%</div></div>'+
	"</div>  <p><strong>How to you normally process information?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="NorS" value=1>By what you see, hear, touch, taste and smell,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="NorS" value=-1>By paying attention to the patterns</label> </div> </form>' +
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionFour()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionSix()" style="margin-left:70px;">Next</button>';
}
function QuestionSix(){
	finalScore=finalScore+score;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 6:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">' +
    '40%</div></div>'+
	"</div>  <p><strong>If you were putting together a table, would you?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="NorS" value=-1>Follow the instructions step by step,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="NorS" value=1>Try to consturt the table from the picture on the box</label> </div> </form>' +
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionFive()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionSeven()" style="margin-left:70px;">Next</button>';
}
function QuestionSeven(){
	finalScore=finalScore+score;
	GetResultsNorS();
	finalScore=0;
	score=0;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 7:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style="width:48%">' +
    '48%</div></div>'+
	"</div>  <p><strong>How do you normally make a decision?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="ForT" value=1>Your actions are logically thought out,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="ForT" value=-1>Your actions are influenced by emotions</label> </div> </form>' +
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionSix()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionEight()" style="margin-left:70px;">Next</button>';
}
function QuestionEight(){
	finalScore=finalScore+score;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 8:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style="width:56%">' +
    '56%</div></div>'+
	"</div>  <p><strong>How would you deliver bad news?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="ForT" value=1>You believe telling the "cold" truth is best,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="ForT" value=-1>Be as compassionate as possible</label> </div> </form>' +
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionSeven()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionNine()" style="margin-left:70px;">Next</button>';
}
function QuestionNine(){
	finalScore=finalScore+score;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 9:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" style="width:64%">' +
    '64%</div></div>'+
	"</div>  <p><strong>How do you perceive yourself in a relationship?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="ForT" value=-1>Caring, warm and tactful,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="ForT" value=1>Truthful, impersonal and consistent</label> </div> </form>'+
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionEight()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionTen()" style="margin-left:70px;">Next</button>';
}
function QuestionTen(){
	finalScore=finalScore+score;
	GetResultsForT();
	finalScore=0;
	score=0;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 10:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%">' +
    '75%</div></div>'+
	"</div>  <p><strong>How do you approach your work?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="JorP" value=1>I like to have a list of things to do,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="JorP" value=-1>I like to keep casual when working</label> </div> </form>'+
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionNine()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionEleven()" style="margin-left:70px;">Next</button>';
}
function QuestionEleven(){
	finalScore=finalScore+score;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 11:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100" style="width:84%">' +
    '84%</div></div>'+
	"</div>  <p><strong>When approaching to a deadline how do you feel?</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="JorP" value=-1>I am stimulated by an approaching deadline,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="JorP" value=1>Confident, as I plan my work to avoid rushing</label> </div> </form>'+
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionTen()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="QuestionTwelve()" style="margin-left:70px;">Next</button>';
}
function QuestionTwelve(){
	finalScore=finalScore+score;
	var x = document.getElementById("buttons");
	x.innerHTML = "<h2>Question 12:</h2>" +
	'<div align="center" class="container"> <div class="progress" style="width:300px" > '+
    '<div  class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style="width:92%">' +
    '92%</div></div>'+
	"</div>  <p><strong>When working on a difficult problem, do you?:</strong></p>  <form role='form'> <div class='radio'>" +
      '<label><input type="radio" id="q1" onclick="Selection()" name="JorP" value=-1>Take breaks and never concentrate 100%,<em> or</em></label> </div> <div class="radio">' +
      '<label><input type="radio" id="q2" onclick="Selection()" name="JorP" value=1>Remain focused until the problem is solved</label> </div> </form>'+
	  '<button type="button" class="btn btn-info btn-md" onclick= "QuestionEleven()">Back</button>' +
	  '<button type="button" class="btn btn-info btn-md" onclick="GetResults()" style="margin-left:70px;">Finish</button>';
}

function Selection(){
	if(document.getElementById('q1').checked){
		score = parseInt(document.getElementById('q1').value);
	}else if(document.getElementById('q2').checked){
		score = parseInt(document.getElementById('q2').value);
	}
}

function GetResultsEorI(){
		if (finalScore > 0){
		result.push("E");
	}
		else if (finalScore < 0){
		result.push("I");
	}
}

function GetResultsNorS(){
		if (finalScore > 0){
		result.push("S");
	}
		else if (finalScore < 0){
		result.push("N");
	}
}

function GetResultsForT(){
		if (finalScore > 0){
		result.push("T");
	}
		else if (finalScore < 0){
		result.push("F");
	}
}

function GetResultsJorP(){
		if (finalScore > 0){
		result.push("J");
	}
		else if (finalScore < 0){
		result.push("P");
	}
}
function GetResults(){
	finalScore=finalScore+score;
	GetResultsJorP();
	var results="";
	
	for(i= result.length-1; i>=0;i--){
    results=result[i]+results;
	}
	
	var y = document.getElementById("image");
	y.innerHTML="<h2>Your Results</h2>" +
	"<div><p> <strong> "+ results +" <strong/></p></div>";
	var z = document.getElementById("buttons");
	z.innerHTML="<img src=\"" + results + ".jpg\"/>";
}



