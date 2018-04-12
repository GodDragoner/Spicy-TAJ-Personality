ASSISTANT_CHRISTMAS_SET_ID = 100;
ASSISTANT_CURRENT_SET_ID = -1;

SLAVE_FRIEND_1_CURRENT_SET_ID = -1;
SLAVE_FRIEND_2_CURRENT_SET_ID = -1;
SLAVE_FRIEND_3_CURRENT_SET_ID = -1;
RECEPTION_CURRENT_SET_ID = -1;

function updatePictureSet() {
    //Set slave friend ids
    SLAVE_FRIEND_1_CURRENT_SET_ID = randomInteger(0, 3);
    SLAVE_FRIEND_2_CURRENT_SET_ID = randomInteger(0, 3);
    SLAVE_FRIEND_3_CURRENT_SET_ID = randomInteger(0, 2);

    RECEPTION_CURRENT_SET_ID = randomInteger(0, 4);

    if(isVar("lastAssistantDressChange")) {
        var lastAssistantDressChange = getDate("lastAssistantDressChange");
        var date = new Date();

        //If the day hasn"t changed, or if it"s midnight don"t change dress
        if(lastAssistantDressChange.getDay() == date.getDate() || date.getHours() < 6) {
            ASSISTANT_CURRENT_SET_ID = getVar("currentAssistantSetId");
            return;
        }
    }

    //We are gonna change the dress so lets update this
    setDate("lastAssistantDressChange");

    var date = new Date();

    if(date.getMonth() == 12) {
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
    var usedDresses = getVar("usedVirtualAssistantDresses");

    var usedDressesAmount = (usedDresses.length - 3)/2;
    var unusedDresses = [];

    if(usedDressesAmount < 30) {
        for (x = 0; x < 31; x++) {
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
        for(x = 0; x < 31; x++) {
            unusedDresses.push(x);
        }
    }

    var dressNumber = unusedDresses[randomInteger(0, unusedDresses.length - 1)];

    //Update the list of used dresses
    setVar("usedVirtualAssistantDresses", usedDresses + dressNumber + ",");

    //Set the current set
    setVar("currentAssistantSetId", dressNumber);
    ASSISTANT_CURRENT_SET_ID = dressNumber;
}