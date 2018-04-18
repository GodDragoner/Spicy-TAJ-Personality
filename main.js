showImage("Images/Spicy/Grounding/BlackBase.jpg");
run("Variables.js");
run("Chat/ChatUtil.js");
run("Slaves/Slaves.js");
run("Session/Orgasm.js");

sendSystemMessage("Launching Spicy " + getVar("personalityVersion"));

run("Utils/RandomUtils.js");
run("Utils/StringUtils.js");
run("Startup/UpdateVariables.js");
run("Stroking/Stroke.js");
run("Stroking/Edge.js");

run("Assistant/Assistant.js");
updatePictureSet();

run("Session/End/Games/EndGames.js");

run("Startup/CrazyDommeMode.js");
run("Personality/SetupMood.js");

//Toys
run("Toys/ChastityCage.js");

//Update devotion only if the setup is complete which means the variable must exist
if(isVar("subDevotion")) {
    run("Settings/UpdateDevotion.js");
}

if(getVar("shopUnlockAll", false)) run("Shop/UnlockAll.js");

if(!getVar(VARIABLE_FINISHED_SETUP, false)) run("Startup/Setup.js");

if(!getVar(VARIABLE_FINISHED_FIRST_SESSION, false)) run("Session/FirstSession.js");

showImage("Images/Spicy/Intro/SpicyGif*.gif", 7);

//TODO: Academy

if(isFullTime()) {
    run("Startup/FullTime/FullTimeCheckup.js");
}

run("Assistant/AssistantLobby.js");