// Any valid JavaScript code is a valid TypeScript code
function startGame() {
	// starting a new game
	var messagesElement = document.getElementById('messages');
	messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

document.getElementById('startGame')!.addEventListener('click', startGame);