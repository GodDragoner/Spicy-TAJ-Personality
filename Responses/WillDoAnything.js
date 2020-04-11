addResponseRegex('Ill do anything', 'I will do anything', 'I would do anything', ' could do anything', ' id do anything', 'I would give anything', 'I could give anything',
    ' id give anything', ' Ill give anything', ' Ill do anything you want', 'anything you want', ' I will do anything you want', 'Ill do anything you want', ' Ill do anything you say',
    'I will do anything you say', ' anything you need', 'Ill do anything for you', 'I will do anything for you', 'Id do anything for you', 'I would do anything for you',
    ' Ill do anything you tell me to', 'I will do anything you tell me to', ' anything you ask', ' anything to please you',
    'Ill do whatever you want', 'Ill do whatever you say', 'I will do whatever you want', 'I will do whatever you say', 'Ill do whatever you ask', 'whatever to please',
    'Ill do whatever it takes', 'I will do whatever it takes', ' whatever you ask', ' whatever you tell', ' whatever you say', ' ll do whatever', 'I ll do whatever pleases you',
    'I will do whatever pleases you', ' do whatever pleases');


function willDoAnythingResponse(message) {
    if (getVar(VARIABLE.CURRENT_SESSION_ACTIVE, false)) {
        let newValue = incrementVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING_COUNT, 1, 0);

        let answers = ['Anything is a lot, %SlaveName%... I\'m not sure you\'re ready for it',
            'Easy now, %SlaveName%',
            'Careful what you promise, %SlaveName%...',
            'I love it when you\'re desperate like that',
            'Careful what you wish for, you might just get it, %SlaveName%',
            'Be careful what you promise, %SlaveName%...',
            'You\'re so eager, %SlaveName%',
            'Just do as I say, that\'s all I ask',
            'I\'m not sure you understand the implications of \'anything\', %SlaveName%',
            'Let\'s see if you still say that later %GeneralTime%',
            'Really? Maybe I\'ll put it to the test...',
            'My my, you\'re eager %GeneralTime% %Giggles%',
            'I\'m sure you will %SlaveNameSmiley%',
            'Don\'t make any promises you can\'t keep %SlaveNameSmiley%',
            'Is that so... I\'ll keep that in mind'];


        if (newValue > 1) {
            answers = ['I already know that %SlaveNameSmiley%', 'No need to repeat yourself %SlaveNameSmiley%', 'I know %SlaveNameSmiley%', 'I already know that %SlaveNameSmiley%'];
        } else if (newValue > 3) {
            answers = ['Yes.... I understood that by now %SlaveName%', 'I got it and now stop talking %SlaveName%', 'I got it %SlaveName%...', 'No need to tell me this a thousand times %SlaveName%...'];
            registerRepeatingText();
            sendMessage(random(answers));
            return true;
        } else {
            let limit = getRandomLimitNotYes();

            if (limit != null && isChance(25)) {
                setVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING, true);
                limit.askForLimitChange();
                return;
            }
        }

        if (isStroking()) {
            answers.push('Let\'s take things one step at a time, just %JerkingOff% is fine for now %Grin%');
        }

        if (isEdging()) {
            answers.push('All I want from you right now is to get to the edge',
                'Just edging for me is quite enough for now, %SlaveName%',
                'Just edge for me now',
                'But all I want from you right now is to get to the edge',
                'Anything? I\'ll be happy if you edge for me right now');
        }

        //TODO: Holding edge
        if(false) {
            //'You better stay on the edge a little longer then', addEdgeTime
            //@RT(Great,Awesome,Excellent,Good,Good boy), @RT(I guess I want you to,you better) @RT(keep edging,stay on the edge,stay right there) @RT(a bit longer,a little longer,some more) then #Grin @AddEdgeHoldTime
        }

        if (isInChastity()) {
            answers.push('Yes, that\'s what being in chastity will do to a guy %Lol%');
        }

        sendMessage(random(answers));
        return true;
    }

    return false;
}