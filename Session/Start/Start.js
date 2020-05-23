let chastityStartAmount = 0;
let neutralStartAmount = 0;
let nonChastityStartAmount = 0;

{
    let pathLength = getPersonalityPath().length;
    chastityStartAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Start' + PATH_SEPARATOR + 'Chastity').listFiles().length;
    neutralStartAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Start' + PATH_SEPARATOR + 'Neutral').listFiles().length;
    nonChastityStartAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Start' + PATH_SEPARATOR + 'NoChastity').listFiles().length;
}