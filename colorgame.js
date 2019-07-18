var numSquares = 6;
var colors = generateRandomcolors(6);
var squares= document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY"? numSquares = 3: numSquares = 6;
		reset();
	})
}

function reset (){

	colors = generateRandomcolors(numSquares);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	messageDisplay.textContent = "";
	resetButton.textContent = "NEW COLORS!";

	for(var i = 0; i< squares.length; i++){
		if (colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor =colors[i];	
		}
		else {
		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

}


resetButton.addEventListener("click", function(){
	reset();
})

colordisplay.textContent = pickedcolor;
for(var i = 0 ; i < squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.backgroundColor;
		if (clickedcolor === pickedcolor) {
			messageDisplay.textContent = "CORRECT";
			resetButton.textContent = "PLAY AGAIN?";
			changeColors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN !!!";
		}
	});
}

function changeColors(color){
	for (var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var randoms = Math.floor ( Math.random() * colors.length );
	return colors[randoms]; 
}

function generateRandomcolors(num){
	var arr = []
	for( var i= 0; i< num; i++){
		arr.push(randomColors());
	}
	return arr
}

function randomColors() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}