{
    if (tryRunLinkFetchId()) {
        if (ASM_LIMIT.isHardLimit() || ASM_LIMIT.isAllowed()) {
            findLinkAndRun();
        } else {
            if(ASM_LIMIT.getLimit() === LIMIT_NEVER_ASKED) {
                sendMessage('*Ewwww gross*');
                sendMessage('Oh wait you probably don\'t know what\'s going on are you?');
                sendMessage('I just got a video from a friend of mine that shows her sub licking clean the dildo after it came out of his ass');
                sendMessage('She said: "Common sense: Whoever made it dirty also has to clean it *Grin*"');
                sendMessage('On a second thought though....');
                sendMessage('Kinda hot somehow and definitely a valid argument to make %Lol%');
                sendMessage('Just adds that extra bit of power and humiliation to the mix');
                sendMessage('You know what?');
                ASM_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            } else {
                sendMessage('Oh man...');
                sendMessage('My friend just can\'t stop bugging me with photos of her slaves');
                sendMessage('Just another video of her pet licking clean that huge black strapon of hers');
                sendMessage('Well licking is probably the wrong word %Lol%');
                sendMessage('It\'s more like her forcing that ass juice covered strapon down his throat while grabbing his hair to keep him in place');
                sendMessage('His eyes are watering and full of fear, regret but most importantly utter submission');
                sendMessage('%Moan%');
                sendMessage('Speaking of which...');
                HUMILIATION_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            }
        }
    }
}