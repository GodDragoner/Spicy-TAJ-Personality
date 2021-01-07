//TODO: Enema tasks (idea: Enema -> plug it for x duration, do sports, go for a walk etc.)

const ENEMA_TOY = createToy('enema kit');

function getEnemaLevel() {
    if(getVar(VARIABLE.ASS_LEVEL) >= 25) {
        return 5;
    } else if(getVar(VARIABLE.ASS_LEVEL) >= 20) {
        return 4;
    } else if(getVar(VARIABLE.ASS_LEVEL) >= 15) {
        return 3;
    } else if(getVar(VARIABLE.ASS_LEVEL) >= 10) {
        return 2;
    } else if(getVar(VARIABLE.ASS_LEVEL) >= 5) {
        return 1;
    } else {
        return 0;
    }
}

function hasEnemaKit() {
    return ENEMA_TOY.hasToy();
}

function getTodaysEnema() {
    if(isVar(VARIABLE.ENEMA_TASK_SET) && getDate(VARIABLE.ENEMA_TASK_SET).sameDay(setDate())) {
        return tryGetArrayList(VARIABLE.ENEMA_TASK_TODAY);
    }

    let lines = new java.util.ArrayList();
    lines.add('Good Morning %SlaveName%');
    lines.add(random('Don\'t forget', 'Do', 'Remember') + ' your ' + getEnemaLitreAmount() + ' litre enema if you haven\'t done one in the last 2 - 3 days');

    let holdDuration = 0;

    //Hold
    if(isChance(50)) {
        holdDuration = randomInteger(1 + Math.floor(getVar(VARIABLE.ASS_LEVEL)/5), getVar(VARIABLE.ASS_LEVEL));
    }

    let noCleanup = false;

    //Generate new one because either we haven't set one or it expired
    if(feelsLikePunishingSlave()) {
        lines.add(random('I think you deserve a punishment', 'I think there is a punishment in line', 'I feel the need to punish you', 'I feel the urge to punish you', 'I feel like punishing you') + ' so... %Grin%');
        let startSentence = random('You are gonna use', 'I decided to make you use','I want you to use','I think you should use', 'You will use', 'You are gonna use');
        let choice = randomInteger(0, 100);

        if(choice <= 10 && PEE_LIMIT.isAllowed()) {
            //Pee
            lines.add(startSentence + ' your own piss as the fluid this time');
            lines.add('Use warm water to fill up the rest to compensate any missing ounce');

            noCleanup = isChance(30);
        } else if(choice <= 25) {
            //Milk
            lines.add(startSentence + ' milk as the fluid this time');

            noCleanup = isChance(30);
        } else if(choice <= 45) {
            //Warm
            lines.add(startSentence + ' very hot water as the fluid this time');
            lines.add('Make sure to stay safe and not burn yourself however it should still be uncomfortable');
        } else {
            //Cold
            lines.add(startSentence + ' ice cold water as the fluid this time');
        }

        if(noCleanup) {
            lines.add('%InAddition% you are not allowed to wash or clean your ass afterwards');
        }
    }

    if(holdDuration > 0) {
        lines.add('Hold the enema for ' + holdDuration + ' minutes before releasing it');
    }

    if(isChance(25)) {
        if(ASM_LIMIT.isAllowed()) {
            //QUALITY: More lines
            lines.add('Do it properly because it\'s not gonna taste better for you if you don\'t %Lol%');
        } else {
            //QUALITY: Plan next session ahead
            lines.add('Make sure you are clean next time I see you %Grin%');
        }
    }

    lines.add(random('Enjoy', 'Have fun') + ' %Grin%');

    setVar(VARIABLE.ENEMA_TASK_TODAY, lines);
    setDate(VARIABLE.ENEMA_TASK_SET);
    return lines;
}

function getEnemaLitreAmount() {
    let enemaLevel = getEnemaLevel();

    switch(enemaLevel) {
        case 5:
            return 3;
        case 4:
            return 2.5;
        case 3:
            return 2;
        case 2:
            return 1.5;
        case 1:
            return 1;
        default:
            return 0.5;
    }
}

function runEnemaIntro() {
    setVar(VARIABLE.ENEMA_INTRO, true);

    sendMessage('I\'ve been thinking %SlaveName%');
    sendMessage('We can\'t have your ass dirty like this all the time');

    sendMessage("Your ass has to be clean for our toys and all the things I want to put it through %EmoteHappy%");

    if(getASMLimit() == LIMIT_ASKED_YES) {
        sendMessage("Additionally as you know you have to lick them clean at the end %Grin%");
        sendMessage('So you should definitely want it to be clean too');
    }

    sendMessage('So %domfriend1name% came up with an idea');
    sendMessage('She suggested to schedule regular enemas for you since you can\'t seem to think of them on your own');
    sendMessage("Now that you own an enema kit");
    sendMessage('I think you should put it to good use for us %Grin%');

    sendMessage('So here is what I want you to do from now');
    sendMessage("You will do at least one enema every 2 - 3 days");
    sendMessage('Anything on top is up to you');
    sendMessage('...for now %Grin%');
    sendMessage("I will leave you enema instructions daily at your pinboard");
    sendMessage("Make sure to do them regularly");
    sendMessage("Otherwise you will have to face consequence %SlaveName% %EmoteHappy%");

    if(sendYesOrNoQuestion('Is that understood?')) {
        sendGoodForMe();
    } else {
        sendMessage('Sigh...');
        sendMessage('I want your %Ass% to be clean %SlaveName%');
        sendMessage('I won\'t be pleased it if it\'s not');
        sendMessage('And I will leave you notes on how to clean it properly each and every day at your pinboard');
        sendMessage('So make sure to clean my ass properly every 2 - 3 days');
        sendMessage('I hope this is crystal clear now');
        sendMessage('Do not disappoint me! %EmoteHappy%');
    }
}