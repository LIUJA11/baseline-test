'use strict';

function collectSameElements(collectionA, objectB) {
 var collectionC = new Array();
	var cLength = 0;
	for(let i =  0;i<collectionA.length;i++){
		for(let j = 0;j<objectB.value.length;j++){
			if(collectionA[i].key == objectB.value[j]){
				collectionC[cLength]= collectionA[i].key;
				cLength++;
			}
		}
	}
	return collectionC;
}
