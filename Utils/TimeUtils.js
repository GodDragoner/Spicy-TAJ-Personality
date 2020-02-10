const TIME_UNIT_SECONDS = 0;
const TIME_UNIT_MINUTES = 1;
const TIME_UNIT_HOURS = 2;
const TIME_UNIT_DAYS = 3;

function getMillisSinecDate(date) {
    return new Date().getTime() - date.getTimeInMillis();
}

function millisToTimeUnit(millisec, timeUnit, fraction = 1) {
    switch(timeUnit) {
        case TIME_UNIT_SECONDS:
            return (millisec / 1000).toFixed(fraction);
        case TIME_UNIT_MINUTES:
            return (millisec / (1000 * 60)).toFixed(fraction);
        case TIME_UNIT_HOURS:
            return (millisec / (1000 * 60 * 60)).toFixed(fraction);
        case TIME_UNIT_DAYS:
            return (millisec / (1000 * 60 * 60 * 24)).toFixed(fraction);
    }
}