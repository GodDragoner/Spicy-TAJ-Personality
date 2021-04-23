if (tryRunPunishmentFetchId(MODULE.LINE_WRITING)) {
    sendMessage('%SlaveName%');

    //First punishment
    if (PUNISHMENTS_DONE === 1) {
        sendMessage('Let\'s start with something nice and easy');
    }

    sendMessage("I'm grounding you to your computer with a rather simple task.. ");
    sendMessage("I'm turning the screen black");
    sendMessage("Every once in a while a few numbers will appear and you will have exactly 5 seconds to write back the number colored red ");//#DT4
    sendMessage("If not I promise you your %DomHonorific% won't be happy...");
    sendMessage("And ohh...");
    sendMessage("It's gonna cost you 10 gold and the punishment prolongs");
    sendMessage("Enjoy!");

    let donetime = setDate();
    donetime.addSecond(randomInteger(3*60, 5*60));
    lockImages();

    while (!(donetime.hasPassed())) {
        showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
        sleep(randomInteger(3, 30));

        const number = randomInteger(1, 9);

        showImage("Images/Spicy/Punishment/Grounding/Numbers/Black" + number + ".*", 1);

        let answer = createInput(5);

        while (true) {
            if (answer.isTimeout()) {
                sendMessage("Took you too long...");
                showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                changeMeritLow(true);
                addGold(-10);
                donetime = donetime.addSecond(randomInteger(60, 180));
                break;
            } else {
                if (answer.isInteger()) {
                    if (answer.getInteger() == number) {
                        sendMessage("Correct");
                        showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                        break;
                    }
                }

                //Either wrong integer or no integer
                sendMessage("Wrong... You were supposed to write " + number + "...");
                showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                changeMeritLow(true);
                addGold(-10);
                donetime = donetime.addSecond(randomInteger(60, 180));
                break;
            }
        }
    }

    unlockImages();
    /*
    case 1 :
        sendMessage("Just a minute.."); //#DT4
        setVar("GroundingSet",randomInteger(440, 680));
        sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4
        break;
    case 2 :
        sendMessage("Just a minute.."); //#DT4
        setVar("GroundingSet",randomInteger(600, 840));
        sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4

        break;
    case 3 :
        sendMessage("Just a minute.."); //#DT4
        setVar("GroundingSet",randomInteger(800, 1100));
        sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4
        break;

    donetime=setDate();
    donetime.addSecond(getVar("GroundingSet"));

    while(!(donetime.hasPassed())){
//(Task)
        showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
        wait(randomInteger(3,30));
        answerval= randomInteger(1,9);

        showImage("Images/Spicy/Punishment/Grounding/Numbers/Black"+answerval+".*",1);

        //here to prompt an answer or does that hint too much?
        answer=sendInput("",5);
        while (true){
            if( answer.isTimeout()) {
                sendMessage("Time out.." );
                showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                changeMeritLow(true);
                setVar(VARIABLE.GOLD,getVar(VARIABLE.GOLD)-10);
                //@TempFlag(PunishmentComplete)
                donetime=donetime.addSecond(randomInteger(60,180));
                break;
            } else{
                if(answer.isInteger()) {
                    if ( answer.getInteger() == answerval){
                        sendMessage("Correct");
                        showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                        break;
                    }
                    else{ sendMessage("Wrong.. You were supposed to write "+answerval+".. ");
                        showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                        changeMeritLow(true);
                        setVar(VARIABLE.GOLD,getVar(VARIABLE.GOLD)-10);
                        //@TempFlag(PunishmentComplete)
                        donetime=donetime.addSecond(randomInteger(60,180));
                        break;
                    }
                }else {
                    sendMessage("Wrong.. You were supposed to write "+answerval+".. that wasn't even a number %SlaveName% ");
                    showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                    changeMeritLow(true);
                    setVar(VARIABLE.GOLD,getVar(VARIABLE.GOLD)-10);
                    //@TempFlag(PunishmentComplete)
                    donetime=donetime.addSecond(randomInteger(60,180));
                    break;
                }
            }
        }
*/
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