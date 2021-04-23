{
    if(isGaged() && currentGagType !== GAG_TYPE_SPIDER_GAG && !currentGagType.decideToyOff()) {
        runModuleCategory(CATEGORY_SLAVE);
    } else if(tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.UNKNOWN)) {
        if (getVar(VARIABLE.LICK_TRAININGS_DONE, 0) == 0) {
            sendMessage('%SlaveName%');
            sendMessage("I want to try something new today...");
            sendMessage('As you should know pleasing me is everything you are supposed to think about');
            sendMessage('In general pleasing women should be the only thing men should be allowed to do');
            sendMessage('And pleasing a woman with your tongue is one of the best ways to do so');
            sendMessage('Which is why we are gonna train your oral abilities');
            sendMessage('This is your first time so we\'d better do a quick run-through');
            sendMessage('If you have a fake pussy or something else that can be used, I recommend using that');
            sendMessage('You can choose to simply lick the air');
            //TODO: Force something like that based on strictness
            sendMessage('Or maybe you could even use a pair of dirty shoes %Grin%');
            sendMessage('Now pay attention %SlaveName%!');
            sendMessage('It\'s rather simple');
            sendMessage('First we have 3 different colors');

            lockImages();
            sendMessage('Red means that you are to move your tongue fast', 0);
            showImage('Images/Spicy/Modules/LickExercises/Down/DownFast.jpg', 5);

            sendMessage('Yellow means a medium steady pace', 0);
            showImage('Images/Spicy/Modules/LickExercises/Down/DownMedium.jpg', 5);

            sendMessage('Green means slow and sensual', 0);
            showImage('Images/Spicy/Modules/LickExercises/Down/DownSlow.jpg', 5);

            sendMessage('Arrow up means to lick "up" the pussy', 0);
            showImage('Images/Spicy/Modules/LickExercises/Up/*.jpg', 5);

            sendMessage('Then there is of course down', 0);
            showImage('Images/Spicy/Modules/LickExercises/Down/*.jpg', 5);

            sendMessage('Left', 0);
            showImage('Images/Spicy/Modules/LickExercises/Left/*.jpg', 5);

            sendMessage('And right', 0);
            showImage('Images/Spicy/Modules/LickExercises/Right/*.jpg', 5);

            sendMessage('Then we have circular clockwise', 0);
            showImage('Images/Spicy/Modules/LickExercises/CircleRight/*.jpg', 5);

            sendMessage('Which means moving your tounge in circular motion clockwise');
            //showImage('Images/Spicy/Modules/LickExercises/CircleRight/*.jpg', 5);

            sendMessage('And the opposite, anti-clockwise', 0);
            showImage('Images/Spicy/Modules/LickExercises/CircleLeft/*.jpg', 5);

            sendMessage('Finally we have the alphabet', 0);
            showImage('Images/Spicy/Modules/LickExercises/ABC/*.jpg', 5);

            sendMessage('When you see this sign you simply lick the alphabet starting with a, b, c etc. until the sign changes');

            unlockImages();

            sendMessage('There is nothing more to it');
        } else {
            //TODO: Implement to lick shoes or similar
            sendMessage('It\'s time to train your ability ' + random('to lick pussy', 'to please women orally', 'to worship women with your tongue') + ' %SlaveName%');
            sendMessage(random('It\'s the biggest reward a slave can earn', 'I can\'t imagine a better reward for a slave', 'The ultimate reward'));
            sendMessage(random('So you\'d better not suck at it', 'So it\'s best to not suck at it', 'So you\'d better not be completely awful!'));
            sendMessage(random('Or it might become an extremely rare event', 'Or who knows how often you\'ll be giving it %Lol%', 'Or it might happen rarely %Grin%'));
            sendMessage("And it is the best way to worship and please your %DomHonorific%");
            sendMessage("Who knows what rewards you'll get if you are an obedient and pleasing slave");
            sendMessage('A quick refresh');
            sendMessage('Red = fast, Yellow = medium, Green = Slow');
            sendMessage('There is up, down, left and right');
            sendMessage('There is circle clockwise and circle anti-clockwise');
            sendMessage('And finally we have lick the alphabet');
        }

        if(BODY_PART_TONGUE.currentClamps > 0) {
            sendMessage('Well you need your tongue so...');
            putClampsOff(BODY_PART_TONGUE.currentClamps, BODY_PART_TONGUE, false, true);
        }

        if(isGaged()) {
            if(currentGagType !== GAG_TYPE_SPIDER_GAG) {
                sendMessage('Oh well I guess you can\'t do your work with that gag in your mouth right?');

                if(GAG_TYPE_SPIDER_GAG.hasToy()) {
                    putInGag(GAG_TYPE_SPIDER_GAG, false);
                } else {
                    removeGag();
                }
            }
        } else if(feelsEvil() && GAG_TYPE_SPIDER_GAG.hasToy()) {
            sendMessage('I have a great idea that will improve your training %SlaveName%');
            putInGag(GAG_TYPE_SPIDER_GAG, false);
        }

        if(currentGagType === GAG_TYPE_SPIDER_GAG && isGaged()) {
            sendMessage('With the spider gag you\'ll have to keep your mouth open all the time');
            sendMessage('Like a proper pussy slave %Grin%');
        }

        sendMessage('Now let\'s get started %Grin%');
        sendMessage('Start the second you see the first picture %SlaveName%');

        //const timerLimitArray = [randomInteger(20, 40), randomInteger(30, 50), randomInteger(60, 80), randomInteger(80, 100), randomInteger(100, 120)];
        let date = setDate();
        date.addSecond(getSlaveTrainingModuleTime());

        while (!date.hasPassed()) {
            switch (randomInteger(0, 6)) {
                case 0:
                    showImage('Images/Spicy/Modules/LickExercises/Down/*.jpg');
                    break;
                case 1:
                    showImage('Images/Spicy/Modules/LickExercises/Up/*.jpg');
                    break;
                case 2:
                    showImage('Images/Spicy/Modules/LickExercises/Left/*.jpg');
                    break;
                case 3:
                    showImage('Images/Spicy/Modules/LickExercises/Right/*.jpg');
                    break;
                case 4:
                    showImage('Images/Spicy/Modules/LickExercises/CircleRight/*.jpg');
                    break;
                case 5:
                    showImage('Images/Spicy/Modules/LickExercises/CircleLeft/*.jpg');
                    break;
                case 6:
                    showImage('Images/Spicy/Modules/LickExercises/ABC/*.jpg');
                    break;
            }

            //TODO: Shop upgrade
            /*(Start3)
            @NullResponse @ChangeVar[Timer]=[Timer]+[1] @If[TimerLimit]<=[Timer]Then(End) @Goto(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21)
            (a1)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Up\UpSlow.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\SlowSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a2)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Up\UpMedium.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\MediumSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a3)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Up\UpFast.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\FastSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a4)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Down\DownSlow.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\SlowSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a5)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Down\DownMedium.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\MediumSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a6)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Down\DownFast.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\FastSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a7)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Right\RightArrowSlow.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\SlowSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a8)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Right\RightArrowMedium.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\MediumSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a9)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Right\RightArrowFast.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\FastSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a10)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Left\LeftArrowSlow.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\SlowSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a11)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Left\LeftArrowMedium.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\MediumSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a12)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\Left\LeftArrowFast.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\FastSimple\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a13)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\CircleLeft\CircleLeftSlow.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\SlowCircle\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a14)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\CircleLeft\CircleLeftMedium.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\MediumCircle\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a15)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\CircleLeft\CircleLeftFast.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\FastCircle\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a16)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\CircleRight\CircleRightSlow.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\SlowCircle\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a17)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\CircleRight\CircleRightMedium.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\MediumCircle\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a18)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\CircleRight\CircleRightFast.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\FastCircle\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a19)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\ABC\ABCSlow.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\SlowABC\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a20)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\ABC\ABCMedium.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\MediumABC\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (a21)
            @NullResponse @ShowImage[\GNMImages\Modules\LickExercises\ABC\ABCFast.jpg] @PlayAudio[\GNMSounds\Stroking\MetronomeLick\FastABC\*.mp3] @Wait(#Random(2,9)) @Goto(Start3)
            (End)*/

            sleep(randomInteger(4, 10));
        }

        stopAudio();
        sendMessage('Stop!');
        sendMessage('I hope your tongue isn\'t too sore %Grin%');
        sendMessage('Practice makes perfect, remember that');
        incrementVar(VARIABLE.LICK_TRAININGS_DONE, 1);
    }
}