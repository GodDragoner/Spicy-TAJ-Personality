const YES_OR_NO = "Yes or no?";
const TAJ_CHAT_HANDLER = Java.type('me.goddragon.teaseai.api.chat.ChatHandler');
const LOGGER = Java.type('me.goddragon.teaseai.utils.TeaseLogger');
const LOGGER_LEVEL = Java.type('java.util.logging.Level');
const ANSWER_CLASS = Java.type('me.goddragon.teaseai.api.chat.Answer');

const DEBUG_MODE = 1;
const RAPID_TESTING = isVar("rapidTesting");
const DEBUG_OPTIONS = isVar("debugOptions");


const SENDER_TAJ = 1;
const SENDER_ASSISTANT = 0;

const ANSWER_YES = 0;
const ANSWER_NO = 1;
const ANSWER_TIMEOUT = 2;

let CURRENT_SENDER = SENDER_TAJ;

if (RAPID_TESTING) {
    TAJ_CHAT_HANDLER.getHandler().setPerMessageCharacterPauseMillis(0);
    TAJ_CHAT_HANDLER.getHandler().setPausePerMessageCharacter(false);
}

function sendDebugMessage(message) {
    switch (DEBUG_MODE) {
        //Chat and log mode
        case 0:
            sendDebugMessageToChat(message, false, true);
            break;
        //Log mode only
        case 1:
            LOGGER.getLogger().log(LOGGER_LEVEL.INFO, message);
            break;
        //No debug at all
        default:
            break;
    }
}

function getCurrentTAJSenderID() {
    return TAJ_CHAT_HANDLER.getHandler().getSelectedSender().getId();
}

function getCurrentSender() {
    return CURRENT_SENDER;
}

function setCurrentSender(sender) {
    CURRENT_SENDER = sender;
}

function sendMessageBasedOnSender(message, secondsToWait = undefined, skipImage = false) {
    if (getCurrentSender() === SENDER_TAJ) {
        if (skipImage) {
            lockImages();
        }

        if (secondsToWait === undefined || typeof secondsToWait !== "number") {
            sendMessage(message);
        } else {
            sendMessage(message, secondsToWait);
        }

        if (skipImage) {
            unlockImages();
        }
    } else if (getCurrentSender() == SENDER_ASSISTANT) {
        sendVirtualAssistantMessage(message, secondsToWait, skipImage);
    } else {
        sendVirtualAssistantMessage('Error: Sender id ' + getCurrentSender() + ' is unknown');
    }
}

function sendDebugMessageToChat(message) {
    let textName = new javafx.scene.text.Text("[Debug]: ");
    textName.setFill(javafx.scene.paint.Color.POWDERBLUE);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.POWDERBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    //test below to see if tts is supported and sendmessage can be swapped for sendcustom message
    sendCustomMessage(textName, text);
}

function sendPinnoteMessage(message, wait, skipImage) {
    let textName = new javafx.scene.text.Text(replaceVocab("[%DomHonorific% %DomName%]: "));
    textName.setFill(javafx.scene.paint.Color.INDIANRED);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.GRAY);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.LIGHT, 13));

//test below to see if tts is supported and sendmessage can be swapped for sendcustom message
    sendCustomMessage(textName, text);

    //Show image
    if (skipImage === undefined || skipImage instanceof Boolean && !skipImage) {
        if (!isImagesLocked()) {
            showAssistantImage();
        }
    }

    if (wait === undefined || typeof wait !== "number") {
        sleep(1000 + message.length * 50, "MILLISECONDS");
    } else {
        sleep(wait * 1000, "MILLISECONDS");
    }
}

function sendVirtualAssistantMessage(message, wait, skipImage) {
    let textName = new javafx.scene.text.Text("[Vivienne]: ");
    textName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, TeaseAI.application.CHAT_TEXT_SIZE.getDouble() + 1));

    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.ROYALBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, TeaseAI.application.CHAT_TEXT_SIZE.getDouble()));

//test below to see if tts is supported and sendmessage can be swapped for sendcustom message
    sendCustomMessage(textName, text);

    //Show image
    if (skipImage === undefined || skipImage instanceof Boolean && !skipImage) {
        if (!isImagesLocked()) {
            showAssistantImage();
        }
    }

    if (!RAPID_TESTING) {
        if (wait === undefined) {
            sleep(1000 + message.length * 50, "MILLISECONDS");
        } else if (typeof wait !== "number") {
            return;
        } else {
            sleep(wait * 1000, "MILLISECONDS");
        }
    }
}

function sendSystemMessage(message) {
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, TeaseAI.application.CHAT_TEXT_SIZE.getDouble()));

    sendCustomMessage(text);
}


function addContact(id) {
    let contactName = "";

    if (id > 1) {
        contactName = '%domFriend' + (id - 1) + 'Name%';
    } else {
        contactName = '%DomName%';
    }

    let textName = new javafx.scene.text.Text(replaceVocab(contactName));
    textName.setFill(TAJ_CHAT_HANDLER.getHandler().getParticipantById(id).getNameColor());
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));


    let text = new javafx.scene.text.Text(' joined the chat');
    text.setFill(javafx.scene.paint.Color.AQUA);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    sendCustomMessage(textName, text);
}

function removeContact(id) {
    let contactName = "";

    if (id > 1) {
        contactName = '%domFriend' + (id - 1) + 'Name%';
    } else {
        contactName = '%DomName%';
    }

    let textName = new javafx.scene.text.Text(replaceVocab(contactName));
    textName.setFill(TAJ_CHAT_HANDLER.getHandler().getParticipantById(id).getNameColor());
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    let text = new javafx.scene.text.Text(' left the chat');
    text.setFill(javafx.scene.paint.Color.AQUA);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    sendCustomMessage(textName, text);
}

function createDoubleInput(question, min, max, notNumberMessage, outOfRangeMessage) {
    sendMessageBasedOnSender(question, 0);
    let answer = createInput();

    while (true) {
        if (answer.isDouble()) {
            if (min === undefined && max === undefined) {
                return answer.getDouble();
            } else {
                let double = answer.getDouble();
                if ((min == undefined || double >= min) && (max == undefined || double <= max)) {
                    return double;
                }

                sendMessageBasedOnSender(outOfRangeMessage, 0);
                answer.loop();
            }
        } else {
            sendMessageBasedOnSender(notNumberMessage, 0);
            answer.loop();
        }
    }
}

function createIntegerInput(question, min, max, notNumberMessage, outOfRangeMessage) {
    sendMessageBasedOnSender(question, 0);
    let answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            if (min === undefined && max === undefined) {
                return answer.getInt();
            } else {
                let int = answer.getInt();
                if ((min == undefined || int >= min) && (max == undefined || int <= max)) {
                    return int;
                }

                sendMessageBasedOnSender(outOfRangeMessage, 0);
                answer.loop();
            }
        } else {
            sendMessageBasedOnSender(notNumberMessage, 0);
            answer.loop();
        }
    }
}

function sendGoodForMe() {
    let finalSentence = [
        'I am all that matters anyway',
        'Pleasing me is most important anyway',
        'You aren\'t of any importance anyway',
        'But I don\'t think your opinion matters here',
        'But you don\'t get a say anyway',
        'You have no say in it anyway',
        'I am all that matters anyway',
        'I should be all that matters anyway',
        'I should be all that matters to you anyway'
    ];

    sendMessage('%Good%');
    if (isChance(50)) {
        sendMessage(random('Well at least good for me', 'Good for me at least', 'Maybe not that good for you but it makes me happy', 'Maybe not that good for you but for me at least', 'Not that good for you but for me at least')
            + ' ' + random('%Grin%', '%Lol%'));

        finalSentence.push('And that\'s all that counts', 'And that\'s all that matters');
    } else {
        sendMessage('Only good for me to be precise %Grin%');
        sendMessage(random('Probably not so good for you though', 'Maybe not that good for you', 'Could be not that good for you though', 'Could be bad for you though',
            'On the other hand it might be bad for you though') + ' %Lol%');

        finalSentence.push('There is nothing better than something being good for me and bad for you', 'Nothing better than it being good for me and bad for you', 'It being good for me and being bad for you is the deal anyway isn\'t it?');
    }

    sendMessage(finalSentence[randomInteger(0, finalSentence.length - 1)] + '  %EmoteHappy%');
}

function sendAlreadyKnowWhatsNext(triggerwords) {
    sendMessageBasedOnSender("You already know " + random("what I am gonna make you do now", "what I am gonna to do you now", "what comes next", "what you are gonna do next", "what I want you to do next", "what is gonna happen now", "what we are gonna do to you now", "what we are gonna do now") + random('', ', don\'t you? %EmoteHappy%'), 0);

    let answer = createInput(4);

    while (true) {
        if (answer.isTimeout()) {
            return ANSWER_TIMEOUT;
        } else if (answer.isLike('yes')) {
            sendMessageBasedOnSender('We\'ll see if you are right %Grin%');
            return ANSWER_YES;
        } else if (answer.isLike('no')) {
            sendMessageBasedOnSender('Well you are gonna know pretty soon %Lol%');
            return ANSWER_NO;
        } else {
            for (let x = 0; x < arguments.length; x++) {
                if (answer.isLike(arguments[x])) {
                    sendMessage('You must know me pretty well %SlaveName% %EmoteHappy%');
                    return ANSWER_YES;
                }
            }

            sendMessageBasedOnSender('No %SlaveName% %Grin%');
            return ANSWER_NO;
        }
    }
}

function sendMakeMeProud() {
    sendMessageBasedOnSender(random('I hope you make me proud', 'Try your best to make me proud', 'Try your best to impress me', 'I hope you try your best', 'I wanna see you at your best', 'Make sure to try your best', 'You better try to impress me', 'I hope you are trying your best to impress me'));
}



function sendYesOrNoQuestion(question, sender = null) {
    let previousSender = getCurrentSender();

    if (sender !== null) {
        setCurrentSender(sender);
    }

    if (getCurrentSender() === SENDER_ASSISTANT) {
        sendVirtualAssistantMessage(question, 0);
        return createYesOrNoQuestion();
    }

    let answer = sendInput(question);

    while (true) {
        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    //Restore sender
    if (sender !== null) {
        setCurrentSender(previousSender);
    }
}


function sendYesOrNoQuestionTimeout(question, timeout) {
    let answer = sendInput(question, timeout);

    while (true) {
        if (answer.isTimeout()) {
            return ANSWER_TIMEOUT;
        } else if (answer.isLike('yes')) {
            return ANSWER_YES;
        } else if (answer.isLike('no')) {
            return ANSWER_NO;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }
}

function createYesOrNoQuestion() {
    let answer = createInput();

    while (true) {
        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessageBasedOnSender(YES_OR_NO, 0);
            answer.loop();
        }
    }
}

function sendArbMessage(textName, message, wait, imagePath) {
    let sendName = new javafx.scene.text.Text(textName);
    sendName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    sendName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));


    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.ROYALBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(sendName, text);

    /*Show image
    if(ImagePath !== undefined) {
       showImage(ImagePath);
    }*/

    if (!RAPID_TESTING) {
        if (wait === undefined) {
            sleep(1000 + message.length * 50, "MILLISECONDS");
        } else if (typeof wait !== "number") {
            return;
        } else {
            sleep(wait * 1000, "MILLISECONDS");
        }
    }
}

/*creating a function to invoke special characters/imagesets
by calling below with a different person number, you get a different sender prefix and image displayed automatically
0 no image
1 receptionchat (punishment)
2 ReceptionbusyPC (punishment)
3 Receptionbusyphone (punishment)
4 dirty
*/

function sendDungeonMessage(message, person = 0, wait) {
    let textName = new javafx.scene.text.Text("[Miss A]: ");
    textName.setFill(javafx.scene.paint.Color.RED);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    let setId = Math.min(5, (ASSISTANT_CURRENT_SET_ID % 5 + 1));

    //Show image
    switch (person) {
        case 0:
            showImage("Images/Spicy/Punishment/Reception/Chat/" + setId + "/*.{jpg,JPG}");
            break;
        case 1:
            showImage("Images/Spicy/Punishment/Reception/Chat/" + setId + "/*.{jpg,JPG}");
            break;
        case 2:
            showImage("Images/Spicy/Punishment/Reception/BusyPC/" + setId + "/*.{jpg,JPG}");
            break;
        case 3:
            showImage("Images/Spicy/Punishment/Reception/BusyPhone/" + setId + "/*.{jpg,JPG}");
            break;
        case 4:
            showImage("Images/Spicy/Punishment/Reception/Dirty/" + setId + "/*.{jpg,JPG}");
            break;
        default:
            showImage("Images/Spicy/Punishment/Reception/Chat/" + setId + "/*.{jpg,JPG}");
            break;
    }


    if (!RAPID_TESTING) {
        if (wait === undefined || wait) {
            sleep(.5 + message.length * .03);
        }
    }
}

function sendNurseMessage(message, picset, wait, skipImage) {
    let textName = new javafx.scene.text.Text("[Nurse]: ");
    textName.setFill(javafx.scene.paint.Color.PINK);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.PINK);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    //Show image
    if (skipImage === undefined || !skipImage) {
        showImage("Images/Spicy/Punishment/Nurses/" + (ASSISTANT_CURRENT_SET_ID % 10 + 1) + "/*.jpg");
    }

    if (!RAPID_TESTING) {
        if (wait === undefined || wait) {
            sleep(1000 + message.length * 50, "MILLISECONDS");
        }
    }
}

function createAnswerInput(listOfOptions) {
    let answerObject = new ANSWER_CLASS();


    for(let x = 0; x < listOfOptions.length; x++) {
        answerObject.addOption(listOfOptions[x]);
    }

    TAJ_CHAT_HANDLER.getHandler().setCurrentCallback(answerObject);
    answerObject.setTimeout(false);

    answerObject.setAnswer(null);

    answerObject.setStartedAt(new Date().getTime());
    TeaseAI.application.waitPossibleScripThread(answerObject.getMillisTimeout());
    answerObject.checkTimeout();
    return answerObject;
}