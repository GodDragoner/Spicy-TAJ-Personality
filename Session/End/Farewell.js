{
    removeAllToys();

    sendMessage('%SlaveName%, ' + random('I\'m returning you to my lovely assistant', 'You\'re going back to my sweet assistant', 'Putting you back with my assistant'));
    sendMessage(random('Hope I see you tomorrow!', 'Come back tomorrow', 'You should come back again tomorrow') + " %EmoteHappy%");

    //Virtual assistant takes care of that and not if partner is keyholder
    if (isInChastity() && !getVar(VARIABLE_PARTNER_IS_KEYHOLDER, false)) {
        lockAwayChastityKey();
    }
}