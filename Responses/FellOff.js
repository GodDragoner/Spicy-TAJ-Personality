addResponseRegex("fell off", "fell([ ]|$)", "felloff",);

function fellOffResponse(message) {
    if(getVar("S4Round")>0) {   ///use this to qualify that your in the intended punishment routine that needs a asynchronous response
	sendMessage("Well well we're starting over I guess... ",2); //#DT4
	sendMessage("Taking a little gold and setting you back to round 1 ",2); //#DT4
	setVar(VARIABLE_GOLD,getVar(VARIABLE_GOLD)-10);
	setVar("S4Round",0);
	}

	
	
    return false;
}