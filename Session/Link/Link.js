let chastityLinkAmount = 0;
let neutralLinkAmount = 0;
let nonChastityLinkAmount = 0;

{
    let pathLength = getPersonalityPath().length;
    chastityLinkAmount = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'Module' + PATH_SEPARATOR + 'Chastity').listFiles().length;
    neutralLinkAmount = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'Module' + PATH_SEPARATOR + 'Neutral').listFiles().length;
    nonChastityLinkAmount = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'Module' + PATH_SEPARATOR + 'NoChastity').listFiles().length;
}