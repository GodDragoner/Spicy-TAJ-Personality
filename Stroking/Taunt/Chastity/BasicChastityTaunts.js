{
    let answers = [
        'I bet you wish you could touch right now',
        'I wish I could just pin you down and sit on your face right now %Moan%',
        'You\'re just counting the seconds until you get to %JerkOff% again, aren\'t you %Lol%',
        'Are %MyYour% %Balls% starting to turn blue yet? %Giggles%',
        'Nope, none of this for you %Lol% @ShowBlowjobImage',
        'That\'s pretty hot @ShowLocalImage',
        'Mmmm @ShowBlogImage',
        'Sexy @ShowBlogImage',
        'Nice @ShowBlogImage',
        'That\'s sexy @ShowBlogImage',
        'That\'s hot @ShowBlogImage',
        'So hot @ShowBlogImage',
        'The internet is just an endless supply of hotness %EmoteHappy% @ShowBlogImage',
        'Don\'t mind me %Grin% @ShowBlogImage',
        'There\'s no shortage of pictures to tease you with, that\'s for sure @ShowBlogImage',
        'I could just scroll through these porn blogs all day and never get bored @ShowBlogImage',
        'I bet this picture makes you wish you could %JerkOff% right now... @ShowLocalImage',
        'I hope showing you some pictures now and then is enough to keep your arousal levels up %Grin% @ShowBlogImage',
        'I love how many pictures there are online to tease you with %Lol% @ShowBlogImage',
        'I wonder if this makes the ache worse for you @ShowBlogImage',
        'I don\'t think I could ever get tired of looking at pictures like this %Grin% @ShowBlogImage',
        'This probably won\'t help your ache, but I\'m gonna show it to you anyway %Lol% @ShowBlogImage',
        'This should make you a little more desperate @ShowBlogImage',
        'Don\'t look at this picture I just found if you don\'t want to ache @ShowBlogImage',
        'So much sexiness in these blogs, too bad you can\'t enjoy it %Grin% @ShowBlogImage',
        'This is pretty sexy @ShowBlogImage',
        'I wonder how much bluer your balls will get looking at this? %Grin% @ShowBlogImage',
        'It\'s so much fun to tease you when there\'s nothing you can do about it %Giggles%',
        'You were born to be a submissive, %SlaveName%',
        'Obeying my commands give you purpose as well as pleasure',
        'You have no idea how much I ' + random('enjoy', 'love') + ' seeing you suffer for me',
        'When I see a pair of %Boobs% like that, I just want to grab them %EmoteHappy% @ShowBoobsImage',
        'I\'m gonna make you regret every single picture you have on that hard drive %Grin% @ShowLocalImage',
        'Oooh, I can see why you saved this one %Lol% @ShowLocalImage',
        'I may have to save a copy of this one for myself %Grin% @ShowLocalImage',
        'You have good taste in porn, I\'ll give you that much %Grin% @ShowLocalImage',
        'I wonder what was going through your head when you saved this one %Grin% @ShowLocalImage',
        '%Moan% I fucking love this picture @ShowLocalImage',
        'It\'s so much fun going through your hard drive and finding pictures like this %Grin% @ShowLocalImage',
        'This is almost as sexy as some of the stuff I say %Grin% @ShowCaptionsImage',
        'I\'ll have to remember some of these lines to use against you later %Grin% @ShowCaptionsImage',
        'Well, at least now I know how you liked to be talked to %Grin% @ShowCaptionsImage',
        'So this is the kind of stuff that turns you on huh? I\'ll remember that %Grin% @ShowCaptionsImage',
        'So this is the kind of girl you really want me to be huh? %Grin% @ShowCaptionsImage',
        //'Are you getting frustrated yet? %Lol% @ResponseYes(Frustrated)',
        //'I bet you would love to lick that pussy, wouldn\'t you?  @ShowTaggedImage @ResponseYes(WantToEatPussy)',,
        //'@Flag(pthevCEI_No) I bet if I don\'t let you #JerkOff long enough I could make you eat your cum %Grin% @ResponseYes(WantToEatMyCum) @ResponseNo(WantToEatMyCumDont)',
        //'@NotFlag(pvKneeling) Get down on your knees for me, %SlaveName% @TempFlag(pvKneeling)',
        //'@Flag(pvKneeling) Get up off your knees @DeleteFlag(pvKneeling)',
        //'@RuinsOrgasm(Not,Never) Do you like it when I make you ruin your orgasm? @ResponseYes(ILikeRuiningMyOrgasm) @ResponseNo(IDontLikeRuiningMyOrgasm)'
        //'@Flag(pvMadeKeyholder) I\'m going to make you regret giving me the key to your cage %Grin%',
        'The male is giving honor to his Domme by allowing her to keep his most private area locked away for her use only.',
        'Keeping a man in chastity allows the Domme to have a say when he is given the honor of having sex with her.  ',
        'Men often think that they can demand their Dommes to have sex anytime.  This is not being very considerate.  ',
        'The man should consider it a great honor to have his Domme allow him to be inside of her and enjoying their intimacy together.  ',
        'In fact, the man should even ask permission to enter his Domme, showing her honor in this way.  ',
        'After they have intercourse, the man should thank his Domme for the honor of having her as his Domme and for allowing him to have sex with her.',
        'A man in chastity cannot masturbate, which is a frequent problem with men.  ',
        'A man in chastity will have his focus on his Domme. ',
        'It should not take a chastity device to make the man be this way, but sometimes it can be a help.',
        'A chastity device can be a good training device used by a loving and thoughtful Domme to help her submissive man "learn" how to be the submissive he ought to be.  ',
        'There is a heightened level of sexual intimacy that is achieved by keeping a man in chastity.  ',
        'While he is locked up, the Domme can have her sexual needs met by him in various ways.',
        'Chastity is not fun for me if you don\'t suffer',
        'Chastity keeps pets focused',
        'You can\'t imagine how much I love opening a slave\'s cage just to ruin their orgasm',
        'Hope you feel comfortable wearing that cage on your little cock, because I don\'t like opening it',
        'Only caged boys are useful',
        //'@Flag(AV_Beta) Betas should remain denied in chastity forever.',
        'The idea of locking a %SlaveName% permanently always gets me horny',
        //'@Flag(AV_Beta) The best way to control beta males',
        'Chastity makes boys better at licking',
        'I want to lock you permanently and tease you merciless until you cry',
        'Your useless cock should remain locked at all times',
        'After being locked for as long as I want, you\'ll be rewarded a ruined orgasm, %SlaveName%!',
        'I don\'t want to unlock you',
        'I told you I own your cock and this will serve as a reminder for the time being!',
    ];

    //Just casual images no text
    for(let x = 0; x < 45; x++) {
        answers.push('@ShowBlogImage');
    }

    if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
        answers.push(' I\'m gonna ruin you and I\'ll have you crying.',  'I am going to be cruel to you until you cry and never want to come back again.',
            'You\'re such a mindless little stroker, aren\'t you? '/*@ResponseYes(YouOwnMe) @ResponseNo(IAmNotYourBitch)*/, 'Just a douche who\'ll do anything I tell him to do.')
    }


    if(hasChastityCage()) {
        answers.push(
            'I bet time slows down when you\'re locked up %Lol%',
            'That chastity belt does look pretty tight',
            'If you do whatever I say, *maybe* I\'ll let you unlock it',
            'If %MyYour% %Cock% wasn\'t locked away right now, maybe you could rub it on this ass @ShowButtImage',
            'I almost feel sorry for your trapped %Cock% right now',
            'You, all the time now: "at some point she will unlock me again, right???" %Lol%',
            'Being locked up may not be the most fun, but it\'s probably better for you',
            'Mmm look at those... too bad you can\'t even have an erection %Giggles% @ShowBoobsImage',
            'Finding out about your chastity cage is probably my favourite moment in our relationship',
            'I would never even let you close to my pussy without your cage on',
            'With my cock caged like that I could probably train you to worship my pussy properly',
            'I love trying to make you hard in that little cage %Grin%',
            'I could watch you struggle with that cage all day long',
            'It must be so frustrating to see this and not be able to stroke @ShowBlogImage',
            'Maybe I\'ll make this chastity thing permanent one day %Grin%',
            'You must feel so powerless right now, with %MyYour% %Cock% locked up',
            'Is that %Cock% pushing against the inside of the cage yet? %EmoteHappy%',
            'Is my %Cock% leaking precum yet? %Grin%',
            'It must hurt so bad when I show you pictures like this one @ShowBlowjobImage',
            'That cage looks so damn cute on you %Giggles%',
            'Remember when you used to take erections for granted? %Lol%',
            'Knowing you\'re locked in that cage turns me on so much',
            'I\'m so glad you told me about that chastity device',
            'A lot of women would probably love male chastity \'play\' if they knew what it was all about ',
            'Chastity is good for you, you know that right?',
            'It\'s only a matter of time before you start to drip, drip, drip...',
            'I suppose they\'d let you watch if you\'re wearing your cage %EmoteHappy% @ShowLesbianImage',
            'Those %Balls% must be so full... and there\'s just no way for them to get release %Giggles%',
            'Does this make %MyYour% %Balls% ache? %Grin% @ShowBoobsImage',
            'I wonder how long it takes for %MyYour% %Cock% to forget how to get hard...',
            'If you asked nicely maybe she would deepthroat your cock cage? %Lol%',
            'Does it hurt when you\'re %Cock% tries to get hard in its cage?',
            'You can do the math: %SlaveName% x Time In Chastity = a happy %DomHonorific% %DomName%',
            'The longer you\'re locked up, the more grateful you\'ll be when I let you %JerkOff% again',
            'If anything, being locked up is a good reminder of who owns that %Cock%',
            'I love the sight of a man in a chastity device, there should be more of those around',
            'I can\'t imagine ever letting anyone take away my ability to masturbate %Lol%',
            'If it was the other way around, I would never let you deny me access to my pussy',
            'I love how submissive a guy gets the moment that lock snaps shut',
            'I think male chastity is probably actually the greatest thing before or since sliced bread');
    } else {
        answer.push('I hope you %Cock% isn\'t getting limp',
            'You, all the time now: "at some point she will let me stroke again, right???" %Lol%',
            'The longer you\'re not allowed to touch, the more grateful you\'ll be when I let you %JerkOff% again',
            'Imagine how hard those lips would make %MyYour% %Cock% right now @ShowBlowjobImage',
            'Try not to think too much about that thing in your lap, %SlaveName%',
            'It sucks not to be allowed to %JerkOff% doesn\'t it? %Lol%',
            'You can put your hands behind your back if you have trouble keeping them off %MyYour% %Cock%',
            'You can sit on your hands if you want %Giggles%',
            'You must be soooo anxious to start %JerkingOff% again',
            'Try keep keep it hard, flex those little cock muscles, %SlaveName%');
    }

    let answer = findRandomUnusedElement(answers, createHistory('basicChastityTaunt'));

    interpretLegacyTaunt(answer);

    sendDebugMessage('Send chastity taunt');
}