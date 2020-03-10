addResponseRegex("injectcodedebug");

function injectCodeResponse(message) {
    //Used to inject code during run time because when running a file it is read from disk again
    sendDebugMessage('Injecting code...');
    run('Utils/InjectCode.js');
    return true;
}