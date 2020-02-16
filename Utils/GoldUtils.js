function rewardGoldHigh(negative = false) {
	switch (getMood()) {
		case VERY_PLEASED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(70, 120));
			break;
		case PLEASED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(50, 100));
			break;
		case NEUTRAL_MOOD:
			addGold((negative? -1 : 1)*randomInteger(40, 80));
			break;
		case ANNOYED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(30, 60));
			break;
		case VERY_ANNOYED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(20, 50));
			break;
	}
}

function rewardGoldMedium(negative = false) {
	switch (getMood()) {
		case VERY_PLEASED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(30, 60));
			break;
		case PLEASED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(20, 50));
			break;
		case NEUTRAL_MOOD:
			addGold(negative? -1 : 1)*(randomInteger(10, 40));
			break;
		case ANNOYED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(5, 30));
			break;
		case VERY_ANNOYED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(1, 20));
			break;
	}
}

function rewardGoldLow(negative = false) {
	switch (getMood()) {
		case VERY_PLEASED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(30, 40));
			break;
		case PLEASED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(20, 30));
			break;
		case NEUTRAL_MOOD:
			addGold((negative? -1 : 1)*randomInteger(10, 20));
			break;
		case ANNOYED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(5, 15));
			break;
		case VERY_ANNOYED_MOOD:
			addGold((negative? -1 : 1)*randomInteger(1, 10));
			break;
	}
}

function getGold() {
	return getVar(VARIABLE.GOLD, 0);
}