@Flag(BathroomFloorWash) @Variable[#DateDifference(BathroomWash, Days)]>=[9]  @Goto(BathroomWash)
@Variable[#DateDifference(BathroomWipe, Days)]>=[7]  @Goto(BathroomWipe)
@Variable[#DateDifference(BathroomVacuum, Days)]>=[15]  @Goto(BathroomVacuum)
(BathroomWash)
 @TempFlag(BathroomWashFloorTemp)
sendVirtualAssistantMessage("Bathroom! showImage("Images/Spicy/Home\*.jpg]
sendVirtualAssistantMessage(random("It's time to mop the floors!","Time for you to mop the floors","Lets have you do some floor mopping!","Time to mop mop mop %GNMGrin%","Work work work all day - mop all night %GNMlol%") );
sendVirtualAssistantMessage("But "+ random("(first","before that","before we get to that","just before"));
sendVirtualAssistantMessage(random("They need to be vacuumed","You have to vacuum them first","You gotta go ahead and vacuum them..) );
sendVirtualAssistantMessage(random("Fetch","Find and get","Retrieve) your vacuum cleaner, and whatever you need to mop the floors.); sleep(10); @Goto(Loop)
(BathroomWipe)
 @TempFlag(BathroomWipeTemp)
sendVirtualAssistantMessage("Bathroom! showImage("Images/Spicy/Home\*.jpg]
sendVirtualAssistantMessage("random("It's time to clean the toilet and whatelse","Time for you to clean the toilet and whatelse","Lets have you do some toiletscrubbing and whatelse)
sendVirtualAssistantMessage("random("Fetch","Find and get","Retrieve) whatever you need to scrub the toilet and whatever needs to be cleaned  sleep(10); @Goto(Loop)
(BathroomVacuum)
 @TempFlag(BathroomVacuumFloorTemp)
sendVirtualAssistantMessage("Bathroom! showImage("Images/Spicy/Home\*.jpg]
sendVirtualAssistantMessage("random("It's time to vacuum!","Time for you to vacuum the floor","Lets have you do some vacuuming!","Time to clean clean clean %GNMGrin%","Work work work all day - clean all night %GNMlol%)
sendVirtualAssistantMessage("random("You need to be vacuum the floor","You have to vacuum the floor","You gotta go ahead and vacuum the floor) 
sendVirtualAssistantMessage("random("Fetch","Find and get","Retrieve) your vacuum cleaner sleep(10); @Goto(Loop)
(Loop)
sendVirtualAssistantMessage("%GNMReady%
[yes]sendVirtualAssistantMessage("%GNMgood%
[no]sendVirtualAssistantMessage("Hurry.. sleep(10); @Goto(Loop)
@DifferentAnswer sendVirtualAssistantMessage("%GNMYesOrNo%
 @CallReturn(CR\BackgroundMode\Chores\KinkyCleaning.txt)
sendVirtualAssistantMessage("Okay then 
sendVirtualAssistantMessage("You can go ahead and start with the cleaning.. 
sendVirtualAssistantMessage("Report when you're done cleaning @CustomMode(#Done, Goto, Done)
(StartTimer)
 @SetVar[CleaningTimeTemp]=[0]
 @CountVar[CleaningTimeTemp]
 @CheckFlag(BellGame1)
 @CheckFlag(BellGame2) @Goto(Timer)
(BellGame1)
 sleep(randomInteger(20,120)); @Goto(Corner)
(Corner)
sendVirtualAssistantMessage("Go to the corner %SlaveName% @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp, Stop] sleep(randomInteger(20,60));
sendVirtualAssistantMessage("Return to work %SlaveName% @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp] @Goto(BellGame1)
(BellGame2)
 sleep(randomInteger(20,120)); @Goto(Sentence)
(Sentence)
 @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp, Stop]
(Type)
sendVirtualAssistantMessage("random("I have to clean properly","I'm a cleaning slut","I have to clean with a smile","Cleaning makes me happy","You can never clean enough","I wish I could clean all day","I really love cleaning)
[i have to clean properly]sendVirtualAssistantMessage("Get back to cleaning 
[i'm a cleaning slut]sendVirtualAssistantMessage("Get back to cleaning
[i have to clean with a smile]sendVirtualAssistantMessage("Get back to cleaning 
[cleaning makes me happy]sendVirtualAssistantMessage("Get back to cleaning 
[you can never clean enough]sendVirtualAssistantMessage("Get back to cleaning
[i wish i could clean all day]sendVirtualAssistantMessage("Get back to cleaning 
[i really love cleaning]sendVirtualAssistantMessage("Get back to cleaning
@AcceptAnswer sendVirtualAssistantMessage("Wrong.. Try again.. @Goto(Type)
sendVirtualAssistantMessage("Return to work @CountVar[CleaningTimeTemp] @Goto(BellGame2)
(Timer)
 sleep(99999);
(Done)
 @CustomMode(#Done,Normal) @CountVar[CleaningTimeTemp, Stop]
sendVirtualAssistantMessage("So you're done.. 
 @RapidCodeOn @CheckFlag(BathroomAverageSet)
 @CheckFlag(Bathroom5AverageSet)
 @CheckFlag(Bathroom4AverageSet)
 @CheckFlag(Bathroom3AverageSet)
 @CheckFlag(Bathroom2AverageSet)
 @Goto(Bathroom1AverageSet)
(Bathroom1AverageSet)
 @SetVar[Bathroom1Average]=[0] @SetFlag(Bathroom2AverageSet)
 @ChangeVar[Bathroom1Average]=[Bathroom1Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Bathroom2AverageSet)
 @SetVar[Bathroom2Average]=[0] @SetFlag(Bathroom3AverageSet)
 @ChangeVar[Bathroom2Average]=[Bathroom2Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Bathroom3AverageSet)
 @SetVar[Bathroom3Average]=[0] @SetFlag(Bathroom4AverageSet)
 @ChangeVar[Bathroom3Average]=[Bathroom3Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Bathroom4AverageSet)
 @SetVar[Bathroom4Average]=[0] @SetFlag(Bathroom5AverageSet)
 @ChangeVar[Bathroom4Average]=[Bathroom4Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Bathroom5AverageSet)
 @SetVar[Bathroom5Average]=[0] @SetFlag(BathroomAverageSet)
 @ChangeVar[Bathroom5Average]=[Bathroom5Average]+[CleaningTimeTemp]
 @SetVar[BathroomAverage]=[0]
 @ChangeVar[BathroomAverage]=[BathroomAverage]+[Bathroom1Average]
 @ChangeVar[BathroomAverage]=[BathroomAverage]+[Bathroom2Average]
 @ChangeVar[BathroomAverage]=[BathroomAverage]+[Bathroom3Average]
 @ChangeVar[BathroomAverage]=[BathroomAverage]+[Bathroom4Average]
 @ChangeVar[BathroomAverage]=[BathroomAverage]+[Bathroom5Average]
 @ChangeVar[BathroomAverage]=[BathroomAverage]/[5]
 @SetVar[BathroomSlow]=[0]
 @ChangeVar[BathroomSlow]=[BathroomSlow]+[BathroomAverage]
 @ChangeVar[BathroomSlow]=[BathroomSlow]*[2]
 @SetVar[BathroomFast]=[0]
 @ChangeVar[BathroomFast]=[BathroomFast]+[BathroomAverage]
 @ChangeVar[BathroomFast]=[BathroomFast]/[2]
 @SetVar[BathroomScopeLow]=[0]
 @ChangeVar[BathroomScopeLow]=[BathroomScopeLow]+[BathroomAverage]
 @ChangeVar[BathroomScopeLow]=[BathroomScopeLow]/[4]
 @ChangeVar[BathroomScopeLow]=[BathroomScopeLow]*[3]
 @SetVar[BathroomScopeHigh]=[0]
 @ChangeVar[BathroomScopeHigh]=[BathroomScopeHigh]+[BathroomAverage]
 @ChangeVar[BathroomScopeHigh]=[BathroomScopeHigh]/[4]
 @ChangeVar[BathroomScopeHigh]=[BathroomScopeHigh]*[5]
 @SetVar[BathroomWipeTime]=[0]
 @ChangeVar[BathroomWipeTime]=[BathroomWipeTime]+[BathroomAverage]
 @ChangeVar[BathroomWipeTime]=[BathroomWipeTime]/[4]
 @ChangeVar[BathroomWipeTime]=[BathroomWipeTime]*[5]
 @SetVar[BathroomWipeSlow]=[0]
 @ChangeVar[BathroomWipeSlow]=[BathroomWipeSlow]+[BathroomWipeTime]
 @ChangeVar[BathroomWipeSlow]=[BathroomWipeSlow]*[2]
 @SetVar[BathroomWipeFast]=[0]
 @ChangeVar[BathroomWipeFast]=[BathroomWipeFast]+[BathroomWipeTime]
 @ChangeVar[BathroomWipeFast]=[BathroomWipeFast]/[2]
 @SetVar[BathroomWipeScopeLow]=[0]
 @ChangeVar[BathroomWipeScopeLow]=[BathroomWipeScopeLow]+[BathroomWipeTime]
 @ChangeVar[BathroomWipeScopeLow]=[BathroomWipeScopeLow]/[4]
 @ChangeVar[BathroomWipeScopeLow]=[BathroomWipeScopeLow]*[3]
 @SetVar[BathroomWipeScopeHigh]=[0]
 @ChangeVar[BathroomWipeScopeHigh]=[BathroomWipeScopeHigh]+[BathroomWipeTime]
 @ChangeVar[BathroomWipeScopeHigh]=[BathroomWipeScopeHigh]/[4]
 @ChangeVar[BathroomWipeScopeHigh]=[BathroomWipeScopeHigh]*[5]
 @SetVar[BathroomWashTime]=[0]
 @ChangeVar[BathroomWashTime]=[BathroomWashTime]+[BathroomAverage]
 @ChangeVar[BathroomWashTime]=[BathroomWashTime]/[4]
 @ChangeVar[BathroomWipeTime]=[BathroomWipeTime]*[5]
 @SetVar[BathroomWashSlow]=[0]
 @ChangeVar[BathroomWashSlow]=[BathroomWashSlow]+[BathroomWashTime]
 @ChangeVar[BathroomWashSlow]=[BathroomWashSlow]*[2]
 @SetVar[BathroomWashFast]=[0]
 @ChangeVar[BathroomWashFast]=[BathroomWashFast]+[BathroomWashTime]
 @ChangeVar[BathroomWashFast]=[BathroomWashFast]/[2]
 @SetVar[BathroomWashScopeLow]=[0]
 @ChangeVar[BathroomWashScopeLow]=[BathroomWashScopeLow]+[BathroomWashTime]
 @ChangeVar[BathroomWashScopeLow]=[BathroomWashScopeLow]/[4]
 @ChangeVar[BathroomWashScopeLow]=[BathroomWashScopeLow]*[3]
 @SetVar[BathroomWashScopeHigh]=[0]
 @ChangeVar[BathroomWashScopeHigh]=[BathroomWashScopeHigh]+[BathroomWashTime]
 @ChangeVar[BathroomWashScopeHigh]=[BathroomWashScopeHigh]/[4]
 @ChangeVar[BathroomWashScopeHigh]=[BathroomWashScopeHigh]*[5]
(BathroomAverageSet)
@Flag(BathroomVacuumFloorTemp)  @Goto(Vacuum)
@Flag(BathroomWipeTemp)  @Goto(Wipe)
@Flag(BathroomWashFloorTemp)  @Goto(Wash)
 @Goto(Vacuum)
(Vacuum)
 @If[CleaningTimeTemp]>=[BathroomScopeLow]AND[CleaningTimeTemp]<=[BathroomScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[BathroomFast]Then(EndFast)
 @If[CleaningTimeTemp]>=[BathroomSlow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[BathroomScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[BathroomScopeHigh]Then(EndFaster)
(Wipe)
 @If[CleaningTimeTemp]>=[BathroomWipeScopeLow]AND[CleaningTimeTemp]<=[BathroomWipeScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[BathroomWipeFast]Then(EndFast)
 @If[CleaningTimeTemp]>=[BathroomWipeSlow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[BathroomWipeScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[BathroomWipeScopeHigh]Then(EndFaster)
(Wash)
 @If[CleaningTimeTemp]>=[BathroomWashScopeLow]AND[CleaningTimeTemp]<=[BathroomWashScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[BathroomWashFast]Then(EndFast)
 @If[CleaningTimeTemp]>=[BathroomWashSlow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[BathroomWashScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[BathroomWashScopeHigh]Then(EndFaster)
(Satisfied)
sendVirtualAssistantMessage("Good job today %SlaveName% @Goto(FlagTest)
(EndFast)
sendVirtualAssistantMessage("random("Too fast!","That was waay too fast %SlaveName% !!","Impossible","You can't possible be this fast!)
sendVirtualAssistantMessage("random("That can't go unpunished","I have to punish you for this","I'm gonna have to punish you..) @SetFlag(BadChores)
sendVirtualAssistantMessage("I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[200] @Goto(FlagTest)
(EndSlow)
sendVirtualAssistantMessage("random("You're late!","You're late %SlaveName%","You're late slut..","Late are we?","You know you're late right?) @SetFlag(BadChores)
sendVirtualAssistantMessage("random("I don't tolerate late!","You know I don't tolerate it when you're late","There is zero tolerance for being late and lazy!) 
sendVirtualAssistantMessage("I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[200] @Goto(FlagTest)
(EndSlower)
sendVirtualAssistantMessage("You've been slower than usual.. @CheckFlag(CleaningWarning)
sendVirtualAssistantMessage("Anything I should know?
[lazy,laziness]sendVirtualAssistantMessage("random("Inexcusable!","You know that laziness can't be tolerated!)
[tired,need rest,sleep]sendVirtualAssistantMessage("random("Inexcusable","I don't care if you're tired!)
[toys,you made me,you told me]sendVirtualAssistantMessage("random("Excuses! really!?","Wauv you're gonna blame me..)
[thorough,better cleaning]sendVirtualAssistantMessage("I see but you should always be thorough!
[dirty,dirtier,dusty]sendVirtualAssistantMessage("Your #Home should always be tidy!
@AcceptAnswer sendVirtualAssistantMessage("I'm giving you a warning %SlaveName% @SetFlag(CleaningWarning) @Goto(FlagTest)
sendVirtualAssistantMessage("random("I'm gonna have to punish you slave","I'm sorry but this can't go unpunished) @SetFlag(BadChores)
sendVirtualAssistantMessage("I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[100] @Goto(FlagTest)
(CleaningWarning)
sendVirtualAssistantMessage("I gave you a warning last time! @DeleteFlag(CleaningWarning)
sendVirtualAssistantMessage("So this time I'm punishing you!  @SetFlag(BadChores)
sendVirtualAssistantMessage("I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[100] @Goto(FlagTest)
(EndFaster)
sendVirtualAssistantMessage("You've been faster than usual.. @CheckFlag(CleaningWarning)
sendVirtualAssistantMessage("Anything I should know?
sendVirtualAssistantMessage("You can't haste thoroughness!
sendVirtualAssistantMessage("I expect that you're always thorough when cleaning
sendVirtualAssistantMessage(random("I'm gonna have to punish you slave","I'm sorry but this can't go unpunished")); @SetFlag(BadChores)
sendVirtualAssistantMessage("I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[100] @Goto(FlagTest)
(EndPerfect)
sendVirtualAssistantMessage("%GNMgood% %SlaveName% #MeritChangePMedium
sendVirtualAssistantMessage("Allow me to reward your random("(splendid","good","excellent","lovely) random("(behaviour","work) %GNMGrin% @ChangeVar[GNMGold]=[GNMGold]+[#GoldMedium] @Goto(FlagTest)
(FlagTest)
 @CheckFlag(BathroomWashFloorTemp)
 @CheckFlag(BathroomVacuumFloorTemp)
 @CheckFlag(BathroomWipeTemp) @Goto(BathroomVacuumFloorTemp)
(BathroomVacuumFloorTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("BathroomVacuum", setDate());
@End
(BathroomWashFloorTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("BathroomVacuum", setDate());
 setDate("BathroomWash", setDate());
@End
(BathroomWipeTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("BathroomVacuum", setDate());
 setDate("BathroomWipe", setDate());
@End