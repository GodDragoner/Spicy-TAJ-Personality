{
    //No punishments with higher than medium should be line writing
    if (PUNISHMENT_CURRENT_LEVEL.id > PUNISHMENT_LEVEL_MEDIUM.id) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else if (tryRunPunishmentFetchId(MODULE_LINE_WRITING)) {
        sendMessage('%SlaveName%');

        //First punishment
        if (PUNISHMENTS_DONE === 1) {
            sendMessage('Let\'s start with some nice and easy line writing');
        } else {
            sendMessage('Be ready to repeat the following lines to me %EmoteHappy%');
        }

        let sentences = [];

        sentences.push("I need to be on my very best behaviour and I owe it to my %DomHonorific% to try much hard",
            "I'm in need of constant discipline, even a short moment without and I cannot comprehend the dire consequences",
            "I dream of the day where I will be placed in a chastity belt, knowing that in just a moment the key will be destroyed",
            "I have been bad and this is my punishment, wasting time, doing nothing constructive or anything recreational",
            "I should try much much harder to be a proper servant. I'm blessed that %DomHonorific% %DomName% is merciful",
            "I should count myself lucky because this could be harsh caning instead",
            "I have been a bad boy and deserve to be punished to my dommes liking",
            "I need chastity, I crave chastity, I dream of chastity, I believe in chastity, I am chastity",
            "I will never stop serving, I will never be free, I am not equal to women nor real men",
            "I wake up, I serve, I serve some more, I sleep. Horny...",
            "I love it when my cock is finally granted attention, being bad doesn't make that happen.",
            "I need to stop being bad because it means I won't have much playtime with HER cock.",
            "I need to realize this isn't about me, it's about making her happy.");



        if (CUCKOLD_LIMIT.isAllowed()) {
            sentences.push("I will cry in joy whenever my %DomHonorific% is fucked by my friends or complete strangers.");
            sentences.push("If it would please my %DomHonorific% %DomName% I would gladly suck a cock...")
        }

        let success = true;

        for (let x = 0; x < PUNISHMENT_CURRENT_LEVEL.id + 1; x++) {
            let randomSentence = sentences[randomInteger(0, sentences.length - 1)];

            let times = randomInteger((PUNISHMENT_CURRENT_LEVEL.id + 1) * 4, (PUNISHMENT_CURRENT_LEVEL.id + 3) * 4);

            let tries = randomInteger(2, 3);

            success = introduceLineWriting(randomSentence, times, tries, x > 0);


            if (!success) {
                sendMessage("Lets stop this...");
                sendMessage("If you can't complete a simple punishment");
                sendMessage("Then you have a long way to go to redeem yourself...");
                run("Dungeon/PunishmentBase.js");
                break;
            } else {
                sendMessage("Oh %SlaveName% " + random("thats so true", "I agree", "you're soo right!", "for once I think you understand %Grin%"));
            }
        }

        if (success) {
            sendMessage('I think that\'s enough for now %Grin%');
        }

        setPunishmentTransitionHandler({
            handleTransition: function (nextCategory, nextLevel) {
                //First punishment
                if (PUNISHMENTS_DONE === 1) {
                    sendMessage('Now that we\'ve done a little warmup let\'s continue with something more challenging');
                } else {
                    sendMessage('I hope you enjoyed that "break" because it\'s not gonna get easier %Grin%');
                }
            }
        })
    }
}