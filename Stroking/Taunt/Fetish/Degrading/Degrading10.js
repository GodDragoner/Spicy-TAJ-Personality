{
    if (tryRunTauntFetchId()) {
        if (getVar(VARIABLE.SUB_IS_VIRGIN, false) && isChance(50)) {
            sendMessage('So you\'re actually a virgin, huh?');
            sendMessage('Not even a quasi-virgins or a semi-virgin');
            sendMessage('You know, guys who have \'technically\' or \'almost\' had sex, but not really');
            sendMessage('You\'re not even one of those guys');

            let yesOrNo = sendYesOrNoQuestionTimeout('Have you ever even touched a girl\'s boobs?', 10);

            let skip = false;

            if (yesOrNo === ANSWER_YES) {
                sendMessage('That\'s something I guess');
            } else if (yesOrNo === ANSWER_NO) {
                sendMessage('O God %Lol%');
                skip = true;
            } else if (yesOrNo === ANSWER_TIMEOUT) {
                skip = true;
            }

            if (!skip) {
                yesOrNo = sendYesOrNoQuestionTimeout('Has a girl ever touched %MyYour% %Cock%?', 10);

                if (yesOrNo === ANSWER_YES) {
                    sendMessage('Oh but then you\'re almost there, right?');
                } else if (yesOrNo === ANSWER_NO) {
                    sendMessage('O God %Lol%');
                    skip = true;
                } else if (yesOrNo === ANSWER_TIMEOUT) {
                    skip = true;
                }

                if (!skip) {
                    /*
                    @Flag(HadBJ) Oh right I forgot, you actually had a blowjob before
                    @Flag(HadBJNever) Well I know you've never had a blowjob
                     */

                    yesOrNo = sendYesOrNoQuestionTimeout('Have you ever fingered a girl?', 10);

                    if (yesOrNo === ANSWER_YES) {
                        sendMessage('Really?');
                    } else if (yesOrNo === ANSWER_NO) {
                        sendMessage('Of course not');
                        skip = true;
                    } else if (yesOrNo === ANSWER_TIMEOUT) {
                        skip = true;
                    }

                    if (!skip) {
                        /*
                        @Flag(HadBJ) Oh right I forgot, you actually had a blowjob before
                        @Flag(HadBJNever) Well I know you've never had a blowjob
                         */

                        yesOrNo = sendYesOrNoQuestionTimeout('Did you give her an orgasm? ', 10);

                        if (yesOrNo === ANSWER_YES) {
                            sendMessage('If you got that far and <i>still</i> didn\'t get to have sex, I don\'t know what to tell you');
                        } else if (yesOrNo === ANSWER_NO) {
                            sendMessage(' What the fuck, you useless waste of a man');
                        }
                    }
                }
            }


            sendMessage('You should just get rid of any pretense about trying to be normal guy');
            sendMessage('You\'re going to be a sexless loser forever anyway');
            sendMessage('It\'s so much safer and easier to just sit there and %JerkOff% for me');
        } else {
            sendMessage('I wonder when you first realized that you are completely useless sexually');
            sendMessage('It must have hurt to admit it, right?');
            sendMessage('In some alternate universe, you might be out having sex with girls');
            sendMessage('But instead you\'re stuck with this universe, in which you\'re an incurable beta boy %Lol%');
        }
    }
}