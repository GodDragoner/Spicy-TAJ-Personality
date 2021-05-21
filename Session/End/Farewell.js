{
    removeAllToys(true);

    sendMessage('%SlaveName%, ' + random('I\'m returning you to my lovely assistant', 'you\'re going back to my sweet assistant', 'putting you back with my assistant'));
    sendMessage(random('Hope I see you tomorrow!', 'Come back tomorrow', 'You should come back again tomorrow') + " %EmoteHappy%");

    //Virtual assistant takes care of that and not if partner is keyholder
    if (isInChastity() && !getVar(VARIABLE.PARTNER_IS_KEYHOLDER, false)) {
        lockAwayChastityKey();
    }
}