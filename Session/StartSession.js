setDate(VARIABLE_CURRENT_SESSION_DATE);
//TODO: Special day test (birthday etc.)

var greeting = ["Hello", "Greetings", "Hey", "Hi"];

var date = new Date();
if(date.getHours() > 6 && date.getHours() < 12) {
    greeting.push("Good morning");
} else if(date.getHours() >= 12 && date.getHours() < 18) {
    greeting.push("Good afternoon");
} else if(date.getHours() >= 18 && date.getHours() < 24) {
    greeting.push("Good evening");
}

playSound("Audio/Spicy/Starts/Hello/*.mp3");
answer = sendInput(greeting[randomInteger(0, greeting.length - 1)] + " %SlaveName%", 20);
if(answer.isTimeout()) {
    changeMeritHigh(true);
    sendMessage(random("Not feeling like greeting your domme today", "Seems like you are not in the mood to greet me", "Being impolite today", "Being rude today") + " %SlaveName%?");
    sendMessage("I won't tolerate " + random("impolite", "rude", "disrespectful", "ignorant") + " behaviour!")
    //TODO: Punish
} else if(answer.containsIgnoreCase("Hello", "Greetings", "Hey", "Hi")) {
    changeMeritLow(false);
}

if(getVar(VARIABLE_SESSION_COUNTER, 0) == 0) {
    unlockChastityStart();
} else {
    if(isVar(VARIABLE_LOCKED_UP_UNTIL) && !getDate(VARIABLE_LOCKED_UP_UNTIL).hasPassed()) {
        sendMessage(random("As you well know", "As you know", "As you should know", "Oh well", "Oh my", "Poor you"));
        lockImages();
        showPicture("Images/Spicy/Chastity/ChastityOffDenied/*.*", 5);
        sendMessage(random("You're under strict lockdown", "You're strictly locked", "You're not gonna be released"), 5);
        //, "You are still being punished", "You're serving a punishment" TODO: Punishment flag
        sendMessage(random("Meaning there will be no release from that %Cage%...", "Meaning you won't be released for this session", "So there won't be any release today"), 5);
        unlockImages();
    } else {
        if(getVar(VARIABLE_LOCKED_DAYS_IN_ROW, 0) > getVar(VARIABLE_LOCKED_UP_LIMIT)) {
            unlockChastityStart();
        } else {
            var choice = randomInteger(1, 100);
            if (getVar(VARIABLE_HAPPINESS) > getVar(VARIABLE_ANGER)) {
                choice += randomInteger(1, 25);
            } else {
                choice -= randomInteger(1, 25);
            }

            if (getVar(VARIABLE_LUST) > 30) {
                choice += randomInteger(1, 25);
            }


            var choices = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 1, 5, 5, 10, 10, 15, 25, 30, 35, 40];
            var index = 0;

            if(getMonthlyGoodDays() <= getMonthlyBadDays()) {
                index += 1;
            }

            if(ACTIVE_PERSONALITY_STRICTNESS == 1) {
                choices = [35, 40 , 45, 50, 55, 60, 65, 70, 75, 80, 5, 10, 10, 15, 15, 20, 30, 35, 40, 50];
            } else if(ACTIVE_PERSONALITY_STRICTNESS == 2) {
                choices = [40, 45, 50, 55, 60, 70, 75, 80, 85, 90, 10, 15, 15, 20, 20, 30, 40, 50, 60, 70];
            }

            if(!isVar("chastityMode")) {
                index += 10;
            }

            var mood = getMood();
            if(mood == PLEASED_MOOD) {
                index += 2;
            } else if(mood == NEUTRLA_MOOD) {
                index += 4;
            } else if(mood == ANNOYED_MOOD) {
                index += 6;
            } else if(mood == VERY_ANNOYED_MOOD) {
                index += 8;
            }

            var choiceToReach = choices[index];

            //Unlock
            if(choice >= choiceToReach) {
                unlockChastityStart();
            }
            //Denied
            else {
                if(getVar(VARIABLE_CHASTITY_ON)) {
                    lockImages();
                    sendMessage(random("I don't think you should be unlocked" , "You won't be unlocked today", "There won't be any release today") + " %SlaveName%", 0);
                    showPicture("Images/Spicy/Chastity/ChastityOffDenied/*.*", 5);
                    sendMessage(random("I'm sorry", "Just desperation", "Only agony and crazed lust", "Only despair %Grin%", "No pleasure today"), 5);
                    sendMessage(random("Enjoy", "Maybe it's better staying locked", "Learn to appreciate being locked away", "Just let the happiness of obeying flow through you"), 5);
                    unlockImages();
                } else {
                    lockChastityCage();
                }
            }
        }
    }
}

if(randomInteger(1, 100) <= 50) {
    run("Session/Start/Neutral/*.js");
} else if(getVar(VARIABLE_CHASTITY_ON)) {
    //run("Session/Start/Chastity/*.js");
    run("Session/Start/Neutral/*.js");
} else {
    run("Session/Start/NoChastity/*.js");
}

if(getVar(VARIABLE_CHASTITY_ON)) {
    setVar(VARIABLE_LOCKED_DAYS_IN_ROW, getVar(VARIABLE_LOCKED_DAYS_IN_ROW) + 1);
} else if(getVar(VARIABLE_LOCKED_DAYS_IN_ROW) > 0) {
    setVar(VARIABLE_LOCKED_DAYS_IN_ROW, 0);
}

run("Session/Modules/DecideModule.js");

function unlockChastityStart() {
    if(getVar(VARIABLE_HAS_CHASTITY) && getVar(VARIABLE_CHASTITY_ON)) {
        unlockChastityCage();
    }
}

