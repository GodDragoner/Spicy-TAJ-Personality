let chastityStartAmount = 0;
let neutralStartAmount = 0;
let nonChastityStartAmount = 0;

{
    let pathLength = getPersonalityPath().length;
    chastityStartAmount = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Start' + PATH_SEPARATOR + 'Chastity').listFiles().length;
    neutralStartAmount = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Start' + PATH_SEPARATOR + 'Neutral').listFiles().length;
    nonChastityStartAmount = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Start' + PATH_SEPARATOR + 'NoChastity').listFiles().length;
}