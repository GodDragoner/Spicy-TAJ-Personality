registerDynamicModule( {transition: TRANSITION_POSSIBLE, repeatPerSession: 0, frequency: 100,
    moduleCategory: MODULE_ANAL, transitionTo: MODULE_CBT,

    getTotalChance : function() {
        let chance = this.getChance();

        let increasingChance = 0;

        if(feelsLikePunishingSlave()) {
            increasingChance += 0.1;
        }

        //TODO: Check other aspects

        return chance*(1 + increasingChance);
    },

    run : function() {
        
    }
});