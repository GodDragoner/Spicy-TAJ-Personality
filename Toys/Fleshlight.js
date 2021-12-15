const FLESH_LIGHT = createToy('fleshlight');

FLESH_LIGHT.isLovense = function() {
    return getVar(this.getVarName() + 'Lovense', false);
};

FLESH_LIGHT.setLovense = function(bool) {
    setVar(this.getVarName() + 'Lovense', bool);
};

FLESH_LIGHT.vibrationLevel = 0;
FLESH_LIGHT.autoAirSpeed = 0;

FLESH_LIGHT.setVibrationLevel = function(intensity) {
    FLESH_LIGHT.vibrationLevel = intensity;
    LOVENSE_TOY_TYPES.MAX.getLovenseToy().setVibrate(intensity);
};

FLESH_LIGHT.getVibrationLevel = function() {
    return FLESH_LIGHT.vibrationLevel;
};

FLESH_LIGHT.setAirAuto = function(autoAirSpeed) {
    FLESH_LIGHT.autoAirSpeed = autoAirSpeed;
    LOVENSE_TOY_TYPES.MAX.getLovenseToy().setAirAuto(autoAirSpeed);
};

FLESH_LIGHT.getAirAuto = function() {
    return FLESH_LIGHT.autoAirSpeed;
};

FLESH_LIGHT.addAir = function() {
    LOVENSE_TOY_TYPES.MAX.getLovenseToy().addAir();
};

FLESH_LIGHT.removeAir = function() {
    LOVENSE_TOY_TYPES.MAX.getLovenseToy().removeAir();
};

function resetFleshlight() {
    if(!FLESH_LIGHT.isLovense() || !LOVENSE_TOY_TYPES.MAX.hasLovenseToy()) {
        return;
    }

    FLESH_LIGHT.setVibrationLevel(0);
    FLESH_LIGHT.setAirAuto(0);
}

function randomFleshlightInteraction() {
    let randomInteraction = randomInteger(0, 3);

    sendDebugMessage('Performing fleshlight interaction: ' + randomInteraction);

    if(randomInteraction === 0) {
        let currentVibeLevel = FLESH_LIGHT.getVibrationLevel();

        //Feels evil? Jump to 20 or 0 (vibe level)
        if(feelsEvil()) {
            if(currentVibeLevel !== 20) {
                FLESH_LIGHT.setVibrationLevel(20);
            } else {
                FLESH_LIGHT.setVibrationLevel(0);
            }
        } else {
            //In most cases just slowly adjust vibration level
            if(isChance(80)) {
                if(currentVibeLevel === 0) {
                    //We can only go higher
                    FLESH_LIGHT.setVibrationLevel(++currentVibeLevel);
                } else if(currentVibeLevel === 20) {
                    //We can only go lower
                    FLESH_LIGHT.setVibrationLevel(--currentVibeLevel);
                } else if(isChance(50)) {
                    //We will go higher (50% chance)
                    FLESH_LIGHT.setVibrationLevel(++currentVibeLevel);
                } else {
                    //We will go lower (50% chance)
                    FLESH_LIGHT.setVibrationLevel(--currentVibeLevel);
                }
            } else {
                //Jumping vibe level at random
                FLESH_LIGHT.setVibrationLevel(randomInteger(0, 20));
            }
        }
    } else if(randomInteraction === 1) {
        let airAuto = FLESH_LIGHT.getAirAuto();

        FLESH_LIGHT.setAirAuto(randomInteger(0, 3));
    } else if(randomInteraction === 2) {
        if(isChance(50)) {
            FLESH_LIGHT.addAir();
        } else {
            FLESH_LIGHT.removeAir();
        }
    }
}