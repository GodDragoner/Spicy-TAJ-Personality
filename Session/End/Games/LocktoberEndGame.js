{
    let endGame = registerEndGame(END_GAME_LOCKTOBER);
    endGame.run = function () {
        //Double the points
        distributeOrgasmPoints();
        distributeOrgasmPoints();

        if (!SKIP_END_GAME) {
            run("Session/Link/End/DecideEndLink.js");

            if (!isInChastity()) {
                if (isChance(50)) {
                    sendAlreadyKnowWhatsNext('chastity');
                } else {
                    sendMessage('Since you are only allowed to cum inside chastity...');
                    sendMessage('I\'ll have to sadly lock you up');
                    sendMessage('How sad, isn\'t it? %Lol%');
                    sendMessage('That\'s just what\'s locktober like %Grin%');
                }

                lockChastityCage();
            }

            //Only run game if sub is in chastity
            if (isInChastity()) {
                if(hasSubHadAnalOrgasmBefore()) {
                    //Hard limit forces orgasm
                    if (isVar(VARIABLE.DENIAL_HARD_LIMIT_ORGASM_TODAY)) {
                        let orgasmCategory = decideOrgasm(true);
                        let orgasmType = decideAnalOrgasmType();
                    } else {
                        sendDebugMessage('Current orgasm points ' + getVar(VARIABLE.ORGASM_POINTS) + '/' + getVar(VARIABLE.REQUIRED_ORGASM_POINTS));

                        if (getVar(VARIABLE.ORGASM_POINTS) >= getVar(VARIABLE.REQUIRED_ORGASM_POINTS)) {
                            let ranOrgasm = checkForOrgasmSpecial();

                            if (!ranOrgasm) {
                                let analOrgasmType = decideAnalOrgasmType();
                                let orgasmCategory = decideOrgasm(false);

                                if (orgasmCategory !== ORGASM_CATEGORY_DENIED) {
                                    getAnalOrgasmInstructions(analOrgasmType, orgasmCategory);
                                } else {
                                    runOrgasmCategory(ORGASM_CATEGORY_DENIED);
                                }
                            }
                        } else {
                            runOrgasmCategory(ORGASM_CATEGORY_DENIED);
                        }
                    }
                } else {
                    //Normal in chastity orgasm
                    sendDebugMessage('Current orgasm points ' + getVar(VARIABLE.ORGASM_POINTS) + '/' + getVar(VARIABLE.REQUIRED_ORGASM_POINTS));
                    if (getVar(VARIABLE.ORGASM_POINTS) >= getVar(VARIABLE.REQUIRED_ORGASM_POINTS)) {
                        let orgasmCategory = decideOrgasm(true);
                        let ranOrgasm = checkForOrgasmSpecial();

                        if (!ranOrgasm) {
                            runOrgasmCategory(decideOrgasm());
                        }
                    } else {
                        runOrgasmCategory(ORGASM_CATEGORY_DENIED);
                    }
                }
            } else {
                //No chastity - no orgasm
            }
        }
    };
}
