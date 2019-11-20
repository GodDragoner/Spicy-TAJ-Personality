function introduceLineWriting(line, times, tries, first = false) {
    if(!first) {
        sendMessage('%SlaveName%, next you\'re going to write the following line ' + times + ' times');
    } else {
        sendMessage('%SlaveName%, you\'re going to write the following line ' + times + ' times');
    }

    sendMessage('"' + line + '"');

    sendMessage ("And be careful " + random("get it wrong ","fuck it up ", "screw it up ", "make a mistake ") + tries + " times and you'll fail");
    sendMessage('You get ' + tries + ' tries and have to write it ' + times + ' times');
    return startLineWriting(line, times, tries);
}

function startLineWriting(line, times, tries) {
    line = replaceVocab(line);


    let success = false;

    for(let x = 0; x < times; x++) {
        let answer = createInput();

        if(answer.getAnswer() === line) {
            success = true;
            sendMessage((times - x - 1) + ' left!');
        } else {
            tries--;

            if(tries > 0) {
                sendMessage('Nope.. That\'s not correct %EmoteSad%');
                sendMessage('You have ' + tries + ' tries left right now');
            } else {
                success = false;
                break;
            }
        }
    }

    if(success) {
        sendMessage('%Good%');
        return true;
    } else {
        sendMessage('You failed %EmoteSad%');
        return false;
    }
}