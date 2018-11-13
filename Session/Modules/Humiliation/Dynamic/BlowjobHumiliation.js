{
    sendMessage("Let's see %SlaveName%");
    sendMessage("I think your throat is not sore enough yet and we should work on that %Grin%");

    const toy = getDildoModifier(true) + " dildo";
    if (!fetchToy(toy)) {
        sendMessage("I guess we have to do something different then");
        sendMessage("But don't expect it to be pleasant after you disappointed me like that %Lol%");
    } else {
        startBlowToy(toy);

        sendMessage("Good work %SlaveName%");
        sendMessage("You can put that " + toy + " aside for now");
    }
}