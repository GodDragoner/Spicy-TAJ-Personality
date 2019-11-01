let SENTENCE_BUILDER_FIRST = true;

function decapitalize(string) {
    return string.charAt(0).toLowerCase() + string.substr(1);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
}

function pluralize(string, amount = 2) {
    if(amount > 1) {
        return string + "s";
    } else {
        return string;
    }
}

function returnYourOrMy() {
    return random('your', 'my');
}

function pluralizeArticle(article, amount = 2) {
    if(amount > 1) {
        return "them";
    }

    return article;
}