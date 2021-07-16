{
    if (!FEET_LIMIT.isAllowed() || isInChastity() && !hasMagicWand()) {
        runModuleCategory(CATEGORY_TEASE);
    } else if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.EDGING)) {
        if(getVar(VARIABLE.FEET_WORSHIPS_DONE, 0) === 0) {
            sendMessage('I feel like trying something new %Grin%');
            sendMessage('I already know you are a feet kind of guy');
            sendMessage('Getting off on worshipping a woman\'s beautiful feet');

            if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                sendMessage('I mean it\'s probably the only thing you get to see anyway %Lol%');
            }

            sendMessage('And who would judge, right?');
            sendMessage('Feet can be quite nice');
            sendMessage('Don\'t let society fool you');
            sendMessage('There is nothing wrong with feet %Wicked%');

            sendMessage('And since there a lot of feet out there that require some worshipping, cleaning and massages');
            sendMessage('I think we should put your submissive energy towards dealing with some of that');
            sendMessage('You sadly can\'t really massage or clean the feet in front of you');
            sendMessage('But you can at least learn to worship and value them properly %EmoteHappy%');
            sendMessage('If I was there with you you\'d be on your knees kissing my feet a lot %Moan%');
            sendMessage('Making them feel real good after a long stressful day at work');
            sendMessage('So better prepare you for the future that lies ahead');

            if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                sendMessage('Other women would probably have you do the same %Wicked%');
                sendMessage('Because what else are you useful for? %Lol%');
            }

            sendMessage('So what I need you to do is create folder containing images of feet. Optionally you can use the tag tool to tag them as well');
            sendMessage('Like image tags as face, ass etc.');
            sendMessage('But it\'s not a must');
            sendMessage('I just need you to create and fill a folder with a few files of feet');
            sendMessage('Get them or reddit or similar');
            sendMessage('Or maybe you already have one you naughty %SlaveName% %Grin%');

            sendMessage('I\'ll wait till you have found at least 5 pictures');
            sendMessage('Make sure to pick your favourites %Grin%');
            sendMessage('And then tell me once you are done');

            waitForDone(100000);

            sendMessage('Great!');
            sendMessage('Now go ahead and select the folder you want to use');


            while(true) {
                delVar(VARIABLE.FEET_WORSHIP_FOLDER);

                const RunnableClass = Java.type('java.lang.Runnable');
                let CustomRunnable = Java.extend(RunnableClass, {
                    run: function () {
                        let directory = getFolderFromSelector('Feet Image Folder');
                        setVar(VARIABLE.FEET_WORSHIP_FOLDER, directory.getAbsolutePath());
                    }
                });
                runGui(new CustomRunnable());

                while(!isVar(VARIABLE.FEET_WORSHIP_FOLDER)) {
                    sleep(100, "MILLISECONDS");
                }

                let directory = new java.io.File(getVar(VARIABLE.FEET_WORSHIP_FOLDER));

                if(sendYesOrNoQuestion('Are you sure the folder ' + directory.getPath() + ' is correct?')) {
                    break;
                } else {
                    sendMessage('Then pick again %EmoteHappy%');
                }
            }

            sendMessage('Now that\'s done...');
            sendMessage('Let\'s not waste anymore time %Grin%');
        } else {
            sendMessage('I feel like we should have you look at some more feet');
            sendMessage('And make you worship them real good %Grin%');

            sendMessage('Let\'s start with adding 5 new images to the folder');
            sendMessage('Go ahead, find some, place them in the folder and tell me once you are done');
            waitForDone(100000);
        }

        let files = PictureHandler.handler.getTaggedPicturesExact(new java.io.File(getVar(VARIABLE.FEET_WORSHIP_FOLDER)));

        incrementVar(VARIABLE.FEET_WORSHIPS_DONE, 1);

        if(isInChastity()) {
            readyForVibratingCage();
        }

        //Min 13, max is 24 with worst mood and strictness 2
        let edgesToDoTotal = Math.max(13, getMood() + getStrictnessForCharacter()*10);

        CURRENT_EDGE_MODE = EDGE_MODE.SKIP_TAUNTS;

        while(edgesToDoTotal > 0) {
            lockImages();
            let resultingFile = random(files).getFile();
            showImage(resultingFile);

            sendMessage(random('Look at those beautiful feet', 'Stare a these beautiful feet', 'Let\'s worship these feet for now', 'Doesn\'t she have beautiful feet?',
                'Let\'s dedicate some edges to these feet', 'Let\'s worship these feet properly', 'Let\'s focus on these nice feet for now', 'Let\'s make you suffer for these feet',
            'Let\'s make you pay your tribute for these feet'));

            let edgesToDo = randomInteger(2, 6);

            //Decrease the total before we decrease the edgesToDo down to 0
            edgesToDoTotal -= edgesToDo;

            sendMessage(random('I think ' + edgesToDo + ' edges will be sufficient', 'I think they are worth ' + edgesToDo + ' edges', 'I think you should pay tribute with ' + edgesToDo + ' edges',
            'They are at least worth ' + edgesToDo + ' edges', 'Let\'s do ' + edgesToDo + ' edges for them', 'Let\'s worship them with ' + edgesToDo + ' edges'));

            while(edgesToDo > 0) {
                sleep(randomInteger(10, 15));
                startEdging();
                edgesToDo--;
            }

            if(isChance(25 + MOOD.TEASE.getChanceBooster())) {
                sendMessage('I think we should do one last edge %Grin%');
                sendMessage('And I think you should hold that edge');
                sendMessage('To show me how much you worship these feet');
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
            sendMessage('I hope you enjoyed worshipping these feet');
            sendMessage('Because it\'s definitely not the last time you are gonna do that for me %EmoteHappy%');
        }

        CURRENT_EDGE_MODE = EDGE_MODE.NORMAL;
    }
}