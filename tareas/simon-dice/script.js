let machineSeq = [];
let playerSeq = [];
let turn = 0;
const squareColors = ['red','blue','green','yellow'];

function startGame(){
	let machinePick = squareColors[Math.floor(Math.random() * 4)];
	let $squarePicked = document.getElementsByClassName(machinePick)[0];
	machineSeq.push(machinePick);

	for (let i=0; i < machineSeq.length; i++){
		const delay_ms = (i + 1) * 1000;
		setTimeout(function(){
			highlightPick(machineSeq[i]);
		}, delay_ms);
	};

	turn += 1;
}

const $startButton = document.querySelector('#startButton');
$startButton.onclick = function(){
	startGame();
}

function highlightPick($pick){
	let $squarePicked = document.getElementsByClassName($pick)[0];
	$squarePicked.style.opacity = 1;
	setTimeout(function(){
		$squarePicked.style.opacity = 0.5;
	}, 500);

}