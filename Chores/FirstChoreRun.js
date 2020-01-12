
 setDate("Room1Vacuum");
 setDate("Room2Vacuum");
 setDate("Room3Vacuum");
 setDate("Room4Vacuum");
 setDate("Room5Vacuum");
 setDate("Room1Wash");
 setDate("Room2Wash");
 setDate("Room3Wash");
 setDate("Room4Wash");
 setDate("Room5Wash");
 setDate("Room1Wipe");
 setDate("Room2Wipe");
 setDate("Room3Wipe");
 setDate("Room4Wipe");
 setDate("Room5Wipe");
 setDate("KitchenVacuum");
 setDate("KitchenWash");
 setDate("KitchenSpecial");
 setDate("BathroomVacuum");
 setDate("BathroomSpecial");
 setDate("BathroomWash");
 setVar("chorelog", "<>");
sendVirtualAssistantMessage(" Hello %SubName% ");
sendVirtualAssistantMessage(" This is the first time you're reporting for chores");
if(getVar(VARIABLE_SLAVE_TYPE)==1) {
sendVirtualAssistantMessage(" Since you serve full time you are required to complete at least "+getVar(VARIABLE_MIN_WEEKLY_CHORES)+" chores each week");
}else{
 sendVirtualAssistantMessage(" Since you serve as part time it isn't mandatory for you to complete chores");
 sendVirtualAssistantMessage(" However your domme is very pleased if you do so");
}
sendVirtualAssistantMessage(" There is a large variety of chores");

sendVirtualAssistantMessage(" Would you like chores involving budgets and your allowances?");
sendVirtualAssistantMessage(" This involves you keeping track of your money..");
sendVirtualAssistantMessage(" We'll dicuss things like average income, budgets to buy food etc.");
sendVirtualAssistantMessage(" Once in a while but on a regular schedule your chores will involve updating these budgets");
sendVirtualAssistantMessage(" If you were a real slave you wouldn't even be allowed access to money..");
sendVirtualAssistantMessage(" You would simply be the one keeping check on all the books..");
sendVirtualAssistantMessage(" Well do you want chores involving finance?");

answer=createInput("Yes", "no");
    while (true) {
        if (answer.isLike("yes")) {
             sendVirtualAssistantMessage(" Okay.. ");
			 setVar("ChoreFinances", true);
            break;
        } else if (answer.isLike("no")) {
			sendVirtualAssistantMessage(" Okay..");
 
            break;
        } else {
            sendVirtualAssistantMessage(" Yes or no?");
            answer.loop();
        }
    }
answer.clearOptions();

if (isVar("ToyGirlfriend") && getVar("ToyGirlfriend"))
	{
sendVirtualAssistantMessage("  I noticed that you have a girlfriend or Wife....");
sendVirtualAssistantMessage("  will %girlfriendname% be assigning you chores?");

answer=createInput("Yes", "no");
    while (true) {
        if (answer.isLike("yes")) {
             sendVirtualAssistantMessage(" Wonderful");
			 setVar("AssignedChores", true);
            break;
        } else if (answer.isLike("no")) {
			sendVirtualAssistantMessage("  Too bad, I was hoping "+getVar("GirlfriendName")+ " could play a small part in your submission.");
			setVar("AssignedChores", false)
            break;
        } else {
            sendVirtualAssistantMessage(" Yes or no?");
            answer.loop();
        }
    }
answer.clearOptions();


	}


sendVirtualAssistantMessage(" Next..");
sendVirtualAssistantMessage(" Do you live in an apartment or house?");
answer=createInput("Apartment", "House");
    while (true) {
        if (answer.isLike("Apartment")) {
             sendVirtualAssistantMessage(" I see.. ");
			 setVar("HouseActive", false);
			 setVar("ApartmentActive", true); 

            break;
        } else if (answer.isLike("house")) {
			sendVirtualAssistantMessage(" %GNMGood% ");
			sendVirtualAssistantMessage(" if its up to me you'll soon be living in a cage. %GNMSmile%");
			 setVar("HouseActive", true);
			 setVar("ApartmentActive", false); 
            break;
        } else {
            sendVirtualAssistantMessage(" Apartment or house");
			sendVirtualAssistantMessage(" if you live in a Condo, Dorm, Flat, etc, just say 'Apartment'");
            answer.loop();
        }
    }
answer.clearOptions();


sendVirtualAssistantMessage(" Do you have a kitchen in your %Home% ..");
sendVirtualAssistantMessage(" That you are responsible for cleaning?");
answer=createInput("Yes", "no");
    while (true) {
        if (answer.isLike("yes")) {
             sendVirtualAssistantMessage(" Okay then.. ");
			 setVar("KitchenActive", true);
            break;
        } else if (answer.isLike("no")) {
			sendVirtualAssistantMessage(" Okay then..");
			setVar("KitchenActive", false);
            break;
        } else {
            sendVirtualAssistantMessage(" %GNMYesOrNo%");
            answer.loop();
        }
    }
answer.clearOptions();


sendVirtualAssistantMessage(" Do you have a bathroom in your %Home%");
sendVirtualAssistantMessage(" That you are responsible for cleaning?");
answer=createInput("Yes", "no");
    while (true) {
        if (answer.isLike("yes")) {
             sendVirtualAssistantMessage(" Okay then.. ");
			 setVar("BathroomActive", true);
            break;
        } else if (answer.isLike("no")) {
			sendVirtualAssistantMessage("Tsk Tsk.... a true submissive like you deserves that lowly task.");
			sendVirtualAssistantMessage(" Okay then..");
			setVar("BathroomActive", false);
            break;
        } else {
            sendVirtualAssistantMessage(" %GNMYesOrNo%");
            answer.loop();
        }
    }
answer.clearOptions();


sendVirtualAssistantMessage(" I'm gonna ask you how many rooms are in your %home%");
sendVirtualAssistantMessage(" You can choose between 1-5 not including kitchen and bathroom");
sendVirtualAssistantMessage(" If you have more than 5 rooms or some of them are very small consider adding two of them together");
sendVirtualAssistantMessage(" I also suggest that you draw a schematic of your %home% and add it to the folder named Home");
sendVirtualAssistantMessage(" The folder should be located inside 'Spicy'");
sendVirtualAssistantMessage(" You can name the image whatever you want");
sendVirtualAssistantMessage(" Just make sure that there is only 1 image inside the folder");
sendVirtualAssistantMessage(" It can look something like this ",0);
showImage("Images/Spicy/Home/*.*");
sendVirtualAssistantMessage(" Notice how each room are assigned a number, except for the kitchen and bathroom.");
showImage("images/Spicy/Home/*.*");
sendVirtualAssistantMessage(" Also notice how 3 rooms have the same number because they were added together.. ");
showImage("Images/Spicy/Home/*.*");

//(Rooms)
sendVirtualAssistantMessage(" How many rooms in your %home% are you responsible for cleaning?");

 answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();
            if (result <= 0) {
                sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower");
                result.loop();
            } else {
				switch(result)
				{
				case 1:
				sendVirtualAssistantMessage(" You will find yourself often cleaing that one room ");
				setVar("RoomNum",result);
				break;
				case 2:
				sendVirtualAssistantMessage(" As a proper slave you should take care of more than two rooms ");
				setVar("RoomNum",result);
				break;
				case 3:
				sendVirtualAssistantMessage(" Three rooms sounds decent");	
				setVar("RoomNum",result);
				break;
				case 4:
				sendVirtualAssistantMessage(" You will keep them clean from now one");
				setVar("RoomNum",result);
				break;
				case 5:
				sendVirtualAssistantMessage(" I love making you clean and I hope you love it too because there is gonna be a lot of it"); 
				setVar("RoomNum",result);
				break;
				default:
				sendVirtualAssistantMessage(" 1, 2, 3, 4 or 5? It cannot be more than 5 rooms");
				result.loop();
				break;
					
					
				}
				
			}
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
            answer.loop();
        }
    }

///[1]sendVirtualAssistantMessage(" You will find yourself often cleaing that one room ");@SetFlag(1Room) 
//[2]sendVirtualAssistantMessage(" As a proper slave you should take care of more than two rooms ");@SetFlag(2Room) 
//[3]sendVirtualAssistantMessage(" Three rooms sounds decent"); @SetFlag(3Room)
///[4]sendVirtualAssistantMessage(" You will keep them clean from now one"); @SetFlag(4Room) 
//[5]sendVirtualAssistantMessage(" I love making you clean and I hope you love it too because there is gonna be a lot of it"); @SetFlag(5Room)
//@DifferentAnswer sendVirtualAssistantMessage(" 1, 2, 3, 4 or 5? It cannot be more than 5 rooms");
sendVirtualAssistantMessage(" Next..");
sendVirtualAssistantMessage(" Do like getting kinky while cleaning?");
sendVirtualAssistantMessage(" This might include having you clean on all fours, using some sort of toys while cleaning");
sendVirtualAssistantMessage(" You'll never really know the limit of my imagination %GNMLol%");
//(Again)
sendVirtualAssistantMessage(" On a scale from 1-10 where 1 is never and 10 is very often would you like to 'play' while cleaning rooms?"); 

answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();
            if ((result >10) ||(result<1) ){
                sendVirtualAssistantMessage("You have to choose a number between 1 and 10");
                answer.loop();
            } else {
				setVar("cleaningKinky", result);
				sendVirtualAssistantMessage(" Great!");
				sendVirtualAssistantMessage(" I think I have all I need for now %GNMGrin%");
			}
        } else {
            sendVirtualAssistantMessage(" You didn't properly choose a value between 1 and 10.. Try again...");
            answer.loop();
        }
    }
