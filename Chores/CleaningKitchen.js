@Flag(KitchenFloorWash) @Variable[#DateDifference(KitchenWash, Days)]>=[30]  @Goto(KitchenWash)
@Variable[#DateDifference(KitchenWipe, Days)]>=[14]  @Goto(KitchenWipe)
@Variable[#DateDifference(KitchenVacuum, Days)]>=[7]  @Goto(KitchenVacuum)
(KitchenWash)
 @TempFlag(KitchenWashFloorTemp)
sendVirtualAssistantMessage(" Kitchen! showImage("Images/Spicy/Home\*.jpg]
sendVirtualAssistantMessage(" random("(It's time to mop the floors!","Time for you to mop the floors","Lets have you do some floor mopping!","Time to mop mop mop %GNMGrin%","Work work work all day - mop all night %GNMlol%) 
sendVirtualAssistantMessage(" But random("(first","before that","before we get to that","just before)
sendVirtualAssistantMessage(" random("(They need to be vacuumed","You have to vacuum them first","You gotta go ahead and vacuum them..) 
sendVirtualAssistantMessage(" random("(Fetch","Find and get","Retrieve) your vacuum cleaner, and whatever you need to mop the floors. sleep(10); @Goto(Loop)
(KitchenWipe)
 @TempFlag(KitchenWipeTemp)
sendVirtualAssistantMessage(" Kitchen! showImage("Images/Spicy/Home\*.jpg]
sendVirtualAssistantMessage(" random("(It's time to wipe the surfaces!","Time for you to wipe the surfaces","Lets have you do some wiping!","Time to wipe wipe wipe %GNMGrin%","Work work work all day - wipe all night %GNMlol%)
sendVirtualAssistantMessage(" But random("(first","before that","before we get to that","just before)
sendVirtualAssistantMessage(" random("(You need to be vacuum the floor and other surfaces","You have to vacuum the floor and surfaces first","You gotta go ahead and vacuum the floor then the surfaces..) 
sendVirtualAssistantMessage(" random("(Fetch","Find and get","Retrieve) your vacuum cleaner, and whatever you need to wipe and properly clean the surfaces. sleep(10); @Goto(Loop)
(KitchenVacuum)
 @TempFlag(KitchenVacuumFloorTemp)
sendVirtualAssistantMessage(" Kitchen! showImage("Images/Spicy/Home\*.jpg]
sendVirtualAssistantMessage(" random("(It's time to vacuum!","Time for you to vacuum the floor","Lets have you do some vacuuming!","Time to clean clean clean %GNMGrin%","Work work work all day - clean all night %GNMlol%)
sendVirtualAssistantMessage(" random("(You need to be vacuum the floor","You have to vacuum the floor","You gotta go ahead and vacuum the floor) 
sendVirtualAssistantMessage(" random("(Fetch","Find and get","Retrieve) your vacuum cleaner sleep(10); @Goto(Loop)
(Loop)
sendVirtualAssistantMessage(" %GNMReady%
[yes]sendVirtualAssistantMessage(" %GNMgood%
[no]sendVirtualAssistantMessage(" Hurry.. sleep(10); @Goto(Loop)
@DifferentAnswer sendVirtualAssistantMessage(" %GNMYesOrNo%
 @CallReturn(CR\BackgroundMode\Chores\KinkyCleaning.txt)
sendVirtualAssistantMessage(" Okay then 
sendVirtualAssistantMessage(" You can go ahead and start with the cleaning.. 
sendVirtualAssistantMessage(" Report when you're done cleaning @CustomMode(#Done, Goto, Done)
(StartTimer)
 @SetVar[CleaningTimeTemp]=[0]
 @CountVar[CleaningTimeTemp]
 @CheckFlag(BellGame1)
 @CheckFlag(BellGame2) @Goto(Timer)
(BellGame1)
 sleep(randomInteger(20,120)); @Goto(Corner)
(Corner)
sendVirtualAssistantMessage(" Go to the corner %SlaveName% @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp, Stop] sleep(randomInteger(20,60));
sendVirtualAssistantMessage(" Return to work %SlaveName% @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp] @Goto(BellGame1)
(BellGame2)
 sleep(randomInteger(20,120)); @Goto(Sentence)
(Sentence)
 @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp, Stop]
(Type)
sendVirtualAssistantMessage(" random("(I have to clean properly","I'm a cleaning slut","I have to clean with a smile","Cleaning makes me happy","You can never clean enough","I wish I could clean all day","I really love cleaning)
[i have to clean properly]sendVirtualAssistantMessage(" Get back to cleaning
[i'm a cleaning slut]sendVirtualAssistantMessage(" Get back to cleaning
[i have to clean with a smile]sendVirtualAssistantMessage(" Get back to cleaning 
[cleaning makes me happy]sendVirtualAssistantMessage(" Get back to cleaning
[you can never clean enough]sendVirtualAssistantMessage(" Get back to cleaning
[i wish i could clean all day]sendVirtualAssistantMessage(" Get back to cleaning 
[i really love cleaning]sendVirtualAssistantMessage(" Get back to cleaning
@AcceptAnswer sendVirtualAssistantMessage(" Wrong.. Try again.. @Goto(Type)
sendVirtualAssistantMessage(" Return to work @CountVar[CleaningTimeTemp] @Goto(BellGame2)
(Timer)
 sleep(99999);
(Done)
 @CustomMode(#Done,Normal) @CountVar[CleaningTimeTemp, Stop]
sendVirtualAssistantMessage(" So you're done.. 
 @RapidCodeOn @CheckFlag(KitchenAverageSet)
 @CheckFlag(Kitchen5AverageSet)
 @CheckFlag(Kitchen4AverageSet)
 @CheckFlag(Kitchen3AverageSet)
 @CheckFlag(Kitchen2AverageSet)
 @Goto(Kitchen1AverageSet)
(Kitchen1AverageSet)
 @SetVar[Kitchen1Average]=[0] @SetFlag(Kitchen2AverageSet)
 @ChangeVar[Kitchen1Average]=[Kitchen1Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Kitchen2AverageSet)
 @SetVar[Kitchen2Average]=[0] @SetFlag(Kitchen3AverageSet)
 @ChangeVar[Kitchen2Average]=[Kitchen2Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Kitchen3AverageSet)
 @SetVar[Kitchen3Average]=[0] @SetFlag(Kitchen4AverageSet)
 @ChangeVar[Kitchen3Average]=[Kitchen3Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Kitchen4AverageSet)
 @SetVar[Kitchen4Average]=[0] @SetFlag(Kitchen5AverageSet)
 @ChangeVar[Kitchen4Average]=[Kitchen4Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Kitchen5AverageSet)
 @SetVar[Kitchen5Average]=[0] @SetFlag(KitchenAverageSet)
 @ChangeVar[Kitchen5Average]=[Kitchen5Average]+[CleaningTimeTemp]
 @SetVar[KitchenAverage]=[0]
 @ChangeVar[KitchenAverage]=[KitchenAverage]+[Kitchen1Average]
 @ChangeVar[KitchenAverage]=[KitchenAverage]+[Kitchen2Average]
 @ChangeVar[KitchenAverage]=[KitchenAverage]+[Kitchen3Average]
 @ChangeVar[KitchenAverage]=[KitchenAverage]+[Kitchen4Average]
 @ChangeVar[KitchenAverage]=[KitchenAverage]+[Kitchen5Average]
 @ChangeVar[KitchenAverage]=[KitchenAverage]/[5]
 @SetVar[KitchenSlow]=[0]
 @ChangeVar[KitchenSlow]=[KitchenSlow]+[KitchenAverage]
 @ChangeVar[KitchenSlow]=[KitchenSlow]*[2]
 @SetVar[KitchenFast]=[0]
 @ChangeVar[KitchenFast]=[KitchenFast]+[KitchenAverage]
 @ChangeVar[KitchenFast]=[KitchenFast]/[2]
 @SetVar[KitchenScopeLow]=[0]
 @ChangeVar[KitchenScopeLow]=[KitchenScopeLow]+[KitchenAverage]
 @ChangeVar[KitchenScopeLow]=[KitchenScopeLow]/[4]
 @ChangeVar[KitchenScopeLow]=[KitchenScopeLow]*[3]
 @SetVar[KitchenScopeHigh]=[0]
 @ChangeVar[KitchenScopeHigh]=[KitchenScopeHigh]+[KitchenAverage]
 @ChangeVar[KitchenScopeHigh]=[KitchenScopeHigh]/[4]
 @ChangeVar[KitchenScopeHigh]=[KitchenScopeHigh]*[5]
 @SetVar[KitchenWipeTime]=[0]
 @ChangeVar[KitchenWipeTime]=[KitchenWipeTime]+[KitchenAverage]
 @ChangeVar[KitchenWipeTime]=[KitchenWipeTime]/[4]
 @ChangeVar[KitchenWipeTime]=[KitchenWipeTime]*[5]
 @SetVar[KitchenWipeSlow]=[0]
 @ChangeVar[KitchenWipeSlow]=[KitchenWipeSlow]+[KitchenWipeTime]
 @ChangeVar[KitchenWipeSlow]=[KitchenWipeSlow]*[2]
 @SetVar[KitchenWipeFast]=[0]
 @ChangeVar[KitchenWipeFast]=[KitchenWipeFast]+[KitchenWipeTime]
 @ChangeVar[KitchenWipeFast]=[KitchenWipeFast]/[2]
 @SetVar[KitchenWipeScopeLow]=[0]
 @ChangeVar[KitchenWipeScopeLow]=[KitchenWipeScopeLow]+[KitchenWipeTime]
 @ChangeVar[KitchenWipeScopeLow]=[KitchenWipeScopeLow]/[4]
 @ChangeVar[KitchenWipeScopeLow]=[KitchenWipeScopeLow]*[3]
 @SetVar[KitchenWipeScopeHigh]=[0]
 @ChangeVar[KitchenWipeScopeHigh]=[KitchenWipeScopeHigh]+[KitchenWipeTime]
 @ChangeVar[KitchenWipeScopeHigh]=[KitchenWipeScopeHigh]/[4]
 @ChangeVar[KitchenWipeScopeHigh]=[KitchenWipeScopeHigh]*[5]
 @SetVar[KitchenWashTime]=[0]
 @ChangeVar[KitchenWashTime]=[KitchenWashTime]+[KitchenAverage]
 @ChangeVar[KitchenWashTime]=[KitchenWashTime]/[4]
 @ChangeVar[KitchenWipeTime]=[KitchenWipeTime]*[5]
 @SetVar[KitchenWashSlow]=[0]
 @ChangeVar[KitchenWashSlow]=[KitchenWashSlow]+[KitchenWashTime]
 @ChangeVar[KitchenWashSlow]=[KitchenWashSlow]*[2]
 @SetVar[KitchenWashFast]=[0]
 @ChangeVar[KitchenWashFast]=[KitchenWashFast]+[KitchenWashTime]
 @ChangeVar[KitchenWashFast]=[KitchenWashFast]/[2]
 @SetVar[KitchenWashScopeLow]=[0]
 @ChangeVar[KitchenWashScopeLow]=[KitchenWashScopeLow]+[KitchenWashTime]
 @ChangeVar[KitchenWashScopeLow]=[KitchenWashScopeLow]/[4]
 @ChangeVar[KitchenWashScopeLow]=[KitchenWashScopeLow]*[3]
 @SetVar[KitchenWashScopeHigh]=[0]
 @ChangeVar[KitchenWashScopeHigh]=[KitchenWashScopeHigh]+[KitchenWashTime]
 @ChangeVar[KitchenWashScopeHigh]=[KitchenWashScopeHigh]/[4]
 @ChangeVar[KitchenWashScopeHigh]=[KitchenWashScopeHigh]*[5]
(KitchenAverageSet)
@Flag(KitchenVacuumFloorTemp)  @Goto(Vacuum)
@Flag(KitchenWipeTemp)  @Goto(Wipe)
@Flag(KitchenWashFloorTemp)  @Goto(Wash)
 @Goto(Vacuum)
(Vacuum)
 @If[CleaningTimeTemp]>=[KitchenScopeLow]AND[CleaningTimeTemp]<=[KitchenScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[KitchenFast]Then(EndFast)
 @If[CleaningTimeTemp]>=[KitchenSlow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[KitchenScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[KitchenScopeHigh]Then(EndFaster)
(Wipe)
 @If[CleaningTimeTemp]>=[KitchenWipeScopeLow]AND[CleaningTimeTemp]<=[KitchenWipeScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[KitchenWipeFast]Then(EndFast)
 @If[CleaningTimeTemp]>=[KitchenWipeSlow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[KitchenWipeScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[KitchenWipeScopeHigh]Then(EndFaster)
(Wash)
 @If[CleaningTimeTemp]>=[KitchenWashScopeLow]AND[CleaningTimeTemp]<=[KitchenWashScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[KitchenWashFast]Then(EndFast)
 @If[CleaningTimeTemp]>=[KitchenWashSlow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[KitchenWashScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[KitchenWashScopeHigh]Then(EndFaster)
(Satisfied)
sendVirtualAssistantMessage(" Good job today %SlaveName% @Goto(FlagTest)
(EndFast)
sendVirtualAssistantMessage(" random("(Too fast!","That was waay too fast %SlaveName% !","Impossible!","You can't possible be this fast!)
sendVirtualAssistantMessage(" random("(That can't go unpunished","I have to punish you for this","I'm gonna have to punish you..) 
sendVirtualAssistantMessage(" I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[200] @Goto(FlagTest)
(EndSlow)
sendVirtualAssistantMessage(" random("(You're late!","You're late %SlaveName%","You're late slut..","Late are we?","You know you're late right?)
sendVirtualAssistantMessage(" random("(I don't tolerate late!","You know I don't tolerate it when you're late","There is zero tolerance for being late and lazy!) 
sendVirtualAssistantMessage(" I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[200] @Goto(FlagTest)
(EndSlower)
sendVirtualAssistantMessage(" You've been slower than usual.. @CheckFlag(CleaningWarning)
sendVirtualAssistantMessage(" Anything I should know?
[lazy,laziness]sendVirtualAssistantMessage(" random("(Inexcusable!","You know that laziness can't be tolerated!)
[tired,need rest,sleep]sendVirtualAssistantMessage(" random("(Inexcusable","I don't care if you're tired!)
[toys,you made me,you told me]sendVirtualAssistantMessage(" random("(Excuses! Really!?","Wauv you're gonna blame me..)
[thorough,better cleaning]sendVirtualAssistantMessage(" I see but you should always be thorough!
[dirty,dirtier,dusty]sendVirtualAssistantMessage(" Your #Home should always be tidy!
@AcceptAnswer sendVirtualAssistantMessage(" I'm giving you a warning %SlaveName% @SetFlag(CleaningWarning) @Goto(FlagTest)
sendVirtualAssistantMessage(" random("(I'm gonna have to punish you slave","I'm sorry but this can't go unpunished)
sendVirtualAssistantMessage(" I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[100] @Goto(FlagTest)
(CleaningWarning)
sendVirtualAssistantMessage(" I gave you a warning last time! @DeleteFlag(CleaningWarning)
sendVirtualAssistantMessage(" So this time I'm punishing you! 
sendVirtualAssistantMessage(" I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[100] @Goto(FlagTest)
(EndFaster)
sendVirtualAssistantMessage(" You've been faster than usual.. @CheckFlag(CleaningWarning)
sendVirtualAssistantMessage(" Anything I should know?
sendVirtualAssistantMessage(" You can't haste thoroughness!
sendVirtualAssistantMessage(" I expect that you're always thorough when cleaning
sendVirtualAssistantMessage(" random("(I'm gonna have to punish you slave","I'm sorry but this can't go unpunished)
sendVirtualAssistantMessage(" I have assigned you punishment points @ChangeVar[GNMPPoints]=[GNMPPoints]+[100] @Goto(FlagTest)
(EndPerfect)
sendVirtualAssistantMessage(" %GNMgood% %SlaveName% #MeritChangePMedium
sendVirtualAssistantMessage(" Allow me to reward your random("(splendid","good","excellent","lovely) random("(behaviour","work) %GNMGrin% @ChangeVar[GNMGold]=[GNMGold]+[#GoldMedium] @Goto(FlagTest)
(FlagTest)
 @CheckFlag(KitchenWashFloorTemp)
 @CheckFlag(KitchenVacuumFloorTemp)
 @CheckFlag(KitchenWipeTemp) @Goto(KitchenVacuumFloorTemp)
(KitchenVacuumFloorTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("KitchenVacuum", setDate());
@End
(KitchenWashFloorTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("KitchenVacuum", setDate());
 setDate("KitchenWash", setDate());
@End
(KitchenWipeTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("KitchenVacuum", setDate());
 setDate("KitchenWipe", setDate());
@End