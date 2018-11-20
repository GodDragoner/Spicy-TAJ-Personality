{
    //End session
    while (!getDate(VARIABLE_CURRENT_SESSION_DATE).clone().addMinute(getVar(VARIABLE_DEVOTION)).hasPassed()) {
        const moduleChance = 50;
        let teaseModuleChance = moduleChance;
        const teaseModuleAdditions = [
            //Personality strictness 1
            teaseModuleChance / 2,
            teaseModuleChance / 3,
            0,
            -teaseModuleChance / 4,
            -teaseModuleChance / 3,
            //Personality strictness 2
            teaseModuleChance / 3,
            teaseModuleChance / 4,
            0,
            -teaseModuleChance / 3,
            -teaseModuleChance / 2,
            //Personality strictness 3
            teaseModuleChance / 4,
            teaseModuleChance / 5,
            0,
            -(teaseModuleChance - teaseModuleChance / 4),
            -(teaseModuleChance - teaseModuleChance / 5)
        ];

        let index = 0;
        if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
            index += 5;
        } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
            index += 10;
        }

        if (getMood() == PLEASED_MOOD) {
            index += 1;
        } else if (getMood() == NEUTRAL_MOOD) {
            index += 2;
        } else if (getMood() == ANNOYED_MOOD) {
            index += 3;
        } else if (getMood() == VERY_ANNOYED_MOOD) {
            index += 4;
        }

        //Now apply the changes
        teaseModuleChance += teaseModuleAdditions[index];

        if (getVar(VARIABLE_PUNISHMENT_POINTS) >= 250) {
            teaseModuleChance -= 10;
        }

        if (getVar(VARIABLE_ANGER) > 25) {
            teaseModuleChance -= 10;
        }

        let sissyModuleChance = moduleChance;
        let painModuleChance = moduleChance;
        let slaveModuleChance = moduleChance;
        let humiliationModuleChance = moduleChance;

        const max = teaseModuleChance + sissyModuleChance + painModuleChance + slaveModuleChance + humiliationModuleChance;
        const moduleIndicator = randomInteger(0, max);

        if (moduleIndicator < teaseModuleChance) {
            if (!isInChastity()) {
                //TODO: More Dynamic
                /*if(isChance(50)) {
                    run("Session/Modules/Tease/Neutral/*.js");
                } else {
                    run("Session/Modules/Tease/NoChastity/*.js");
                }*/

                run(random("Session/Modules/Tease/NoChastity/*.js", "Session/Modules/Tease/Dymanic/*.js", "Session/Modules/Tease/Neutral/*.js"));
            } else {
                //TODO: No chastity
                run("Session/Modules/Tease/Neutral/*.js");
                /*if(isChance(50)) {
                    run("Session/Modules/Tease/Neutral/*.js");
                } else {
                    run("Session/Modules/Tease/Neutral/*.js");
                }*/
            }

        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance) {
            run("Session/Modules/Sissy/Dynamic/*.js");
        } else if (moduleIndicator < painModuleChance + sissyModuleChance + teaseModuleChance) {
            run("Session/Modules/Pain/Dynamic/*.js");
        } else if (moduleIndicator < painModuleChance + sissyModuleChance + teaseModuleChance + slaveModuleChance) {
            run("Session/Modules/Slave/Neutral/*.js");
        } else if (moduleIndicator < painModuleChance + sissyModuleChance + teaseModuleChance + slaveModuleChance + humiliationModuleChance) {
            run("Session/Modules/Humiliation/Dynamic/*.js");
        }

        sendMessage('Some Link here!');
        //TODO: Links or something
    }

    //TODO: End session
}



