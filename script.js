function show(){
	console.log("Show funct. is working.")
	document.getElementById("q1").style.display="block";
	document.getElementById("startbutton").style.display="none";
	document.getElementById("submitbutton").style.display="block";
	document.getElementById("result").style.display="block";
}

function submit()
{
	console.log("Submit funct. is working.")
	if(document.getElementById("viruses").checked==true)
	document.getElementById('result').innerHTML="Your answer is correct."
	else
	document.getElementById('result').innerHTML="Your answer is incorrect."	
}