//run("Session/StartSession.js");

/*function getChastityEXPForLevel(level) {
    let loopLevel = 1;
    let exp = 100;

    while (loopLevel < level) {
        if (loopLevel >= 25) {
            exp += 65;
        } else if (loopLevel >= 20) {
            exp += 60;
        } else if (loopLevel >= 15) {
            exp += 55;
        } else {
            exp += 50;
        }

        loopLevel++;
    }

    return exp;
}

//sendMessage("I added your exp and your current level is " + getVar(VARIABLE.ASS_LEVEL));

for(let x = 2; x <= 30; x += 4) {
    sendDebugMessage('Level ' + x + ': ' + getChastityEXPForLevel(x));
}*/

//sendDebugMessage('You will need ' + (getChastityEXPForLevel(10) - getVar(VARIABLE.ASS_EXPERIENCE)) + ' more exp for the next level');
//unlockChastityCage();

/*MODULE_HISTORY.clearHistory();
run('Session/Modules/Humiliation/Dynamic/AnalHumiliation.js');
appendPenetratingSession('dildo');*/
//Reduce punishment point multiplier each day if the change would be negative

/*
sendVirtualAssistantMessage(random("Launching", "Initiating", "Starting", "Establishing") + " session with Mistress");
run("Session/StartSession.js");


incrementVar(VARIABLE.BLOWJOB_EXPERIENCE, getTrainingEXPForLevel(20));
incrementVar(VARIABLE.ASS_EXPERIENCE, getTrainingEXPForLevel(20));
while(getTrainingEXPForLevel(getVar(VARIABLE.ASS_LEVEL) + 1) <= getVar(VARIABLE.ASS_EXPERIENCE)) {
    incrementVar(VARIABLE.ASS_LEVEL, 1);
}

while(getTrainingEXPForLevel(getVar(VARIABLE.BLOWJOB_LEVEL) + 1) <= getVar(VARIABLE.BLOWJOB_EXPERIENCE)) {
    incrementVar(VARIABLE.BLOWJOB_LEVEL, 1);
}

sendDebugMessage(getVar(VARIABLE.BLOWJOB_LEVEL));

setVar(VARIABLE.CHASTITY_ON, true);
 */


//createBondageInstructions(3);

/*setVar(VARIABLE.CHASTITY_ON, false);
lockChastityCage();
*/

/*if (!isInChastity() && willKeepChastityOn(true)) {
    lockChastityCage();

    //This needs to be checked here again because if the sub just acquired a cage there is no such thing set in the first session
    if(!isVar(VARIABLE.LOCKED_UP_LIMIT)) {
        askForMaxLockupTime();
    }

    if(shouldIntroduceNewRule(RULE_DOMME_KEYHOLDER)) {
        RULE_DOMME_KEYHOLDER.sendIntroduction();
    }

    //Run random after chastity link if domme is keyholder
    if(RULE_DOMME_KEYHOLDER.isActive()) {
        run("Session/Link/EndChastity/*.js");
    }
}

//Virtual assistant takes care of that and not if partner is keyholder
if (isInChastity() && !getVar(VARIABLE.PARTNER_IS_KEYHOLDER, false)) {
    lockAwayChastityKey();
}

const instance = Java.type('me.goddragon.teaseai.TeaseAI').application;
    const controller = instance.getController();
    const stackpane = controller.getImageView().getParent();
    const scene = stackpane.getScene();
    const rectangle = new javafx.scene.shape.Rectangle();

//Setting the properties of the rectangle
    rectangle.setX(150);
    rectangle.setY(75);
    rectangle.setWidth(300);
    rectangle.setHeight(150);

//Creating a Group object
    const root = new javafx.scene.Group(rectangle);

    const AnimationTimer = Java.type('javafx.animation.AnimationTimer');
    let goNorth = false;
    let goWest = false;
    let goSouth = false;
    let goEast = false;
    const CustomTimer = Java.extend(AnimationTimer, {
        handle: function (now) {
            let dx = 0;
            let dy = 0;

            if (goNorth) dy -= 1;
            if (goSouth) dy += 1;
            if (goEast) dx += 1;
            if (goWest) dx -= 1;

            rectangle.setWidth(rectangle.getX() + dx * 100);
            rectangle.setHeight(rectangle.getY() + dy * 100);
        }
    });

    let timer = new CustomTimer();

    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {


            scene.onKeyPressed = function (e) {
                const code = e.getCode();
                if (code == 'W') goNorth = true;
                if (code == 'A') goWest = true;
                if (code == 'S') goSouth = true;
                if (code == 'D') goEast = true;
            }

            scene.onKeyReleased = function (e) {
                const code = e.getCode();
                if (code == 'W') goNorth = false;
                if (code == 'A') goWest = false;
                if (code == 'S') goSouth = false;
                if (code == 'D') goEast = false;
            }

            stackpane.getChildren().add(root);
            root.toFront();

            timer.start();
        }
    });

//We run the runnable code on the GUI Thread -> it actually renders the gui
    runGui(new CustomRunnable());
    sleep(10);

    sendMessage("Test2");

//Remove the rectangle again and stop the animation
    CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            timer.stop();
            stackpane.getChildren().remove(root);
        }
    });
    runGui(new CustomRunnable());
*/

//Result shows roughly 19-22 tasks before level 30 is reached
/*let startExp = 0;

let trainingsDone = 0;

let restoreLevel = getVar(VARIABLE.ASS_LEVEL);

while(startExp < getTrainingEXPForLevel(30)) {
    let level = getTrainingsLevelForExp(startExp);
    setVar(VARIABLE.ASS_LEVEL, level);

    let task = getRandomApplicableTask(analTasks);
    let mult = getTrainingEXPMultiplier(trainingsDone);

    sendDebugMessage('Level currently: ' + level);
    sendDebugMessage('Multiplier currently: ' + mult);
    sendDebugMessage('Task awarding ' + task.exp);

    startExp += mult*task.exp;
    trainingsDone++;
}

sendDebugMessage('Simulation ended');
sendDebugMessage('Trainings required: ' + trainingsDone + ' for a total of ' + startExp + ' exp');

    let out = 0;
    let inChastity = 0;

    for(let x = 0; x < 100; x++) {
        let decision = willKeepChastityOn();

        if(decision) {
            inChastity++;
        } else {
            out++;
        }
    }

    sendDebugMessage('Out: ' + out + ' In: ' + inChastity);
    sendDebugMessage(getAnalDildoForTask().name);

        let dildo = 0;
    let chastity = 0;
    let prostate = 0;

    for(let x = 0; x < 1000; x++) {
        let type = decideAnalOrgasmType();

        if(type === ANAL_ORGASM_TYPE.DILDO) {
            dildo++;
        } else if(type === ANAL_ORGASM_TYPE.CHASTITY_VIBE) {
            chastity++;
        } else if(type === ANAL_ORGASM_TYPE.PROSTATE_VIBE) {
            prostate++;
        }
    }


    sendDebugMessage("Dildo: " + dildo);
    sendDebugMessage("Chastity: " + chastity);
    sendDebugMessage("Prostate: " + prostate);
let toy = LOVENSE_TOY_TYPES.MAX.getLovenseToy();

sendDebugMessage(serializeObject(toy.setVibrate(1)));
sleep(5);
sendDebugMessage(serializeObject(toy.setVibrate(0)));
setVar(VARIABLE.ASS_LEVEL, restoreLevel);


let tasks = getAcademyClassByName("blowjob").getTasks(getAcademyClassByName("blowjob"));

for(let x = 0; x < tasks.length; x++) {
    sendDebugMessage(tasks[x]);

    sendDebugMessage(Array.isArray(tasks[x]))
}
*/


/*
{
    let analOrgasmType = decideAnalOrgasmType();
    getAnalOrgasmInstructions(analOrgasmType, ORGASM_CATEGORY_RUINED);

}*/
{
    let lines = new java.util.ArrayList();
    lines.add('Today you will spent ' + getDailyTaskTime() + ' minutes being my pet');
    lines.add('During that time the following rules are in place');
    lines.add('Only crawl on all fours');
    lines.add('No wearing any human clothes');
    lines.add('No human entertainment. You may only watch videos of other pets playing');
    lines.add('No usage of the human toilet. Use your bathtub or a container of some sort');

    lines.add('%InAddition%...');

    var possibilities = [];

    if (hasButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.PIG_TAIL)) {
        possibilities.push(getButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.PIG_TAIL));
    } else if (hasButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.FLUFFY_TAIL)) {
        possibilities.push(getButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.FLUFFY_TAIL));
    }

    if (possibilities.length !== 0) {
        var buttplug = random(possibilities);

        if (buttplug.baseStyle === BUTTPLUG_BASE_STYLE.PIG_TAIL) {
            lines.add('For that I will turn you into a cute little pig %SlaveName%');
            lines.add('You are gonna wear your ' + buttplug.name);
        } else {
            lines.add('For that I will turn you into a cute little animal %SlaveName%');
            lines.add('You are gonna wear your ' + buttplug.name);
        }

        lines.add('%InAddition%...');
    }

    if (NOSE_HOOK.hasToy() && NOSE_HOOK.isPunishmentAllowed()) {
        lines.add('Put on the nose hook');
        lines.add('%InAddition%...');
    }

    if (GAG_TYPE_BALL_GAG.hasToy() && GAG_TYPE_BALL_GAG.isPunishmentAllowed()) {
        lines.add('Pets don\'t talk do they?');
        lines.add('That is why you will be wearing your ball gag');
        lines.add('%InAddition%...');
    }

    if (COLLAR_TOY.hasToy() && COLLAR_TOY.isPunishmentAllowed()) {
        lines.add('Wear your collar with a leash attached to it');
        lines.add('%InAddition%...');
    }

    lines.add('Apart of that time I want you to do the following:');
    lines.add('For the night you will be sleeping on the floor. Use blankets, a pillow and or a pet bed');
    lines.add('You will also only be allowed to eat and drink from a bowl on the floor for the whole day');
    lines.add('In the evening and morning I want you to additionally spend at least 15 minutes playing fetch with a ball');
    lines.add('The rules from above also apply to this time frame');
    lines.add('Additionally in the evening you will be waiting not less 20 minutes in the front of your door for your %DomHonorific% to come home');
    lines.add('Same as for your play time the rules from above also apply to this time frame');

    for (let x = 0; x < lines.size(); x++) {
        sendPinnoteMessage(lines.get(x), 0);
    }
}

