function ohfuck(amount)
{
	console.log(typeof(document.getElementById("ohfuck").style.fontSize));
	currentSize = parseFloat(document.getElementById("ohfuck").style.fontSize);
	console.log(currentSize);
	currentSize += 5;
	for(i = 0; i < amount; i++){
		document.getElementById("ohfuck").innerHTML += " oh fuck";
	}
	document.getElementById("ohfuck").style.fontSize = currentSize + "px";
}

function playMusic(){
	var audio = new Audio('Music/anthem.mp3');
	audio.play();
	document.body.style.backgroundImage = "url('Images/flag.jfif')";
	document.getElementById("flag");
}
