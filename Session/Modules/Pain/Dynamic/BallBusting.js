{
    //TODO: Ignore if no cbt fetish

    sendMessage('Let\'s give my balls some attention %Grin%');
    sendMessage('I think they are having way too much fun');
    sendMessage('But don\'t worry I will take care of that');


    sendMessage('First of all let\'s refresh the terminology a bit');
    sendMessage('Slap means to use your open hand to bust those balls');
    sendMessage('Flick means to use your index finger to flick your balls');
    sendMessage('And punch is my favorite one');
    sendMessage('It means you should punch your balls with your fist');

    sendMessage('Now for the intensity scale of the hits');
    sendMessage('Light means that it should hurt but not too bad');
    sendMessage('You should have no problems keeping your position');
    sendMessage('Medium hits should definitely hurt you and might make you flinch');
    sendMessage('Hard ones should borderline floor you and they should really hurt %Lol%');

    if(isChance(50) && !hasBallsTied() && tieBalls()) {
        sendMessage('%Grin%');
        sendMessage('This should prevent your balls from escaping the hits %EmoteHappy%');
    }

    const doneModules = new java.util.ArrayList();
    let currentModuleId = 0;
    let painLevel = getVar(VARIABLE_SUB_PAIN_TOLERANCE);

    const simpleBallBustingModule = {id: currentModuleId++,

        startModule : function() {
            doneModules.add(this.id);

            let maxLoops = painLevel;
            let loops = 0;

            //Start with light ones
            let isBeginning = doneModules.size() < 3;
            let allowPunches = painLevel > 7;

            while(loops < maxLoops) {
                let lightChance = 60 - loops - maxLoops + (isBeginning? 20 : 0);
                let mediumChance = 20 + loops + maxLoops;
                let hardChance = 10 + maxLoops;

                const hitLevel = getWinnerIndex({lightChance, mediumChance, hardChance});

                const hitChance = 60;
                const flickChance = hitLevel == 2? 0 : 40;
                const punchChane = 20;

                const hitType = getWinnerIndex([hitChance, flickChance, punchChane]);

                sendBallHitTask(hitLevel, hitType);

                loops++;
            }

            return true;
        },
    };


    if(painLevel > 8) {
        while(maxLoops > 0) {
            maxLoops--;

            switch (randomInteger(0, 9)) {

            }
        }
    }
}

function sendBallHitTask(hitLevel, hitType, loops, isBeginning, map) {
    const hitLevels = ['light', 'medium', 'hard'];
    const hitTypes = ['slap', 'flick', 'punch'];

    const painTolerance = getVar(VARIABLE_SUB_PAIN_TOLERANCE);
    const randomModifier = (hitLevel + 1)*3 + (hitType + 1)*3 - painTolerance - loops;

    let hitAmount = randomInteger(5 - randomModifier, 10 - randomModifier);

    let currentAmount = map.has(hitType)? map.get(hitType) : 0;

    sendMessage('I want you to ' + hitTypes[hitType] + " your %Balls% " + hitLevels[hitLevel])
}
