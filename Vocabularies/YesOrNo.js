function YesOrNoVocabulary() {
	
const answers = ["Yes or no?","Yes or no %SlaveName%?","%Smile% Yes or no?","%Smile% Yes or no %SlaveName%?","It was a yes or no question","It was a yes or no question %SlaveName%","%Smile% It was a yes or no question","%Smile% It was a yes or no question %SlaveName%","All I was looking for was a yes or a no","All I was looking for was a yes or a no %SlaveName%","%Smile% All I was looking for was a yes or a no","%Smile% All I was looking for was a yes or a no %SlaveName%","Yes or No %DomHonorific% %DomName% will suffice","Yes or No %DomHonorific% %DomName% will suffice %SlaveName%","%Smile% Yes or No %DomHonorific% %DomName% will suffice","%Smile% Yes or No %DomHonorific% %DomName% will suffice %SlaveName%"];

    return answers[randomInteger(0, answers.length - 1)];
}