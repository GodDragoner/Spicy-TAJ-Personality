{
    if (tryRunModuleFetchId(2, MODULE.STROKING)) {
        let minutes = randomInteger(8, 15);
        if (isInChastity()) {
            if (hasMagicWand()) {
                startVibratingCageInterval(minutes * 60);
            } else {
                //one third of the time only
                startTeaseTauntInterval(minutes*20);
            }
        } else {
            startStrokeInterval(minutes);
        }

    }
}