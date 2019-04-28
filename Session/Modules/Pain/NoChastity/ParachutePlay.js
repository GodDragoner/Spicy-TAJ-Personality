{
    //TODO: Do stuff without parachute using strings  if no parachute
    if (getCBTLimit() != LIMIT_ASKED_YES || !PARACHUTE_TOY.hasToy() || !PARACHUTE_TOY.isPlayAllowed()) {
        runModuleCategory('Pain');
    } else if (tryRunModuleFetchId()) {
        if(PARACHUTE_TOY.fetchToy()) {
            sendMessage('Now we\'re going to have some fun with it!');
            sendMessage('Attach it while you\'re at it %Lol%');
            sendMessage('Tell me when you are ready');
            waitForDone();
            PARACHUTE_TOY.setToyOn(true);

            //TODO: Drop weight from height

            //Weight
            if(isChance(50)) {
                attachWeightToParachute();
                sendMessage('%Good%');

                let module = randomInteger(0, 2);

                //TODO: Count squats and jumping jacks
                if(module === 0) {
                    goToCorner(getCornerTime()*randomInteger(2, 3));
                } else if(module === 1) {
                    sendMessage('I think it\'s time for some exercise! %Lol%');
                    sendMessage('You\'re going to do squats for me...');
                    sendMessage('You\'ll hear 3 commands');
                    sendMessage('Down - Squat down and stay down...');
                    sendMessage('Up - you may stand and relax');
                    sendMessage('And on your toes - Stand on your toes, keep your balance...');
                    sendMessage('If you\'re squatting and hear "on your toes", then stand on your toes but stay down in the squat! %Grin%');
                    sendMessage('Any command after "on your toes" allows you to put your feet completely on the ground again');

                    if(!feelsLikePunishingSlave()) {
                        sendMessage('Every time you squat I want the weight to touch the ground');
                    } else {
                        sendMessage('Don\'t even dare to let the weight touch the ground when you squat down!');
                    }

                    sendMessage('Which means you should the length of your rope or whatever you are using accordingly', 10);

                    sendMessage('Now hands above your head and get ready %EmoteHappy%');


                    //TODO: Based on strictness etc?
                    let durationMillis= randomInteger(90, 150)*1000;
                    let taskWatch = new StopWatch();

                    taskWatch.start();


                    let currentId = -1;
                    while(taskWatch.getTime() < durationMillis) {
                        let newId = randomInteger(0, 2);

                        //No same command twice in a row
                        while(newId === currentId) {
                            newId = randomInteger(0, 2);
                        }

                        currentId = newId;

                        if(currentId === 0) {
                            playSound('Audio/Spicy/Commands/Up/*.mp3');
                        } else if(currentId === 1) {
                            playSound('Audio/Spicy/Commands/Down/*.mp3');
                        } else if(currentId === 2) {
                            playSound('Audio/Spicy/Commands/OnYourToes.mp3');
                        }
                    }

                    taskWatch.stop();
                    returnSlave();
                } else if(module === 2) {
                    sendMessage('I think it\'s time for some exercise! %Lol%');
                    sendMessage('You\'re going to do jumping jacks for me...');
                    sendMessage('I will give you a metronome and you are gonna do jumping jacks until it stops %Grin%');
                    sendMessage('Get ready we will start once you hear the beat!');

                    startStroking(30);

                    //TODO: Based on strictness etc?
                    sleep(randomInteger(60, 140));
                    returnSlave();
                }

            } else {
                let module = randomInteger(0, 1);

                if(module === 1) {
                    //TODO: Save for later
                    if(sendYesOrNoQuestion('Do you own an office chair where you can change the height?')) {
                        sendMessage('Great! %EmoteHappy%');
                    } else {
                        module = 0;
                        sendMessage('Too bad %EmoteSad%')
                    }
                }

                if(module === 0) {
                    sendMessage('I have a fun little idea for my amusement');
                    sendMessage('It will require your patience!');
                    sendMessage('Now read these instructions carefully!');
                    sendMessage('I want you to tie up your parachute...');
                    sendMessage('It should pull your balls behind you');
                    sendMessage('Forcing you to bend over and stand on your toes to prevent yourself from pulling it too hard');
                    sendMessage('I recommend somehow securing the chain to a door handle or something of similar height');
                    sendMessage('While doing that you might want to stand on something that puts you above the ground slightly');
                    sendMessage('When you are done you should remove it so it actually pulls your balls back');
                    sendMessage('In 60 seconds you will hear my bell meaning that you can start');
                    sendMessage('So make sure to be ready by then');
                    sendMessage('When you hear the second bell I want you to return to me');
                    sendMessage('Now get started %SlaveName%');
                    sleep(60);
                    sendMessage('Begin!', 0);
                    playBellSound();

                    sleep(randomInteger(120*ACTIVE_PERSONALITY_STRICTNESS, 300*ACTIVE_PERSONALITY_STRICTNESS));
                    returnSlave();
                } else if(module === 1) {
                    sendMessage('I want you to sit on your office chair and pull the lever so it goes down to its lowest level');
                    sendMessage('Next I want you down on the floor on your back');
                    sendMessage('Tie the parachute to the office chair');
                    sendMessage('It should locked high enough so it puts some pull on your %Balls%');
                    sendMessage('Next you are to pull the lever so the chair goes up');
                    sendMessage('I want you to keep your %Ass% on the ground!');
                    sendMessage('Wait until the chair won\'t go up anymore because either you are pulling it down or it has reached its max height');
                    sendMessage('Now stay in this position');
                    sendMessage('When you here my second bell I want you to go and drag the chair to the furthest away room in your house and then back to me');
                    sendMessage('All while staying on your back. You are allowed to lift your ass then though');
                    sendMessage('This will be fun to watch %Lol%');
                    sendMessage('So here we go');
                    sendMessage('Time starts in 60 seconds with my bell', 60);
                    sendMessage('Go!', 0);
                    playBellSound();
                    sleep(randomInteger(120*ACTIVE_PERSONALITY_STRICTNESS, 300*ACTIVE_PERSONALITY_STRICTNESS));
                    playBellSound();
                    sendMessage('Now go ahead and drag that chair behind you %Grin%');
                    sendMessage('Report to me when you are done');
                    waitForDone();
                }
            }

            //TODO: Ask if balls hurt, interact
            sendMessage('You can remove the parachute now %SlaveName% %EmoteHappy%');
            sendMessage('I hope your balls aren\'t falling of yet %Lol%');

            //TODO: That was fun message

            PARACHUTE_TOY.setToyOn(false);
        } else {
            sendMessage("I guess I have to think of something different to play with your balls");

            run('Session/Modules/Pain/Dynamic/BallBusting.js');
        }

    }
}