function getDildoSize() {
    let assLevel = getVar(VARIABLE_ASS_LEVEL);

    if (assLevel < 15) {
        return "small";
    } else if (assLevel < 30) {
        return random("small", "medium");
    } else {
        return random("medium", "big");
    }
}

function getDildoModifier(blowjob = false) {
    if(!blowjob) {
        return getDildoSize();
    } else {
        let blowjobLevel = getBlowjobLevel();

        if (blowjobLevel < 15) {
            return "small";
        } else if (blowjobLevel < 30) {
            return random("small", "medium");
        } else {
            return random("medium", "big", "long");
        }
    }
}