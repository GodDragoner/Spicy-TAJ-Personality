
const MODULE_LINK = {
    chastityLinkAmount: 0,
    neutralLinkAmount: 0,
    nonChastityLinkAmount: 0,
};

const END_LINK = {
    chastityLinkAmount: 0,
    neutralLinkAmount: 0,
    nonChastityLinkAmount: 0,
};

{
    let pathLength = getPersonalityPath().length;
    MODULE_LINK.chastityLinkAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'Module' + PATH_SEPARATOR + 'Chastity').listFiles().length;
    MODULE_LINK.neutralLinkAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'Module' + PATH_SEPARATOR + 'Neutral').listFiles().length;
    MODULE_LINK.nonChastityLinkAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'Module' + PATH_SEPARATOR + 'NoChastity').listFiles().length;

    END_LINK.chastityLinkAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'End' + PATH_SEPARATOR + 'Chastity').listFiles().length;
    END_LINK.neutralLinkAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'End' + PATH_SEPARATOR + 'Neutral').listFiles().length;
    END_LINK.nonChastityLinkAmount = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Link' + PATH_SEPARATOR + 'End' + PATH_SEPARATOR + 'NoChastity').listFiles().length;
}