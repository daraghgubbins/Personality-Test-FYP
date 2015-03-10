var section1=0,section2=0,section3=0,section4=0,section5=0,section6=0,section7=0,section8=0;
var total = 0;
var finalScore = [];
var result = []

function Store1(int){
section1=int;
alert(section1);
}

function Store2(int){
section2=int;
alert(section2);
}

function Store3(int){
section3=int;
alert(section3);
}

function Store4(int){
section4=int;
alert(section4);
}

function Store5(int){
section5=int;
alert(section5);
}

function Store6(int){
section6=int;
alert(section6);
}

function Store7(int){
section7=int;
alert(section7);
}

function Store8(int){
section8=int;
alert(section8);
}

function addScore(){
finalScore.push(section1,section2,section3,section4,section5,section6,section7,section8);
$.each(finalScore,function() {
    total += this;
});
}

function EorI(){
		if (total > 0){
		result.push("E");
	}
		else if (total < 0){
		result.push("I");
	}
	reset();
}

function SorN(){
		if (total > 0){
		result.push("S");
	}
		else if (total < 0){
		result.push("N");
	}
	reset();
}

function TorF(){
		if (total > 0){
		result.push("T");
	}
		else if (total < 0){
		result.push("F");
	}
	reset();
}

function JorP(){
		if (total > 0){
		result.push("J");
	}
		else if (total < 0){
		result.push("P");
	}
	alert(result);
}

function reset(){
	section1=0,section2=0,section3=0,section4=0,section5=0,section6=0,section7=0,section8=0;
	total = 0;
	finalScore=[];
}

function page2(){
	var x = document.getElementById("section");
	x.innerHTML = '<div>'+
  '<h1 class="text-primary" style="font-family:verdana"><b>Extensive Test</b></h1>'+
  '<h4 class="text-warning" style="font-family:verdana"><b>Section Two</b></h4>'+
'</div>'+

 '<div class="container-fluid">'+
 	'<div align="center" class="container"> '+
	'	<div class="progress" style="width:300px" >'+
		'	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:25%">'+
		'	 25%</div>'+
		'</div>'+
	'</div> '+
		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
					  '<button type="button" class="btn btn-info btn-md" onclick= parent.location="index.html" style="margin-bottom:15px;">Home</button>'+
	 ' <a type="button" class="btn btn-info btn-md" href="#" onclick="addScore();SorN();page3()" style="margin-left:70px; margin-bottom:15px;">Next</a>'+
		'</div>';

		
}

function page3(){
	var x = document.getElementById("section");
	x.innerHTML = '<div>'+
  '<h1 class="text-primary" style="font-family:verdana"><b>Extensive Test</b></h1>'+
  '<h4 class="text-warning" style="font-family:verdana"><b>Section Three</b></h4>'+
'</div>'+

 '<div class="container-fluid">'+
 	'<div align="center" class="container"> '+
	'	<div class="progress" style="width:300px" >'+
		'	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">'+
		'	 50%</div>'+
		'</div>'+
	'</div> '+
		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
					  '<button type="button" class="btn btn-info btn-md" onclick= parent.location="index.html" style="margin-bottom:15px;">Home</button>'+
	 ' <a type="button" class="btn btn-info btn-md" href="#" onclick="addScore();TorF();page4()" style="margin-left:70px; margin-bottom:15px;">Next</a>'+
		'</div>';

		
}

function page4(){
	var x = document.getElementById("section");
	x.innerHTML = '<div>'+
  '<h1 class="text-primary" style="font-family:verdana"><b>Extensive Test</b></h1>'+
  '<h4 class="text-warning" style="font-family:verdana"><b>Section Four</b></h4>'+
'</div>'+

 '<div class="container-fluid">'+
 	'<div align="center" class="container"> '+
	'	<div class="progress" style="width:300px" >'+
		'	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%">'+
		'	 75%</div>'+
		'</div>'+
	'</div> '+
		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+

		'<div id="section1" class="row">'+
		'	<div><strong>section one</strong></div>'+
		'	<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(-3)">'+
							'<i class="fa fa-thumbs-down fa-3x"></i></button>'+
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>          '+
							'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2"></i></button>'+
							'<div>'+
							'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5>   '+       
							'</div>'+
			'</div>'+
		'</div>'+
					  '<button type="button" class="btn btn-info btn-md" onclick= parent.location="index.html" style="margin-bottom:15px;">Home</button>'+
	 ' <button type="button" class="btn btn-info btn-md" onclick="addScore();JorP()" style="margin-left:70px; margin-bottom:15px;">Next</button>'+
		'</div>';

		
}