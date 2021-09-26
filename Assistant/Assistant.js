const ASSISTANT_CHRISTMAS_SET_ID = 100;
let ASSISTANT_CURRENT_SET_ID = -1;

const SLAVE_FRIEND_1_CURRENT_SET_ID = -1;
const SLAVE_FRIEND_2_CURRENT_SET_ID = -1;
const SLAVE_FRIEND_3_CURRENT_SET_ID = -1;
const RECEPTION_CURRENT_SET_ID = -1;

function updatePictureSet() {
    //Set slave friend ids
    const SLAVE_FRIEND_1_CURRENT_SET_ID = randomInteger(0, 3);
    const SLAVE_FRIEND_2_CURRENT_SET_ID = randomInteger(0, 3);
    const SLAVE_FRIEND_3_CURRENT_SET_ID = randomInteger(0, 2);

    const RECEPTION_CURRENT_SET_ID = randomInteger(0, 4);

    if(isVar("lastAssistantDressChange")) {
        const lastAssistantDressChange = getDate("lastAssistantDressChange");
        const date = new Date();

        //If the day hasn't changed, or if it's midnight don't change dress
        if(lastAssistantDressChange.getDay() == date.getDate() || date.getHours() < 6) {
            ASSISTANT_CURRENT_SET_ID = getVar("currentAssistantSetId");
            return;
        }
    }

    //We are gonna change the dress so lets update this
    setDate("lastAssistantDressChange");

    const date = new Date();

    if(date.getMonth() === 11) {
        //Set the current set
        setVar("currentAssistantSetId", ASSISTANT_CHRISTMAS_SET_ID);
        ASSISTANT_CURRENT_SET_ID = ASSISTANT_CHRISTMAS_SET_ID;
        return;
    }

    //If the variable is unknown we need to set it to default
    if(!isVar("usedVirtualAssistantDresses")) {
        setVar("usedVirtualAssistantDresses", ",");
    }

    //Select random unused dress
    const usedDresses = getVar("usedVirtualAssistantDresses");

    const usedDressesAmount = (usedDresses.length - 3)/2;
    const unusedDresses = [];

    if(usedDressesAmount < 30) {
        for (let x = 1; x <= 31; x++) {
            //Check whether that dress is already used
            if (!usedDresses.contains(+"," + x + ",")) {
                unusedDresses.push(x);
            }
        }
    }
    //All dresses were used so we need to reset it
    else {
        setVar("usedVirtualAssistantDresses", ",");

        //Add all possible dresses
		//off by one error below fixed  (dress goes 1-31)
        for(let x = 1; x <= 31; x++) {
            unusedDresses.push(x);
        }
    }

    const dressNumber = Math.max(1, Math.min(31, unusedDresses[randomInteger(0, unusedDresses.length - 1)]));

    //Update the list of used dresses
    setVar("usedVirtualAssistantDresses", usedDresses + dressNumber + ",");

    //Set the current set
    setVar("currentAssistantSetId", dressNumber);
    ASSISTANT_CURRENT_SET_ID = dressNumber;
}

function showAssistantImage() {
    if(RULE_ONLY_CENSORED_PORN.isActive()) {
        showCategoryImage('TEASE');
        return;
    }

    if(ASSISTANT_CURRENT_SET_ID === ASSISTANT_CHRISTMAS_SET_ID) {
        showImage("Images/Spicy/Assistant/Christmas/*.jpg");
    } else {
        showImage("Images/Spicy/Assistant/" + ASSISTANT_CURRENT_SET_ID + "/*.jpg");
    }
}