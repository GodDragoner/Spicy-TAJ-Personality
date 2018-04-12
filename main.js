showImage("Images/Spicy/Grounding/BlackBase.jpg");
run("Chat/ChatUtil.js");

sendSystemMessage("Launching Spicy " + getVar("personalityVersion"));

run("Utils/RandomUtils.js");
run("Utils/StringUtils.js");
run("Startup/UpdateVariables.js");

run("Assistant/Assistant.js");
updatePictureSet();

run("Session/End/Games/EndGames.js");

run("Startup/CrazyDommeMode.js");
run("Personality/SetupMood.js");

//Update devotion only if the setup is complete which means the variable must exist
if(isVar("subDevotion")) {
    run("Settings/UpdateDevotion.js");
}

if(getVar("shopUnlockAll", false)) run("Shop/UnlockAll.js");

if(!getVar("finishedSetup", false)) run("Startup/Setup.js");

if(!getVar("finishedFirstSession", false)) run("Session/FirstSession.js");

sendVirtualAssistantMessage("Hello");