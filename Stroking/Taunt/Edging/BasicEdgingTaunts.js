if(getDate(VARIABLE_EDGE_STARTED_DATE).addMinute(2).hasPassed()) {
    //TODO: Special taunts for edging while in chastity
    let answers = [
        'C\'mon %SlaveName%, don\'t you want to get close for me?',
        'You should be edging for me much quicker than this %SlaveName%',
        'I know you can get there faster than this %SlaveName%',
        'Hurry up and get close for me',
        'I hope you\'re not let letting yourself get distracted over there %EmoteFlustered%',
        'Faster %SlaveName%, I want you on that edge right now',
        'I know you can edge quicker than this',
        'Focus %SlaveName%, I want you on that edge',
        'Maybe this picture I just found will help you get there faster @ShowBlogImage',
        'Need some encouragement over there? How bout this? @ShowLocalImage',
        'Maybe this will help you get there faster @ShowBlogImage',
        'Think an ass like this will help you edge a little quicker? @ShowButtImage',
        'I know you want to edge for a pair of %Boobs% like this @ShowBoobsImage',
        'You\'ve been trying to get close for a while now',
        'I think you\'ve been trying to edge for me a little too long',
        'Doesn\'t look like you\'re able to get as close as I want yet',
        'I think someone\'s having a little difficulty over there %EmoteFlustered%',
        'This is taking a little longer than I expected',
    ];

    let answer = findRandomUnusedElement(answers, createHistory('basicEdgingTauntLong'));

    interpretLegacyTaunt(answer);

    sendDebugMessage('Send edging taunt long');
} else {
    let answers = [
        'Get close for me %SlaveName%',
        'Get that %Cock% on the edge',
        'Closer',
        'I want you so fucking close %SlaveName%',
        'Get closer',
        'I want you right on the edge %SlaveName%',
        'I want you right fucking there %SlaveName%',
        'Get closer for me',
        'Not close enough, I want more',
        'I want you close ',
        'Mmmm fuck yes, closer',
        'Stare at this %Ass% and get closer for me @ShowButtImage',
        'Imagine how easy it would be to get close if she were shaking this %Ass% in front of you right now @ShowButtImage',
        'Here\'s a sexy %Ass% you can edge to %Grin% @ShowButtImage',
        'Just imagine you were getting ready to cum all over these %Boobs% @ShowBoobsImage',
        'Get closer while you imagine how these would feel in your hands right now @ShowBoobsImage',
        'Here\'s some %Boobs% to help you get closer @ShowBoobsImage',
    ];

    let answer = findRandomUnusedElement(answers, createHistory('basicEdgingTaunt'));

    interpretLegacyTaunt(answer);

    sendDebugMessage('Send edging taunt');
}