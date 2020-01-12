@Flag(Room1FloorWash) @Variable[#DateDifference(Room1Wash, Days)]>=[30]  @Goto(Room1Wash)
@Variable[#DateDifference(Room1Wipe, Days)]>=[14]  @Goto(Room1Wipe)
@Variable[#DateDifference(Room1Vacuum, Days)]>=[7]  @Goto(Room1Vacuum)
(Room1Wash)
 @TempFlag(Room1WashFloorTemp)
sendVirtualAssistantMessage(" Room 1! showImage("Images/Spicy/Home\*.jpg]
sendVirtualAssistantMessage(" random("(It's time to mop the floors!","Time for you to mop the floors","Lets have you do some floor mopping!","Time to mop mop mop %GNMGrin%","Work work work all day - mop all night %GNMlol%) 
sendVirtualAssistantMessage(" But random("(first","before that","before we get to that","just before)
sendVirtualAssistantMessage(" random("(They need to be vacuumed","You have to vacuum them first","You gotta go ahead and vacuum them..) 
sendVirtualAssistantMessage(" random("(Fetch","Find and get","Retrieve) your vacuum cleaner"," and whatever you need to mop the floors. sleep(10); @Goto(Loop)
(Room1Wipe)
 @TempFlag(Room1WipeTemp)
sendVirtualAssistantMessage(" Room 1! showImage("Images/Spicy/Home\*.jpg]
sendVirtualAssistantMessage(" random("(It's time to wipe the surfaces!","Time for you to wipe the surfaces","Lets have you do some wiping!","Time to wipe wipe wipe %GNMGrin%","Work work work all day - wipe all night %GNMlol%)
sendVirtualAssistantMessage(" But random("(first","before that","before we get to that","just before)
sendVirtualAssistantMessage(" random("(You need to be vacuum the floor and other surfaces","You have to vacuum the floor and surfaces first","You gotta go ahead and vacuum the floor then the surfaces..) 
sendVirtualAssistantMessage(" random("(Fetch","Find and get","Retrieve) your vacuum cleaner, and whatever you need to wipe and properly clean the surfaces. sleep(10); @Goto(Loop)
(Room1Vacuum)
 @TempFlag(Room1VacuumFloorTemp)
sendVirtualAssistantMessage(" Room 1! showImage("Images/Spicy/Home\*.jpg]
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
 @RapidCodeOn @CheckFlag(Room1AverageSet)
 @CheckFlag(Room15AverageSet)
 @CheckFlag(Room14AverageSet)
 @CheckFlag(Room13AverageSet)
 @CheckFlag(Room12AverageSet)
 @Goto(Room11AverageSet)
(Room11AverageSet)
 @SetVar[Room11Average]=[0] @SetFlag(Room12AverageSet)
 @ChangeVar[Room11Average]=[Room11Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Room12AverageSet)
 @SetVar[Room12Average]=[0] @SetFlag(Room13AverageSet)
 @ChangeVar[Room12Average]=[Room12Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Room13AverageSet)
 @SetVar[Room13Average]=[0] @SetFlag(Room14AverageSet)
 @ChangeVar[Room13Average]=[Room13Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Room14AverageSet)
 @SetVar[Room14Average]=[0] @SetFlag(Room15AverageSet)
 @ChangeVar[Room14Average]=[Room14Average]+[CleaningTimeTemp] @Goto(Satisfied)
(Room15AverageSet)
 @SetVar[Room15Average]=[0] @SetFlag(Room1AverageSet)
 @ChangeVar[Room15Average]=[Room15Average]+[CleaningTimeTemp]
 @SetVar[Room1Average]=[0]
 @ChangeVar[Room1Average]=[Room1Average]+[Room11Average]
 @ChangeVar[Room1Average]=[Room1Average]+[Room12Average]
 @ChangeVar[Room1Average]=[Room1Average]+[Room13Average]
 @ChangeVar[Room1Average]=[Room1Average]+[Room14Average]
 @ChangeVar[Room1Average]=[Room1Average]+[Room15Average]
 @ChangeVar[Room1Average]=[Room1Average]/[5]
 @SetVar[Room1Slow]=[0]
 @ChangeVar[Room1Slow]=[Room1Slow]+[Room1Average]
 @ChangeVar[Room1Slow]=[Room1Slow]*[2]
 @SetVar[Room1Fast]=[0]
 @ChangeVar[Room1Fast]=[Room1Fast]+[Room1Average]
 @ChangeVar[Room1Fast]=[Room1Fast]/[2]
 @SetVar[Room1ScopeLow]=[0]
 @ChangeVar[Room1ScopeLow]=[Room1ScopeLow]+[Room1Average]
 @ChangeVar[Room1ScopeLow]=[Room1ScopeLow]/[4]
 @ChangeVar[Room1ScopeLow]=[Room1ScopeLow]*[3]
 @SetVar[Room1ScopeHigh]=[0]
 @ChangeVar[Room1ScopeHigh]=[Room1ScopeHigh]+[Room1Average]
 @ChangeVar[Room1ScopeHigh]=[Room1ScopeHigh]/[4]
 @ChangeVar[Room1ScopeHigh]=[Room1ScopeHigh]*[5]
 @SetVar[Room1WipeTime]=[0]
 @ChangeVar[Room1WipeTime]=[Room1WipeTime]+[Room1Average]
 @ChangeVar[Room1WipeTime]=[Room1WipeTime]/[4]
 @ChangeVar[Room1WipeTime]=[Room1WipeTime]*[5]
 @SetVar[Room1WipeSlow]=[0]
 @ChangeVar[Room1WipeSlow]=[Room1WipeSlow]+[Room1WipeTime]
 @ChangeVar[Room1WipeSlow]=[Room1WipeSlow]*[2]
 @SetVar[Room1WipeFast]=[0]
 @ChangeVar[Room1WipeFast]=[Room1WipeFast]+[Room1WipeTime]
 @ChangeVar[Room1WipeFast]=[Room1WipeFast]/[2]
 @SetVar[Room1WipeScopeLow]=[0]
 @ChangeVar[Room1WipeScopeLow]=[Room1WipeScopeLow]+[Room1WipeTime]
 @ChangeVar[Room1WipeScopeLow]=[Room1WipeScopeLow]/[4]
 @ChangeVar[Room1WipeScopeLow]=[Room1WipeScopeLow]*[3]
 @SetVar[Room1WipeScopeHigh]=[0]
 @ChangeVar[Room1WipeScopeHigh]=[Room1WipeScopeHigh]+[Room1WipeTime]
 @ChangeVar[Room1WipeScopeHigh]=[Room1WipeScopeHigh]/[4]
 @ChangeVar[Room1WipeScopeHigh]=[Room1WipeScopeHigh]*[5]
 @SetVar[Room1WashTime]=[0]
 @ChangeVar[Room1WashTime]=[Room1WashTime]+[Room1Average]
 @ChangeVar[Room1WashTime]=[Room1WashTime]/[4]
 @ChangeVar[Room1WipeTime]=[Room1WipeTime]*[5]
 @SetVar[Room1WashSlow]=[0]
 @ChangeVar[Room1WashSlow]=[Room1WashSlow]+[Room1WashTime]
 @ChangeVar[Room1WashSlow]=[Room1WashSlow]*[2]
 @SetVar[Room1WashFast]=[0]
 @ChangeVar[Room1WashFast]=[Room1WashFast]+[Room1WashTime]
 @ChangeVar[Room1WashFast]=[Room1WashFast]/[2]
 @SetVar[Room1WashScopeLow]=[0]
 @ChangeVar[Room1WashScopeLow]=[Room1WashScopeLow]+[Room1WashTime]
 @ChangeVar[Room1WashScopeLow]=[Room1WashScopeLow]/[4]
 @ChangeVar[Room1WashScopeLow]=[Room1WashScopeLow]*[3]
 @SetVar[Room1WashScopeHigh]=[0]
 @ChangeVar[Room1WashScopeHigh]=[Room1WashScopeHigh]+[Room1WashTime]
 @ChangeVar[Room1WashScopeHigh]=[Room1WashScopeHigh]/[4]
 @ChangeVar[Room1WashScopeHigh]=[Room1WashScopeHigh]*[5]
(Room1AverageSet)
@Flag(Room1VacuumFloorTemp)  @Goto(Vacuum)
@Flag(Room1WipeTemp)  @Goto(Wipe)
@Flag(Room1WashFloorTemp)  @Goto(Wash)
 @Goto(Vacuum)
(Vacuum)
 @If[CleaningTimeTemp]>=[Room1ScopeLow]AND[CleaningTimeTemp]<=[Room1ScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[Room1Fast]Then(EndFast)
 @If[CleaningTimeTemp]>=[Room1Slow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[Room1ScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[Room1ScopeHigh]Then(EndFaster)
(Wipe)
 @If[CleaningTimeTemp]>=[Room1WipeScopeLow]AND[CleaningTimeTemp]<=[Room1WipeScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[Room1WipeFast]Then(EndFast)
 @If[CleaningTimeTemp]>=[Room1WipeSlow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[Room1WipeScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[Room1WipeScopeHigh]Then(EndFaster)
(Wash)
 @If[CleaningTimeTemp]>=[Room1WashScopeLow]AND[CleaningTimeTemp]<=[Room1WashScopeHigh]Then(EndPerfect)
 @If[CleaningTimeTemp]<=[Room1WashFast]Then(EndFast)
 @If[CleaningTimeTemp]>=[Room1WashSlow]Then(EndSlow)
 @If[CleaningTimeTemp]<=[Room1WashScopeLow]Then(EndSlower)
 @If[CleaningTimeTemp]>=[Room1WashScopeHigh]Then(EndFaster)
(Satisfied)
sendVirtualAssistantMessage(" Good job today %SlaveName% @Goto(FlagTest)
(EndFast)
sendVirtualAssistantMessage(" random("(Too fast!","That was waay too fast %SlaveName% !!","Impossible","You can't possible be this fast!)
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
[toys,you made me,you told me]sendVirtualAssistantMessage(" random("(Excuses! really!?,Wauv you're gonna blame me..)
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
 @CheckFlag(Room1WashFloorTemp)
 @CheckFlag(Room1VacuumFloorTemp)
 @CheckFlag(Room1WipeTemp) @Goto(Room1VacuumFloorTemp)
(Room1VacuumFloorTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("Room1Vacuum", setDate());
@End
(Room1WashFloorTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("Room1Vacuum", setDate());
 setDate("Room1Wash", setDate());
@End
(Room1WipeTemp)
 @ChangeVar[ChoreComplete]=[ChoreComplete]+[1] setDate("Room1Vacuum", setDate());
 setDate("Room1Wipe", setDate());
@End