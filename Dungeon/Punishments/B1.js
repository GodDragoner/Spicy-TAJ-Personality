(Enema)
sendDungeonMessage(" Well Slave, After reviewing your record, it seems you're clearly full of shit. "); //#ReceptionChat
sendDungeonMessage(" Don't worry though.....  I have a solution for that "); //#ReceptionChat
sendDungeonMessage(" its time to send you for an enema! "); //#ReceptionChat
sendDungeonMessage(" Miss Sarah is ready to clean you out.. "); //#ReceptionChat 
(CheckStatus1)
@NullResponse @CheckFlag(EnemaFirstVisit) @SetFlag(EnemaFirstVisit)
sendMessage(" This is your first time getting an Enema with me @SetVar[EnemaVisit]=[1]"); //#EnemaChat
sendMessage(" You may have had enema's in the past..."); //#EnemaChat
sendMessage(" You should understand I intend this to be a PUNISHMENT enema"); //#EnemaChat
sendMessage(" you should have a enema bag like this, Lube, and potential add ins ready"); //#EnemaChat
sendMessage(" you may feel uncomfortable or a bit of cramping..."); //#EnemaChat
sendMessage(" I just want to reassure you that this is how it always is #Laugh"); //#EnemaChat
(EnemaFirstVisit)
sendMessage(" ok Slave, its time for your enema"); //#EnemaChat
sendMessage(" Go to the bathroom, set up your enema bag and equipment"); //#EnemaChat @Wait(60)
sendMessage(" when you're there and ready, say 'ready;"); //#EnemaChat
[ready,Ready,ok,OK,yes","Yes] sendMessage(" excellent!"); //#EnemaChat
@DifferentAnswer @Goto(EnemaFirstVisit)
sendMessage(" Hmmm how to show you that you're my special slave....",10); //#EnemaChat @Wait(15)
sendMessage(" oh, I know!  Fill your bag with " + random("Warm water","Warm water with Soap","Warm water","Warm water with Soap","Warm water","Warm water with Soap","cold water with soap","cold water","glycerine and water","carbonated soda","Epsom salts in warm water"), 30); //#EnemaChat
sendMessage(" Make sure you get all the air out of the line....", 10); //#EnemaChat @Wait(10)
sendMessage(" or don't that might make things more uncomfortable. %Grin%", 10); //#EnemaChat @Wait(10)
sendMessage(" now get to it! %Slave%",90); //#EnemaChat @sleep(90)
(filling)
sendMessage(" when your enema is prepared say 'ready'"); //#EnemaChat
[ready","Ready","ok","OK","yes","Yes] sendMessage(" %GNMGood% !"); //#EnemaChat
@DifferentAnswer @Goto(filling)

sendMessage(" I think for this enema I want" + random("you on your knees"," you in doggy position","you on your back"," you on your side. "), 15); // @Wait(15)#EnemaChat
sendMessage(" ok %Slave%, lube up that nozzle and get it in",20); //#EnemaChat @Wait(20)
sendMessage( random("just imagine I'm sliding my finger in you"," god I wish I was there to fuck you"," imagine I'm giving you my strap on"),20); //#EnemaChat @Wait(20)
sendMessage(" ok %Slave%, lets fill you up!... open the valve a little and let the water flow."); //#EnemaChat
sendMessage(" while you're getting full, lets go over a few rules:"); //#EnemaChat
sendMessage(" If you feel like your Ass is too full or your going to squirt the plug out say 'full'"); //#EnemaChat @CustomMode(full, Goto, Full)
sendMessage(" If you feel yourself cramping and can't handle anymore just say 'cramp'"); //#EnemaChat @CustomMode(cramp, Goto, Cramp)
sendMessage(" once you've emptied the bag say 'done'"); //#EnemaChat @CustomMode(done, Goto, Done)
sendMessage(" at that point I'll give you instructions on how to evacuate yourself"); //#EnemaChat
sendMessage(" if you panic and need to use the toilet before being done say 'toilet'"); //#EnemaChat @CustomMode(toilet, Goto, Toilet)
sendMessage(" note, this is a punishment enema, which means that if you don't finish it, we'll fill it back up and start again. %GNMlol"); //#EnemaChat 
sendMessage(" %Slave%, @ShowVar[GirlfriendName] doesn't accept failure", randomInteger(30,60)); //#EnemaChat 
//(EnduringEnema)
 // @Goto(E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11,E12)
  taunt= randomInteger(1,13);
  
  switch (taunt) {

	case 1:
	sendMessage(" mmmmm, just feel that nice fluid filling you up.", randomInteger(30,60))"); //#EnemaChat
	break;
	case 2:

	sendMessage(" god, I just love a nice clean asshole to jam my strap on into.",randomInteger(30,60)); //#EnemaChat
	break;
	case 3:

	sendMessage(" hmmm, I wonder if we should buy you a larger enema bag?",randomInteger(30,60)); //#EnemaChat
	break;
	case 4:

	sendMessage(" I want you to feel yourself filling for me",randomInteger(30,60)); //#EnemaChat
	break;
	case 5:

	sendMessage(" squeeze that little sphinter of yours tight..."); //#EnemaChat
	sendMessage(" I don't want you to loose a drop!",randomInteger(20,60)); //#EnemaChat
	break;
	case 6:

	sendMessage(" hmmm...I wonder what a whisky enema would feel like?",randomInteger(30,60)); //#EnemaChat
	break;
	case 7:

	sendMessage(" if you spill any on the floor slave, don't worry, I'll allow you to lick it up.",randomInteger(30,60)); //#EnemaChat
	break;
	case 8:

	sendMessage(" first we stretch out that tummy of yours...#EnemaChat
	@SystemMessage  then we dilate your ass.",randomInteger(20,60)); //#EnemaChat
	break;
	case 9:

	sendMessage(" get yourself nice and clean #Slave ... you never know when I'm going to take you Ass to Mouth",randomInteger(20,60)); //#EnemaChat
	break;
	case 10:

	sendMessage(" rock back and forth slave.... "); //#EnemaChat
	sendMessage(" I want my water sloshing around inside you.",randomInteger(20,60)); //#EnemaChat
	break;
	case 11:
	sendMessage(" thats it... stretch out your abdomen and let me in.",randomInteger(20,60)); //#EnemaChat
	break;
	case 12:

	sendMessage(" I want you to get into prayer position @Wait(#Random(5,15))"); //#EnemaChat
	sendMessage(" look at you praying to the Goddess of enemas @Wait(#Random(5,15))"); //#EnemaChat
	sendMessage(" tell me aloud #SlaveName, do you feel humble there? @Wait(#Random(5,15))"); //#EnemaChat
	sendMessage(" and who is your Goddess? @Wait(#Random(4,5))"); //#EnemaChat
	sendMessage("  %GNMGood% ",randomInteger(20,30))); //#EnemaChat
	break;
	case 13:

	sendMessage(" here's a tip, keep your ankles together and you're knees spread wide, you can really squeeze your ass closed that way",randomInteger(20,60)); //#EnemaChat
	//@Goto(EnduringEnema)
	break;
  }
  
  /*
(Full)
sendMessage(" Stop the flow of water @Wait(13)"); //#EnemaChat
sendMessage(" Awe... does someone need a little break??? @Wait(#Random(10,20))"); //#EnemaChat
sendMessage(" lets give you a little time to absorb that water... @Wait(#Random(10,20))"); //#EnemaChat
sendMessage(" random("(get your butt as high in the air as you can"," ass up   face down   bitch"," get your face on the ground where it belongs)"); //#EnemaChat
sendMessage(" I want it to get ALL the way in you #Smile @Wait(#Random(20,30))"); //#EnemaChat
sendMessage(" Maybe you should be squeezing  your #Balls while you're random("(holding that water in"," squeezing your sphinter tight"," not bearing the full pressure of the bottle"," not accepting Mistress's gift) @Wait(5)"); //#EnemaChat
sendMessage(" That wasn't a request.... it was an order #Slave @Wait(#Random(30,45))"); //#EnemaChat
sendMessage(" ok, I think thats enough"); //#EnemaChat
sendMessage(" its time to get back to your real punishment @CustomMode(full, Goto, Full)"); //#EnemaChat 
sendMessage(" open that valve back up a little so the water flows again @Wait(#Random(3,10)) "); //#EnemaChat
@Goto(EnduringEnema)

(Cramp)
sendMessage(" close the valve @Wait(8)"); //#EnemaChat
sendMessage(" Aw... does my little sub's tummy hurt?? @Wait(#Random(10,20))"); //#EnemaChat
sendMessage(" I know what will help with that..."); //#EnemaChat
sendMessage(" random("(Rub your stomach where the cramp is"," rock back and forth"," get into a prayer position with your knees wide) @sleep(#Random(20,30))"); //#EnemaChat
sendMessage(" of course this is supposed to be a PUNISHMENT enema "); //#EnemaChat
sendMessage(" Lets really make you feel this...#Laugh"); //#EnemaChat
sendMessage(" Open the valve all the way @Wait(#Random(5,10))#EnemaChat
sendMessage(" now close it #Laugh @Wait(#Random(5,10))"); //#EnemaChat
sendMessage(" Suffer for me #Slave @Wait(#Random(5,10))"); //#EnemaChat
sendMessage(" mmmm, I love fucking with you @Wait(#Random(5,10))"); //#EnemaChat
sendMessage(" Discomfort is my divine gift to you  @CustomMode(cramp, Goto, Cramp) @Wait(#Random(5,10))"); //#EnemaChat
(cramping)
sendMessage(" let me know when you're cramps have SUBSIDED @Wait(#Random(5,10))"); //#EnemaChat
[yes,subsided,finished] good, I think you're ready to get back to that bottle of water hanging over your head. #Smile @Wait(#Random(5,10))"); //#EnemaChat
@DifferentAnswer @Goto(cramping)
@Goto(EnduringEnema)
 


//(Toilet)
sendMessage(" ut oh slave....did you evacuate yourself without permission?"); //#EnemaChat
[no]
[yes]
@differentAnswer

//(Done)
sendMessage(" Good boy!  I'm so glad you took that whole bag for me."); //#EnemaChat
sendMessage(" close the valve on the enema bag, and remove the plug/nozzle @Wait(5)"); //#EnemaChat
sendMessage(" #SlaveName, please keep in mind that you don't have permission to leak a drop yet. #GNMlol"); //#EnemaChat
sendMessage(" Go position yourself on the toilet, but keep me near. @Wait(#Random(10,20))"); //#EnemaChat
sendMessage(" well, is there anything you'd like to ask me ... hmmm? "); //#EnemaChat
[please, release, poop,shit, dump, evacuate, defecate, may, can] sendMessage(" hmmm, let me think about that? #GNMGrin @Wait(#Random(10,20))"); //#EnemaChat
@DifferentAnswer  sendMessage(" you're so full of shit, you don't make sense @Wait(#Random(10,20)) "); //#EnemaChat
sendMessage("  to be 100 percent honest #SlaveName, I just haven't heard enough groveling yet. #GNMlol"); //#EnemaChat
[please,beg,humble","Please","PLEASE","release","poop","shit","dump","evacuate","defecate","may","can] sendMessage(" Hmmm, well if it means that much to you, go ahead #GNMLol  @Wait(#Random(10,20))"); //#EnemaChat
@DifferentAnswer  sendMessage(" you're so full of shit, you don't make sense, but I guess you can release now @Wait(#Random(10,20)) "); //#EnemaChat
sendMessage(" I hope you appreciate my generosity"); //#EnemaChat
sendMessage(" random("(hmm"," let it flow"," hahaha bombs away"," do you feel humbled?"," you look pathetic"," gurgle gurgle"," #Laugh) @Wait(#Random(10,20))"); //#EnemaChat
sendMessage(" I want to get ALL that water out of you #Laugh @Wait(#Random(20,30))"); //#EnemaChat
sendMessage(" maybe I should give you a swirlie....... just kidding  #smile @Wait(#Random(20,30))"); //#EnemaChat
sendMessage(" #SlaveName, take your time and complete this Enema  @Wait(#Random(5,10))"); //#EnemaChat
sendMessage(" make sure you get yourself nice and clean. @Wait(#Random(5,15))"); //#EnemaChat
sendMessage(" when you're all done say "finished" and we'll move on @SetFlag(PunishmentComplete)"); //#EnemaChat
[finished, Finished] sendMessage(" good,  I hope I'll be taking more advantage of that clean hole of yours soon.   @TempFlag(B1Complete) @CallReturn(CR\BackgroundMode\Punishment\PunishmentBaseEnd.txt)#EnemaChat
@DifferentAnswer  sendMessage(" you're so full of shit, you don't make sense
@End
*/
