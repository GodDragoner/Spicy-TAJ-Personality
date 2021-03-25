const TIME_UNIT_SECONDS = 0;
const TIME_UNIT_MINUTES = 1;
const TIME_UNIT_HOURS = 2;
const TIME_UNIT_DAYS = 3;

function getMillisSinecDate(date) {
    return new Date().getTime() - date.getTimeInMillis();
}

function millisToTimeUnit(millisec, timeUnit, fraction = 1) {
    let result = "0";
    switch(timeUnit) {
        case TIME_UNIT_SECONDS:
            result = (millisec / 1000).toFixed(fraction);
            break;
        case TIME_UNIT_MINUTES:
            result = (millisec / (1000 * 60)).toFixed(fraction);
            break;
        case TIME_UNIT_HOURS:
            result = (millisec / (1000 * 60 * 60)).toFixed(fraction);
            break;
        case TIME_UNIT_DAYS:
            result = (millisec / (1000 * 60 * 60 * 24)).toFixed(fraction);
            break;
    }

    return parseFloat(result);
}

function getDaysSinceDate(date) {
    return millisToTimeUnit(getMillisSinecDate(date), TIME_UNIT_DAYS, 0);
}

