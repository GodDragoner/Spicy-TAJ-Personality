const ASM_LIMIT = createLimit('ass to mouth', 'assToMouthLimit');
ASM_LIMIT.sendIntroduction = function (type) {
    sendMessage('I would very much love to force you to interact with toys that just came from your ass using your mouth');
    sendMessage('I think this is a great way to humiliate and punish you');
    sendMessage('And...');
    sendMessage('It would please me very much if we could try this and if you even enjoyed it yourself');
    sendMessage('And you want to please me, don\'t you? %Grin%');
    sendMessage('Mind this has nothing to do with you eating your shit or anything similar');
    sendMessage('That might be a topic for a different time %Grin%');
    sendMessage('For now I am just asking you to take toys that were up your ass into your mouth');

    if (!CUCKOLD_LIMIT.isAllowed()) {
        sendMessage('Or at future time real cocks %Lol%');
    }

    askForNewLimitValue(this);
};
ASM_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Anything also includes tasting your ass for me');
    sendMessage('Going ass to mouth and licking those toys clean after usage');
};

let ASM_CLEAN_TYPE_GAG = 0;
let ASM_CLEAN_TYPE_BLOW = 1;
let ASM_CLEAN_TYPE_LICK = 2;

function doButtplugASMClean(cleanType, toy = 'plug') {
    sendAlreadyKnowWhatsNext('clean', 'lick', 'asm', 'mouth');

    sendMessage('I want you to suck that ' + toy + ' clean %Grin%');

    let toldStayGagged = false;
    let restoreGag = false;

    //Check clothespins on tongue
    if(BODY_PART_TONGUE.currentClamps > 0) {
        if(BODY_PART_TONGUE.getLastClampInteraction().addMinute(getMinPlayTimeBeforeToySwap()).hasPassed() || isChance(50)) {
            sendMessage('But I think you should keep that pin on your tongue so...');
            sendMessage('I\'ll spare you today %Grin%');
            return false;
        }

        sendMessage('Well you need your tongue so...');
        putClampsOff(BODY_PART_TONGUE.currentClamps, BODY_PART_TONGUE, false, true);
    }

    if(isGaged()) {
        //If already spider gag we are lucky
        if(currentGagType === GAG_TYPE_SPIDER_GAG && !BODY_PART_TONGUE.isUsed()) {
            sendMessage('Since your mouth is already spread wide open we can get right to it %Grin%');
        } else {
            sendMessage('But your mouth is already filled %EmoteSad%');
            sendMessage('%Thinking%');

            //Choose spider gag if we can swap current gag
            if(currentGagType !== GAG_TYPE_SPIDER_GAG && GAG_TYPE_SPIDER_GAG.hasToy() && currentGagType.getLastUsage().addMinute(getMinPlayTimeBeforeToySwap()).hasPassed() && isChance(50)) {
                cleanType = ASM_CLEAN_TYPE_LICK;

                if(isAnnoyedByTalking()) {
                    sendConsideredRemovingGag();
                    sendMessage('Instead I have something different in mind now %Grin%');
                }

                //Swap gag to spider gag
                putInGag(GAG_TYPE_SPIDER_GAG);
            }
            //No spider gag swap
            else {
                //Only remove gag if min play time passed
                if(currentGagType.getLastUsage().addMinute(getMinPlayTimeBeforeToySwap()).hasPassed()) {
                    //Only remove gag if domme is not annoyed by talking
                    if(!isAnnoyedByTalking()) {
                        removeGag();
                    } else {
                        //Domme is annoyed by talking
                        sendConsideredRemovingGag();

                        sendMessage('I am in quite a pickle here %EmoteSad%');
                        sendMessage('I want you to suck it clean but you will also stay gagged no matter what...');
                        cleanType = ASM_CLEAN_TYPE_GAG;
                        sendMessage('%Thinking%');
                        toldStayGagged = true;
                    }
                } else {
                    if(isChance(50)) {
                        //No changing gag right now because min toy time hasn't passed yet
                        sendMessage('You know what?');
                        sendMessage('You are quite lucky');
                        sendMessage('You will get to clean that ' + toy + ' later %SlaveName% %Grin%');
                        return false;
                    }

                    //Keep gag and put it back afterwards
                    restoreGag = true;
                }
            }
        }
    }

    if(isChance(30) && (!isGaged() || !BODY_PART_TONGUE.isUsed())) {
        sendMessage('Stick your tongue out %SlaveName%', 5);
        sendMessage('Look at the ' + toy + ' covered in your ass juice');

        if(isChance(50)) {
            if(sendYesOrNoQuestion('Do you like that sight?')) {
                sendMessage('Ewwww... Disgusting %SlaveName% %Lol%');
            } else {
                //QUALITY: More diversity
                sendMessage('Forcing you to do stuff you dislike must be my favorite thing %Lol%');
            }
        } else {
            if(sendYesOrNoQuestion('Can you already taste it?')) {
                sendMessage('Well it\'s gonna get more intense soon %Grin%');
            } else {
                sendMessage('Don\'t worry, you will in no time %Grin%');
            }
        }
    }

    let tasteAnswer = ['Can you taste your own ass juice? %Lol%', 'Can you taste your own ass? %Lol%', 'Tasting your own ass juice %Lol%', 'Tasting your own ass %Lol%'];

    let cachedGagType = null;

    if(cleanType === ASM_CLEAN_TYPE_GAG) {
        if(!isGaged()) {
            sendMessage("However today we are " + random("gonna clean it differently", "handle this a bit differently", "not gonna just lick it clean"));
        } else {
            removeGag();

            if(toldStayGagged) {
                sendMessage('Don\'t worry %SlaveName%');
                sendMessage('I am not breaking my promise of keeping you gagged %Lol%');
            }
        }

        sendMessage("In a moment you'll going to put that plug all the way into your mouth");
        sendMessage("And you are gonna keep it there %Grin%");

        tasteAnswer.push("Can you taste your own ass juice? %Lol%", "Your mouth filled with a plug that has been in your ass for quite some time %Lol%");
        sendMessage("Go ahead and put that plug into your mouth");
        sleep(5);
    } else if(cleanType === ASM_CLEAN_TYPE_LICK || cleanType === ASM_CLEAN_TYPE_BLOW) {
        //Restore gag
        if(restoreGag) {
            cachedGagType = currentGagType;
            removeGag();
        }

        if(cleanType === ASM_CLEAN_TYPE_BLOW) {
            sendMessage('I want you to blow it like you would blow a dildo');
        } else if(cleanType === ASM_CLEAN_TYPE_LICK) {
            sendMessage('I want you to lick it from the top to the bottom');
        }

        sendMessage(random('Our ' + toy + ' should be shining and spotless', 'I want it to be spotless', 'I want it to be shiny and clean', 'Let\'s clean it properly'));
        sendMessage("Keep going until I tell you to stop");
        sleep(5);

        tasteAnswer.push("Licking your own ass juice %Lol%", "Licking that plug that was in your ass not too long ago %Lol%", 'Indirectly licking your ass %Lol%');
    }

    if(isChance(50)) {
        //QUALITY: Generalise
        if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
            sendMessage(random("Look at you...", 'Think about yourself...'));
            sendMessage(random('Pathetic...', 'Disgusting...', 'Disgusting as you are %Lol%', "Pathetic as you are %Lol%", 'Submissive as you are %Grin%', 'Obedient as you are %Grin%', 'My obedient %SlaveName%'));
            sendMessage(tasteAnswer[randomInteger(0, tasteAnswer.length - 1)]);
        } else {
            sendMessage(random('You are doing great %Grin%', 'You are looking great %Lol%', 'Quite entertaining to watch %Grin%'));
        }

        sendMessage("All of that just to " + random("please me", "make me happy", "entertain me", 'obey me') + " %EmoteHappy%");
    } else {
        sleep(5);
    }

    if(cleanType === ASM_CLEAN_TYPE_GAG) {
        setGaged(true);
        currentGagType = GAG_TYPE_BUTTPLUG_GAG;
        currentGagType.setLastUsage();

        if (feelsLikePunishingSlave()) {
            goToCorner(getCornerTime());
        }
    } else {
        sendMessage('You can stop now and put the ' + toy + ' aside');
    }

    //Restore gag (restore gag might be true, but we might end up not wanting to restore the gag so this makes sure we are)
    if(cachedGagType !== null) {
        putInGag(cachedGagType);
    }

    return true;
}