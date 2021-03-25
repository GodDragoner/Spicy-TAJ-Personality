{

	sendDungeonMessage("Well Slave, After reviewing your record, it seems you're clearly full of shit. "); //#ReceptionChat
	sendDungeonMessage("Don't worry though.....  I have a solution for that "); //#ReceptionChat
	sendDungeonMessage("It's time to send you for an enema! "); //#ReceptionChat
	sendDungeonMessage("Miss Sarah is ready to clean you out.. "); //#ReceptionChat

	if (!isVar("EnemaFirstVisitDone")) {
		setVar("EnemaFirstVisitDone", true);

		sendMessage("This is your first time getting an Enema with me "); //#EnemaChat
		sendMessage("You may have had enema's in the past..."); //#EnemaChat
		sendMessage("You should understand I intend this to be a PUNISHMENT enema"); //#EnemaChat
		sendMessage("you should have a enema bag like this, Lube, and potential add ins ready"); //#EnemaChat
		sendMessage("you may feel uncomfortable or a bit of cramping..."); //#EnemaChat
		sendMessage("I just want to reassure you that this is how it always is %Laugh%"); //#EnemaChat
	}

	sendMessage("ok Slave, it's time for your enema"); //#EnemaChat
	sendMessage("Go to the bathroom, set up your enema bag and equipment", 30); //#EnemaChat @Wait(60)
	sendMessage("when you're there and ready, say 'ready'");
	response = createInput("Ready"); //#EnemaChat

	while (true) {
		if (response.containsIgnoreCase("ready", "ok", "yes")) {
			sendMessage("excellent!"); //#EnemaChat
			response.clearOptions()
			break;
		} else
			response.loop();
	}

	sendMessage("Hmmm how to show you that your my special slave....", 10); //#EnemaChat @Wait(15)
	sendMessage("oh, I know!  Fill your bag with "+ random("Warm water", "Warm water with Soap", "Warm water", "Warm water with Soap", "Warm water", "Warm water with Soap", "cold water with soap", "cold water", "glycerine and water", "carbonated soda", "Epsom salts in warm water"), 30); //#EnemaChat
	sendMessage("Make sure you get all the air out of the line....", 10); //#EnemaChat @Wait(10)
	sendMessage("or don't that might make things more uncomfortable. %EmoteHappy%", 10); //#EnemaChat @Wait(10)
	sendMessage("now get to it! %Slave%", 45); //#EnemaChat @wait(90)
//(filling)
	sendMessage("when your enema is prepared say 'ready'");

	response = createInput("ready"); //#EnemaChat

	while (true) {
		if (response.containsIgnoreCase("ready", "ok", "yes")) {
			sendMessage("%Good% !"); //#EnemaChat
			response.clearOptions()
			break;
		} else
			response = sendInput("silly %Slave%, when your enema is ready say 'ready'"); //#EnemaChat
		response.loop();
	}


	sendMessage("I think for this enema I want"+ random("you on your knees", "you in doggy position", "you on your back", "you on your side. "), 15); // @Wait(15)#EnemaChat
	sendMessage("ok %Slave%, lube up that nozzle and get it in", 20); //#EnemaChat @Wait(20)
	sendMessage(random("just imagine I am sliding my finger in you", "god I wish I was there to fuck you", "imagine I'm giving you my strap on"), 20); //#EnemaChat @Wait(20)
	sendMessage("ok %Slave%, let's fill you up!... open the valve a little and let the water flow."); //#EnemaChat
	sendMessage("while your getting full, let's go over a few rules:"); //#EnemaChat
	sendMessage("If you feel like your Ass is too full or your going to squirt the plug out say 'full'"); //#EnemaChat @CustomMode(full, Goto, Full)
	sendMessage("If you feel yourself cramping and can not handle anymore just say 'cramp'"); //#EnemaChat @CustomMode(cramp, Goto, Cramp)
	sendMessage("once you have emptied the bag say 'done'"); //#EnemaChat @CustomMode(done, Goto, Done)
	sendMessage("at that point I will give you instructions on how to evacuate yourself"); //#EnemaChat
	sendMessage("if you panic and need to use the toilet before being done say 'toilet'"); //#EnemaChat @CustomMode(toilet, Goto, Toilet)
	sendMessage("note, this is a punishment enema, which means that if you fail to finish it, we'll fill it back up and start again. %Lol%"); //#EnemaChat
	sendMessage("%Slave%, %DomHonorific% %DomName% does not accept failure", randomInteger(30, 60)); //#EnemaChat
//(EnduringEnema)
	// @Goto(E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11,E12)
	enemadone = false;

	while (!enemadone) {
		taunt = randomInteger(1, 13);

		switch (taunt) {

			case 1:
				response = sendInput("mmmmm, just feel that nice fluid filling you up.", randomInteger(30, 60)); //#EnemaChat
				break;
			case 2:

				response = sendInput("god, I just love a nice clean asshole to jam my strap on into.", randomInteger(30, 60)); //#EnemaChat
				break;
			case 3:

				response = sendInput("hmmm, I wonder if we should buy you a larger enema bag?", randomInteger(30, 60)); //#EnemaChat
				break;
			case 4:

				response = sendInput("I want you to feel yourself filling for me", randomInteger(30, 60)); //#EnemaChat
				break;
			case 5:

				sendMessage("squeeze that little sphincter of yours tight..."); //#EnemaChat
				response = sendInput("I don't want you to loose a drop!", randomInteger(20, 60)); //#EnemaChat
				break;
			case 6:

				response = sendInput("hmmm...I wonder what a whisky enema would feel like?", randomInteger(30, 60)); //#EnemaChat
				break;
			case 7:

				response = sendInput("if you spill any on the floor slave, don't worry, I'll allow you to lick it up.", randomInteger(30, 60)); //#EnemaChat
				break;
			case 8:

				sendMessage("first we stretch out that tummy of yours..."); //#EnemaChat
				response = sendInput(" then we dilate your ass.", randomInteger(20, 60)); //#EnemaChat
				break;
			case 9:

				response = sendInput("get yourself nice and clean %Slave% ... you never know when I'm going to take you Ass to Mouth", randomInteger(20, 60)); //#EnemaChat
				break;
			case 10:

				sendMessage("rock back and forth slave.... "); //#EnemaChat
				response = sendInput("I want my water sloshing around inside you.", randomInteger(20, 60)); //#EnemaChat
				break;
			case 11:
				response = sendInput("that's it... stretch out your abdomen and let me in.", randomInteger(20, 60)); //#EnemaChat
				break;
			case 12:

				sendMessage("I want you to get into prayer position ", randomInteger(5, 15)); //#EnemaChat
				sendMessage("look at you praying to the Goddess of enemas ", randomInteger(5, 15)); //#EnemaChat
				sendMessage("tell me aloud %SlaveName%, do you feel humble there? ", randomInteger(5, 15)); //#EnemaChat
				sendMessage("and who is your Goddess? ", randomInteger(4, 5)); //#EnemaChat
				response = sendInput(" %Good% ", randomInteger(20, 30)); //#EnemaChat
				break;
			case 13:

				response = sendInput("here's a tip, keep your ankles together and you're knees spread wide, you can really squeeze your ass closed that way", randomInteger(20, 60)); //#EnemaChat
				//@Goto(EnduringEnema)
				break;
		}
		if (response.isLike("full")) {
			fullEnema();
		}
		if (response.isLike("cramp")) {
			crampEnema();
		}
		if (response.isLike("toilet")) {
			toiletEnema();
		}
		if (response.isLike("done")) {
			doneEnema();
		}


	}


	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 31);
	run("dungeon/PunishmentBaseEnd.js");

	function fullEnema() {
//(Full)
		sendMessage("Stop the flow of water", 13); //#EnemaChat
		sendMessage("Awe... does someone need a little break??? ", randomInteger(10, 20)); //#EnemaChat
		sendMessage("let's give you a little time to absorb that water... ", randomInteger(10, 20)); //#EnemaChat
		sendMessage(random("get your butt as high in the air as you can", "ass up   face down   bitch", "get your face on the ground where it belongs")); //#EnemaChat
		sendMessage("I want it to get ALL the way in you %EmoteHappy% ", randomInteger(20, 30)); //#EnemaChat
		sendMessage("Maybe you should be squeezing  %MyYour% %Balls% while you're "+ random("holding that water in", "squeezing your sphincter tight", "not bearing the full pressure of the bottle", "not accepting Mistress's gift"), 5); //#EnemaChat
		sendMessage("That wasn't a request.... it was an order %Slave% ", randomInteger(30, 45)); //#EnemaChat
		sendMessage("ok, I think that's enough"); //#EnemaChat
		sendMessage("it's time to get back to your real punishment "); //@CustomMode(full, Goto, Full)"); //#EnemaChat
		sendMessage("open that valve back up a little so the water flows again ", randomInteger(3, 10)); //#EnemaChat
//@Goto(EnduringEnema)
	}

	function crampEnema() {
//(Cramp)
		sendMessage("close the valve ", 8); //#EnemaChat
		sendMessage("Aw... does my little sub's tummy hurt?? ", randomInteger(10, 20)); //#EnemaChat
		sendMessage("I know what will help with that..."); //#EnemaChat
		sendMessage(random("Rub your stomach where the cramp is", "rock back and forth", "get into a prayer position with your knees wide"), randomInteger(20, 30)); //#EnemaChat
		sendMessage("of course this is supposed to be a PUNISHMENT enema "); //#EnemaChat
		sendMessage("Let's really make you feel this...%Laugh%"); //#EnemaChat
		sendMessage("Open the valve all the way ", randomInteger(5, 10)) //#EnemaChat
		sendMessage("now close it %Laugh% ", randomInteger(5, 10)); //#EnemaChat
		sendMessage("Suffer for me %Slave% ", randomInteger(5, 10)); //#EnemaChat
		sendMessage("mmmm, I love fucking with you ", randomInteger(5, 10)); //#EnemaChat
		sendMessage("Discomfort is my divine gift to you", randomInteger(5, 10)); //#EnemaChat
//(cramping)
		response = sendInput("let me know when you're cramps have SUBSIDED "); //#EnemaChat
		while (true) {
			if (response.isLike("subside", "finish", "yes")) {
				sendMessage("good, I think you're ready to get back to that bottle of water hanging over your head. %EmoteHappy% ", randomInteger(5, 10)); //#EnemaChat
				break;
			} else
				response = sendInput("does that mean you're finished %Slave%?"); //#EnemaChat
			response.loop();
		}

//@DifferentAnswer @Goto(cramping)
//@Goto(EnduringEnema)
	}


	function toiletEnema() {
		response = sendInput("uh oh slave....did you evacuate yourself without permission?"); //#EnemaChat
		while (true) {
			if (response.isLike("sorry", "yeah", "yes")) {
				sendMessage("slave it really disappoints me when you can't follow instructions", randomInteger(5, 10)); //#EnemaChat
				sendMessage("on the bright side we're going to get to do this again! %Lol%", randomInteger(5, 10)); //#EnemaChat
				sendMessage("take a moment to get that last bit out", randomInteger(25, 40)); //#EnemaChat
				sendMessage("now go refill that bag all the way to the top", randomInteger(75, 90)); //#EnemaChat
				sendMessage("my Dearest %Slave%, now we get to start all over again %Grin%", randomInteger(5, 7)); //#EnemaChat


				break;
			} else
				response = sendInput("then why did you tell me that %Slave%?"); //#EnemaChat
			response = sendInput("I should have you refill your bottle just for sport!"); //#EnemaChat
			response.loop();
		}

//[no]
//[yes]
//@differentAnswer
	}

	function doneEnema() {
		sendMessage("Good boy!  I'm so glad you took that whole bag for me."); //#EnemaChat
		sendMessage("close the valve on the enema bag, and remove the plug/nozzle ", 5); //#EnemaChat
		sendMessage("%SlaveName%, please keep in mind that you don't have permission to leak a drop yet. %Lol%"); //#EnemaChat
		sendMessage("Go position yourself on the toilet, but keep me near. ", randomInteger(10, 20)); //#EnemaChat
		response = sendInput("well, is there anything you'd like to ask me ... hmmm? "); //#EnemaChat
		while (true) {
			if (response.isLike("please", "release", "poop", "shit", "dump", "evacuate", "defecate", "may", "can")) {
				sendMessage("hmmm, let me think about that? %Grin% ", randomInteger(10, 20)); //#EnemaChat
				break;
			} else
				sendMessage("you're so full of shit, you don't make sense ", randomInteger(10, 20)); //#EnemaChat
			//response = sendInput("does that mean you're finished %Slave%?"); //#EnemaChat
			response.loop();
		}

		response = sendInput(" to be 100 percent honest %SlaveName%, I just haven't heard enough groveling yet. %Lol%"); //#EnemaChat
		while (true) {
			if (response.isLike("please", "beg", "humble", "Please", "PLEASE", "release", "poop", "shit", "dump", "evacuate", "defecate", "may", "can")) {
				sendMessage("Hmmm, well if it means that much to you, go ahead %Lol%  ", randomInteger(10, 20)); //#EnemaCh
				break;
			} else
				sendMessage("you're so full of shit, you don't make sense, but I guess you can release now ", randomInteger(10, 20)); //#EnemaChat
			//response = sendInput("does that mean you're finished %Slave%?"); //#EnemaChat
			response.loop();
		}

		sendMessage("I hope you appreciate my generosity"); //#EnemaChat
		sendMessage(random("hmm", "let it flow", "hahaha bombs away", "do you feel humbled?", "you look pathetic", "gurgle gurgle", "%Laugh%"), randomInteger(10, 20)); //#EnemaChat
		sendMessage("I want to get ALL that water out of you %Laugh% ", randomInteger(20, 30)); //#EnemaChat
		sendMessage("maybe I should give you a swirlie....... just kidding  %EmoteHappy% ", randomInteger(20, 30)); //#EnemaChat
		sendMessage("%SlaveName%, take your time and complete this Enema  ", randomInteger(5, 10)); //#EnemaChat
		sendMessage("make sure you get yourself nice and clean. ", randomInteger(5, 15)); //#EnemaChat
		response = sendInput("when you're all done say 'finished' and we'll move on"); //#EnemaChat

		while (true) {
			if (response.isLike("finish", "finished", "yes")) {
				sendMessage("good,  I hope I'll be taking more advantage of that clean hole of yours soon. ");
				break;
			} else
				sendMessage(random("you're so full of shit, you don't make sense", "What the fuck are you saying?", "are you finished yet bitch?"), 0);
			//response = sendInput("does that mean you're finished %Slave%?"); //#EnemaChat
			response.loop();
		}

		enemadone = true;


	}
}