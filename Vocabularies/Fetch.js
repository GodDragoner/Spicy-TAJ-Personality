function fetchVocabulary() {
    const answers = ["Go get your","Retrieve your","Go ahead and find your","Hurry and find your","Be quick and get your","Be fast and get your","Hurry up and get your","Be a good boy and find your","Be a sweet boy and get your","Be a darling and retrieve your"];
    return answers[randomInteger(0, answers.length - 1)];
}
