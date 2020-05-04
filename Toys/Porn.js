const PORN_CATEGORY = {
    FEMDOM: {
        id: 0,
        name: 'femdom'
    },
    SISSY_HYPNO: {
        id: 1,
        name: 'sissy hypno'
    },
    SISSY_GENERAL: {
        id: 2,
        name: 'sissy'
    },
    GAY: {
        id: 3,
        name: 'gay'
    },
    FEET: {
        id: 4,
        name: 'feet'
    },
    CUCKOLD: {
        id: 5,
        name: 'cuckold'
    },
    TRAPS: {
        id: 6,
        name: 'trap'
    },
    CENSORED: {
        id: 7,
        name: 'censored'
    }
};

function getRandomAllowedPornCategory() {
    return random(getAllowedPornCategories());
}

function getAllowedPornCategories() {
    let categories = [];

    categories.push(PORN_CATEGORY.FEMDOM);
    categories.push(PORN_CATEGORY.CENSORED);

    if(SISSY_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.SISSY_GENERAL);
        categories.push(PORN_CATEGORY.SISSY_HYPNO);
        categories.push(PORN_CATEGORY.GAY);
        categories.push(PORN_CATEGORY.TRAPS);
    }

    if(CUCKOLD_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.CUCKOLD);
    }

    if(FEET_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.FEET);
    }

    return categories;
}