//run("Session/StartSession.js");
{
    if(test() && test2()) {
        sendDebugMessage('Test3');
    }
}

function test() {
    sendDebugMessage('Test');
    return true;
}

function test2() {
    sendDebugMessage('Test2');
    return true;
}

//unlockChastityCage();