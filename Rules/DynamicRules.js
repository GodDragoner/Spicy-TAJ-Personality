const AVAILABLE_RULES = [];

//General 24/7 applicable rules

let RULE_ALWAYS_WEAR_COLLAR;

let RULE_ALWAYS_NAKED_SESSIONS;

let RULE_ALWAYS_HONORIFIC;

let RULE_NEVER_SWALLOW_SPIT;

let RULE_ALWAYS_THANK_FOR_ORGASM;

let RULE_ALWAYS_SWALLOW_CUM;

let RULE_DOMME_KEYHOLDER;

let RULE_ALWAYS_PEE_SITTING_DOWN;

let RULE_ALWAYS_WEAR_PANTIES;

let RULE_ALWAYS_WEAR_SMALL_PLUG;

let RULE_ALWAYS_STROKE_INDEX_AND_THUMB;

let RULE_FOLLOW_DAILY_TASKS;

let RULE_ALWAYS_WEAR_WOMAN_SOCKS;

let RULE_EVENING_RITUAL;

let RULE_ONLY_SISSY_ADDRESS;

let RULE_OWNED_BODY;

let RULE_ONLY_CENSORED_PORN;

let RULE_LOCKTOBER;

{
    let ruleId = 0;

    let rule = RULE_ALWAYS_WEAR_COLLAR = createRule(ruleId++, false);

    //Toy collar is always on
    if(RULE_ALWAYS_WEAR_COLLAR.isActive()) {
        COLLAR_TOY.setToyOn(true);
    }

    rule.getRulePrint = function () {
        return 'Whenever you are not in public you must wear your collar';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (sendYesOrNoQuestion('Are you wearing your collar?')) {
                sendMessage('%Good%');
                sendMessage('Because you must wear your collar whenever you are alone!');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you have to whenever you are alone');
                sendMessage('And not obeying rules will result in punishment points');

                //QUALITY: Ask to put on

                addPPRuleIgnored();
                changeMeritMedium(true);

                sendMessage('Go ahead and put it on NOW %SlaveName%', 5);
                sendMessage('I am waiting...');
                waitForDone();
            }
        }

        return false;
    };


    rule.canBeActivated = function () {
        return COLLAR_TOY.hasToy() && !this.isActive();
    };

    rule.sendIntroduction = function () {
        sendMessage('You know %SlaveName%...');
        sendMessage('I really like you collared');
        sendMessage('And I think it is a great sign of your submission to me and my ownership of you %Grin%');

        if(!COLLAR_TOY.isToyOn()) {
            if(!putOnCollar()) {
                sendMessage('...');
                sendMessage('Let\'s deal with this a different time');
                return;
            }

            sendMessage('Much better isn\'t it?');
        }

        sendMessage('I just like the symbolic feeling this gives me');
        sendMessage('%Moan%');
        sendMessage('I have been playing with this thought for a longer time now...');

        if(isEnforcingPersonality()) {
            sendMessage('And I want you to wear it whenever you can');
            sendMessage('So definitely during our sessions and additionally whenever you are home alone');
            sendMessage('You should always feel owned by me and this will remind you of that');
            sendMessage('So make sure to wear it whenever possible from now on %SlaveName%');
        } else {
            sendMessage('And I think you should wear it whenever you can');
            sendMessage('So definitely during our sessions and additionally whenever you are home alone');
            sendMessage('You should always feel owned by me and this will remind you of that');

            if(!sendYesOrNoQuestion('Would you do that for me %SlaveName%')) {
                changeMeritMedium(true);
                sendMessage('%EmoteSad%');
                sendMessage('I hope you will reconsider this %SlaveName%');
                return;
            }

            sendMessage('%Good%');
            sendMessage('You don\'t know how happy that makes me %EmoteHappy%');
            sendMessage('Knowing that you will always be remembered of me by that collar around your neck %Grin%');
            changeMeritMedium(false);
        }


        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);


    //Honorific rule
    rule = RULE_ALWAYS_HONORIFIC = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'When you talk to your %DomHonorific% you must always address her as %DomHonorific%';
    };

    rule.sendIntroduction = function () {
        sendMessage('You know %SlaveName%...');
        sendMessage('I want to take the next small step with you towards being my and only MY slave %Grin%');
        sendMessage('So I think you should address me properly');
        sendMessage('From now on I will always be your %DomHonorific%');
        sendMessage('And you will treat me with respect and address me as such');
        sendMessage('So you will address me as your %DomHonorific% in all questions, begging or any answer to my questions');

        let honorific = replaceVocab('%DomHonorific%');
        let answer = sendInput('Is that understood?');

        while(true) {
            if(answer.isLike('Yes')) {
                if(answer.getAnswer().toLowerCase().indexOf(honorific.toLowerCase()) === -1) {
                    sendMessage('Sigh...');
                    sendMessage('What did I just tell you?');
                    sendMessage('You will address me PROPERLY %SlaveName% using %DomHonorific%');
                    registerForgetHonorific();
                    sendMessage('Is this understood %SlaveName%?', 0);
                    answer.loop();
                } else {
                    sendMessage('%Good% %EmoteHappy%');
                    break;
                }
            } else if(answer.isLike('no')) {
                if(answer.getAnswer().toLowerCase().indexOf(honorific.toLowerCase()) === -1) {
                    sendMessage('Sigh...');
                    sendMessage('You really didn\'t understand did you?');
                    changeMeritMedium(true);
                } else {
                    sendMessage('Is it that hard to understand?');
                    sendMessage('I mean you already did it properly this time');
                }

                sendMessage('You will always address me as your %DomHonorific% from now on');
                sendMessage('So if you would answer "Yes" normally you will answer with "Yes %DomHonorific%" from now one. Same goes for "please", questions and basically everything else');
                sendMessage('Is this understood %SlaveName%?', 0);
                answer.loop();
            } else {
                sendMessage('%YesOrNo%', 0);
                answer.loop();
            }
        }

        sendMessage('Now that that\'s settled let\'s get back to where we\'ve been %Grin%');

        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);

    //Naked rule

    rule = RULE_ALWAYS_NAKED_SESSIONS = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must be naked during sessions unless told otherwise';
    };

    rule.sendIntroduction = function () {
        sendMessage('You being naked means I have immediate access to your whole body');
        sendMessage('And furthermore there is no world where you would need your clothes right?');
        sendMessage('Heck, you don\'t even deserve to wear clothes when I am around');
        sendMessage('Which is why I want to see you naked from now on whenever you come and see me');
        sendMessage('Unless I tell you otherwise of course');
        sendMessage('If I see you wearing clothes around me at any point you will not like what awaits you %Grin%');
        sendMessage('So keep that in mind');

        this.setActive(true);
        return true;
    };

    rule.checkRule = function () {
        sendMessage('%SlaveName%');

        if (sendYesOrNoQuestion('Are you naked?')) {
            sendMessage('%Good%');

            if (this.isActive()) {
                sendMessage('Because as you know you must be naked during our sessions %Grin%');
            } else {
                changeMeritLow(false);
                sendMessage("Good, I like it when you're all exposed and vulnerable %EmoteHappy%");
            }

            return true;
        } else {
            if (this.isActive()) {
                sendMessage('%EmoteSad%');

                changeMeritMedium(true);
                sendMessage('%SlaveName%...');

                let answer = sendYesOrNoQuestionTimeout('You know the rule don\'t you?', 5);

                if (answer === ANSWER_YES) {
                    sendMessage('So there is no reason why you shouldn\'t follow it now!');
                } else if(answer === ANSWER_NO) {
                    sendMessage('No?');
                    sendMessage('Seems like I need to refresh your memory');
                    sendMessage('Whenever we meet you are to be completely naked unless I tell you otherwise');
                }

                addPPRuleIgnored();

                sendMessage('Go ahead and strip naked');
                sendMessage('Don\'t you dare report back to me before you are completely naked');
                waitForDone();
                sendMessage('I do not tolerate disobedience %SlaveName%');
                sendMessage('I\'ve added punishment points to your record');
                sendMessage('Don\'t dare to disobey me again!');
            } else {
                sendMessage("That's no good %SlaveName%");
                sendMessage("I want you naked from head to toe");

                let answer = sendInput("Can you do that for me?");

                while (true) {
                    if (answer.isLike("yes")) {
                        changeMeritLow(false);
                        sendMessage("%Good%");
                        sendMessage("Go ahead and take everything off");
                        lockImages();
                        sendMessage("I'll show you some pictures in the meantime", 0);
                        showCategoryImage("LESBIAN", 5);
                        sendMessage("Just to get you in the mood %EmoteHappy%", 0);
                        showCategoryImage("HARDCORE", 5);

                        if (isInChastity()) {
                            sendMessage("Even though you can't get hard inside that %ChastityCage% %Grin%", 0);
                        } else {
                            sendMessage("To make sure %MyYour% %Cock% gets hard", 0);
                        }

                        showCategoryImage("BLOWJOB", 5);

                        sendMessage("To get your blood pumping", 0);
                        showCategoryImage("HARDCORE", 5);

                        if (isInChastity()) {
                            sendMessage("Is it getting tight in that little cage of yours? %Grin%");
                        }

                        unlockImages();
                        sendMessage("Put all your clothes in a neat pile beside you");
                        sendMessage("Or just throw them on the floor, what do I care %Lol%");
                        sendMessage("If I were with you right now");
                        sendMessage("I'd walk around you");
                        sendMessage("Checking out your naked body");
                        sendMessage("Every flaw and every quality");
                        sendMessage("I would point out the good...");
                        sendMessage("And scold you for the bad %Lol%");
                        sendMessage("Not just %MyYour% %Cock% is mine %SlaveName%");
                        sendMessage("Your whole body belongs to me");
                        sendMessage("Don't forget that");
                        return true;
                    } else if (answer.isLike("no")) {
                        changeMeritHigh(true);
                        sendMessage("Hm so that's how it's going to be huh...?");
                        sendMessage("I don't like disobedient slaves...");
                        sendMessage("Suit yourself %SlaveName%");
                        break;
                    } else {
                        sendMessage(YES_OR_NO, 0);
                        answer.loop();
                    }
                }
            }

            return false;
        }
    };

    AVAILABLE_RULES.push(rule);

    //Never swallow spit

    rule = RULE_NEVER_SWALLOW_SPIT = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'Only swallow cum and never swallow spit';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (!sendYesOrNoQuestion('Did you swallow any spit?')) {
                sendMessage('%Good%');
                sendMessage('Because as you know you aren\'t allowed to swallow any spit %Grin%');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you aren\'t allowed to swallow spit!');
                sendMessage('And you should also know not obeying rules will result in punishment points');

                addPPRuleIgnored();
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.sendIntroduction = function () {
        sendMessage('Now there is one very important rule that you should never forget');
        sendMessage('Good sissies never swallow their spit %Grin%');

        if (getSissyLimit() === LIMIT_NEVER) {
            sendMessage('Well you aren\'t a sissy but this rule applies to good slaves too');
            sendMessage('And because you want to please');
        } else {
            if (getSissyLimit() === LIMIT_NEVER_ASKED || getSissyLimit() === LIMIT_ASKED_MAYBE) {
                sendMessage('Well you aren\'t a sissy yet but we will get there %Grin%');
                sendMessage('My little sissy bitch %Lol%');
            }

            sendMessage('And because you want to please me and I want you to be one...');
        }

        sendMessage('You will follow this rule from now on');

        this.setActive(true);

        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Always thank for orgasm
    rule = RULE_ALWAYS_THANK_FOR_ORGASM = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must thank %DomHonorific% %DomName% for every single orgasm you have';
    };

    rule.sendIntroduction = function () {
        sendMessage('I own your orgasms %Grin%');
        sendMessage('And every single one of them is a rare gift');
        sendMessage('Which is why you will thank me for them from now on');
        sendMessage('Every single one %EmoteHappy%');
        sendMessage('No matter if it is a full orgasm or a ruined one');
        sendMessage('A ruined orgasm is still an orgasm %Lol%');

        this.setActive(true);
        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Always swallow cum
    rule = RULE_ALWAYS_SWALLOW_CUM = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must swallow whatever cum you produce unless told otherwise';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (!sendYesOrNoQuestion('Did you swallow any spit?')) {
                sendMessage('%Good%');
                sendMessage('Because as you know you aren\'t allowed to swallow any spit %Grin%');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you aren\'t allowed to swallow spit!');
                sendMessage('And you should also know not obeying rules will result in punishment points');

                addPPRuleIgnored();
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.sendIntroduction = function () {
        sendMessage('I own your orgasms %Grin%');
        sendMessage('And that is how it is supposed to be');
        sendMessage('But that nasty cum of yours is a problem');
        sendMessage('It stains stuff, it\'s disgusting and I think you should pay for your orgasm');
        sendMessage('So from now on there will be not even a single drop of cum that leaves your cock that\'s not gonna land in your dirty mouth');
        sendMessage('Which means unless I tell you otherwise you will always lick up and swallow your cum');
        sendMessage('I don\'t care whether you like it or not');
        sendMessage('It\'s just how things are gonna be if you want to cum ever again %Lol%');

        this.setActive(true);
        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Domme keyholder
    rule = RULE_DOMME_KEYHOLDER = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return '%DomHonorific% %DomName% is your keyholder and decides everything regarding chastity';
    };

    rule.canBeActivated = function () {
        //No cage, partner is keyholder, chastity level below 30 or training is still active
        if(!hasChastityCage() || getVar(VARIABLE.PARTNER_IS_KEYHOLDER, false) || getVar(VARIABLE.CHASTITY_LEVEL, 0) < 30 || getVar(VARIABLE.CHASTITY_TRAINING, false)) {
            return false;
        }

        return !isVar(VARIABLE.ASKED_FOR_KEYHOLDER) || getVar(VARIABLE.ASKED_FOR_KEYHOLDER).addDay(7).hasPassed();
    };

    rule.sendIntroduction = function () {
        if(!startLongTermChastityIntro()) {
            //Somehow didn't work (no, or partner keyholder)
            return false;
        }

        this.setActive(true);
        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Small cock stroking
    rule = RULE_ALWAYS_STROKE_INDEX_AND_THUMB = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'Since your penis is so small and not worthy of a full hand you should only stroke with your thumb and index finger unless told otherwise';
    };

    rule.canBeActivated = function () {
        return VERBAL_HUMILIATION_LIMIT.isAllowed() && hasSmallPenis();
    };

    rule.sendIntroduction = function () {
        sendMessage('You know that might actually be a good idea %Grin%');
        sendMessage('Your %Cock% is so small it\'s not worthy of getting the pleasure of a full hand stroking it');
        sendMessage('Which is why you will stroke only with your thumb and index finger from now on unless told otherwise %Wicked%');
        sendMessage('This will remind you of your pathetic %Cock% all the time %SlaveName%');

        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);


    rule = RULE_ALWAYS_WEAR_SMALL_PLUG = createRule(ruleId++, false);

    //Put in plug on startup
    if(RULE_ALWAYS_WEAR_SMALL_PLUG.isActive()) {
        setPlugIn(getSmallButtplug(true));
    }

    rule.getRulePrint = function () {
        return 'You must always wear your ' + getSmallButtplug(true).name + ' apart from bed time, sports and swimming';
    };

    rule.canBeActivated = function () {
        return ANAL_LIMIT.isAllowed() && getVar(VARIABLE.ASS_LEVEL) >= 30;
    };

    rule.sendIntroduction = function () {
        sendMessage('I own your ass %Grin%');
        sendMessage('And that is how it is supposed to be');
        sendMessage('But I\'d like you to have a constant reminder of that');
        sendMessage('So from now on you will always wear your ' + getSmallButtplug(true).name);
        sendMessage('Not only is it gonna remind you of your place but it\'s also gonna make sure you are ready for whatever I have in store for that ass of mine');
        sendMessage('I can only suggest you getting some long time wear plugs. I heard that T-Base shapes are pretty good for that purpose %Grin%');
        sendMessage('And since I am kind, I will allow you to remove the plug during the night, when doing sports and going swimming or something similar.');

        this.setActive(true);

        sendMessage('And before I forget...');
        sendMessage('Make sure to check this rule every now and then at the pin board');
        sendMessage('I might upgrade the plug to a bigger one when I feel like you are ready %Grin%');

        return true;
    };

    AVAILABLE_RULES.push(rule);

    rule = RULE_ALWAYS_WEAR_PANTIES = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must always wear panties';
    };

    rule.canBeActivated = function () {
        return SISSY_LIMIT.isAllowed() && hasPanties();
    };

    rule.sendIntroduction = function () {
        sendMessage('Tell me...');
        let answer = sendInput('What do you think is one of the most important things as a sissy?');

        if(answer.isLike('panties', 'underwear', 'clothing', 'cloth')) {
            sendMessage('Exactly! Clothing %Grin%');
        } else if(answer.isLike('no idea', 'dunno', 'no clue')) {
            sendMessage('Obviously clothing sissy %Lol%');
        } else {
            sendMessage('Probably true but...');
            sendMessage('First and foremost clothing %Grin%');
        }

        if(sendYesOrNoQuestion('So we gotta do something about that, don\'t we?')) {
            sendMessage('I am glad you agree %EmoteHappy%');
        } else {
            changeMeritMedium(true);
            sendMessage('Well I will do something about it whether you like it or not %Lol%');
        }

        sendMessage('From now on any male underwear will be denied to you');
        sendMessage('Panties only');
        sendMessage('Exceptions can ONLY be made if you have to undress in front of others');
        sendMessage('Otherwise it\'s slutty pink panties every god damn time');
        sendMessage('Well I don\'t mind other colors');
        sendMessage('But make it female and slutty if you can %Grin%');

        sendMessage('Imagine someone seeing that satin underneath your trousers');
        sendMessage('That must be so humiliating %Grin%');
        sendMessage('But that\'s exactly what I want %EmoteHappy%');

        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);

    rule = RULE_ALWAYS_PEE_SITTING_DOWN = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must always sit down to pee';
    };

    rule.canBeActivated = function () {
        return SISSY_LIMIT.isAllowed();
    };

    rule.sendIntroduction = function () {
        sendMessage('You know there is another aspect to being a woman that is different from a male\'s life');

        if(sendYesOrNoQuestion('Any guesses?')) {
            let answer = sendInput('What do you think is different?');

            if(answer.isLike('pee', 'piss', 'bathroom')) {
                sendMessage('Exactly! Sitting down to pee %Grin%');
            } else if(answer.isLike('no idea', 'dunno', 'no clue')) {
                sendMessage('Obviously sitting down to pee %Lol%');
            } else {
                sendMessage('Probably true but...');
                sendMessage('But I am talking about peeing %Grin%');
            }
        } else {
            sendMessage('Silly you...');
            sendMessage('I am talking about sitting down to pee %Grin%');
        }

        if(hasChastityCage()) {
            sendMessage('You probably already do it when you are in chastity');
        } else {
            sendMessage('I don\'t know how you have been dealing with is before');
        }

        sendMessage('But I want to establish this as a rule from now on');
        sendMessage('From now on you will sit down every time you need to pee');
        sendMessage('Just like every girl does it %Grin%');

        this.setActive(true);
        return true;
    };

    rule = RULE_FOLLOW_DAILY_TASKS = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must daily check the tasks provided by your %DomHonorific% on the pin board';
    };

    rule.canBeActivated = function () {
        return isFullTime();
    };

    rule.sendIntroduction = function () {
        sendMessage('So %SlaveName%');
        sendMessage('A few days ago I had this feeling...');
        sendMessage('I felt like I am not exercising enough control over you');
        sendMessage('You are supposed to be my full time slave');
        sendMessage('Not that I want to occupy too much of your day and free time');
        sendMessage('However...');
        sendMessage('I feel like controlling you more than I am already doing');
        sendMessage('More on a daily basis outside of sessions %Grin%');
        sendMessage('So what I will do from now on is the following:');
        sendMessage('Each and every morning I will put up a note on the pin board for you to read');
        sendMessage('It will contain tasks/rules that are only active during that very day');
        sendMessage('Like doing a small workout, eating healthily and so on');
        sendMessage('Maybe teasing yourself a bit outside of sessions as well');
        sendMessage('You\'ll see what I come up with soon enough %Grin%');
        sendMessage('Make sure to check the pin board daily');
        sendMessage('I won\'t check on you each and every time but expect me to do so occasionally');
        sendMessage('So don\'t you dare cheat or skip them!');
        sendMessage('I will notice if you try to trick me!');

        sendMessage('Tomorrow I\'ll put up the first note %EmoteHappy%');
        sendMessage('So make sure to check the pin board tomorrow');

        this.setActive(true);
        return true;
    };

    rule = RULE_ALWAYS_WEAR_WOMAN_SOCKS = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'Home alone you must not wear male socks';
    };

    rule.canBeActivated = function () {
        return SISSY_LIMIT.isAllowed();
    };

    rule.sendIntroduction = function () {
        sendMessage('Tell me...');

        let answer = sendInput('How did you adjust to wearing panties instead of normal underwear?');

        if(answer.isLike('good', 'well', 'great')) {
            sendMessage('Looks like you got that slut right within you %Grin%');
        } else if(answer.isLike('bad', 'worse', 'strange', 'weird', 'awkward', 'embarrassing')) {
            sendMessage('You can\'t complain %Lol%');
            sendMessage('You wanted to be a sissy');
            sendMessage('And even if you didn\'t it\'s what I want');
            sendMessage('And that\'s all that should matter to you anyway %EmoteHappy%');
        } else {

        }

        sendMessage('Well then');
        sendMessage('I think you are ready for the next step');
        sendMessage('Or more like you WILL take the next step %Lol%');

        sendMessage('From now on any male socks will be denied to you');
        sendMessage('You will wear pink socks, overknees, stockings or something similar');
        sendMessage('There is always the option to go barefoot if that suits you %Lol%');
        sendMessage('Now...');
        sendMessage('I don\'t want to force you into any strange public situation');
        sendMessage('So I will only force you to wear them when you are alone');

        sendMessage('But if you feel bold enough to rock them in public as well');
        sendMessage('That\'d make me very happy %EmoteHappy%');

        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);

    rule = RULE_EVENING_RITUAL = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must be follow all evening ritual instructions before going to bed';
    };

    rule.canBeActivated = function () {
        return isFullTime();
    };

    AVAILABLE_RULES.push(rule);


    rule = RULE_ONLY_SISSY_ADDRESS = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You will be addressed like a proper sissy by your %DomHonorific%';
    };

    rule.canBeActivated = function () {
        return getVar(VARIABLE.SISSY_TRAINING, false);
    };

    rule.sendIntroduction = function () {
        sendMessage('First of all I hope you are adjusting well to all those changes %Wicked%');

        sendMessage('I promise you that this time I won\'t make too much of a change for you');
        sendMessage('At least nothing that would influence your daily life too much %EmoteHappy%');
        sendMessage('It\'s more of a change of your mindset');

        sendMessage('But first...');
        let guess = sendInput('Have a guess at what I am talking about %Wicked%');

        if(guess.isLike('name', 'address')) {
           sendMessage('Exactly!');
        } else if(guess.isLike('nail', 'hair', 'accessory', 'accessories', 'makeup', 'make up')) {
            sendMessage('No silly %Grin%');
            sendMessage('I said nothing that has too much impact on you');
            sendMessage('But it\'s something for further down the road')
        } else if(guess.isLike('no')) {
            sendMessage('%EmoteSad%');
            sendMessage('You are ruining the fun....');
            sendMessage('Well...');
        } else {
            sendMessage('No, let me help you out then %Grin%');
        }

        sendMessage('I just want to change the way I address you %EmoteHappy%');
        sendMessage('In the past I have been using terms like slave, pet and stroker');
        sendMessage('You won\'t see me do stuff like that anymore');

        sendMessage('From now on you will always be my sissy');
        sendMessage('With a cute little clitty %EmoteHappy%');
        sendMessage('I mean that\'s who you are, isn\'t it? %Lol%');
        sendMessage('It would be just as appropriate to address you as such as well');
        sendMessage('Just to get the mindset of yours to accept your fate');
        sendMessage('And your new identity and lifestyle %EmoteHappy%');

        sendMessage('Nothing to worry about but hopefully something that\'s gonna make a difference %Wicked%');

        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);

    //TODO: Add (introduction) and enable it at some point
    rule = RULE_OWNED_BODY = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'Your body belongs to %DomHonorific% %DomName%';
    };

    AVAILABLE_RULES.push(rule);

    rule = RULE_ONLY_CENSORED_PORN = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You should try to only consume censored and feet porn';
    };

    rule.canBeActivated = function () {
        return getVar(VARIABLE.SISSY_TRAINING, false) && (VERBAL_HUMILIATION_LIMIT.isAllowed() || HUMILIATION_LIMIT.isAllowed());
    };

    rule.sendIntroduction = function () {
        sendMessage('I have been thinking %SlaveName%');
        sendMessage('About porn to be precise');

        if(SISSY_LIMIT.isAllowed()) {
            sendMessage('I think it only distracts you from what you should truly focus on');

            let answer = sendInput('Can you guess what I am talking about? %Grin%');

            while(true) {
                if(answer.isLike('yes')) {
                    sendMessage('So what do you think am I talking about? %Grin%');
                    answer.loop();
                } else if(answer.isLike('cock', 'penis', 'dick', 'men')) {
                    sendMessage('Exactly %EmoteHappy%');
                    sendMessage('You seem to be adjusting well to your new mindset %Lol%');
                    changeMeritLow(false);
                    break;
                } else {
                    sendMessage('About cock you silly %SlaveName%');
                    sendMessage('Looks like we have some more mindset training to do %Grin%');
                    break;
                }
            }

            sendMessage('Well anyway...');
            sendMessage('I think seeing all those naked women is just too distracting');
            sendMessage('Additionally...');
        } else {

        }

        //Humiliation limit is active anyway, so we don't need to check
        sendMessage('It\'s misleading isn\'t it?');
        sendMessage('I mean it\'s showing you things that you\'ll never get to see in real life %Lol%');
        sendMessage('Let alone touch %Grin%');
        sendMessage('You simply don\'t deserve that...');
        sendMessage('EVER %Wicked%');

        if(sendYesOrNoQuestion('And you know that, don\'t you?')) {
            sendMessage('Of course you do %Grin%');
        } else {
            sendMessage('No? I think you do. And if not you should');
        }

        sendMessage('You are nothing more than a pathetic little loser getting off on being used, dominated and humiliated by a powerful woman');

        if(sendYesOrNoQuestion('And you don\'t even want to change that, do you?')) {
            sendMessage('Oh you want to? %Lol%');
            sendMessage('Poor you %Grin%');
            sendMessage('I don\'t think there is any chance you are gonna get to change that %Lol%');
        } else {
            sendMessage('I figured');
            sendMessage('I mean it\'s all nice and good this way');
            sendMessage('It\'s so easy bowing to my will');
            sendMessage('Just doing what you are told');
        }

        sendMessage('I don\'t think it should be any other way %SlaveName%');

        sendMessage('I want you to say it!');
        sendMessage('Say it out loud!');

        sendMessage('Say: "I am a pathetic loser"', 5);
        sendMessage('"I don\'t deserve to touch women"', 5);
        sendMessage('"I don\'t deserve to see naked women"', 5);

        if(SISSY_LIMIT.isAllowed()) {
            sendMessage('"I should focus on cock instead"');
            sendMessage('"Because that\'s all I am good for"');
            sendMessage('"Making other <b>real</b> men feel good"');
            sendMessage('"My pleasure is irrelevant"');
        }

        sendMessage('That\'s it... %Grin%');
        sendMessage('You\'ve found your place');
        sendMessage('On your knees and worshiping my legs and feet');
        sendMessage('That\'s the only place you belong');
        sendMessage('And I want you to remember that %Wicked%');
        sendMessage('I\'ll make sure of it %Grin%');

        sendMessage('So any way...');

        if(sendYesOrNoQuestion('Have you ever heard of censored porn?')) {
            sendMessage('I wouldn\'t have thought any less of you %Lol%');
        } else {
            sendMessage('Well...');
            sendMessage('It\'s simply just normal porn');
            sendMessage('But it\'s loser and beta safe');
            sendMessage('All parts you are unworthy of are censored');
        }

        sendMessage('What I want you to do now is the following');
        sendMessage('I want you to go and create a small collection of censored porn %EmoteHappy%');
        sendMessage('I want you to replace all porn links and media folders of Tease AI with your collection');
        sendMessage('There should be no media linked that would include naked women in any form');
        sendMessage('I know this takes some time to do, so I want you to go and find at least 10 censored pictures each day');
        sendMessage('You can find those on reddit and other sites');
        sendMessage('Just look them up with "loser safe porn" or a similar search term');
        sendMessage('I want you to keep doing that until you have a folder with at least 5 images per category');
        sendMessage('Once a folder has at least 5 images I want you to link it to Tease AI and remove any other media files (folders, urls etc.) that might be linked to that category/tag');
        sendMessage('So that when you are done with all of them the only porn you\'ll see in Tease AI is either censored or a picture of me, my friends or my lovely assistants');
        sendMessage('That\'s all you deserve to see');
        sendMessage('I own you %SlaveName% %Grin%');
        sendMessage('And I don\'t think you should ever get to see naked women');
        sendMessage('I think it\'s bad for you');
        sendMessage('And I care about you and thus I restrict your access to it');

        sendMessage('Which means I also want you to try not to see any sexual pictures or videos on the internet %Grin%');
        sendMessage('Of course that\'s hard to do');
        sendMessage('But I want you to try your best');

        sendMessage('Just so you know...');
        sendMessage('The only things you are allowed to see are armpits, feet, legs and occasionally a few nice bellies and faces %EmoteHappy%');
        sendMessage('So make sure to watch out for that');
        sendMessage('No breasts, no cleavage, no pussy, no ass');
        sendMessage('I\'ll trust you to stick to this rule');
        sendMessage('Don\'t try to circumvent it %Wicked%');

        this.setActive(true);
        return true;
    };

    AVAILABLE_RULES.push(rule);

    rule = RULE_LOCKTOBER = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'It\'s locktober, therefore you are locked for the whole october. Ruined anal orgasms only';
    };

    rule.canBeActivated = function () {
        return !this.isActive() && hasChastityCage() && getVar(VARIABLE.CHASTITY_LEVEL, 0) >= 30 && RULE_DOMME_KEYHOLDER.isActive() && ANAL_LIMIT.isAllowed() && MAGIC_WAND_TOY.hasToy();
    };

    rule.isEffectivelyActive = function() {
        return this.isActive() && new Date().getMonth() === 9;
    }

    AVAILABLE_RULES.push(rule);

    //Update all existing rules
    for (let index = 0; index < AVAILABLE_RULES.length; index++) {
        //TODO: Notify rule ended?
        AVAILABLE_RULES[index].updateRule();
    }
}

function checkRandomRule() {
    let runs = 0;
    let maxOption = 1;

    while (isChance(25) || runs <= maxOption) {
        runs++;

        let rule = null;

        switch (randomInteger(0, maxOption)) {
            case 0:
                rule = RULE_ALWAYS_WEAR_COLLAR;
                break;
            case 1:
                rule = RULE_ALWAYS_NAKED_SESSIONS;
                break;
        }

        if (rule.isActive()) {
            rule.checkRule();
            return;
        }
    }
}

function getPPRuleIgnored() {
    return 150;
}

function addPPRuleIgnored() {
    addPunishmentPoints(getPPRuleIgnored(), PUNISHMENT_REASON.RULE_IGNORED);
}

function getRandomNewRule(permanent = true) {
    for (let index = 0; index < AVAILABLE_RULES.length; index++) {
        if (AVAILABLE_RULES[index].isPermanent() && permanent || !AVAILABLE_RULES[index].isPermanent() && !permanent) {
            if (!AVAILABLE_RULES[index].isActive()) {
                return AVAILABLE_RULES[index];
            }
        }
    }

    return null;
}

function shouldIntroduceNewRule(rule) {
    if(isOngoingPunishment() || rule.isActive()) {
        return false;
    }

    //No rules within the first 2 sessions. Get to know slave first
    if(!rule.canBeActivated() || getVar(VARIABLE.SESSION_COUNTER, 0) < 3) {
        sendDebugMessage('Rule ' + rule.getVarName() + ' cannot be activated or too few sessions');
        return false;
    }

    //After 12 hours this is 1 and before 0 so no two new rules in the same session
    let daysPassed = 10;

    if(isVar(VARIABLE.LAST_RULE_PASSED)) {
        daysPassed = millisToTimeUnit(getMillisSinecDate(getVar(VARIABLE.LAST_RULE_PASSED)), TIME_UNIT_DAYS, 0);
    }


    sendDebugMessage('Calculating rule passed chance with last rule passed ' + daysPassed + ' days ago');


    if(isChance(daysPassed*10)) {
        setDate(VARIABLE.LAST_RULE_PASSED);
        return true;
    }

    return false;
}



function createRule(id, punishment, minDays = -1, maxDays = -1, prefix = 'rule') {
    let rule = {
        id: id, punishment: punishment, minDays: minDays, maxDays: maxDays,

        getVarName: function () {
            return prefix + this.id;
        },

        isActive: function () {
            return getVar(this.getVarName() + 'active', false);
        },

        shouldCheckRule: function () {
            let minDayDifference = 3;
            if(isVar(this.getVarName() + 'lastCheck') && !getDate(this.getVarName() + 'lastCheck').clone().addDay(minDayDifference).hasPassed()) {
                return false;
            }

            let result = new Date().getDay()%(id%(minDayDifference + 1)) === 0;

            if(result) {
                setDate(this.getVarName() + 'lastCheck');
            }

            return result;
        },

        setActive: function (active) {
            setVar(this.getVarName() + 'active', active);

            if(active) {
                this.addActivatedCount();
            }
        },

        getActiveUntil: function () {
            return getVar(this.getVarName() + 'activeUntil', setDate());
        },

        addActiveUntil: function (days) {
            this.setActiveUntil(this.getActiveUntil().addDay(days));
        },

        setActiveUntil: function (date) {
            setDate(this.getVarName() + 'activeUntil', date);
        },

        getActivatedCount: function () {
            return getVar(this.getVarName() + 'Counter', this.isActive()? 1 : 0);
        },

        addActivatedCount: function () {
            incrementVar(this.getVarName() + 'Counter', 1);
        },


        hasPassed: function () {
            return this.getActiveUntil().hasPassed();
        },

        updateRule: function () {
            if (minDays > 0 && maxDays > 0) {
                if (this.hasPassed() && this.isActive()) {
                    this.setActive(false);

                    //Delete date so it is reset next time activated
                    delVar(this.getVarName() + 'activeUntil');
                } else if (!this.hasPassed() && !this.isActive()) {
                    this.setActive(true);
                }
            }
        },

        canBeActivated: function () {
            return !this.isActive();
        },

        getRulePrint: function () {
            return 'default print';
        },

        checkRule: function () {
            sendMessage('Default rule check');
            return true;
        },

        sendIntroduction: function () {
            sendMessage('Default rule introduction');
            return true;
        },

        isPermanent: function () {
            return minDays == -1 && maxDays == -1;
        },
    };

    return rule;
}