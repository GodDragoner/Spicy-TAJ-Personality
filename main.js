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

sendSystemMessage("Launching Spicy " + getVar("personalityVersion"));

//registerVariable("anallimit", "Anal Limit", "Is anal a hard limit, allowed, needs to be addressed or still a matter of discussion?");

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



//TODO: Academy

if(isFullTime()) {
    run("Startup/FullTime/FullTimeCheck.js");
}

//run("Session/StartSession.js");
run("Assistant/AssistantLobby.js");
