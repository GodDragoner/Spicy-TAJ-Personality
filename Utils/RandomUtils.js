/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function randomInteger(min, max) {
    if(min >= max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWinnerIndex(array) {
    let maxChance = 0;
    for(let index = 0; index < array.length; index++) {
        maxChance += array[index];
    }

    const randomInt = randomInteger(0, maxChance);

    let currentChance = 0;

    for(let index = 0; index < array.length; index++) {
        currentChance += array[index];

        if(randomInt < currentChance) {
            return index;
        }
    }

    return -1;
}

/**
 * Shuffles array in place.
 * @param {Array} a items an array containing the items.
 */
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function findRandomUnusedIndex(indexMax, history, minElementsSinceLastRun = indexMax/2) {
    let indexesToTry = new java.util.ArrayList();

    for(let x = 0; x <= indexMax; x++) {
        indexesToTry.add(x);
    }

    let randomIndex = null;

    //At least a bit of diversity
    while(randomIndex == null || (history.isInHistory(randomIndex) && history.getModulesSinceHistory(randomIndex) < minElementsSinceLastRun)) {
        //We tried all possibilities
        if(indexesToTry.isEmpty()) {
            break;
        }

        randomIndex = randomInteger(0, indexesToTry.size() - 1);

        //Remove from array so we won't get it again
        indexesToTry.remove(randomIndex);
    }

    history.addHistoryRun(randomIndex);

    return randomIndex;
}

function isChance(percentage) {
    return randomInteger(1, 100) <= percentage;
}

function random() {
    return arguments[randomInteger(0, arguments.length - 1)];
}

function waitForDone() {
	answer = createInput("done");
		while(true){
		if(answer.containsIgnoreCase("ready","ok","yes","done","go","on")) {

			break;
			}
		
			else
				wait(1);
				answer.loop();
		}
	
	answer.clearOptions();
	return;
	
}


function waitForReady() {
	answer = createInput("Ready");
		while(true){
		if(answer.containsIgnoreCase("ready","ok","yes","done","go")) {

			break;
			}
		
			else
				answer.loop();
		}
	
	answer.clearOptions();
	return;
	
}


function waitForDone2(delay) {
	response = createInput(delay+randomInteger(1,3),"done");
	while(true){
		if(response.containsIgnoreCase("ready","ok","yes","done","finshed")) {
			sendVirtualAssistantMessage(" %GNMGood% !");
				response.clearOptions();
			break;
			}
		 if (response.isTimeout()){
			 sendVirtualAssistantMessage(random(" I'm Waiting %Slave%!","Hurry up bitch","C'mon %slut% lets go!","%domHonorific% %Domname% expects you to be faster than that")); 
				response.loop();
				 }
			else
					 sendVirtualAssistantMessage(" silly %Slave%, what the fuck does mean..  are you ready?"); 
				response.loop();
		}
}