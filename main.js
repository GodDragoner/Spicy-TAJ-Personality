//showImage("Images/Spicy/Grounding/BlackBase.jpg");

let startMillis = new Date().getMilliseconds();
showImage("Images/Spicy/Intro/SpicyGif*.gif");
run("Variables.js");
run("Utils/SoundUtils.js");
run("Utils/FileUtils.js");
run("Utils/ArrayUtils.js");
run("Chat/ChatUtil.js");
run("Slaves/Slaves.js");
run("Session/Orgasm/Orgasm.js");

run("Session/End/Training.js");

sendSystemMessage("Launching Spicy " + getVar("personalityVersion"));

run("Utils/RandomUtils.js");
run("Utils/StringUtils.js");
run("Utils/BodyParts.js");
run("Utils/GoldUtils.js")
run("Utils/TAJUtils.js")
run("Utils/LegacyUtils.js")
run("Session/Tasks.js");
run("Startup/UpdateVariables.js");
run("Stroking/Stroke.js");
run("Stroking/Edge.js");
run("Stroking/Anal.js");
run("Stroking/Blowing.js");
run("Session/Modules/Pain/SmallPunishment.js");

run("Chore/Chore.js");
run("Chore/Room.js");

run("Session/History.js");

run("Session/Orgasm/CEI/CEIHandler.js");
run('Session/End/ChastityTraining/ChastitySpecialTask.js');

run('Session/End/AnalTraining/AnalTrainingTasks.js');

run('Session/End/BlowjobTraining/BlowjobTrainingTasks.js');


run("Assistant/Assistant.js");
updatePictureSet();

run("Session/Session.js");
run("Session/End/Games/EndGames.js");

run("Startup/CrazyDommeMode.js");
run("Personality/SetupMood.js");

//Toys
run("Toys/Toys.js");

run("Startup/PictureSelector.js");

run("Rules/DynamicRules.js");

run("Session/Modules/Games/Games.js");

//Update devotion only if the setup is complete which means the variable must exist
if(isVar("subDevotion")) {
    run("Settings/UpdateDevotion.js");
}

if(getVar("shopUnlockAll", false)) run("Shop/UnlockAll.js");

let endMillis = new Date().getMilliseconds();
let waitTime = 3500;
if(endMillis - startMillis < waitTime) {
    sleep(waitTime - endMillis - startMillis, 'MILLISECONDS');
}

setTempVar(VARIABLE_CURRENT_SESSION_ACTIVE, false);

//Real interaction starts here!

if(!getVar(VARIABLE_FINISHED_SETUP, false)) run("Startup/Setup.js");

if(!getVar(VARIABLE_FINISHED_FIRST_SESSION, false)) run("Session/FirstSession.js");

showImage("Images/Spicy/Intro/SpicyGif*.gif", 7);

//TODO: Academy

if(isFullTime()) {
    run("Startup/FullTime/FullTimeCheck.js");
} else {
    //Week check only start on mondays
    if (isVar(VARIABLE_NEXT_WEEK_CHECK) || new Date().getDay() == 1) {
        //Only check the week if this isn't the first time
        let doWeekCheck = false;
        if (isVar(VARIABLE_NEXT_WEEK_CHECK)) {
            if (getDate(VARIABLE_NEXT_WEEK_CHECK).hasPassed()) {
                doWeekCheck = true;
            }
        } else {
            setDate(VARIABLE_NEXT_WEEK_CHECK, setDate().addDay(7).setHour(0).setSecond(0).setMinute(0));
        }

        //We want to track this even outside of full time
        if(doWeekCheck) {
            setVar(VARIABLE_WEEKLY_CHORES_TIME, 0);
            setVar(VARIABLE_WEEKLY_CHORES_DONE, 0);
        }
    }
}

//run("Session/StartSession.js");

run("Assistant/AssistantLobby.js");