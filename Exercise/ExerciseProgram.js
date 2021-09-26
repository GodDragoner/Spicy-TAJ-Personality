{
	sendVirtualAssistantMessage("We're starting in a second ");

	sendVirtualAssistantMessage("Get " + random("naked", "ready", "ready", "ready") + " slave!");
	NrExercise = 0;
	sendVirtualAssistantMessage("%SlaveName%, you should get some water to drink at the break ");
	sendVirtualAssistantMessage("if you're a proper slave, you'll put it in a bowl on the floor to drink out of like a bitch ");

	sendVirtualAssistantMessage(" I hope you're ready to get that %Ass% worked out. ");

	TempExercises = 10 + getVar("ExerciseLevel");
	setVar("ExerciseTimes", getVar("ExerciseTimes") + 1);

//set all the exercise flags as false since none are complete in the beginning
	exdog1 = false;
	exdog2a = false;
	exdog2b = false;
	explank1 = false;
	exabs3 = false;
	exabs4 = false;
	exabs5 = false;
	exabs6 = false;
	exgif1 = false;
	exgif2 = false;
	exgif3 = false;
	exabs1 = false;
	exabs2 = false;
	exgif4 = false;
	exgif5 = false;
	exgif6 = false;
	exleg1 = false;
	exleg2 = false;
	exleg3 = false;
	exleg4 = false;
	expushups1 = false;
	expushups2 = false;
	exwidepushups = false;
	exsideplank = false;
	explank1 = false;
	exsquat = false;
	exdeepsquat = false;
	exsquathold = false;
	excontinue3 = false;
	excontinue4 = false;
	excontinue5 = false;
	excontinue6 = false;

//this one is still buggy for some reason!!
//Gif2();


	while (NrExercise < TempExercises) {
		sendVirtualAssistantMessage("so far we've done " + NrExercise + " exercises");


		tempmod = NrExercise % 4;

		if ((tempmod == 0) && (NrExercise > 0)) {
			sendVirtualAssistantMessage("%SlaveName%, take a 60 second break to grab a drink of water");
			showImage("Images/Spicy/Exercise/Drink/*", 60);
		} else {
			sleep(13);
		}

		showImage("Images/Spicy/Exercise/Misc/*");


		switch (NrExercise) {
			case 0 :
				randnum = randomInteger(1, 3);
				switch (randnum) {
					case 1 :
						PushUps1();
						break;

					case 2 :
						WidePushUps();
						break;

					case 3 :
						PushUps2();
						break;
				}
				break;


			case 1 :
				randnum = randomInteger(1, 3);
				switch (randnum) {
					case 1 :
						Abs1();
						break;

					case 2  :
						Abs2();
						break;

					case 3 :
						Continue3();
						break;
				}
				break;


			case 2 :
				randnum = randomInteger(1, 3);
				switch (randnum) {
					case 1 :
						Squat();
						break;

					case 2 :
						SquatHold();
						break;

					case 3 :
						DeepSquat();
						break;
				}
				break;


			case 3 :
				randnum = randomInteger(1, 2);
				switch (randnum) {
					case 1 :
						Gif2();
						break;

					case 2 :
						Gif4();
						break;
				}

				break;


			case 4 :
				randnum = randomInteger(1, 2);
				switch (randnum) {
					case 1 :
						Gif1();
						break;

					case 2 :
						Gif3();
						break;
				}
				break;

			case 5 :
				randnum = randomInteger(1, 4);
				switch (randnum) {
					case 1 :
						Leg1();
						break;
					case 2 :
						Leg2();
						break;
					case 3 :
						Leg3();
						break;
					case 4 :
						Leg4();
						break;
				}
				break;

			case 6 :
				randnum = randomInteger(1, 3);
				switch (randnum) {
					case 1 :
						Dog1();
						break;
					case 2 :
						Dog2a();
						break;
					case 3 :
						Dog2b();
						break;

				}
				break;


			case 7 :
				randnum = randomInteger(1, 2);
				switch (randnum) {
					case 1 :
						SidePlank();
						break;
					case 2 :
						Plank1();
						break;
				}
				break;

			case 8 :
				randnum = randomInteger(1, 2);
				switch (randnum) {
					case 1 :
						Gif5();
						break;
					case 2 :
						Gif6();
						break;
				}
				break;

			case 9 :
				randnum = randomInteger(1, 3);
				switch (randnum) {
					case 1 :
						Abs3();
						break;
					case 2 :
						Abs4();
						break;
					case 3 :
						Abs5();
						break;

				}
				break;


			default:
				randnum = randomInteger(1, 30);
				switch (randnum) {
					case 1 :
						Dog1();
						break;

					case 2 :
						Dog2a();
						break;

					case 3 :
						Dog2b();
						break;

					case 4 :
						Plank1();
						break;

					case 5 :
						Abs1();
						break;

					case 6 :
						Abs2();
						break;

					case 7 :
						Abs4();
						break;

					case 8 :
						Abs5();
						break;

					case 9 : //Abs6();
						break;

					case 10 :
						Continue3();
						break;

					case 11 :
						Continue4();
						break;

					case 12 :
						Continue5();
						break;

					case 13 :
						Continue6();
						break;

					case 14 :
						Gif1();
						break;

					case 15 :
						Gif2();
						break;

					case 16 :
						Gif3();
						break;

					case 17 :
						Gif4();
						break;

					case 18 :
						Gif5();
						break;

					case 19 :
						Gif6();
						break;

					case 20 :
						Leg4();
						break;

					case 21 :
						Leg3();
						break;

					case 22 :
						Leg2();
						break;

					case 23 :
						Leg1();
						break;

					case 24 :
						PushUps1();
						break;

					case 25 :
						WidePushUps();
						break;

					case 26 :
						PushUps2();
						break;

					case 27 :
						SidePlank();
						break;

					case 28 :
						Squat();
						break;

					case 29 :
						SquatHold();
						break;

					case 30 :
						DeepSquat();
						break;
				}
				break;

		}

	}


	/*
    @Variable[NrExercise]<[1] showImage("Images/Spicy/Exercise/Misc/*] @Goto(PushUps1,WidePushUps,PushUps2)
    @Variable[NrExercise]<[2] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Abs1,Abs2,Abs6)
    @Variable[NrExercise]<[3] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Squat,SquatHold,DeepSquat)
    @Variable[NrExercise]<[4] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Gif4,Gif2)
    @Variable[NrExercise]<[5] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Gif1,Gif3)
    @Variable[NrExercise]<[6] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Leg4,Leg3,Leg2,Leg1)
    @Variable[NrExercise]<[7] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Dog1,Dog2a,Dog2b)
    @Variable[NrExercise]<[8] showImage("Images/Spicy/Exercise/Misc/*] @Goto(SidePlank,Plank1)
    @Variable[NrExercise]<[9] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Gif5,Gif6)
    @Variable[NrExercise]<[10] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Abs3,Abs4,Abs5)


    @Variable[NrExercise]<[TempExercises] showImage("Images/Spicy/Exercise/Misc/*] @Goto(Dog1,Dog2a,Dog2b,Plank1,Abs1,Abs2,Abs4,Abs5,Abs6,Continue3,Continue4,Continue5,Continue6,Gif1,Gif2,Gif3,Gif4,Gif5,Gif6,Leg4,Leg3,Leg2,Leg1,PushUps1,WidePushUps,PushUps2,SidePlank,Squat,SquatHold,DeepSquat)
    */


	sendVirtualAssistantMessage("We're at the end");
	sendVirtualAssistantMessage("You just went through " + NrExercise + " exercises");

	sendVirtualAssistantMessage("How many of the " + NrExercise + " exercises do you estimate to have completed to a satisfactory level?", 0);
	let answer = createInput();

	while (true) {
		if (answer.isInteger()) {
			const result = answer.getInt();
			if (result < 0) {
				sendVirtualAssistantMessage("You can't choose a number less than 0", 0);
				answer.loop();
			} else if (result > NrExercise) {
				sendVirtualAssistantMessage("You chose a number too big, you weren't assigned that many exercises", 0);
				answer.loop();
			} else {
				ExerciseDone = result;
				break;
			}
		} else {
			sendVirtualAssistantMessage("Slave...");
			sendVirtualAssistantMessage("I asked you to just give me a simple number..");
			sendVirtualAssistantMessage("You must choose a simple number.. like");
			sendVirtualAssistantMessage("10");
			sendVirtualAssistantMessage("15");
			sendVirtualAssistantMessage("17");
			sendVirtualAssistantMessage("22");
			sendVirtualAssistantMessage("Idiot!", 0);
			answer.loop();
		}
	}


	ExMasteredBar = NrExercise - 2;
	ExFailedBar = ExerciseDone * 3;
	if (ExerciseDone >= ExMasteredBar) {
		//mastered this session
		setVar("ExerciseLevelMastered", getVar("ExerciseLevelMastered") + 1);
		sendVirtualAssistantMessage("good job, it looks like you did really well today");
		unlockImages();

	} else if (NrExercise > ExFailedBar) {
		//failed out of this session

		setVar("ExerciseLevelFailing", getVar("ExerciseLevelFailing") + 1);
		sendVirtualAssistantMessage("hmmm that was a pretty pathetic effort %Slave%");
		unlockImages();

	} else {
		//did ok
		sendVirtualAssistantMessage("pretty Good effort today slave! ");
		unlockImages();
	}


	setVar("ExerciseXP", getVar("ExerciseXP") + (ExerciseDone * 5));


}

//all of the individual exercises are functions below here.....

function Dog1() {
		if (!exdog1){
		exdog1 = true;
		NrExercise = NrExercise + 1;


		 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Stand like this ");
		showImage("Images/Spicy/Exercise/Dog/1.jpg");
		sendVirtualAssistantMessage(" Hold it until you hear my bell ",1,true);
		sleep( 40+10* getVar("ExerciseLevel"));
	

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ",1,true);
		sleep(20);
		sendVirtualAssistantMessage(" Again.. ");
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Stand like this ",1,true);
		showImage("Images/Spicy/Exercise/Dog/2.jpg");
		sendVirtualAssistantMessage(" Hold it until you hear my bell",1,true);

		sleep( 40+10* getVar("ExerciseLevel"));
		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(random(" Take a short break ", "I think next time we're caning you in that position","Mmm, seeing you bent over like that makes me want to go grab my strap-on","oh, %DomHonorific% %DomName% could spank you nicely in that position"),1,true);
		sleep(20);

	}
}

function Dog2a() {
		if (!exdog2a){
		exdog2a = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Get down like this ");
		showImage("Images/Spicy/Exercise/Dog2/1.jpg");
		sendVirtualAssistantMessage(" First beep bring your leg up",1,true);
		sendVirtualAssistantMessage(" Second beep bring your leg down",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ",1,true);
		showImage("Images/Spicy/Exercise/Misc/*"); 
		sleep(20);
		
		sendVirtualAssistantMessage(" Now the other leg..  ");
		showImage("Images/Spicy/Exercise/Dog2/1.jpg");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		 stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" That's my good Doggy!!  ");
		sleep(4);

	}
}


function Dog2b() {
		if (!exdog2b){
		exdog2b = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Bitch, Get down like this ");
		showImage("Images/Spicy/Exercise/Dog2/2.gif");
		sendVirtualAssistantMessage(" First beep bring your leg up",1,true);
		sendVirtualAssistantMessage(" Second beep bring your leg down",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break  ");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Now the other leg.. ",1,true);
		showImage("Images/Spicy/Exercise/Dog2/2.gif");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Now the other leg.. ",1,true);
		showImage("Images/Spicy/Exercise/Dog2/2.gif");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Now the other leg.. ",1,true);
		showImage("Images/Spicy/Exercise/Dog2/2.gif");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Now the other leg.. ",1,true);
		showImage("Images/Spicy/Exercise/Dog2/2.gif");
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Now the other leg.. ",1,true);
		showImage("Images/Spicy/Exercise/Dog2/2.gif");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ",1,true);
		showImage("Images/Spicy/Exercise/Misc/*"); 
		playAudio("Audio/Spicy/CallName/CallGoodName/goodboy2.mp3");
		sleep(10);

	}
}


function Plank1() {
		if (!explank1){
		explank1 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Now we're gonna do the plank ");
		showImage("Images/Spicy/Exercise/Misc/*");
		sendVirtualAssistantMessage(" Get into this position ");
		showImage("Images/Spicy/Exercise/Plank/1.jpg");
		sendVirtualAssistantMessage(" We're gonna do it 3 times",1,true);
		sendVirtualAssistantMessage(" You will hear my bell in a moment",1,true);
		sendVirtualAssistantMessage(" That means take the position",1,true);
		sendVirtualAssistantMessage(" When you hear my bell again relax",1,true);
		sendVirtualAssistantMessage(" Next bell means position again and so on",1,true);
		sendVirtualAssistantMessage(" Get into position",1,true);
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ",1,true);
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Again ");
		showImage("Images/Spicy/Exercise/Plank/2.jpg");
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ",1,true);
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Again ");
		showImage("Images/Spicy/Exercise/Plank/3.jpg");
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ",1,true);
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Again but bring your left foot in and out ",1,true);
		showImage("Images/Spicy/Exercise/Plank/4.gif");

		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Take a short break ");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		sendVirtualAssistantMessage(" Again but now your right leg in and out ");
		showImage("Images/Spicy/Exercise/Plank/4.gif");

		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" I hope your Abs feel used! ");
	}
}


function Abs1() {
		if (!exabs1){
		exabs1 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Next we're going to work on your abs");
		showImage("Images/Spicy/Exercise/Misc/*");
		sendVirtualAssistantMessage(" Get into this position and simply hold it when I say up..");
		showImage("Images/Spicy/Exercise/Abs/1.jpg");
		sendVirtualAssistantMessage(" Stop when you hear me say down",1,true);
		sendVirtualAssistantMessage(" Again we'll do it 3 times.. ",1,true);
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		sleep( 20+5* getVar("ExerciseLevel"));
		
		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sendVirtualAssistantMessage(" Take a short break ",1,true);
		sleep(20);
		showImage("Images/Spicy/Exercise/Misc/*");
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		showImage("Images/Spicy/Exercise/Abs/1.jpg");
		sleep( 20+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sendVirtualAssistantMessage(" Take a short break",1,true);
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		showImage("Images/Spicy/Exercise/Abs/1.jpg");
		sleep( 20+5* getVar("ExerciseLevel"));

		 playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(2);
  }
}


function Abs2() {
		if (!exabs2){
		exabs2 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Get into this position"); 
		showImage("Images/Spicy/Exercise/Abs/2.jpg");
		sendVirtualAssistantMessage(" With each beep, bring your upper body as high as you can and then back down",1,true); 
		sendVirtualAssistantMessage(" Switch sides between sets",1,true);
		sendVirtualAssistantMessage(" Wait for the beat",1,true);
		sendVirtualAssistantMessage(" 6 times in total!",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" change sides..",7,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" change sides..",7,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" change sides..",7,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" change sides..",7,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" change sides..",7,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(2);

	}
}



function Abs3() {
		if (!exabs3){
		exabs3 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" From this position ");
		showImage("Images/Spicy/Exercise/Abs/3.jpg");
		sendVirtualAssistantMessage(" On the first beep raise your legs straight up",1,true);
		sendVirtualAssistantMessage(" On the second back down into the position shown",1,true);
		sendVirtualAssistantMessage(" 3 times total",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/50 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/50 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();

		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/50 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(2);
		sendVirtualAssistantMessage(" keep on top of this exercise and we'll have you sucking your own dick in no time %Grin%");

	}
}


function Abs4() {
		if (!exabs4){
		exabs4 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" With each beep bring your leg up");
		showImage("Images/Spicy/Exercise/Abs/4.jpg");
		sendVirtualAssistantMessage(" Alternating legs",1,true);
		sendVirtualAssistantMessage(" Never allow any of your legs to touch the ground until the exercise ends with a beep",1,true);
		sendVirtualAssistantMessage(" 3 times in total",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/60 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/60 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/70 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));

		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(4);
}
}

function Abs5() {
		if (!exabs5){
		exabs5 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" With each beep bring Both your legs up ");
		showImage("Images/Spicy/Exercise/Abs/5.jpg");
		sendVirtualAssistantMessage(" Never allow any of your legs to touch the ground until the exercise ends with a beep",1,true);
		sendVirtualAssistantMessage(" 3 times in total ",1,true);
		sendVirtualAssistantMessage(" Beep = up ",1,true);
		sendVirtualAssistantMessage(" Next beep = down ",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
	}
}


function Continue3() {
		if (!excontinue3){
		excontinue3 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Now a few more ab exercises ");
		showImage("Images/Spicy/Exercise/Misc/*");
		sendVirtualAssistantMessage(" I want you to keep going with each exercise until the image changes and you hear a bell");
		sendVirtualAssistantMessage(" GO! ");
		showImage("Images/Spicy/Exercise/Abs/6.gif");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" next one! ",1,true);
		showImage("Images/Spicy/Exercise/Abs/7.gif");
		sleep( 25+5* getVar("ExerciseLevel"));
		sendVirtualAssistantMessage(" next one! ",1,true);
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		showImage("Images/Spicy/Exercise/Abs/8.gif");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" next one!",1,true);
 
		showImage("Images/Spicy/Exercise/Abs/9.gif");
		sleep( 25+5* getVar("ExerciseLevel"));


		sendVirtualAssistantMessage(" Break!");
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(2);

}
}

function Gif1() {
		if (!exgif1){
		exgif1 = true;
		NrExercise = NrExercise + 1;


		sendVirtualAssistantMessage("from a pushup position move your hand and foot out to the side");
		sendVirtualAssistantMessage("%Slave%, follow the gif, alternating sides.");
		
		 showImage("Images/Spicy/Exercise/Gifs/1.gif",3);
		sendVirtualAssistantMessage(" Use the beeps to pace yourself",1,true);
		sendVirtualAssistantMessage(" Alternate sides",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));	
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		showImage("Images/Spicy/Exercise/Gifs/1.gif",3);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));	
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);
		showImage("Images/Spicy/Exercise/Gifs/1.gif",3);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));	
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		showImage("Images/Spicy/Exercise/Misc/*");
		sleep(20);


	}
}


function Gif3() {
		if (!exgif3){
		exgif3 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Time for some Calisthenics....Alternate sides");
		showImage("Images/Spicy/Exercise/Gifs/3.gif",3);
		//sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		//playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
 
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 30+5* getVar("ExerciseLevel"));		
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		
			sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 30+5* getVar("ExerciseLevel"));		
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);

			sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 30+5* getVar("ExerciseLevel"));		
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(10);

}
}

function Gif2() {
		if (!exgif2){
		exgif2 = true;
		NrExercise = NrExercise + 1;
		sendVirtualAssistantMessage(" It's time for some leg lifts %Slave%... yay!! ",2,false);
		sendVirtualAssistantMessage(" I will tell you when to switch sides ");
		showImage("Images/Spicy/Exercise/Gifs/2.gif",3);
		
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		//showImage("Images/Spicy/Exercise/Gifs/2.gif");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));		
		stopAudio();
		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(1);
		sendVirtualAssistantMessage(" Other side now..",1,true);
		sleep(10);
		
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));		
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(1);
		sendVirtualAssistantMessage(" Other side now..",1,true);
		sleep(10);
		
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));		
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(1);
		sendVirtualAssistantMessage(" Other side now..",1,true);
		sleep(10);
		
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));		
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(1);
		sendVirtualAssistantMessage(" Other side now..",1,true);
		sleep(10);
		
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));		
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(1);
		sendVirtualAssistantMessage(" Other side now..",1,true);
		sleep(10);
		
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));		
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(1);
		sendVirtualAssistantMessage(" Other side now..",1,true);
		sleep(10);
		}
}		


function Gif4() {
		if (!exgif4){
		exgif4 = true;
		NrExercise = NrExercise + 1;
		sendVirtualAssistantMessage(" now it's time for some leg exercises");
		sendVirtualAssistantMessage(" I will tell you when to switch sides");
		 showImage("Images/Spicy/Exercise/Gifs/4.gif");
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		 playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
 		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(8);
		sendVirtualAssistantMessage(" Other side now..",10,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(8);
		sendVirtualAssistantMessage(" Other side now %SlaveName%..",10,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		showImage("Images/Spicy/Exercise/Gifs/4.gif");
		stopAudio();


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(2);
		sendVirtualAssistantMessage(" Other side now..",1,true);
		sleep(10);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		 playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();

		
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(2);
		sendVirtualAssistantMessage(" Other side now..",10,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(2);
		sendVirtualAssistantMessage(" Other side now %SlaveName%..",10,true);
		sleep(10);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		showImage("Images/Spicy/Exercise/Gifs/4.gif");
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
	
		sleep(4);

	}
}


function Gif5() {
		if (!exgif5){
		exgif5 = true;
		NrExercise = NrExercise + 1;
		sendVirtualAssistantMessage(" A few other Leg exercises now!");
		sendVirtualAssistantMessage(" Follow along with the Gif images.");
		lockImages();
		sendVirtualAssistantMessage(" Left leg!");
		showImage("Images/Spicy/Exercise/Gifs/5.gif"); 
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();

		sendVirtualAssistantMessage(" Right leg! ",3,true);
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		showImage("Images/Spicy/Exercise/Gifs/5.gif"); 
		 		sleep( 35+5* getVar("ExerciseLevel"));
				stopAudio();

		sendVirtualAssistantMessage(" Left leg!",3,true);
		showImage("Images/Spicy/Exercise/Gifs/6.gif");
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();

		sendVirtualAssistantMessage(" Right leg!",3,true);
		showImage("Images/Spicy/Exercise/Gifs/6.gif");
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");		
		 		sleep( 35+5* getVar("ExerciseLevel"));
				stopAudio();
		unlockImages();
		}
}


function Gif6() {
		if (!exgif6){
		exgif6 = true;
		NrExercise = NrExercise + 1;
		lockImages();
		sendVirtualAssistantMessage(" Left leg!",1,true);
		 showImage("Images/Spicy/Exercise/Gifs/7.gif"); 
		 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		 		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();

		sendVirtualAssistantMessage(" Right leg! ",1,true);
		showImage("Images/Spicy/Exercise/Gifs/7.gif");
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();

		sendVirtualAssistantMessage(" Left side! ",3,true);
		showImage("Images/Spicy/Exercise/Gifs/8.gif");
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();
		showImage("Images/Spicy/Exercise/Gifs/8.gif"); 
	
		sendVirtualAssistantMessage(" Right side! ",3,true);
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		showImage("Images/Spicy/Exercise/Gifs/8.gif"); 
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();

		sendVirtualAssistantMessage(" Left leg! ",3,true);
		showImage("Images/Spicy/Exercise/Gifs/9.gif"); 
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");

		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();
		
		sendVirtualAssistantMessage(" Right leg! ",1,true);
		 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		showImage("Images/Spicy/Exercise/Gifs/9.gif"); 
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
	    unlockImages();
		}
}

function Leg4() {
		if (!exleg4){
		exleg4 = true;
		NrExercise = NrExercise + 1;
		lockImages();
		sendVirtualAssistantMessage(" Take some deep breaths");
		showImage("Images/Spicy/Exercise/Breathe/1.gif");
		sendVirtualAssistantMessage(" Break 1 minute  ");
		showImage("Images/Spicy/Exercise/Breathe/1.gif"); 
		sleep(40);
		sendVirtualAssistantMessage(" Find a chair ");
		showImage("Images/Spicy/Exercise/Legs/1.jpg");
		sendVirtualAssistantMessage(" Stand on toes and relax with each beat ",1,true);
		playAudio("Audio/Spicy/Punishment/Corner/OnYourToes.mp3");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		playAudio("Audio/Spicy/Punishment/Corner/OnYourToes.mp3");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		playAudio("Audio/Spicy/Punishment/Corner/OnYourToes.mp3");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 35+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(5);
		unlockImages();
		sendVirtualAssistantMessage(" Feel those calves burn.");
		sleep(5);


		}
}

function Leg3() {
		if (!exleg3){
		exleg3 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" From a push up position");
		lockImages();
		showImage("Images/Spicy/Exercise/Legs/2.jpg");
		sendVirtualAssistantMessage(" pull your leg under you without your foot touching the ground ",1,true);
		sendVirtualAssistantMessage(" Alternating legs",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		unlockImages();
		}
}


//front side back squat
function Leg2() {
		if (!exleg2){
		exleg2 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Let's do some Leg Squats ");
			lockImages();
			sendVirtualAssistantMessage(" With the first beep bring your leg fourth",1,true);
		showImage("Images/Spicy/Exercise/Legs/3.jpg");
		sendVirtualAssistantMessage(" With the second beep bring the same leg to the side",1,true);
		sendVirtualAssistantMessage(" With the third beep put the leg behind you",1,true);
		sendVirtualAssistantMessage(" Switch leg and repeat for the other leg",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
			unlockImages();

}
}

//hold leg above head
function Leg1(){
	if (!exleg1){
		exleg1 = true;
		NrExercise = NrExercise + 1;

		sendVirtualAssistantMessage(" Get into this position ");
		showImage("Images/Spicy/Exercise/Legs/4.jpg");
		lockImages();
		sendVirtualAssistantMessage(" Raise one leg and hold it until you hear my bell",1,true);
		sendVirtualAssistantMessage(" Timer starting now.. ",1,true);
		showImage("Images/Spicy/Exercise/Legs/4.jpg");
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Switch leg and raise again",1,true);
		showImage("Images/Spicy/Exercise/Legs/4.jpg");
		 playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Switch leg and raise again",1,true);
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Switch leg and raise again",1,true);
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Switch leg and raise again",1,true);
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Switch leg and raise again",1,true);
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		unlockImages();
}
}

function PushUps1() {
	if (!expushups1){
		expushups1 = true;
		NrExercise = NrExercise + 1;
		sendVirtualAssistantMessage(" Time to do push ups!");
		showImage("Images/Spicy/Exercise/PushUps/1.jpg",2);
		sendVirtualAssistantMessage(" First beep go down");
		sendVirtualAssistantMessage("Second beep go up");
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
		lockImages();
		showImage("Images/Spicy/Exercise/PushUps/1.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(30);
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
		showImage("Images/Spicy/Exercise/PushUps/1.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(30);
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
		showImage("Images/Spicy/Exercise/PushUps/1.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
	    stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		unlockImages();
		sleep(20);


    };
 }
 
function WidePushUps(){
if (!exwidepushups) {
	exwidepushups=true;
    NrExercise = NrExercise+1;
			
		sendVirtualAssistantMessage(" Let's do some wide push ups !");
		showImage("Images/Spicy/Exercise/PushUps/2.jpg",2);
		sendVirtualAssistantMessage(" First beep go down");
		sendVirtualAssistantMessage("Second beep go up");
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
        lockImages();
		showImage("Images/Spicy/Exercise/PushUps/2.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
	    stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(30);
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
		showImage("Images/Spicy/Exercise/PushUps/2.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
	    stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(30);
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
		showImage("Images/Spicy/Exercise/PushUps/2.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
	    stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		unlockImages();
		sleep(20);
}

}

function PushUps2(){
if (!expushups2) {
	expushups2=true;
    NrExercise = NrExercise+1;
			
		sendVirtualAssistantMessage(" it's time for some regular push ups !");
		showImage("Images/Spicy/Exercise/PushUps/3.jpg",2);
		sendVirtualAssistantMessage(" First beep go down");
		sendVirtualAssistantMessage("Second beep go up");
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
        lockImages();
		showImage("Images/Spicy/Exercise/PushUps/3.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(20);
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
		showImage("Images/Spicy/Exercise/PushUps/3.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
	    stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(20);
		
		sendVirtualAssistantMessage("Continue until you hear my bell ");
		showImage("Images/Spicy/Exercise/PushUps/3.jpg");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
	    stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		unlockImages();		
		sendVirtualAssistantMessage("Feel those arms burn!");
		sleep(10);
}

}




function Continue5(){
	if (!excontinue5) {
		excontinue5=true;
		NrExercise = NrExercise+1;

		sendVirtualAssistantMessage(" Take some deep breaths ");
		showImage("Images/Spicy/Exercise/Breathe/1.gif");
		sendVirtualAssistantMessage(" Break 1 minute  ");
		sleep(60);
		sendVirtualAssistantMessage(" Have a look %Grin%",1,true);
		 showImage("Images/Spicy/Exercise/PushUps/4.gif");
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sendVirtualAssistantMessage(" Short break ");
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell ");
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		showImage("Images/Spicy/Exercise/PushUps/5.gif"); 
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		
		sendVirtualAssistantMessage(" Short break");
		sleep(20);
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		showImage("Images/Spicy/Exercise/PushUps/6.gif");
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true); 
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");

		sendVirtualAssistantMessage(" Short break");
		sleep(10);
		

	}
}



function SidePlank(){
	if (!exsideplank) {
		exsideplank=true;
		NrExercise = NrExercise+1;

		sendVirtualAssistantMessage(" Let's do some side planking ");
		showImage("Images/Spicy/Exercise/SidePlank/1.jpg");
		sendVirtualAssistantMessage(" Rest on your lower arm",1,true);
		sendVirtualAssistantMessage(" Raising your body from foot to shoulder",1,true);
		sendVirtualAssistantMessage(" Hold the position until you hear my bell",1,true);
		sendVirtualAssistantMessage(" I will tell you when to switch sides",1,true);
		sendVirtualAssistantMessage(" Get into position  ",1,true);
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Again.. ",1,true);
		 playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Again..",1,true);  
		playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));


		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Switch sides ",1,true);
		showImage("Images/Spicy/Exercise/SidePlank/2.jpg");
		sendVirtualAssistantMessage(" Get into position ",1,true);
		 playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Again.. ",1,true);
		 playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));


		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Again..",1,true);
		 playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));

		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep(20);
	}
}



function Squat(){
	if (!exsquat) {
		exsquat=true;
		NrExercise = NrExercise+1;

		sendVirtualAssistantMessage(" Let's do some squatting ");
		showImage("Images/Spicy/Exercise/Squat/1.jpg");
		sendVirtualAssistantMessage(" First beep down",1,true);
		sendVirtualAssistantMessage(" Second beep up",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true); 
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell",1,true); 
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sendVirtualAssistantMessage("MMMmmm, I like that %Ass% of yours");
		sleep(5);

	}
}

function SquatHold(){
	if (!exsquathold) {
		exsquathold=true;
		NrExercise = NrExercise+1;


		sendVirtualAssistantMessage(" Get into the squat position and hold it until you hear my bell!");
		 showImage("Images/Spicy/Exercise/Squat/2.jpg");
		sendVirtualAssistantMessage(" Begin!  ",1,true);
		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));

		 playAudio("Audio/Spicy/Commands/Up/*.mp3");
		sleep(20);
		sendVirtualAssistantMessage(" Again! ",1,true);
		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		sleep( 25+5* getVar("ExerciseLevel"));

		 playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep(20);
		sendVirtualAssistantMessage(" Again!  ",1,true);
		playAudio("Audio/Spicy/Commands/Down/*.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));


		 playAudio("Audio/Spicy/Commands/Up/*.mp3");
		 sleep(5);


	}
}

function DeepSquat(){
	if (!exdeepsquat) {
		exdeepsquat=true;
		NrExercise = NrExercise+1;

		sendVirtualAssistantMessage(" Now for the deep squats!"); 
		showImage("Images/Spicy/Exercise/Squat/3.jpg");
		sendVirtualAssistantMessage(" First beep all the way down ",1,true);
		sendVirtualAssistantMessage(" Second beep all the way up ",1,true);
		sendVirtualAssistantMessage(" Continue until you hear my bell  ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell  ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3"); 
		showImage("Images/Spicy/Exercise/Squat/4.jpg");
		 sleep( 25+5* getVar("ExerciseLevel"));
		stopAudio();


		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
		sendVirtualAssistantMessage(" Continue until you hear my bell  ",1,true);
		playAudio("Audio/Spicy/Stroking/Metronome/40 bpm.mp3"); 
		showImage("Images/Spicy/Exercise/Squat/5.jpg");
		 sleep( 25+5* getVar("ExerciseLevel"));

		stopAudio();

		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(20);
	}
}

function Continue6(){
	if (!excontinue6) {
		excontinue6=true;
		NrExercise = NrExercise+1;
		

		sendVirtualAssistantMessage(" Almost there!");
		sendVirtualAssistantMessage(" Keep doing normal squats until you hear my bell ",1,true);
		 showImage("Images/Spicy/Exercise/Squat/6.gif");
		 sleep( 20+5* getVar("ExerciseLevel"));
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(15);
		sendVirtualAssistantMessage(" again ",1,true);
		 showImage("Images/Spicy/Exercise/Squat/7.gif");
		 sleep( 20+5* getVar("ExerciseLevel"));
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(15);

		sendVirtualAssistantMessage(" again ",1,true);
		showImage("Images/Spicy/Exercise/Squat/8.gif");
		 sleep( 20+5* getVar("ExerciseLevel"));
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(15);

		sendVirtualAssistantMessage(" again ",1,true);
		showImage("Images/Spicy/Exercise/Squat/9.gif");
		 sleep( 20+5* getVar("ExerciseLevel"));
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
		sleep(15);

		sendVirtualAssistantMessage(" Final exercise! ",1,true);
		showImage("Images/Spicy/Exercise/Squat/10.gif");
		 sleep( 25+5* getVar("ExerciseLevel"));
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 


	}
}



