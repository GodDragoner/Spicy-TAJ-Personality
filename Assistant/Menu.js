function createMenu(name) {
    let options = [];

    for (let x = 1; x < arguments.length; x++) {
        options.push(arguments[x]);
    }

    let menu = {
        printMenu: function () {
            sendVirtualAssistantMessage(name + ' Menu', 0);
            sendVirtualAssistantMessage('Options:', 0);
            for(let index = 0; index < options.length; index++) {
                sendVirtualAssistantMessage((index + 1) + '. ' + options[index]);
            }

        }
    };

    return menu;
}