r@NullResponse @SetVar[FailedPunishment]=[0] @CheckFlag(D1Punisher)
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
@SystemMessage [Miss A]: Contacting #DomHonorific #Contact2 .. #ReceptionChatt
@NullResponse @AddContact2
@NullResponse @RemoveDomme @Goto(Hello)
(D4Punisher)
@SystemMessage [Miss A]: Contacting #DomHonorific #Contact3 .. #ReceptionChat
@NullResponse @AddContact3
@NullResponse @RemoveDomme @Goto(Hello)
(Hello)
Well @RT(hello,hi) #SlaveName #DT4 @Goto(Start)
(Start)
@Flag(D1Punisher) @NullResponse @Goto(Domme)
@Flag(D2Punisher) @NullResponse @Goto(Contact1)
@Flag(D3Punisher) @NullResponse @Goto(Contact2)
@Flag(D4Punisher) @NullResponse @Goto(Contact3)
(Domme)
@RT(Well well,Oh my,Well) #SlaveName #DT4
@RT(Lets see what we can do about you #GNMGrin,Its time to make you repent your sins,I suppose we need to correct your recent behaviour,I have something for you..) #DT4
@Flag(Personality1) @NullResponse @If[SubEndurance]<=[3]Then(PS1Easy)
@Flag(Personality2) @NullResponse @If[SubEndurance]<=[5]Then(PS1Easy)
@Flag(Personality3) @NullResponse @If[SubEndurance]>=[6]Then(PS1Hard)
@NullResponse @Goto(PS1Medium)
(Contact1)
@RT(Well well,Oh my,Well) #SlaveName #DT4
@RT(Oh my I love handling #DomName's pet,I'll be happy to punish you #GNMGrin,This is gonna be fun) #DT4
@NullResponse @If[SubEndurance]>[4]AND[SubEndurance]<[8]Then(PS1Medium)
@NullResponse @If[SubEndurance]>=[8]Then(PS1Hard) @Goto(PS1Easy)
(Contact2)
@RT(Well well,Oh my,Well) #SlaveName #DT4
@RT(You're not gonna like this #GNMGrin,I'm not sure you'll enjoy this!,I don't think you'll enjoy this..) #DT4
@NullResponse @If[SubEndurance]>[3]AND[SubEndurance]<[7]Then(PS1Medium)
@NullResponse @If[SubEndurance]>=[7]Then(PS1Hard) @Goto(PS1Easy)
(Contact3)
@RT(Well well,Oh my,Well) #SlaveName #DT4
@RT(This is entirely my pleasure #GNMLol,I'm gonna love this!,This is gonna be fun!) #DT4
@NullResponse @If[SubEndurance]>[2]AND[SubEndurance]<[6]Then(PS1Medium)
@NullResponse @If[SubEndurance]>=[6]Then(PS1Hard) @Goto(PS1Easy)
(PS1Easy)
@NullResponse @TempFlag(PS1Easy)
Enjoy.. #DT4 @WritingTask(#PS1Easy)
@NullResponse @Goto(Done)
(PS1Medium)
@NullResponse @TempFlag(PS1Medium)
Enjoy.. #DT4 @WritingTask(#PS1Medium)
@NullResponse @Goto(Done)
(PS1Hard)
@NullResponse @TempFlag(PS1Hard)
Enjoy.. #DT4 @WritingTask(#PS1Hard)
@NullResponse @Goto(Done)
(Failed Writing Task)
It seems you failed your little assignment.. @ChangeVar[FailedPunishment]=[FailedPunishment]+[1] #DT4 @If[FailedPunishment]>=[3]Then(Fail) 
This is your @ShowVar[FailedPunishment] time you fail.. #DT4 #MeritChangeNLow
Lets try again shall we.. #DT4 @ChangeVar[FailedPunishment]=[FailedPunishment]+[1] @CheckFlag(PS1Easy)
@NullResponse @CheckFlag(PS1Medium)
@NullResponse @CheckFlag(PS1Hard)
(Done)
@RT(Well done,Good job,Splendid) #DT4
@NullResponse @TempFlag(S1Complete)
@NullResponse @TempFlag(PunishmentComplete) @CallReturn(CR\BackgroundMode\Punishment\PunishmentBaseEnd.txt)
@End
(Fail)
Lets stop this.. #DT4 @TempFlag(PunishmentComplete)
If you can't complete a simple punishment #DT4
Then you have a long way to go.. #DT4 @TempFlag(PunishmentFailed) @CallReturn(CR\BackgroundMode\Punishment\PunishmentBaseEnd.txt)
@End