{
    //Check for CBT Limit and whether the user is wearing a full sized belt
    if (!CBT_LIMIT.isAllowed() || isInChastity() && getActiveChastityCage().isFullSizedBelt()) {
        runModuleCategory('Pain');
    } else {
        if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.BALL_TORTURE)) {
            sendMessage('Let\'s give my balls some attention %Grin%');
            sendMessage('I think they are having way too much fun');
            sendMessage('But don\'t worry I will take care of that');


            sendMessage('First of all let\'s refresh the terminology a bit');

            if(shouldExplainCBTTerms()) {
                sendExplainCBTTerms();
                sendMessage('Now for the intensity scale of the hits');
            } else {

                sendMessage('For the intensity scale of the hits');
            }


            sendMessage('Light means that it should hurt but not too bad');
            sendMessage('You should have no problems keeping your position');
            sendMessage('Medium hits should definitely hurt you and might make you flinch');
            sendMessage('Hard ones should borderline floor you and they should really hurt %Lol%');

            let chanceLeftToys = 50;

            if (isChance(chanceLeftToys) && !hasBallsTied() && tieBalls()) {
                chanceLeftToys /= 2;
                sendMessage('%Grin%');
                sendMessage('This should prevent your balls from escaping the hits %EmoteHappy%');
            }

            if (!isPlugged() && getAnalLimit() == LIMIT_ASKED_YES && hasButtplugToy() && isChance(chanceLeftToys)) {
                sendMessage('I think we can make it a bit different today');
                sendMessage('Refreshing in some sort %Grin%');

                if (putInButtplug()) {
                    chanceLeftToys /= 2;
                    sendMessage('Now you are ready to get your balls destroyed %Grin%');
                } else {
                    //Increase chance for other toy
                    chanceLeftToys *= 2;
                }
            }

            if (decideGag(true)) {
                chanceLeftToys /= 2;
            }

            if (isPlugged() && isGaged()) {
                if (hasBallsTied()) {
                    sendMessage('Balls tied, both of your main holes are filled...');
                } else {
                    sendMessage('Both of your holes are filled %SlaveName%');
                }

                sendMessage(random('You look ready to experience pain %Lol%', 'Let\'s make you whimper %Grin%'));
            }

            const modules = [];
            const doneModules = new java.util.ArrayList();
            let currentModuleId = 0;
            let painLevel = getVar(VARIABLE.SUB_PAIN_TOLERANCE);

            let untieTeased = false;
            let untieRoundsAgo = -1;

            const simpleBallBustingModule = {
                id: currentModuleId++,
                startModule: function () {
                    doneModules.add(this.id);

                    let hitMap = new Map();
                    let maxLoops = Math.max(1, painLevel);

                    //Start with light ones
                    let isBeginning = doneModules.size() < 3;

                    let loops = 0;
                    let allowPunches = painLevel > 7;

                    while (loops < maxLoops) {
                        const hitLevel = getBallHitLevelIndex(loops, maxLoops, painLevel, isBeginning);

                        const hitChance = 40;
                        const flickChance = hitLevel === 2 ? 0 : 40;
                        const punchChane = allowPunches && !isBeginning ? 20 : 0;

                        const hitType = getWinnerIndex([flickChance, hitChance, punchChane]);

                        //Tease about balls not being tied
                        if(untieRoundsAgo === 1 && untieRoundsAgo <= 2 && isChance(33) && !untieTeased) {
                            if(isChance(50)) {
                                sendMessage('Be grateful for your balls not being tied up anymore');
                                sendMessage('Because you don\'t know how long you can enjoy this luxury %Grin%');
                            } else {
                                sendMessage('I think I liked those balls more when they were tied up')
                            }

                            untieTeased = true;
                        }

                        //Tie balls up again
                        if (!hasBallsTied() && loops !== 0 && isChance(10 + painLevel * 2) && wantsToTieBalls() && !isInChastity()) {
                            if(untieRoundsAgo < 0) {
                                sendMessage('I think we need to change this up a bit');
                            } else {
                                sendMessage(random('Let\'s make it hurt a bit more again', 'I think we should go back to tied balls %Grin%', 'I think I liked those balls more when they were tied up'));
                            }

                            tieBalls(true);

                            if(untieRoundsAgo < 0) {
                                sendMessage('Much better isn\'t it? %Grin%');
                            } else {
                                sendMessage('I hope you enjoyed that time while your balls were not bound %Grin%');
                            }
                        }

                        sendBallHitTask(hitLevel, hitType, loops, isBeginning, hitMap);

                        if (isChance(20)) {
                            sendMessage('%BallHurtTease%');
                        }

                        loops++;

                        //End early, that is a chance of 20 on loop reached
                        if(isChance(Math.floor((loops/maxLoops)*20))) {
                            sendDebugMessage('Ending ball busting loop early at ' + loops + '/' + maxLoops);
                            break;
                        }

                        if(untieRoundsAgo >= 0) {
                            untieRoundsAgo++;
                        }
                    }

                    if (hasBallsTied() && isChance(50 - painLevel * 2) && wantsToUntieBalls()) {
                        sendMessage('I am gonna be generous and allow you to untie %MyBalls% balls %EmoteHappy%');
                        untieBalls();

                        untieRoundsAgo = 0;
                        untieTeased = false;
                    }

                    return true;
                },
            };
            modules.push(simpleBallBustingModule);

            const toiletCrushing = {
                id: currentModuleId++,
                startModule: function () {
                    //Pain level too low
                    if (painLevel < 6 || isInChastity() || !askForBathroom()) {
                        return false;
                    }

                    if(!askForFeatheredToiletLid()) {
                        return false;
                    }

                    doneModules.add(this.id);

                    let hitMap = new Map();

                    sendMessage('%KnowWhatsNext%');
                    sendMessage('In the bathroom I want you to put your balls onto the toilet seat and let the lid drop onto them');
                    sendMessage('Once, twice... And with an ever increasing level of height and pain %Grin%');

                    let maxLoops = Math.max(3, painLevel / 2);
                    let loop = 0;

                    //Start with light ones
                    let isBeginning = doneModules.size() < 3;

                    if (hasPortableDevice()) {
                        sendMessage('Go to the bathroom %SlaveName% and tell me when you are there');
                        waitForDone();
                    } else {
                        sendMessage('Since you don\'t have a portable device around I will send you all instructions right now');
                        sendMessage('Afterwards you will write them down or take a picture of them');
                        sendMessage('Then you will head to the bathroom and return once you finished all of them');
                        sendMessage('This sadly ruins the fun of teasing you throughout the punishment but it\'s still better than nothing, don\'t you think? %Grin%');
                        sendMessage('I guess I gotta imagine how you look for now. But seeing your face afterwards is definitely worth it %Grin%');
                    }

                    let messages = [];

                    while (loop < maxLoops) {
                        loop++;
                        let message = getToiletLidTask(getBallHitLevelIndex(loop, maxLoops, painLevel, isBeginning), hasPortableDevice(), hitMap);

                        if (hasPortableDevice()) {
                            sendMessage(message);
                            waitForDone();
                        } else {
                            messages.push(message);
                        }
                    }

                    if (!hasPortableDevice()) {
                        for (let x = 0; x < messages.length; x++) {
                            sendMessage(messages[x]);
                        }

                        sendMessage('Tell me when you are done %SlaveName%');
                        waitForDone(100000000);
                    } else {
                        //TODO: Append random bathroom module maybe?
                        sendMessage('You can go back to your room now %SlaveName%');
                    }

                    return true;
                },
            };
            modules.push(toiletCrushing);

            const maxLoops = Math.max(1, Math.floor(painLevel / 1.5));

            while (doneModules.size() < maxLoops) {
                modules[randomInteger(0, modules.length - 1)].startModule();

                //If this is readded make sure to check if startModule was successful, otherwise it might end without doing anything
                /*
                if (isChance(getEarlyPunishmentExitChance())) {
                    break;
                }
                */
            }

            sendMessage('I guess ' + random('we are', 'I am') + ' done with %MyBalls% %Balls% for now');
            sendMessage('But that doesn\'t mean I won\'t touch them anymore today %Grin%')
        }
    }
}

function getBallHitLevelIndex(loop, maxLoops, painToleranceLevel, isBeginning) {
    let lightChance = 60 - loop - maxLoops + (isBeginning ? 20 : 0);
    let mediumChance = 20 + loop + maxLoops;
    let hardChance = 10 + maxLoops;

    const hitLevel = getWinnerIndex([lightChance, mediumChance, hardChance]);

    return hitLevel;
}

function getToiletLidTask(hitLevel, hasPortableDevice, map) {
    const hitLevels = ['low height', 'medium height', 'full height'];

    const painTolerance = getVar(VARIABLE.SUB_PAIN_TOLERANCE);
    const randomModifier = Math.max(0, (hitLevel + 1) * 4 - painTolerance);

    let hitAmount = randomInteger(Math.max(1, 3 - randomModifier), Math.max(1, 5 - randomModifier));

    let currentAmount = map.has(hitLevel) ? map.get(hitLevel) : 0;


    if (currentAmount > 0) {
        let answers = [
            random('Go ahead and', 'I want you to') + random('yet', '') + ' again raise the toilet lid to ' + hitLevels[hitLevel] + ' and let it fall on %MyBalls% %Balls% ' + hitAmount + pluralize(' time', hitAmount),
        ];

        sendMessage(answers[randomInteger(0, answers.length - 1)]);
        waitForDone();
    } else {
        //First time we are doing this
        if (map.has(0) && (hitLevel == 2 || hitLevel == 1 && !map.has(2)) && hasPortableDevice) {
            sendMessage(random('I think we can go higher than before %Grin%', 'I think we need to up that level a bit because otherwise ' + random('you might get used to it', 'I might go too easy on you') + ' %Lol%'));
        }

        let answers = [
            'I want you to raise the toilet lid to ' + hitLevels[hitLevel] + ' and let it fall on %MyBalls% %Balls% ' + hitAmount + pluralize(' time', hitAmount),
        ];

        return answers[randomInteger(0, answers.length - 1)];
    }
}

function sendBallHitTask(hitLevel, hitType, loops, isBeginning, map) {
    const hitLevels = ['light', 'medium', 'hard'];
    const hitTypes = ['flick', 'slap', 'punch'];

    const painTolerance = getVar(VARIABLE.SUB_PAIN_TOLERANCE);
    const randomModifier = (hitLevel + 1) * 5 + hitType - painTolerance;

    let hitAmount = randomInteger(Math.max(1, 10 - randomModifier), Math.max(1, 12 - randomModifier));

    let currentAmount = map.has(hitType) ? map.get(hitType) : 0;

    if (currentAmount > 0) {
        let answers = [
            'I want you to yet again ' + hitTypes[hitType] + ' %MyBalls% %Balls% ' + hitLevels[hitLevel] + ' ' + hitAmount + pluralize(' time', hitAmount),
            random('Give', 'Go ahead and give', 'Let\'s give') + ' %MyBalls% %Balls% another ' + hitAmount + ' ' + hitLevels[hitLevel] + ' ' + pluralize(hitTypes[hitType], hitAmount),
        ];

        sendMessage(answers[randomInteger(0, answers.length - 1)], 0);
        waitForDone();
    } else {
        //First time we are doing this
        if (map.has(0) && (hitLevel == 2 || hitLevel == 1 && !map.has(2))) {
            sendMessage(random('I think we can go harder than before %Grin%', 'I think we need to up that level a bit because otherwise ' + random('you might get used to it', 'I might go too easy on you') + ' %Lol%'));
        }

        let answers = [
            'I want you to ' + hitTypes[hitType] + ' %MyBalls% %Balls% ' + hitLevels[hitLevel] + ' ' +  hitAmount + pluralize(' time', hitAmount),
            random('Give', 'Go ahead and give', 'Let\'s give') + ' %MyBalls% %Balls% ' + hitAmount + ' ' + hitLevels[hitLevel] + ' ' + pluralize(hitTypes[hitType], hitAmount),
        ];

        sendMessage(answers[randomInteger(0, answers.length - 1)], 0);
        waitForDone();
    }

    map.set(hitType, currentAmount + hitAmount);
}
