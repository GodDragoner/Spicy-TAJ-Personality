{
    if (tryRunLinkFetchId()) {
        //TODO: If more taunt types are available expand on this
        let allowedTaunts = getAllowedTauntCategoriesFromList([TAUNT_CATEGORY.SPH, TAUNT_CATEGORY.SISSY, TAUNT_CATEGORY.HUMILIATION])
        if (allowedTaunts.length > 0) {
            findTauntAndRun(random(allowedTaunts));
        }
        //No humiliation taunt allowed (find other link)
        else {
            findLinkAndRun();
        }
    }
}