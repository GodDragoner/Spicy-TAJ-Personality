{
    if (!VERBAL_HUMILIATION_LIMIT.isAllowed() || isInChastity() && !hasMagicWand()) {
        runModuleCategory(CATEGORY_HUMILATION);
    } else if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.EDGING)) {
        if(getVar(VARIABLE.BETA_HUMILIATIONS_DONE, 0) === 0) {
            sendMessage('We both know you are a little beta bitch boy %Grin%');
            sendMessage('And I think we should burn this message into your mind');
            sendMessage('You need to understand...');
            sendMessage('That you don\'t deserve to see any female nudity');

            sendMessage('That your %Cock% is way to small to ever please a woman');
            sendMessage('Way to small to even count as a cock %Wicked%');

            if(SISSY_LIMIT.isAllowed()) {
                if(sendYesOrNoQuestion('I mean it\'s a little clitty anyway, isn\'t it? %Lol%')) {
                    sendMessage('You know that you\'re only purpose is to be a fuckhole for men');
                    sendMessage('No need for a big cock yourself anyway %Wicked%');
                } else {
                    sendMessage('Just keep lying to yourself %Lol%');
                }
            }

            sendMessage('I mean you are lucky you even get to spurt your cute little loser cummies');
            sendMessage('You are lucky to have me allow you to cum at all');
            sendMessage('If I wasn\'t around there would be no way you should ever cum');
            sendMessage('Betas always need the permission of a female to cum %Grin%');
            sendMessage('And you\'ll happily do so');
            sendMessage('Watching some beta porn');
            sendMessage('Ruining your orgasm on my command');

            if(CEI_LIMIT.isAllowed()) {
                sendMessage('And slurping up that beta seed of yours afterwards');
            } else {
                sendMessage('I wish you\'d actually lick it up afterwards');
                sendMessage('But well, I can\'t force you against your will');
                sendMessage('Maybe one day you\'ll understand that this is the only place where your cum should go');
            }

            sendMessage('That\'s right I control you');
            sendMessage('Women control betas');
            sendMessage('Women control you %Wicked%');
            sendMessage('And that makes you even more of a pathetic little loser');
            sendMessage('You\'re nothing but a doormat for any woman');
            sendMessage('You\'re a disposable toy that\'s just so much fun to break');
            sendMessage('You are only of interest to woman because we enjoy seeing a beta like you suffer at our hands');

            sendMessage('And to make you understand that');
            sendMessage('I will make you loser edge to humiliating pictures');
            sendMessage('You will learn to embrace your beta loser life %Lol%');

            sendMessage('For this purpose I need a folder containing beta captions, small penis humiliation pictures and so on and forth');

            sendMessage('Now to get this all ready and setup I need to know...');

            if(sendYesOrNoQuestion('Does the folder you plan on using contain more than just the beta pictures?')) {
                setVar(VARIABLE.BETA_HUMILIATION_FOLDER_TAGGED, true);
                sendMessage('Then you\'ll have to tag the pictures inside the folder using the integrated tool in TAJ %EmoteHappy%');
            } else {
                setVar(VARIABLE.BETA_HUMILIATION_FOLDER_TAGGED, false);
                sendMessage('Well you save on some tagging then %Grin%');
            }

            sendMessage('So what I need you to do is create folder containing images of beta captions, small penis humiliation and so on and forth.');
            sendMessage('Find some images or reddit or similar');
            sendMessage('Or maybe you already have one you naughty %SlaveName% %Grin%');

            sendMessage('I\'ll wait till you have found at least 5 pictures');
            sendMessage('Make sure to pick your favourites %Grin%');
            sendMessage('And then tell me once you are done');

            if(getVar(VARIABLE.BETA_HUMILIATION_FOLDER_TAGGED, false)) {
                sendMessage('Make sure to tag them as beta/humiliation/sph using the tool %Wicked%');
            }

            waitForDone(100000);

            sendMessage('Great!');
            sendMessage('Now go ahead and select the folder you want to use');


            while(true) {
                delVar(VARIABLE.BETA_HUMILIATION_FOLDER);

                const RunnableClass = Java.type('java.lang.Runnable');
                let CustomRunnable = Java.extend(RunnableClass, {
                    run: function () {
                        let directory = getFolderFromSelector('Beta Humiliation Image Folder');
                        setVar(VARIABLE.BETA_HUMILIATION_FOLDER, directory.getAbsolutePath());
                    }
                });
                runGui(new CustomRunnable());

                while(!isVar(VARIABLE.BETA_HUMILIATION_FOLDER)) {
                    sleep(100, "MILLISECONDS");
                }

                let directory = new java.io.File(getVar(VARIABLE.BETA_HUMILIATION_FOLDER));

                if(sendYesOrNoQuestion('Are you sure the folder ' + directory.getPath() + ' is correct?')) {
                    break;
                } else {
                    sendMessage('Then pick again %EmoteHappy%');
                }
            }

            sendMessage('Now that\'s done...');
            sendMessage('Let\'s not waste anymore time %Grin%');
        } else {
            sendMessage('I feel like we should have you look at some more beta humiliation');
            sendMessage('And make you suffer real good %Grin%');

            sendMessage('Let\'s start with adding 5 new images to the folder');
            sendMessage('Go ahead, find some, place them in the folder, if needed tag them and tell me once you are done');
            waitForDone(100000);
        }

        let files = PictureHandler.handler.getTaggedPicturesExact(new java.io.File(getVar(VARIABLE.BETA_HUMILIATION_FOLDER)));

        incrementVar(VARIABLE.BETA_HUMILIATIONS_DONE, 1);

        if(isInChastity()) {
            readyForVibratingCage();
        }

        //Min 13, max is 24 with worst mood and strictness 2
        let edgesToDoTotal = Math.max(13, getMood() + getStrictnessForCharacter()*10);

        CURRENT_EDGE_MODE = EDGE_MODE.SKIP_TAUNTS;

        while(edgesToDoTotal > 0) {
            lockImages();

            if(getVar(VARIABLE.BETA_HUMILIATION_FOLDER_TAGGED, false)) {
                let mediaFolder = new MediaFolder(MediaType.IMAGE, new java.io.File(getVar(VARIABLE.BETA_HUMILIATION_FOLDER)));
                if(isChance(50)) {
                    showImage(getRandomTaggedImageFromMediaFolder(mediaFolder, [PictureTag.SPH], []));
                } else {
                    showImage(getRandomTaggedImageFromMediaFolder(mediaFolder, [PictureTag.BETA, PictureTag.HUMILIATION], []));
                }
            } else {
                let resultingFile = random(files).getFile();
                showImage(resultingFile);
            }

            sendMessage(random('Accept your pathetic beta life', 'Stare at this picture', 'Let\'s drill this message into your mind', 'Doesn\'t this picture speak so much truth?',
                'This 100% applies to you %Lol%', 'So much truth about you in one picture', 'Suffer for being a pathetic beta boy', 'Suffer loser',
                'Embrace your beta life', 'Embrace this message loser', 'A betas life in a nutshell'));

            let edgesToDo = randomInteger(2, 6);

            //Decrease the total before we decrease the edgesToDo down to 0
            edgesToDoTotal -= edgesToDo;

            sendMessage(random('I think ' + edgesToDo + ' edges will be sufficient', 'I think I\'ll make you do ' + edgesToDo + ' edges', 'I think you should pay tribute with ' + edgesToDo + ' edges',
                'This message is at least worth ' + edgesToDo + ' edges', 'Let\'s do ' + edgesToDo + ' edges for', 'Let\'s embrace this message with ' + edgesToDo + ' edges',
                'Let\'s celebrate your beta life with ' + edgesToDo + ' edges', 'Let that message sink in while doing ' + edgesToDo + ' edges'));

            while(edgesToDo > 0) {
                sleep(randomInteger(10, 15));
                startEdging();
                edgesToDo--;
            }

            if(isChance(25 + MOOD.TEASE.getChanceBooster())) {
                sendMessage('I think we should do one last edge %Grin%');
                sendMessage('And I think you should hold that edge');
                startEdging(getEdgeHoldSeconds());
                edgesToDoTotal -= 1;
            }

            sendMessage('%LetEdgeFade%');
            sleep(randomInteger(15, 30));
            sendMessage('%Now% %Grin%');
        }


        unlockImages();

        sendMessage('I think that\'s enough for now %Grin%');

        sendMessage('I don\'t want to break %MyCock% poor %Cock%');

        if(isChance(25)) {
            sendMessage('Neither do I want to break your mind');
            sendMessage('Even though it sounds like fun %Wicked%');
        }

        if(isChance(25)) {
            sendMessage('I hope you accept your pathetic loser life now');
            sendMessage('Because it\'s definitely not the last time I am gonna remind you of it %EmoteHappy%');
        }

        CURRENT_EDGE_MODE = EDGE_MODE.NORMAL;
    }

}