const ANY_LUBE = 0;
const SPIT_LUBE = 1;
const TIGER_HOT_LUBE = 2;
const TOOTHPASE_LUBE = 3;
const NO_LUBE = 4;

function hasButtplugToy() {
    return getVar("toyButtPlugs");
}

function isPlugged() {
    return getVar(VARIABLE_IS_PLUGGED, false);
}

function putInButtplug() {
    sendMessage("%SlaveName%");

    if (!fetchToy(getButtplugSize() + " buttplug")) {
        return false;
    }

    const lubeType = getAssLubeType(getMood());

    if (lubeType == ANY_LUBE) {
        sendMessage("Grab your lube and lube up the plug");
    } else if (lubeType === SPIT_LUBE) {
        sendMessage(random("Use your spit and lube it up", "Use your spit as lube", "Go ahead and use your spit as lube"));

        if (isChance(50) && !isGaged()) {
            sendMessage(random("I want you to suck it until I tell you to stop", "Give it a nice quick blowjob until I tell you to stop", "Give it a good and nice blowjob until it is soaked in your spit"));
            wait(30);
            sendMessage("You can stop now");
        } else {
            if(isGaged()) {
                sendMessage("This is gonna be fun with that gag in your mouth");
                sendMessage("Watching your desperately trying to get some spit on it");
                sendMessage("Go ahead and try to drool some spit onto that plug");
                sendMessage("If you can't make it your ass will get to feel it %Grin%");
            } else {
                sendMessage("Come on. Soak it in your spit and make it nice and slippery", 10);
            }
        }

    } else if (lubeType === TOOTHPASE_LUBE) {
        if (!fetchToy("toothpaste")) {
            sendMessage("Well if you don't my your toys around you will have to go without any lube %Grin%");
        } else {
            sendMessage("Apply a generous amount to the tip of your plug");
            sendMessage("If you want to you can spread it all over it so it slips in more easily");
            sendMessage(random("But it will be more painful once it is inside of you", "However it will hurt more like this", "But this way it will hurt you more afterwards",
                "However this will be more painful afterwards") + " %Grin%", 10);
        }
    } else if (lubeType === TIGER_HOT_LUBE) {
        if (!fetchToy("tiger hot")) {
            sendMessage("Well if you don't have my toys around you will have to go without any lube %Grin%");
        } else {
            sendMessage("Apply a generous amount to the tip of your plug");
            sendMessage("If you want to you can spread it all over it so it slips in more easily");
            sendMessage(random("But it will be more painful once it is inside of you", "However it will hurt more like this", "But this way it will hurt you more afterwards",
                "However this will be more painful afterwards") + " %Lol%", 10);
        }
    } else {
        sendMessage("Today I don't you to use any lube %Grin%");
    }

    sendMessage("Now %SlaveName%");

    if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 10) && getVar(VARIABLE_ASS_LEVEL) >= 30) {
        sendMessage("Push it in quickly");
        sendMessage("I don't care whether it hurts");
    } else {
        if (isChance(50) && getVar(VARIABLE_ASS_LEVEL) >= 30) {
            sendMessage("Put that plug on the ground");
            sendMessage("You already know " + random("what I am gonna make you do now", "what comes next", "what you are gonna do next", "what I want you to do next", "what is gonna happen now"));
            sendMessage("I want you to slowly sit down on that plug and push it all the way up your ass");
            sendMessage("So get ready", 3);
            sendMessage("Squat above it", 5);
            sendMessage("And now slowly lower your ass down on that plug", 5);
            sendMessage("Let it slowly slip into you", 5);
            sendMessage(random("Can you feel the shape of it inside of you already?", "Can you feel it making its way into you?", "Can you feel it slowly filling your dirty hole?"));
            sendMessage("Go all the way down until your ass cheeks are touching the floor and the plug is all the way in");
        } else {
            sendMessage("Put the tip of the plug on your asshole", 5);
            sendMessage("Rub along your ass crack gently with the tip", 5);
            sendMessage("Now...");

            sendMessage("Carefully start pushing that plug into your ass");
            sendMessage("Push it slowly and gently...");

            if (!isVar("pluggedToday") && getVar(VARIABLE_ASS_LEVEL) < 30) {
                sendMessage("Until you reach the point where it starts hurting a bit");
                sendMessage("Now hold that position", 3);
                sendMessage("Let that plug slip out again");
                sendMessage("And rest for a second...", 5);
                sendMessage("Start over...");
                sendMessage("Gently push that plug into your ass");
                sendMessage("Push it a bit further this time");
                sendMessage("Hold the position again", 3);
                sendMessage("Aaaaand...");
                sendMessage("Let that plug slip out again");
                sendMessage("Now...");
                sendMessage("This time it is gonna go all the way in %Grin%");
                sendMessage("Starting pushing it in");
                sendMessage("Get it all the way in there");
            } else {
                sendMessage("Push it all the way in...");
            }
        }
    }

    let answer = sendInput("Tell me when you are done %SlaveName%");
    while (true) {
        if (answer.isLike("done", "yes")) {
            sendMessage("%Good%");
            break;
        } else {
            sendMessage("Have you plugged yourself like a good %SlaveName%?");
            answer.loop();
        }
    }

    setTempVar("pluggedToday", true);
    setTempVar(VARIABLE_IS_PLUGGED, true);
    return true;
}

function getAssLubeType(mood) {
    if (getVar(VARIABLE_ASS_LEVEL) < 30) {
        return ANY_LUBE;
    }

    const lubeTypes = [];

    if (mood === VERY_PLEASED_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 10)) {
            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === PLEASED_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 20)) {
            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === NEUTRAL_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 25)) {
            if (ACTIVE_PERSONALITY_STRICTNESS > 0) {
                if (hasToothpaste()) {
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
        if (isChance((ACTIVE_PERSONALITY_STRICTNESS + 1) * 20)) {
            if (ACTIVE_PERSONALITY_STRICTNESS > 0) {
                lubeTypes.push(NO_LUBE);

                if (hasTigerHot()) {
                    lubeTypes.push(TIGER_HOT_LUBE);
                }
            }

            if (hasToothpaste()) {
                lubeTypes.push(TOOTHPASE_LUBE);
            }

            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === VERY_ANNOYED_MOOD) {
        if (isChance((ACTIVE_PERSONALITY_STRICTNESS + 1) * 25)) {
            if (ACTIVE_PERSONALITY_STRICTNESS > 0) {
                if (hasTigerHot()) {
                    lubeTypes.push(TIGER_HOT_LUBE);
                }
            }

            lubeTypes.push(NO_LUBE);

            if (hasToothpaste()) {
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

function getButtplugSize() {
    let assLevel = getVar(VARIABLE_ASS_LEVEL);

    if (assLevel < 15) {
        return "small";
    } else if (assLevel < 30) {
        return random("small", "medium");
    } else {
        return random("medium", "big");
    }
}

function removeButtplug() {
    if (isChance(30)) {
        sendMessage("%SlaveName%");
        sendMessage("I want you to remove that buttplug without using your hands");
        sendMessage(random("Use your ass muscles", "Clench your muscles", "Just squeeze your ass muscles") + " and push it all the way out");
        if (ACTIVE_PERSONALITY_STRICTNESS == 0 || isChance(100 - ACTIVE_PERSONALITY_STRICTNESS * 30)) {
            sendMessage("Slowly...");
        } else {
            sendMessage("Do it as fast as possible! %Grin%");
        }

        sendMessage("I know it might " + random("be painful", "hurt", "be unpleasant"));
        continueHurtResponse();

        let answer = sendInput("Tell me when you are done %SlaveName%");
        while (true) {
            if (answer.isLike("done", "yes")) {
                sendMessage("%Good%");
                break;
            } else {
                sendMessage("Have you pushed the plug out yet?");
                answer.loop();
            }
        }
    } else {
        sendMessage("I want you to remove the plug from your %Ass%");

        if (isChance(10)) {
            sendMessage("But don't pull it all the way out yet %Grin%");
            sendMessage("Pull it until the biggest part of the plug is spreading your ass apart");
            sendMessage("Keep it there until I tell you to move on");
            wait(randomInteger(5, 10));
            sendMessage("And now push it all the way back in %Lol%");
            sendMessage("Let's do that again");
            sendMessage("Pull it out until the thickest part of the plug is spreading your sphincter");
            sendMessage("Hold it...");
            wait(randomInteger(5, 10));
            if (isChance(70)) {
                if (isChance(50)) {
                    sendMessage("Just let go and if the plug pops out you are done");
                    sendMessage("If it slips back in you'll have to get it out again I guess %EmoteHappy%");
                } else {
                    endLastPlugPull();
                }
            } else {
                sendMessage("Back into your ass it goes %EmoteHappy%");
                sendMessage("One more time");
                sendMessage("Pull and hold it in place...");
                wait(randomInteger(5, 10));
                if (isChance(30)) {
                    if (isChance(50)) {
                        sendMessage("Just let go and if the plug pops out you are done");
                        sendMessage("If it slips back in you'll have to get it out again I guess %EmoteHappy%");
                    } else {
                        sendMessage("I think I am enjoying this too much to stop yet %Grin%");
                        sendMessage("Slip it back in %SlaveName%");
                        sendMessage("Okay, let's do this yet another time");
                        sendMessage("Pull and hold it in place...");
                        wait(randomInteger(5, 10));
                        endLastPlugPull();
                    }
                } else {
                    endLastPlugPull();
                }
            }
        } else {
            sendMessage("Pull it out");

            if (ACTIVE_PERSONALITY_STRICTNESS == 0 || isChance(100 - ACTIVE_PERSONALITY_STRICTNESS * 30)) {
                sendMessage("Slowly...");
            } else {
                sendMessage("Do it as fast as possible! %Grin%");
            }
        }

        let answer = sendInput("Tell me when you are ready to continue.");
        while (true) {
            if (answer.isLike("done", "yes")) {
                sendMessage("%Good%");
                break;
            } else {
                sendMessage("Are you done yet?");
                answer.loop();
            }
        }

        if (getASMLimit() == LIMIT_ASKED_YES) {
            sendMessage("You already know " + random("what I am gonna make you do now", "what comes next", "what you are gonna do next", "what I want you to do next", "what is gonna happen now"));
            sendMessage("I want you to suck that toy clean %Grin%");

            //Gag
            if (isChance(20)) {
                sendMessage("However today we are " + random("gonna clean it differently", "handle this a bit differently", "not gonna just lick it clean"));
                sendMessage("In a moment you'll going to put that plug all the way into your mouth");
                sendMessage("And you are gonna keep it there %Grin%");

                if (isGaged()) {
                    removeGag();
                }

                sendMessage("Go ahead and put that plug into your mouth");
                wait(5);

                sendMessage("Look at you...");
                sendMessage("Pathetic as you are");
                sendMessage(random("Can you taste your own ass juice? %Lol%", "Your mouth filled with a plug that has been in your ass for quite some time"));
                sendMessage("And all of that just to " + random("please me", "make me happy", "entertain me") + " %EmoteHappy%");
            } else {
                sendMessage(random("I want you to blow it like you would blow a dildo", "I want you to lick it from the top to the bottom"));
                sendMessage("Our toy should be shining and spotless");
                sendMessage("Keep going until I tell you to stop");


                sendMessage("Look at you...");
                sendMessage("Pathetic as you are");
                sendMessage(random("Can you taste your own ass juice?", "Licking of your own ass juice", "Licking that plug that was in your ass not too long ago") + " %Lol%");
                sendMessage("And all of that just to " + random("please me", "make me happy", "entertain me") + " %EmoteHappy%");

                wait(randomInteger(10, 20));

                sendMessage("You can stop now %EmoteHappy%");
                sendMessage("Put the plug aside");
            }
        }
    }

    setTempVar(VARIABLE_IS_PLUGGED, false);
}

function endLastPlugPull() {
    if (isChance(30)) {
        sendMessage("I think I like this");
        sendMessage("Why don't you keep it like this for another few seconds? %Grin%");
        wait(randomInteger(5, 15));
        sendMessage("%Good%");
    }

    sendMessage("Okay you are allowed to remove it completely now");
}