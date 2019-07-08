'use strict';

function collectSameElements(collectionA, collectionB) {
  	var collectionC = new Array();
	var cLength = 0;
	for(let i =  0;i<collectionA.length;i++){
		for(let j = 0;j<collectionB.length;j++){
			if(collectionA[i] == collectionB[j]){
				collectionC[cLength]= collectionA[i];
				cLength++;
			}
		}
	}
	return collectionC;
}
