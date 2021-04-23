{
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('We should continue your edge training now');

    if (COLLAR_TOY.hasToy() && !COLLAR_TOY.isToyOn()) {
        putOnCollar();
    }

    if(!isKneeling()) {
        startKneeling();
        sendMessage('Get down on all fours like a good edge puppy');
    }

    if(sendYesOrNoQuestion('Are you going to take more edges for me, %SlaveName%?')) {
        sendMessage('Of course you are %Smile%');
    } else {
        sendMessage('That\'s... not the answer I was looking for... but it doesn\'t matter');
    }

    sendMessage('You are going to obey my every command because your body needs it');
    startEdging();

    let obedienceNatural = true;

    if(sendYesOrNoQuestion('Obedience comes so natural to you, doesn\'t it? %Smile%')) {
        sendMessage('Yes it does');
        changeMeritLow();
    } else {
        sendMessage('So you need more training then');
        obedienceNatural = false;
    }

    startEdging();
    sendMessage('It doesn\'t matter how hard or how easy this is for you');
    sendMessage('If it\'s easy then you are already a good edge slut %Smile%');
    sendMessage('And if it\'s hard that means you\'re learning to be one');

    startMultipleEdges(3, 8);

    sendMessage('%LetEdgeFade%');

    let hardAnswer = sendInput('Has this edge training so far been hard or easy for you?');

    while(true) {
        if(hardAnswer.isLike('hard')) {
            sendMessage('No pain, no gain I suppose %Grin%');
            break;
        } else if(hardAnswer.isLike('easy')) {
            sendMessage(' That\'s very good, %SlaveName%');
            changeMeritLow();

            sendMessage('But it also means I can step it up a little bit %Grin%');
            startMultipleEdges(2, 6);
            sendMessage('Ultimately I training sessions <i>should</i> be hard');
            sendMessage('Otherwise, how would you learn anything');
            startMultipleEdges(3, 8);
            sendMessage('I want you close to your breaking point, %SlaveName%');
            sendMessage('I want you to feel like you can\'t take any more edges');
            sendMessage('And then you will discover that yes, you <i>can</i> take more for your %DomHonorific%');
            startMultipleEdges(4, 5);
            sendMessage('I always want more from you');
            sendMessage('You always need to be willing to give me exactly what I want');
            startMultipleEdges(5, 7);
            sendMessage('%LetEdgeFade%');
            break;
        } else {
            sendMessage('Is it hard or easy?', 0);
            answer.loop();
        }
    }

    sendMessage('You should cherish every single edge I give you');
    sendMessage('And you should approach each one like it\'s the most important thing you\'ll do all day');
    startEdging();
    sendMessage('You should try to make each edge the best you\'ve ever done');
    sendMessage('When it comes to edging, you\'re like a professional athlete');
    sendMessage('An athlete tries to better himself every time');
    sendMessage('This is how I want you to approach edging');
    startEdging();
    sendMessage('Just like a true athlete never phones in a performance');
    sendMessage('I expect you to take each edge as seriously as the last');
    sendMessage('And I expect you to try to edge harder each time');
    startEdging();
    sendMessage('I expect you to improve your edging game, %SlaveName%');
    sendMessage('There are good edges and bad ones');
    sendMessage('The good ones are the ones where you edge so hard...');
    sendMessage('That you can almost feel that hot cum shoot out...');
    sendMessage('But than you block that shit with all the force you can muster');
    sendMessage('Choke that cum and force it back into your %Balls%');
    sendMessage('Try it');
    startEdging();
    sendMessage('I think you know what the bad edges are');
    sendMessage('The ones where you don\'t really edge at all');
    sendMessage('Where you stop stroking at the first hint of an approaching orgasm');
    sendMessage('Our goal is to eradicate those weak edges, %SlaveName%');
    startEdging();
    sendMessage('Each edge should be a heroic struggle against that fiercest enemy of all...');
    sendMessage('The approaching orgasm');
    sendMessage('You should let it come very close each and every time');
    sendMessage('Let that orgasm come so close you can touch it');
    sendMessage('And then grab it and wrestle it to the ground');
    sendMessage('Each edge should be an almost physical fight between you and your orgasm');
    startMultipleEdges(2, 6);
    sendMessage('You can never let that orgasm win, %SlaveName%');
    sendMessage('Because as you know, your orgasms belong to me and me alone');
    sendMessage('In a way edging is like a hunting party');
    sendMessage('You are hunting for that elusive wild animal, the orgasm');
    sendMessage('And when you find it, you kill it and bring it to me');
    sendMessage('A hunting party where no animals are hurt, I like it! %Lol%');
    startMultipleEdges(5, 9);
    sendMessage('%LetEdgeFade%');
    startEdging();
    sendMessage('We\'ve more or less reached the number of edges I had in mind for this training, %SlaveName%')

    if(obedienceNatural) {
        sendMessage('Maybe one more %Smile%');
        startEdging();
    } else {
        sendMessage('But since you said earlier that obedience <i>doesn\'t</i> come natural to you...');
        sendMessage('I\'ve decided that you need more training right now');
        startMultipleEdges(5, 7);
        sendMessage('I require full obedience from you, %SlaveName%');
        sendMessage('But apparently, that comes at a price');
        sendMessage('Fortunately for me, <i>you</i> are the one who pays that price %Grin%');
        startMultipleEdges(5, 6);
        sendMessage('If you won\'t simply offer me your full obedience');
        sendMessage('Then I will have to make sure you feel the consequences');
        startMultipleEdges(5, 5);
        sendMessage('%LetEdgeFade%');
    }

    sendMessage('Mmm can you feel how each an every one of those edges still lingers in your body...');
    sendMessage('I think you\'ve had enough edge training for today');


    if(isKneeling()) {
        stopKneeling();
    }

    endSpecialSession();
}

//TODO: Add as function possibly to call randomly from different places
/*
function do_not_want_to_edge()
{
    sendMessage('Oh my poor %PetName% %Giggles%');
    sendMessage('This isn\'t about what you want though, it\'s about becoming a good edge slut');
    let answer0 = getInput('So can you take more edges for me?');
    while (!(answer0.isLike('yes') || answer0.isLike('no')))
    {
        answer0 = getInput('%YesOrNo%');
    }
    if (answer0.isLike('yes'))
    {
        sendMessage('Good boy %Smile%');
    }
    else if (answer0.isLike('no'))
    {
        cannot_take_edging();
        return;
    }
    --UNINTERPRETED LINE:I'll be merciful and only make you edge e few more times @DeleteFlag(EdgeTrainingActive)
    sendMessage('Although...');
    --UNINTERPRETED LINE:I <i>wil</i> make you hold each of them #Grin
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('I didn\'t say what I mean by \'a few\', did I...');
    sendMessage('Could be like 2 or 3, could be more');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('I haven\'t actually decided yet');
    sendMessage('Could be a dozen...');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('Holding a dozen edges sounds like a lot, doesn\'t it?');
    sendMessage('On the other hand you\'re on 3 already');
    sendMessage('After this next one there\'s only 8 left');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('Alright, I\'ll leave it up to you');
    let answer1 = getInput('Do you want to complete this series of holding a dozen edges?');
    if (answer1.isLike('yes'))
    {
        sendMessage('%EmoteHappy%');
    }
    else if (answer1.isLike('no'))
    {
    }
    sendMessage('Here we go...');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('One more and you\'re already halfway!');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('Halfway of course means that you do still have 6 more edge to complete');
    sendMessage('But you have been training for this, so it shouldn\'t be a problem');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('%LetTheEdgeFade%');
    sendMessage('That was 7, on to 8!');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('Don\'t you wish you could just stay on the edge forever...');
    sendMessage('In a way it\'s the most enjoyable part of an orgasm');
    sendMessage('Once you cum, all your sexual energy just flows away');
    sendMessage('But when you\'re right on the brink of orgasm you can feel it\'s true power');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('The secret power of the edge is that it makes you oh so obedient');
    sendMessage('Because at that very moment you want something so strongly that you\'ll do anything for it');
    sendMessage('Denying your orgasm means I can keep you wanting indefinitely');
    sendMessage('And that makes it an endless source of obedience %Smile%');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('%LetTheEdgeFade%');
    sendMessage('Two more edges to go');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('I won\'t make you wait too long for the last one');
    sendMessage('I bet you just want to get it over, right? %Grin%');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    --UNINTERPRETED LINE:#LetTheEdgeFade @MoodUp
    sendMessage('And that concludes your edge training for %GeneralTime% %Smile%');
    --UNINTERPRETED LINE:@Flag(Kneeling) You can sit down @DeleteFlag(Kneeling)
    return;
    no_more_edges();
}
function no_more_edges()
{
    --UNINTERPRETED LINE:That's it for this training session then I suppose @MoodDown
    --UNINTERPRETED LINE:@Flag(Kneeling) You can sit down @DeleteFlag(Kneeling)
    --UNINTERPRETED LINE:Let's move on then, #PetName @DeleteFlag(EdgingActive)
    return;
    cannot_take_edging();
}
function cannot_take_edging()
{
    run('Custom" + java.io.File.separator + "Decisions" + java.io.File.separator + "EdgingCantTakeIt.js');
    delVar('EdgeTrainingActive');
    sendMessage('I suppose I should end this training session now');
    sendMessage('But...');
    sendMessage('I want you to hold one more edge for me');
    --UNINTERPRETED LINE:#Edge @EdgeHold
    sendMessage('%LetTheEdgeFade%');
    --UNINTERPRETED LINE:@Flag(Kneeling) You can sit @DeleteFlag(Kneeling)
    --UNINTERPRETED LINE:That's enough for now, #PetName @DeleteFlag(EdgingActive)
    return;
}
 */