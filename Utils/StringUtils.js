let SENTENCE_BUILDER_FIRST = true;

const ARRAY_UTILS = Java.type('me.goddragon.teaseai.utils.ArrayUtils');

function deserializeObject(object, string) {
    let splitArray = string.split(',');

    for (let y = 0; y < splitArray.length; y++) {
        let valueEntry = splitArray[y];
        let splitEntry = valueEntry.split(':');
        let identifier = splitEntry[0];
        let value = splitEntry[1];


        //Convert boolean to bool type
        if(value === "false" || value === "true") {
            value = (value === "true");
        }
        //Don't cast name to integers
        else if(identifier != 'name' && !isNaN(value)) {
            if(value.indexOf('.') === -1 && !isNaN(parseInt(value))) {
                value = parseInt(value);
            } else {
                value = parseFloat(value)
            }
        }


        object[identifier] = value;
    }

    return object;
}

function serializeObject(object) {
    let string = '';
    for (let property in object) {
        if (object.hasOwnProperty(property) && typeof object[property] !== 'function') {
            string += property + ':' + object[property] + ','
        }
    }

    //Cut of the last ,
    return string.substr(0, string.length - 1);
}

function extend(superObject, object) {
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            superObject[property] = object[property];
        }
    }

    return superObject;
}

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
    return '%MyYour%';
}

function pluralizeArticle(article, amount = 2) {
    if(amount > 1) {
        return "them";
    }

    return article;
}

function isUndefined(object) {
    return object === null || object === undefined;
}

function isUndefinedString(object) {
    return object === null || object === undefined || object === "undefined";
}


function isNullOrEmpty(object) {
    return isUndefined(object) || object.length === 0;
}

function tryGetArrayList(varName) {
    let varValue = getVar(varName, new java.util.ArrayList());

    //Failed somehow, so we have a string on our hands to convert
    if(typeof varValue === 'string' || varValue instanceof String) {
        let arrayList = new java.util.ArrayList();

        if(varValue.startsWith('[')) {
            //Remove surrounding array brackets (-2 because it does not specify the end index but the length instead)
            let strippedString = varValue.trim().substr(1, varValue.length - 2);
            let lines = strippedString.split(', ');

            for(let x = 0; x < lines.length; x++) {
                arrayList.add(lines[x]);
            }

            sendDebugMessage('Got array list from value ' + varValue);

            //Convert to fitting integer or double array if possible
            arrayList = ARRAY_UTILS.convertToFittingType(arrayList);

            setVar(varName, arrayList);
            return arrayList;
        } else {
            sendDebugMessage('Failed to get array list from value ' + varValue);
            return varValue;
        }
    }

    //sendDebugMessage('Loaded array list ' + varName);
    return varValue;
}
