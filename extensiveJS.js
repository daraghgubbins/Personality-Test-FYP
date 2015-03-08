var section1=0;
var section2=0;
var section3=0;
var total = 0;
var finalScore = []
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

function addScore(){
finalScore.push(section1,section2,section3);
alert(finalScore);
$.each(finalScore,function() {
    total += this;
});
alert(total);
}

function EorI(){
		if (total > 0){
		result.push("E");
	}
		else if (total < 0){
		result.push("I");
	}
	alert(result);
	total = 0;
	finalScore=[];
}

function SorN(){
		if (total > 0){
		result.push("S");
	}
		else if (total < 0){
		result.push("N");
	}
	alert(result);
	total = 0;
	finalScore=[];
}

function TorF(){
		if (total > 0){
		result.push("T");
	}
		else if (total < 0){
		result.push("F");
	}
	alert(result);
	total = 0;
	finalScore=[];
}

function JorP(){
		if (total > 0){
		result.push("J");
	}
		else if (total < 0){
		result.push("P");
	}
	alert(result);
	total = 0;
	finalScore=[];
}

function Section2(){
	var x = document.getElementById("Section");
	x.innerHTML = 	'<div align="center" class="container">'+ 
						'<div class="progress" style="width:300px" >'+
							'<div class="progress-bar progress-bar-striped active" role="progressbar"' +
							'aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:25%"> 25% </div>'+
					'</div>'+
		'<div id="section1" class="row">' +
			'<div><strong>section one</strong></div>' +
			'<div class="col-sm-6 col-xs-6">' +
							'<button class="btn" onclick="Store1(-3)">' +
							'<i class="fa fa-thumbs-down fa-3x"></i></button>' +
							'<button class="btn" onclick="Store1(-2)">'+
							'<i class="fa fa-thumbs-down fa-2x" id="q2" value="-2"></i></button>'+
							'<button class="btn" onclick="Store1(-1)">'+
							'<i class="fa fa-thumbs-down fa-lg" id="q2" value="-2"></i></button>'+
									'<div>'+
										'<h5 class="text-primary" style="font-family:verdana"><b>Disagree</b></h5>'   +
									'</div>'+
			'</div> '+
			
			'<div class="col-sm-6 col-xs-6">'+
							'<button class="btn" onclick="Store1(1)">'+
							'<i class="fa fa-thumbs-up fa-lg"></i></button>'+
							'<button class="btn" onclick="Store1(2)">'+
							'<i class="fa fa-thumbs-up fa-2x" id="q2" value="-2"></i></button>'+
							'<button class="btn" onclick="Store1(3)">'+
							'<i class="fa fa-thumbs-up fa-3x" id="q2" value="-2"></i></button>'+
								'<div>'+
									'	<h5 class="text-primary" style="font-family:verdana"><b>Agree</b></h5> '   +      
								'</div>'+
			'</div>'+
		'</div>';
	}