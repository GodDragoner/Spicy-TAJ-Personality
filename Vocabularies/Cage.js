function cageVocabulary() {
 switch(getVar(VARIABLE_CHASTITY_CAGE_TYPE)) {

 case 0:
 if(getVar(VARIABLE_CHASTITY_MATERIAL) == 0) {
	 // metal

	response = random("full belt","full metal belt","cage","metal cage","sweet little cage","delicious metal prison","adorable metal fort","delightful full belt");
 } else {
    response = random("full belt","full plastic belt","cage","plastic cage","sweet little cage","delicious plastic prison","adorable plastic fort","delightful full belt","perfect plastic cage","evil cock prison","teeny tiny dick prison");
 }

 break;
 case 1:
 if(getVar(VARIABLE_CHASTITY_MATERIAL) == 0) {
	 // metal
		response = random("balltrapping belt","metal belt","cage","metal cage","sweet little cage","delicious metal prison","adorable metal fort","delightful belt");
 } else {
	 //plastic
    response = random("balltrapping belt","plastic belt","cage","sweet little cage","delicious plastic prison","adorable plastic fort","delightful belt","lust detention cage","plastic cage","nasty tiny cage","perfect plastic cage","evil cock prison","teeny tiny dick prison");


 }

 break;

 }

 if (getVar("chastityCagePierced")) {
	 response = random("pierced cage","pierced cock prison","pierced cock detention fascility","tiny cage","cock cage");
 }
if (getVar("chastitySpikes")) {
	 response = random("spiky cock prison","spike encased prison","spiky full belt","lovely little spiky prison","happy little cage","spiked cage","spiked cock cage");
}
return response ;
}
