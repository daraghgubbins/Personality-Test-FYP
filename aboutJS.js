function SW(){
	var x = document.getElementById("content-display");
	x.innerHTML="<div class='center-block'><h4>Strenghts</h4><p><strong>Tolerant</strong>- ENFJ's are true team players, they listen to others " +
	" opinions even when they contradict their own.</p> <p><strong>Reliable</strong>- ENFJ's never like to let people down and they can always " +
	"be counted on to see things through.</p><p><strong>Charismatic</strong>- Charm and popularity are qualities ENFJs have in abundance " +
	"ENFJs are able to shift their tone and manner to reflect the needs of the audience.</p>" +
	"<h4>Weaknesses</h4><p><strong>Too Sensitive</strong>- It is easy for ENFJ's to take criticism to heart. They may sometimes " +
	" feel problems that are no their own.</p> <p><strong>Struggle to Make Tough Decisions</strong>- They may struggle to make hard decisions " +
	"especially when these decisions may affect others.</p></div>";
}
function CP(){
	var x = document.getElementById("content-display");
	x.innerHTML="<div class='center-block'><h4>Career Path</h4><p></p></div>";
}

var newsrc = "ESFJ-pic2.jpg";

function changeImage() {
  if ( newsrc == "ESFJ-pic2.jpg" ) {
    document.images["pic"].src = "celebpics/ESFJ-pic2.jpg";
    document.images["pic"].alt = "pic2";
    newsrc  = "ENFJ-pic.jpg";
  }
  else {
    document.images["pic"].src = "celebpics/ENFJ-pic.jpg";
    document.images["pic"].alt = "ENFJ-pic";
    newsrc  = "ESFJ-pic2.jpg";
  }
}