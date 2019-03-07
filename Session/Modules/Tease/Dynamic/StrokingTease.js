{
    if(tryRunModuleFetchId(2)) {
        sendMessage("Go ahead %SlaveName% and start stroking that %Cock%");
        startStroking(60);

        //TODO: Taunts

        let startDate = setDate();
        startDate.addMinute(randomInteger(8, 15));

        while (!startDate.hasPassed()) {
            const randomModule = randomInteger(0, 12);
            switch (randomModule) {
                case 0:
                    sendMessage('I want you to stroke the whole %Cock%!');
                    break;
                case 1:
                    sendMessage('I want you to only stroke with your thumb and index finger %Grin%');

                    if (isChance(25)) {
                        //TODO: New rule? So small sound?
                        sendMessage('Your %Cock% is so small that this should be the only way for you to masturbate %Lol%');
                    }

                    break;
                case 2:
                    sendMessage('Only stroke the shaft for now %EmoteHappy%');
                    break;
                case 3:
                    sendMessage('Go ahead and stroke only the tip');
                    break;
                case 4:
                    sendMessage('Go ahead and stroke only the tip with your thumb and index finger');
                    break;
                case 5:
                    sendMessage('Only use one finger for now and rub it up and down your %Cock% %Grin%');
                    break;
                case 6:
                    //TODO: Punish with no lube or refer to certain lube?
                    sendMessage('Start palming your cock head. Use some lube if needed %EmoteHappy%');
                    break;
                case 7:
                    sendMessage('Go ahead and role your %Cock% between your hands. Imagine starting a fire %Grin%');
                    break;
                case 8:
                    sendMessage('Try stroking with both hands');
                    sendMessage('It\'s probably impossible with such a small %Cock% but this might be even more humiliating then %Lol%');
                    break;
                case 9:
                    sendMessage('Use one hand to pull back your foreskin and use the other hand to stroke' + random("", ". Tip only %Grin%"));
                    break;
                case 10:
                    sendMessage('Instead of stroking I want you to twist your hand around that shaft for now');
                    break;
                case 11:
                    sendMessage('Start twisting your hand around the tip of your cock while pulling back your foreskin with the other hand %Grin%');
                    break;
                case 12:
                    sendMessage('Only stroke ' + random("up", "down") + " for now %EmoteHappy%");
                    break;
            }

            sleep(20, 45);
        }
    }
}