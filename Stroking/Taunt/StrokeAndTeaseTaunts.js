const STROKE_AND_TEASE_TAUNTS = [
    'Make it feel good %SlaveName%',
    'Make %MyCock% %Cock% feel ' + random('amazing', 'good'),
    'Tease tease tease %Grin%',
    'Drip drip drip %Giggles%',
    'Just suffer ' + random('for me', '') + ' %SlaveNameSmiley%',
    'Keep suffering %SlaveNameSmiley%',
    'Keep going %SlaveNameSmiley%',
    'Keep %TeaseVerb% just like that... Good %SlaveNameSmiley%',
    'Don\'t stop %TeaseVerb%',
    'Don\'t stop %SlaveName%, I want you even ' + 'more aroused',
    'Don\'t stop %SlaveName%, I want %MyYour% %Cock% try to get even ' + 'harder',
    'I know you can keep going for me, %SlaveName%',
    'You have no choice but to keep %TeaseVerb% for me',
    'When I see a pair of %Boobs% like that, I just want to grab them %EmoteHappy% @ShowBoobsImage',
    'I love that you\'re doing this for me',
    'I love how much you\'re willing to make yourself ache for me',
    'It turns me on so much that you do this for me',
    'I\'m loving every second of this %Grin%',
    random('I love making you ', 'Nothing gets me hotter than making you ') + random('do this', 'suffer', 'drip', 'ache') + ' for me',
    'It turns me on so much when you suffer for me',
    'Your suffering turns me on so much',
    'You have no idea how much I ' + random('enjoy', 'love') + ' seeing you suffer for me',
    'It makes me ' + random('wet', 'hot') + ' to know you\'d do anything for me, %SlaveName%',
    'I wish I could see you right now',
    'I\'m trying to picture you sitting there all flushed and sweaty %EmoteHappy%',
    'I want you more ' + random('aroused', 'turned on', 'horny') + ' than you\'ve ever been in your entire life',
    'I want you aching',
    'I want you suffering',
    'I want you to ache like never before',
    'Suffer for me',
    'Making you ache makes me feel so good',
    'I\'m gonna take all your pleasure for myself',
    'I\'m gonna take every last bit of your pleasure for myself',
    'Show me how much you want to please me',
    'Make yourself ache for my ' + random('enjoyment', 'pleasure'),
    'Ache for me',
    'Keep aching for me',
    'Let every second make you ' + random('ache for me even more', 'even more desperate'),
    'Just switch off you brain and suffer now',
    'I\'m going to make this so much worse on you',
    'That ache isn\'t going to get any easier',
    'Mmmm @ShowBlogImage',
    'Sexy @ShowBlogImage',
    'Nice @ShowBlogImage',
    'That\'s sexy @ShowBlogImage',
    'That\'s hot @ShowBlogImage',
    'So hot @ShowBlogImage',
    'The internet is just an endless supply of hotness %EmoteHappy% @ShowBlogImage',
    'Don\'t mind me %EmoteOther% @ShowBlogImage',
    'There\'s no shortage of pictures to tease you with, that\'s for sure @ShowBlogImage',
    'I could just scroll through these porn blogs all day and never get bored @ShowBlogImage',
    '%Moan% @ShowBlogImage',
    'Mmm good stuff... @ShowBlogImage',
    'This is nice... @ShowLocalImage',
    'I want you to remember this ache for a long time %SlaveName%',
    'You are so fucking sexy to me right now',
    'You are going to ache until you forget your name',
    'I want this to be torture for you %SlaveName%',
    'There is nothing else I\'d rather be doing than making you suffer %EmoteOther%',
    'I\'m going to ' + random('fuck you up so bad', 'drive you crazy') + ' %Lol%',
    'I\'m going to drive you completely insane %EmoteOther%',
    'I want you so fucking desperate %SlaveName%',
    'I want %MyYour% %Cock% to leak drops of desperation',
    'You are going to give me whatever I want, %SlaveName%',
    'Just imagine what my fingers would be doing to you right now %Grin%',
    'I\'m loving every second of this %EmoteOther%',
    'You were made to suffer for me %SlaveName%',
    'I haven\'t even begun to fuck with you yet %SlaveName% %EmoteOther%',
    'I\'m gonna make sure %MyCock% %Cock% remembers every single second %Grin%',
    'Don\'t stop, %SlaveName%',
    'Keep teasing, %SlaveName%',
    'Keep teasing',
    'Don\'t stop teasing',
    'I want you to keep teasing',
    'Keep going, %SlaveName%',
    'Keep teasing just like that ',
    'Keep teasing for me',
    'Just keep teasing',
    'You need to keep teasing %MyCock% %Cock%',
    'Keep teasing my toy, %SlaveName%',
    'Don\'t stop teasing %MyCock% %Cock%',
    'Keep teasing %MyCock% %Cock%',
    'Keep going just like that, %SlaveName%',
    'You\'re doing great, keep going %Grin%',
    'Keep going, you don\'t deserve any mercy, %SlaveName%',
    'Don\'t stop, just suffer %Grin%',
    'Keep %TeaseVerb%, %SlaveName% %Grin%',
    'Don\'t stop, ' + random('tease', 'suffer', 'ache'),
    'Don\'t back off, keep going just like that',
    'Keep it up, it\'s not time to stop %TeaseVerb% yet'
];

const TAUNT_CATEGORY = {
    TAUNT_CATEGORIES: [],
}

//Do this after to have the array initialized above so we can append to it
TAUNT_CATEGORY.SPH = createTauntCategory(0, "SPH", ['Stroking/Taunt/Fetish/SPH/'])
TAUNT_CATEGORY.SPH.isAllowed = function () {
    return VERBAL_HUMILIATION_LIMIT.isAllowed();
}

TAUNT_CATEGORY.SISSY = createTauntCategory(1, "Sissy", ['Stroking/Taunt/Fetish/Sissy/'])
TAUNT_CATEGORY.SISSY.isAllowed = function () {
    return SISSY_LIMIT.isAllowed();
}

TAUNT_CATEGORY.HUMILIATION = createTauntCategory(2, "Humiliation", ['Stroking/Taunt/Fetish/Degrading/'])
TAUNT_CATEGORY.HUMILIATION.isAllowed = function () {
    return VERBAL_HUMILIATION_LIMIT.isAllowed();
}


function getAllowedTauntCategories() {
    return getAllowedTauntCategoriesFromList(TAUNT_CATEGORY.TAUNT_CATEGORIES);
}


function getAllowedTauntCategoriesFromList(categories) {
    let allowed = [];

    for (let x = 0; x < categories.length; x++) {
        let tauntCategory = categories[x];

        if (tauntCategory.isAllowed()) {
            allowed.push(tauntCategory);
        }
    }

    return allowed;
}


function createTauntCategory(id, name, paths) {
    let fileCount = [];
    let overallFileCount = 0;

    for (let x = 0; x < paths.length; x++) {
        let path = paths[x];

        //Add path seperators
        path = path.replaceAll(/\//g, PATH_SEPARATOR);

        fileCount[x] = getScriptFilesInFolder(path).length;
        overallFileCount += fileCount[x];

        //Add *.js to the path
        paths[x] = path + '*.js';
    }

    sendDebugMessage('Loaded ' + fileCount + ' ' + name + ' taunts');

    let taunt = {
        id: id,
        name: name,
        paths: paths,
        fileCount: fileCount,
        overallFileCount: overallFileCount,
        history: createHistory(name + 'Taunt'),
    }

    TAUNT_CATEGORY.TAUNT_CATEGORIES.push(taunt);
    return taunt;
}

function findTauntAndRun(tauntCategory) {
    let options = tauntCategory.paths;

    sendDebugMessage('Trying to run ' + tauntCategory.name + ' taunt');

    setTempVar('minTauntsSinceRun', tauntCategory.overallFileCount);

    //Find winner in all the list of the different directories (if there are multiple)
    let winner = getWinnerIndex(tauntCategory.fileCount);

    sendDebugMessage('Running from path ' + tauntCategory.paths[winner])

    run(tauntCategory.paths[winner]);
}

function getTauntCategoryByFilePath(path) {
    for (let x = 0; x < TAUNT_CATEGORY.TAUNT_CATEGORIES.length; x++) {
        let tauntCategory = TAUNT_CATEGORY.TAUNT_CATEGORIES[x];

        for (let y = 0; y < tauntCategory.paths.length; y++) {
            let categoryPath = tauntCategory.paths[y];

            categoryPath = categoryPath.replaceAll(/\//, PATH_SEPARATOR);

            //Cut off \*.js at the end
            categoryPath = categoryPath.substr(0, categoryPath.length - 5);

            if (categoryPath.substr(0, 1) !== PATH_SEPARATOR) {
                categoryPath = PATH_SEPARATOR + categoryPath;
            }

            if (categoryPath.toLowerCase() === path.toLowerCase()) {
                return tauntCategory;
            }
        }
    }

    sendDebugMessage('Unable to find taunt category for taunt path "' + path + '"');
    return undefined;
}

function tryRunTauntFetchId(minTauntsSinceRun) {
    let currentFile = ScriptHandler.getHandler().getCurrentFile();
    let category = getTauntCategoryByFilePath(getRelativePersonalityFilePath(currentFile.getParentFile()));

    if (category === undefined) {
        return true;
    }

    return tryRunTaunt(getCurrentScriptName(), category, minTauntsSinceRun);
}

function tryRunTaunt(tauntId, category, minTauntsSinceRun) {
    if (minTauntsSinceRun === undefined) {
        minTauntsSinceRun = getVar('minTauntsSinceRun', 0);
    }

    //Keep track of how many times we tried to find a taunt
    setTempVar('findTauntTries', getVar('findTauntTries', 0) + 1);

    let maxTries = 10;

    tauntId = tauntId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (category.history.isInTodaysHistory(tauntId)) {
        maxTries = 30;
    }

    if (category.history.isInHistory(tauntId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (category.history.getModulesSinceHistory(tauntId) < minTauntsSinceRun) {
            if (getVar('findTauntTries') < maxTries) {
                //Try to find a different taunt
                findTauntAndRun(category);
                return false;
            }
        }
    }

    sendDebugMessage('Executing taunt and adding to history');

    category.history.addHistoryRun(tauntId);
    return true;
}

function getTeaseVerb() {
    return random('suffering', 'dripping', 'teasing', 'aching');
}
