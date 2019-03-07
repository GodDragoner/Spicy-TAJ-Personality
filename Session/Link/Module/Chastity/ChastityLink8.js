{
    if (tryRunLinkFetchId()) {
        sendMessage("I know you like doing whatever I tell you to do");
        sendMessage("Obedience give you pleasure, it\'s hard-wired into your brain");

        if(getCEILimit() == LIMIT_ASKED_YES) {
            sendMessage("That\'s why you\'ll eat your cum for me if I tell you to");

            //TODO: Foot fetish setting
            sendMessage("You\'ll lick it off my beautiful feet if that\'s what I want");
        }

        if(hasChastityCage()) {
            sendMessage("You\'ll stay in chastity for as long as I think is necessary");
        }

        sendMessage("It\'s a wonderful thing, %SlaveName%");
        sendMessage("Your obedience to me is making you a better, more beautiful person");
    }
}




