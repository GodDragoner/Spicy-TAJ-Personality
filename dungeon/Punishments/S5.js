@NullResponse @SetVar[FailedPunishment]=[0] @CheckFlag(D1Punisher)
@NullResponse @CheckFlag(D2Punisher)
@NullResponse @CheckFlag(D3Punisher)
@NullResponse @CheckFlag(D4Punisher)
(D1Punisher)
@NullResponse @Goto(Hello)
(D2Punisher)
@SystemMessage [Miss A]: Contacting #DomHonorific #Contact1 .. #ReceptionChat
@NullResponse @AddContact1
@NullResponse @RemoveDomme @Goto(Hello)
(D3Punisher)
@SystemMessage [Miss A]: Contacting #DomHonorific #Contact2 .. #ReceptionChat
@NullResponse @AddContact2
@NullResponse @RemoveDomme @Goto(Hello)
(D4Punisher)
@SystemMessage [Miss A]: Contacting #DomHonorific #Contact3 .. #ReceptionChat
@NullResponse @AddContact3
@NullResponse @RemoveDomme @Goto(Hello)
(Hello)
sendMessage("Well "+random("hello","hi")+" %slaveName% "); //#DT4 @Goto(Start)
(Start)
@Flag(D1Punisher) @NullResponse @Goto(Domme)
@Flag(D2Punisher) @NullResponse @Goto(Contact1)
@Flag(D3Punisher) @NullResponse @Goto(Contact2)
@Flag(D4Punisher) @NullResponse @Goto(Contact3)
(Domme)
random("Well well","Oh my","Well") %slaveName% "); //#DT4
random("It's time to pay","We need to settle your recent behaviour","I believe I have just the thing to discipline you","I believe I know how to correct your bad behaviour!")); //#DT4
@Flag(Personality1) @NullResponse @If[SubPainTolerance]<=[3]Then(PS5Easy)
@Flag(Personality2) @NullResponse @If[SubPainTolerance]<=[5]Then(PS5Easy)
@Flag(Personality3) @NullResponse @If[SubPainTolerance]>=[6]Then(PS5Hard)
@NullResponse @Goto(PS5Medium)
(Contact1)
random("Well well","Oh my","Well) %slaveName% "); //#DT4
random("I'm absolute sure you're gonna hate this and that makes me love it!","We need to correct your poor behaviour","You need a little discipline","Its about time we did something about your behaviour")); //#DT4
@NullResponse @If[SubPainTolerance]>[4]AND[SubPainTolerance]<[8]Then(PS5Medium)
@NullResponse @If[SubPainTolerance]>=[8]Then(PS5Hard) @Goto(PS5Easy)
(Contact2)
random("Well well","Oh my","Well) %slaveName% "); //#DT4
random("Discipline I just love that","You're not gonna like this #GNMGrin","I don't think your #GNMCock will enjoy this","This is fun!")); //#DT4
@NullResponse @If[SubPainTolerance]>[3]AND[SubPainTolerance]<[7]Then(PS5Medium)
@NullResponse @If[SubPainTolerance]>=[7]Then(PS5Hard) @Goto(PS5Easy)
(Contact3)
random("Well well","Oh my","Well) %slaveName% "); //#DT4
random("Discipline can never be cruel enough","Discipline is all about being cruel","Discipline is about showing no mercy!","No mercy for the bad ones..")); //#DT4
@NullResponse @If[SubPainTolerance]>[2]AND[SubPainTolerance]<[6]Then(PS5Medium)
@NullResponse @If[SubPainTolerance]>=[6]Then(PS5Hard) @Goto(PS5Easy)
(PS5Easy)
Setting up the punishment.. "); //#DT4 @SetVar[BallCrushing]=[randomInteger(13,20)] @Goto(Info)
(PS5Medium)
Setting up the punishment.. "); //#DT4 @SetVar[BallCrushing]=[randomInteger(17,24)] @Goto(Info)
(PS5Hard)
Setting up the punishment.. "); //#DT4 @SetVar[BallCrushing]=[randomInteger(21,28)] @Goto(Info)
(Info)
sendMessage("So %slaveName% "); //#DT4
sendMessage("The punishment you're about to be given "); //#DT4
sendMessage("Might be considered a game to some "); //#DT4
sendMessage("A mindgame %GNMGrin% "); //#DT4
sendMessage("I need you to fetch your ballcrusher and put it on so its ready.. "); //#DT4 @Wait(30)
(D1)
sendMessage("Are you done? "); //#DT4
[yes]#GNMGood "); //#DT4 @Goto(Info2)
[no]Why are you bothering with answering no? "); //#DT4 #MeritChangeNLow
@DifferentAnswer Yes or no? "); //#DT4
sendMessage("Put it on! "); //#DT4 @Wait(30) @Goto(D1)
(Info2)
sendMessage("Now tigthen the top and bottum until its a tight fit "); //#DT4
sendMessage("It shouldn't be painful at all "); //#DT4
sendMessage("Just feel <i>tight</i>.. "); //#DT4 @Wait(10)
sendMessage("Everytime I tell you to "tigthen" "); //#DT4
sendMessage("You will turn the two buttom screws 90 degrees in whatever direction tigthens them.. "); //#DT4
Then some time will pass and I will ask you to tigthen them again. "); //#DT4
This is repeated over and over "); //#DT4
But! "); //#DT4
The game stops whenever you say "stop" "); //#DT4
Now before we even begin I will have picked a random number "); //#DT4
If the number of times I said "tigthen" is HIGHER than the random number i chose "); //#DT4
You win.. "); //#DT4
If not this won't count as a punishment and I will claim a small fee.. "); //#DT4
You need to be aware of one thing! "); //#DT4
When you say stop you have to last full 2 minutes before you have permission to release the pressure.. "); //#DT4
If you can't last 2 minutes it will also count as a failed punishment.. "); //#DT4 @CustomMode(stop, Goto, Stop)
Well lets begin! "); //#DT4 @SetVar[BallCrushingCount]=[0]
(Screw)
random("Tigthen..","Tigthen it","Tighten the device..","Tigthen","Tighten..","Tigthen","Tighten...","Tigthen it..","Tigthen it...","Tigthen it %slaveName%")); //#DT4 @ChangeVar[BallCrushing]=[BallCrushing]+[1] @Wait(randomInteger(5,15))
@NullResponse @Goto(Screw)
(Stop)
You used the magic word! "); //#DT4 @CustomMode(ModeText, Normal) #GNMGrin @If[BallCrushingCount]<[BallCrushing]Then(Complete)
Well to little surprise you failed.. "); //#DT4 @ChangeVar[GNMGold]=[GNMGold]-[25] @TempFlag(PunishmentComplete)
@NullResponse @TempFlag(PunishmentFailed) @CallReturn(CR\BackgroundMode\Punishment\PunishmentBaseEnd.txt)
@End
(Complete)
Well well you made it! "); //#DT4
I'm actually a little impressed "); //#DT4 #MeritChangePLow @TempFlag(PunishmentComplete)
@NullResponse @TempFlag(S5Complete) @CallReturn(CR\BackgroundMode\Punishment\PunishmentBaseEnd.txt)
@End