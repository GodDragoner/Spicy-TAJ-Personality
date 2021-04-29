const chastityCombinationImagesFolder = getImageSubFolder('Chastity' + PATH_SEPARATOR + 'ChastityCombination');
const chastityCombinationImagesBackupFolder = getImageSubFolder('Chastity' + PATH_SEPARATOR + 'ChastityCombinationBackup');

function lockAwayChastityKey() {
    if(getVar(VARIABLE.CHASTITY_HAS_COMBINATION_LOCK, false) && !getVar(VARIABLE.CHASTITY_KEY_LOCKED_COMBINATION, false)) {
        sendVirtualAssistantMessage('Go ahead and fetch your combination lock and some casket you can lock with it %Grin%');
        sendVirtualAssistantMessage('Tell me when you are ready');
        waitForDoneVirtualAssistant();
        sendVirtualAssistantMessage("%Good%");

        sendVirtualAssistantMessage('Now go ahead and put the keys for the %ChastityCage% inside the casket');
        sendVirtualAssistantMessage('Next you will go ahead and set a new code for your combination lock at random. You will not look at it');
        sendVirtualAssistantMessage('Instead you will take your phone or a camera and you will take a picture of the new combination');
        sendVirtualAssistantMessage('Don\'t you dare look at the combination in any way');
        sendVirtualAssistantMessage('After that I want you to lock the casket with the combination lock and randomize the selected combination so you won\'t be able to unlock it anymore');
        sendVirtualAssistantMessage('Then you will take the picture and place it inside the "Images/Spicy/Chastity/ChastityCombination" folder and make sure there is only one file inside that folder');

        let port = 8080;
        let path = 'Images' + PATH_SEPARATOR + 'Spicy' + PATH_SEPARATOR + 'Chastity' + PATH_SEPARATOR + 'ChastityCombination' + PATH_SEPARATOR;
        let server = createHTTPServer(port, path);

        sendVirtualAssistantMessage('You can alternatively open the following page on your mobile device ' + java.net.InetAddress.getLocalHost().getHostAddress() + ':' + port + '/uploadCh.html');

        sendVirtualAssistantMessage('Tell me when you have done all of that');
        waitForDoneVirtualAssistant();

        server.stop(0);

        chastityCombinationImagesFolder.mkdirs();
        let filesArray = chastityCombinationImagesFolder.listFiles();

        while(filesArray.length !== 1) {
            server = createHTTPServer(port, path);

            sendVirtualAssistantMessage('Something does not seem right with the folder');
            sendVirtualAssistantMessage('Make sure there is only that one image inside the folder and nothing else %SlaveName%');
            sendVirtualAssistantMessage('Tell me when you\'ve checked');
            waitForDoneVirtualAssistant();
            sendVirtualAssistantMessage('Let\'s see again...');

            filesArray = chastityCombinationImagesFolder.listFiles();
            server.stop(0);
        }

        sendVirtualAssistantMessage('%Good%');
        sendVirtualAssistantMessage('Now you will delete the picture from your phone so the only person who knows the combination to your freedom is me %Grin%');

        let combinationFile = chastityCombinationImagesFolder.listFiles()[0];

        chastityCombinationImagesBackupFolder.mkdirs();
        copyFolder(chastityCombinationImagesFolder, chastityCombinationImagesBackupFolder, false);

        combinationFile.renameTo(new java.io.File(chastityCombinationImagesFolder.getPath() + PATH_SEPARATOR + 'chastityCombination.lock'));

        setVar(VARIABLE.CHASTITY_KEY_LOCKED_COMBINATION, true);

        sendVirtualAssistantMessage('You can request me to tell you the chastity combination in the main menu');
    }
}

function getChastityCombinationFile() {
    return chastityCombinationImagesFolder.listFiles()[0];
}

function unlockChastityKey() {
    if(getVar(VARIABLE.CHASTITY_KEY_LOCKED_COMBINATION, false)) {
        sendMessageBasedOnSender('%SlaveName%...');
        sendMessageBasedOnSender('Fetch the casket with your chastity key');
        lockImages();
        sendMessageBasedOnSender('This is your combination %SlaveName%', 0);
        showImage(getChastityCombinationFile(), 5);
        sendMessageBasedOnSender('Get your keys out of the box and tell me when you are ready to continue', 0);
        waitForDone(100000);
        setVar(VARIABLE.CHASTITY_KEY_LOCKED_COMBINATION, false);
        sendMessageBasedOnSender('%Good%');
        getChastityCombinationFile().delete();
        unlockImages();
    } else {
        sendMessageBasedOnSender('Fetch your keys for your %ChastityCage% %SlaveName%');
    }
}