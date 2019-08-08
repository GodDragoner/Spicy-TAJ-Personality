function chooseSpankingImplementVocabulary() {
   choice=randomInteger(1,3);
   if (isVar("BoughtSpankingImplement4") && getVar("BoughtSpankingImplement4")==true)
   {   choice=randomInteger(1,4); };
  if (isVar("BoughtSpankingImplement5") && getVar("BoughtSpankingImplement5")==true)
   {   choice=randomInteger(1,5); };



   switch(choice)
   {

	case 1:
		answer = getVar("toySpankingImplement1");
    break;
	case 2:
		answer = getVar("toySpankingImplement2");
    break;
	case 3:
		answer = getVar("toySpankingImplement3");
    break;
	case 4:
		answer = getVar("toySpankingImplement4");
    break;
	case 5:
		answer = getVar("toySpankingImplement5");
    break;
	
	   
   }
	
	
    return answer;
}
