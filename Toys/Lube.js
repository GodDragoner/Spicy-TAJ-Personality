let SPIT_BOWL_FILLED = false;

function lubeUpToyWithLube(toy) {
    if (isChance(50)) {
        sendMessage("Grab your lube and lube up your " + toy);
    } else {
        sendMessage("%SlaveName%");
        sendMessage("Go ahead and grab your lube and...");
        sendMessage("Lube that %Ass% and " + toy + " of yours up for me");
    }

    sendMessage('Tell me when you are done %EmoteHappy%');
    waitForDone();
}


function getAssLubeType(mood, level = getVar(VARIABLE.ASS_LEVEL)) {
    if (level < 30) {
        sendDebugMessage('Any lube allowed because user hasn\'t reached ass level 30 yet');
        return ANY_LUBE;
    }

    sendDebugMessage('Deciding lube used for mood ' + mood);

    const lubeTypes = [];

    if (mood === VERY_PLEASED_MOOD) {
        if (isChance(getStrictnessForCharacter() * 5)) {
            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === PLEASED_MOOD) {
        if (isChance(getStrictnessForCharacter() * 10)) {
            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === NEUTRAL_MOOD) {
        if (isChance(getStrictnessForCharacter() * 15)) {
            if (getStrictnessForCharacter() > 0) {
                if (hasToothpaste() && feelsLikePunishingSlave()) {
                    lubeTypes.push(TOOTHPASE_LUBE);
                }

                lubeTypes.push(NO_LUBE);
            } else {
                lubeTypes.push(SPIT_LUBE);
            }
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === ANNOYED_MOOD) {
        if (isChance((getStrictnessForCharacter() + 1) * 15)) {
            if (getStrictnessForCharacter() > 0) {
                lubeTypes.push(NO_LUBE);

                if (hasTigerHot() && feelsLikePunishingSlave()) {
                    lubeTypes.push(TIGER_HOT_LUBE);
                }
            }

            if (hasToothpaste() && feelsLikePunishingSlave()) {
                lubeTypes.push(TOOTHPASE_LUBE);
            }

            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === VERY_ANNOYED_MOOD) {
        if (isChance((getStrictnessForCharacter() + 1) * 20)) {
            if (getStrictnessForCharacter() > 0) {
                if (hasTigerHot() && feelsLikePunishingSlave()) {
                    lubeTypes.push(TIGER_HOT_LUBE);
                }
            }

            lubeTypes.push(NO_LUBE);

            if (hasToothpaste() && feelsLikePunishingSlave()) {
                lubeTypes.push(TOOTHPASE_LUBE);
            }

            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    }

    if (lubeTypes.length === 0) return ANY_LUBE;


    return lubeTypes[randomInteger(0, lubeTypes.length - 1)];
}

function lubeUpToyWithSpit(toy, canBlowjob = true) {
    sendMessage(random("Use your spit and lube your " + toy + " up", "Use your spit as lube for your " + toy, "Go ahead and use your spit as lube for your " + toy));

    if(SPIT_BOWL_FILLED) {
        sendMessage('Since you got that filled spit bowl go ahead and use the remaining spit to lube up your ' + toy);

        sendMessage('Tell me when you are done %EmoteHappy%');
        waitForDone();
    } else {
        if(feelsEvil() && isChance(10) && hasDildoToy() && getBlowjobLevel() >= 30 && canBlowjob && !isGaged()) {
            sendMessage('You know what?');

            if(fetchDildoToy(getDildo(true).name)) {
                if(!ASM_LIMIT.isAllowed()) {
                    sendMessage('You may clean your dildo if need be before we are getting to this');
                }

                startDeepthroatModule(true);
                SPIT_BOWL_FILLED = true;
                sendMessage('Great!');
                sendMessage('Now dip your ' + toy + ' into the spit until it\'s nicely lubed up');

                sendMessage('Tell me when you are done %EmoteHappy%');
                waitForDone();
                return;
            } else {
                sendMessage('Well then...');
            }
        }

        //We return above if we were able to produce some spit so we need to else if

        if (isChance(50) && !isGaged() && canBlowjob) {
            sendMessage(random("I want you to suck it until I tell you to stop", "Give it a nice quick blowjob until I tell you to stop", "Give it a good and nice blowjob until it is soaked in your spit"));
            sleep(30);
            sendMessage("You can stop now %SlaveName%");
        } else {
            if (isGaged()) {
                sendMessage("This is gonna be fun with that gag in your mouth");
                sendMessage("Watching your desperately trying to get some spit on it");
                sendMessage("Go ahead and try to drool some spit onto your " + toy);
                sendMessage("If you can't make it your ass will get to feel it %Grin%");
            } else {
                sendMessage("Come on. Soak it in your spit and make it nice and slippery", 10);
            }

            sendMessage('Tell me when you are done %EmoteHappy%');
            waitForDone();
        }
    }
}

function lubeUpToyWithToothpaste(toy) {
    if (!fetchToy("toothpaste")) {
        sendMessage("Well if you don't have my toys around you will have to go without any lube %Grin%");
    } else {
        sendMessage("Apply a generous amount to the tip of your " + toy);
        sendMessage("If you want to you can spread it all over it so it slips in more easily");
        sendMessage(random("But it will be more painful once it is inside of you", "However it will hurt more like this", "But this way it will hurt you more afterwards",
            "However this will be more painful afterwards") + " %Grin%", 10);
    }

    sendMessage('Tell me when you are done %EmoteHappy%');
    waitForDone();
}

function lubeUpToyWithTigerHot(toy) {
    if (!fetchToy("tiger hot")) {
        sendMessage("Well if you don't have my toys around you will have to go without any lube %Grin%");
    } else {
        sendMessage("Apply a generous amount to the tip of your " + toy);
        sendMessage("If you want to you can spread it all over it so it slips in more easily");
        sendMessage(random("But it will be more painful once it is inside of you", "However it will hurt more like this", "But this way it will hurt you more afterwards",
            "However this will be more painful afterwards") + " %Lol%", 10);
    }

    sendMessage('Tell me when you are done %EmoteHappy%');
    waitForDone();
}