//showImage("Images/Spicy/Grounding/BlackBase.jpg");
/*
Ideas:
- Remove plug just to lick clean and put back
- Chastity spikes while watching porn as punishment
- Game for every normal orgasm you have x ruined, increase one per normal orgasm or something
- Edge for every past orgasm / hours passed since last session
- Rub pre cum on gag before putting in
 */

//TODO: may I remove the gag? Response
//I came response
//May I edge, getting close
//Jump into videos instead of playing from beginning if only shown for x duration
//Adjust time given to lock up by experience (measuring the subs time he takes to put it on)




let startMillis = new Date().getTime();
showImage("Images/Spicy/Intro/SpicyGif*.gif");
run("Variables.js");

run("Utils/SoundUtils.js");
run("Utils/FileUtils.js");
run("Utils/ArrayUtils.js");
run("Utils/GUIUtils.js");
run("Chat/ChatUtil.js");

run("Slaves/Slaves.js");
run("Slaves/SlaveDailyTask.js");

//Session
run("Session/Orgasm/Orgasm.js");
run("Session/Interaction.js");
run("Session/Orgasm/OrgasmSpecial.js");
run("Session/Orgasm/AnalOrgasm.js");
run('Session/Modules/ModuleHandler.js');

run("Session/Special/SessionSpecial.js");

run("Session/End/Training.js");

sendSystemMessage("Launching Spicy " + getVar("personalityVersion"));

//registerVariable("anallimit", "Anal Limit", "Is anal a hard limit, allowed, needs to be addressed or still a matter of discussion?");


run("Utils/Web/HTTPUtils.js");
run("Utils/Web/HttpServer.js");

run("Utils/RandomUtils.js");
run("Utils/StringUtils.js");
run("Utils/BodyParts.js");
run("Utils/BodyPosition.js");
run("Utils/GoldUtils.js");
run("Utils/TAJUtils.js");
run("Utils/TimeUtils.js");
run("Utils/LegacyUtils.js");
run("Utils/MediaUtils.js");

run("Session/History.js");

run("Session/Tasks.js");
run("Startup/UpdateVariables.js");
run("Stroking/Stroke.js");
run("Stroking/Edge.js");
run("Stroking/Anal.js");
run("Stroking/Blowing.js");
run("Stroking/Taunt/StrokeAndTeaseTaunts.js");
run("Session/Modules/Pain/SmallPunishment.js");

//Dynamic module stuff
run("Session/Modules/Dynamic/DynamicModuleBuilder.js");

run("Chore/Chore.js");
run("Chore/Room.js");


run("Session/Orgasm/CEI/CEIHandler.js");
run('Session/End/ChastityTraining/ChastitySpecialTask.js');

run('Session/End/AnalTraining/AnalTrainingTasks.js');

run('Session/End/BlowjobTraining/BlowjobTrainingTasks.js');


run("Assistant/Assistant.js");
updatePictureSet();

run("Session/Session.js");
run("Session/Modules/LineWriting.js");
run("Session/End/Games/EndGames.js");

run("Startup/CrazyDommeMode.js");
run("Personality/SetupMood.js");

//Toys
run("Toys/Toys.js");

run("Startup/PictureSelector.js");

run("Rules/DynamicRules.js");
run("Rules/EveningRoutine.js");

run("Session/Modules/Games/Games.js");

run("Dungeon/Punishments/PunishmentBuilder.js");

run("Startup/Versioning/VersionChecker.js");

run('Dungeon/Punishments/Tasks/TaskBuilder.js');

run('Academy/Classes/ClassHandler.js');

run('Assistant/Menu.js');

afterLoadBodyParts();

//Update devotion only if the setup is complete which means the variable must exist
if(isVar(VARIABLE.DEVOTION)) {
    run("Settings/UpdateDevotion.js");
}

if(getVar("shopUnlockAll", false)) run("Shop/UnlockAll.js");

let endMillis = new Date().getTime();
let waitTime = 3500;
if(endMillis - startMillis < waitTime) {
    sleep(Math.floor(waitTime - (endMillis - startMillis)), 'MILLISECONDS');
}

setTempVar(VARIABLE.CURRENT_SESSION_ACTIVE, false);

//Real interaction starts here!
if(!getVar(VARIABLE.FINISHED_SETUP, false)) run("Startup/Setup.js");

if(!getVar(VARIABLE.FINISHED_FIRST_SESSION, false)) run("Session/FirstSession.js");

setSender(1);

//TODO: Academy

//Full time specific checks are made in this file (we need it for non full time too)
run("Startup/FullTime/FullTimeCheck.js");

//run("Session/StartSession.js");
run("Assistant/AssistantLobby.js");
