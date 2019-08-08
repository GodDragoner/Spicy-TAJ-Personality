sendVirtualAssistantMessage("reporting exercise...");
temptimes= getVar("VARIABLE_EXERCISE_TIMES");
if( !isVar("VARIABLE_EXERCISE_TIMES"))
	{// this is the first time user is reporting exercise
	sendVirtualAssistantMessage("%subName%, this is the first time you're reporting exercise activity");
	sendVirtualAssistantMessage("%domName%, would prefer you to follow our integrated fitness program, but understands that might not be practical");
	sendVirtualAssistantMessage("%domName% graciously provides you this opportunity to report exercise completed outside of Tease-AI");
	sendVirtualAssistantMessage("for an exercise to count it should be at least 45 minutes of strenuous activity that makes you sweat. ");
		tempdate = setDate();
		tempdate.addDay(-2);
		setDate("VARIABLE_JUST_EXERCISED", tempdate);
		setVar("VARIABLE_EXERCISE_TIMES", 1);
	}
    tempdate2 = getDate("LastExercise");
	tempdate2.addMinute(600);
	//sendVirtualAssistantMessage(tempdate2 , "has passed?", tempdate2.hasPassed());
	if (!(tempdate2.hasPassed()))
		 {sendVirtualAssistantMessage("You just reported that you completed an exercise..");
		  sendVirtualAssistantMessage("I'm not stupid slave..");
		  tempdate2.addMinute(-600);
		  changeMeritHigh(true);
		 }
	 else{
		sendVirtualAssistantMessage("%subName%, Fitness and Honesty are both important");
		sendVirtualAssistantMessage("Have you just completed an exercise?");
		answer2 = createInput("Yes","No");
		while (true) 
			{
			if (answer2.containsIgnoreCase("yes","yeah","yep"))
				{
				 sendVirtualAssistantMessage("%Good%");
				setVar("VARIABLE_EXERCISE_TIMES",getVar("VARIABLE_EXERCISE_TIMES")+1 );
				setVar("EXERCISETIMES",getVar("EXERCISETIMES")+1 );

				 //Set the exercise date to now
				setDate("VARIABLE_JUST_EXERCISED");
				break;}
			else if (answer2.containsIgnoreCase("no","nope","nah","sorry","i wish")) {
				sendVirtualAssistantMessage("%EmoteSad%");
				sendVirtualAssistantMessage("Then don't waste my time..");
				//reduce merrit.... True makes it negative
				tempdate2.addMinute(-600);
				changeMeritMedium(true);
				break;}
			else {
				sendVirtualAssistantMessage("well did you exercise?");
				sendVirtualAssistantMessage("a simple YES or NO will suffice.");
				answer2.loop();
				}
			}

		}
//run("Assistant/AssistantLobby.js");