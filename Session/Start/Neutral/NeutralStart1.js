{
    if (tryRunStartFetchId()) {
        if(!RULE_ALWAYS_NAKED_SESSIONS.isActive()) {
            RULE_ALWAYS_NAKED_SESSIONS.checkRule();

            if(isChance(20)) {
                RULE_ALWAYS_NAKED_SESSIONS.sendIntroduction();
            }
        } else {
            RULE_ALWAYS_NAKED_SESSIONS.checkRule();
        }
    }
}