function createMenu(name) {
    let menu = {
        options: [],

        printMenu: function () {
            sendVirtualAssistantMessage('----------------- ' + name + ' Menu' + ' -----------------', 0, false);
            for(let index = 0; index < this.options.length; index++) {
                sendVirtualAssistantMessage((index + 1) + '. ' + this.options[index].name, 0, false);
            }

        },

        registerOption: function(name, regexList, functionToExecute) {
            this.options.push({
                name: name,
                regexList: regexList,
                functionToExecute : functionToExecute
            });
        },

        callMenu: function() {
            this.printMenu();

            let nameOptions = [];

            //Push all name options
            for(let index = 0; index < this.options.length; index++) {
                let option = this.options[index];
                nameOptions.push(option.name);
            }

            let answer = createAnswerInput(nameOptions);

            while(true) {
                for(let index = 0; index < this.options.length; index++) {
                    let option = this.options[index];

                    let found = true;
                    for(let regexIndex = 0; regexIndex < option.regexList.length; regexIndex++) {
                        if(answer.isLike(option.regexList[regexIndex])) {
                            answer.clearOptions();
                            //If it returns true => menu can be closed
                            if(option.functionToExecute(answer)) {
                                return;
                            } else {
                                this.callMenu();
                                return;
                            }

                            found = true;

                            break;
                        }
                    }

                    //Reprint options (QUALITY: This is not an applicable option text)
                    if(!found) {
                        sendVirtualAssistantMessage("You have the following options %SlaveName%");

                        this.printMenu();
                        answer.loop();
                    }
                }
            }
        }
    };

    return menu;
}