
//-1 == based on mood. 0 = lowest, 1 = medium, 2 = hard
function fetchSpankingImplement(level = -1) {
    let spankingImplement;

    if(level == -1) {
        const mood = getMood();

        //Different choices based on mood of dome and strictness
        if(mood == ANNOYED_MOOD || ACTIVE_PERSONALITY_STRICTNESS == 2 && mood == NEUTRAL_MOOD) {
            level = 1;
        } else if(mood == VERY_ANNOYED_MOOD|| ACTIVE_PERSONALITY_STRICTNESS == 2 && mood == ANNOYED_MOOD) {
            level = 2;
        } else {
            level = 0;
        }
    }

    switch(level) {
        case 0:
            spankingImplement = getVar('toySpankingImplement1');
            break;
        case 1:
            spankingImplement = getVar('toySpankingImplement2');
            break;
        case 2:
            spankingImplement = getVar('toySpankingImplement3');
            break;
    }

    if(!fetchToy(spankingImplement)) {
        const answer = sendInput('Do you have a similar spanking implement around? A ruler, a belt, a spoon or something similar?');

        while(true) {
            if(answer.isLike('yes')) {
                sendMessage('Well I guess that is somehow satisfactory...');
                const answer = sendInput('Do you have another spanking implement around? A ruler, a belt, a spoon or something similar?');
                //Remove any additions to the word itself
                spankingImplement = answer.getAnswer().replace('a ', '').repalce('the ', '').replace('an  ', '');
            } else if(answer.isLike('no')) {
                sendMessage('Well then %SlaveName%...');
                sendMessage('This looks like a time where you will use your own hand to spank yourself');
                spankingImplement = 'hand';
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }
    }

    return spankingImplement;
}