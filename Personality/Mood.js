VERY_PLEASED_MOOD = 0;
PLEASED_MOOD = 1;
NEUTRLA_MOOD = 2;
ANNOYED_MOOD = 3;
VERY_ANNOYED_MOOD = 4;

function getMonthlyGoodDays() {
    var goodDays = 0;

    for(var day = 0; day < 31; day++) {
        if(getVar("day" + day + "Good", false)) {
            goodDays++;
        }
    }

    return goodDays;
}

function getMonthlyBadDays() {
    return 31 - getMonthlyGoodDays();
}