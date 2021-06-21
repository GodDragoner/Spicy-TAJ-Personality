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
    },
    DENIAL: {
        id: 8,
        name: 'denial'
    },
    CUM_COMPILATION: {
        id: 9,
        name: 'cum compilation'
    },
    RUINED_ORGASM_COMPILATION: {
        id: 10,
        name: 'ruined orgasm compilation'
    },
    SISSY_GASM_COMPILATION: {
        id: 11,
        name: 'sissygasm compilation'
    },
    HUMILIATION: {
        id: 13,
        name: 'humiliation'
    },
    SPH_HUMILIATION: {
        id: 14,
        name: 'small penis humiliation'
    },
};

function getRandomAllowedPornCategory() {
    return random(getAllowedPornCategories());
}

function getAllowedPornPunishmentCategories() {
    let categories = [];


    categories.push(PORN_CATEGORY.CUM_COMPILATION);
    categories.push(PORN_CATEGORY.RUINED_ORGASM_COMPILATION);
    categories.push(PORN_CATEGORY.DENIAL);

    if(SISSY_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.SISSY_GASM_COMPILATION);
    }

    if(HUMILIATION_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.SPH_HUMILIATION);
        categories.push(PORN_CATEGORY.HUMILIATION);
    }

    return categories;
}

function getAllowedPornCategories() {
    let categories = [];

    categories.push(PORN_CATEGORY.FEMDOM);
    categories.push(PORN_CATEGORY.CENSORED);

    categories.push(PORN_CATEGORY.CUM_COMPILATION);
    categories.push(PORN_CATEGORY.RUINED_ORGASM_COMPILATION);

    categories.push(PORN_CATEGORY.DENIAL);

    if(SISSY_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.SISSY_GENERAL);
        categories.push(PORN_CATEGORY.SISSY_HYPNO);
        categories.push(PORN_CATEGORY.GAY);
        categories.push(PORN_CATEGORY.TRAPS);
        categories.push(PORN_CATEGORY.SISSY_GASM_COMPILATION);
    }

    if(CUCKOLD_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.CUCKOLD);
    }

    if(FEET_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.FEET);
    }

    if(HUMILIATION_LIMIT.isAllowed()) {
        categories.push(PORN_CATEGORY.SPH_HUMILIATION);
        categories.push(PORN_CATEGORY.HUMILIATION);
    }

    return categories;
}