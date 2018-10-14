//TODO: Duplicate with Lol REMOVE

function GNMLolVocabulary() {

		const answers = [" laugh "," giggle "," lol "," haha ","hehe "," xD ","lmao ","lmfao "," LOL"," *grin*","*smile* ","*wicked grin*  ","*smiles innocently* "," *grins at you* ","*looks at you innocently*  ","*looks at you and grins*  ","*evil grin* ","*mischievous grin* "," *innocent grin*", " *naughty grin*", " *coy smile*" ];
		return answers[randomInteger(0, answers.length - 1)];
		
if(getVar("BlockSounds")==true){

	}else
	{playAudio("GNMSounds/MoanLol/Laugh/*.mp3");
	}

}