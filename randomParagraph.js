//random paragraph

var isConsole = false;
var stringNum="0123456789";
var alphabet="acdefghijklmnopqrstuvwxyz"
var consonants="bcdfghjklmnpqrstvwxz";
var vowels="aeiouy";

var word = "";
var sentence = "";
var paragraph = "";

var consonantsDigraph=["bl","br","ch","ck","cl","cr","dr","fl","fr","gh","gl","gr","ng","ph","pl","pr","qu","sc","sh","sk","sl","sm","sn","sp","st","sw","th","tr","tw","wh","wr"];//blood-bl, list-st, whith-wh....
var consonantsTrigraphs=["nth", "sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];//trigraphs are nth, sch, scr, shr, spl, spr, squ, str, thr
var vowelDigraph=["oo", "ae", "ee"];//oo, ae, ee....;

var contractions=["\'d","\'s"];//she'd, you've, he'll, it's, I'd, wouldn't (n't)-- length 1-7

var randomVowelsDigraphs=[];//oo, ae, ee....
var randomConsonantsDigraphs=[];//blood-bl, list-st, whith-wh....
var randomConsonantsTrigraphs=[];//trigraphs are nth, sch, scr, shr, spl,
var isRanContrtMode=true;
var randomContractions=[];//she'd, you've, he'll, it's, I'd, wouldn't (n't)-- length 1-7

//tetragraphs
//pentagraphs

var punctuation=".?!";
var syntax=",;:/|";
var syntaxBrackets="()[]{}<>\"";

var randomNames=[];
var randomFunctionWords=[];//the, from, to, be.....

//randomWord-----------------------------------------_
function setup() {
	//randomVowelsDigraphs----------_
	var rVowD;
	var rVowD_1;
	for(rVowD = 0; rVowD < vowels.length; rVowD++) {
		for(rVowD_1 = 0; rVowD_1 < vowels.length; rVowD_1++) {
			randomVowelsDigraphs[rVowD] = vowels.charAt(rVowD) + vowels.charAt(rVowD_1);
		}
	}
	
	//randomConsonantsDigraphs------_
	var ranConDigrNum = 30;
	var rConD;
	for(rConD = 0; rConD < ranConDigrNum; rConD++) {
		var myRandomIndex_0 = Math.floor(Math.random() * consonants.length);
		var myRandomIndex_1 = Math.floor(Math.random() * consonants.length);
		
		while(myRandomIndex_0 == myRandomIndex_1){
			myRandomIndex_1 = Math.floor(Math.random() * consonants.length);
		}
		randomConsonantsDigraphs[rConD] = consonants.charAt(myRandomIndex_0)+consonants.charAt(myRandomIndex_1);
	}
	
	//randomConsonantsTrigraphs------_
	var ranConTrigNum = 10;
	var maxTestArrConTrig = 3;
	var indexArrayConTrig = [];	
	var rConT;
	for(rConT = 0; rConT < ranConTrigNum; rConT++) {
		var myRandomIndex_0 = Math.floor(Math.random() * consonants.length);
		var myRandomIndex_1 = Math.floor(Math.random() * consonants.length);
		var myRandomIndex_2 = Math.floor(Math.random() * consonants.length);
		indexArrayConTrig[0] = myRandomIndex_0;
		indexArrayConTrig[1] = myRandomIndex_1;
		indexArrayConTrig[2] = myRandomIndex_2;				
		var mTA;
		var mTA_1;
		for(mTA = 0; mTA < maxTestArrConTrig; mTA++) {
			for(mTA_1 = 0; mTA_1 < maxTestArrConTrig; mTA_1++) {
				if(mTA != mTA_1){
					while(indexArrayConTrig[mTA] == indexArrayConTrig[mTA_1]){
						indexArrayConTrig[mTA_1] = Math.floor(Math.random() * consonants.length);
					}
				}
			}
		}
		randomConsonantsTrigraphs[rConT] = consonants.charAt(indexArrayConTrig[0]) + consonants.charAt(indexArrayConTrig[1]) + consonants.charAt(indexArrayConTrig[2]);
	}


	//randomContractions-------------_
	var ranContrDigrNum = 20;
	var rContrD;
	for(rContrD = 0; rContrD < ranContrDigrNum; rContrD++) {
		var doubleContrMode = 5;
		if(rContrD < doubleContrMode){
			var myRandomIndex_0 = Math.floor(Math.random() * alphabet.length);
			var myRandomIndex_1 = Math.floor(Math.random() * alphabet.length);
			randomContractions[rContrD] = "\'";
			randomContractions[rContrD] += alphabet.charAt(myRandomIndex_0);
			randomContractions[rContrD] += alphabet.charAt(myRandomIndex_1);
		}else{		
			var myRandomIndex = Math.floor(Math.random() * alphabet.length);
			randomContractions[rContrD] = "\'";
			randomContractions[rContrD] += alphabet.charAt(myRandomIndex);
		}
	}
	
	myNames(15);
	myFunctionWords(20);
}


//titleCase-----------------------------_
function titleCase(string) { return string.charAt(0).toUpperCase() + string.slice(1); }

//repStrSub-----------------------------_
function repStrSub(string, index) {
	if(string != ""){
		var myString = string;
		var setIndex = index;
		var setStepIndex = 0;
		setStepIndex = setIndex + 1;
		var getStepString = getString = "";
		
		getString = myString.charAt(setIndex);
		getStepString = myString.charAt(setStepIndex);
		
		//sub
		myString = myString.replace(getString+getStepString,getString); 
		return myString;
	}
}

//repStrAdd-----------------------------_
function repStrAdd(string, stringAdd, index) {
	if(string != "" && stringAdd != ""){
		var myString = string;
		var myStringAdd = stringAdd;
		var setIndex = index;
		var setStepIndex = 0;
		setStepIndex = setIndex + 1;
		if(isConsole == true){console.log("							myString- "+myString + " myStringAdd- "+myStringAdd + " setIndex- "+setIndex);}
		var getStepString = getString = "";
		
		getString = myString.charAt(setIndex);
		getStepString = myString.charAt(setStepIndex);
		
		//add
		myString = myString.replace(getString+getStepString,getString+myStringAdd+getStepString); 	
		if(isConsole == true){console.log("add- "+myString);}
		return myString;
	}
}

//repStrSlice-----------------------------_
function repStrSlice(string, stringAdd, indexFrom, indexTo) {
	/*
	if(stringAdd == undefined){
		if(isConsole == true){console.log(" 																WWWWWWWWW-What ");}
	}
	*/
	if(string != "" && stringAdd != ""){
		var myString = string;
		var myStringAdd = "";
		myStringAdd = stringAdd;
		var setIndex_0 = indexFrom;
		var setIndex_1 = indexTo;
		var setStepIndex = 0;
		if(isConsole == true){console.log("							myString- "+myString + " myStringAdd- "+myStringAdd + " setIndex- "+setIndex_0 +" "+setIndex_1);}
		var getStepString = getString = "";
		
		getString = myString.slice(setIndex_0, setIndex_1);
		//getStepString = myString.charAt(setStepIndex);
		
		//add
		myString = myString.replace(getString,myStringAdd); 	
		if(isConsole == true){console.log("add- "+myString);}
		return myString;
	}
}


//myWord-----------------------------------------_
function myWord(numOfLetters, mode) {
	word = "";
	var wordMaxAddVow = numOfLetters - 2;
	var numOfConsonants = 0;
	var numOfVowels = 0;
	var letter = "", vowel = "";
	var setConsonants = "";
	var setVowels = "";
	var myRandom = Math.random();
	var myRandomCons = Math.random();
	var numOfRanCons = 0;
	var selRanVowNum = 1;
	var ranVowNumToSel = 5;
	
	var selRanVowNumMode = 0;
	var isSelRanVowNumMode = false;
	
	if(numOfLetters <= 0){
		numOfLetters = 1;
	}
		
	if(mode == 0){
		if(isConsole == true){console.log("numOfLetters- "+numOfLetters);}
		
		if(numOfLetters > 5){
			numOfVowels = Math.floor(Math.random() * numOfLetters / 2);
			
			if(numOfVowels == 0){
			}
			if(numOfVowels >= 3){
				selRanVowNum = 1;
			}
			if(numOfLetters >= wordMaxAddVow){
				numOfVowels = numOfLetters / 2;
			}
		}else{
			if(isConsole == true){console.log("numOfLetters <= 5- "+selRanVowNum);}
			selRanVowNum = Math.floor(Math.random() * 2);
			if(selRanVowNum == 0 && numOfLetters > 2){
				numOfVowels = 2;
			}
			if(selRanVowNum >= 1){
				numOfVowels = 1;
			}
			if(numOfLetters <= 3){
				selRanVowNum = 1;
				numOfVowels = 1;
			}
			if(numOfLetters == 4 || numOfLetters == 5){
			
				/*
selRanVowNumMode = Math.floor(Math.random() * ranVowNumToSel);//0 - 4 the 5 will not come up
				if(selRanVowNumMode == 0){
					isSelRanVowNumMode = true;
					numOfVowels = 2;
				}else{
					numOfVowels = 2;
				}
*/
				
				selRanVowNum = 1;
				numOfVowels = 1;
			}
		}
		numOfVowels = Math.floor(numOfVowels);
		numOfLetters = Math.floor(numOfLetters);
		
		numOfConsonants = numOfLetters - numOfVowels;
		
		//if(isConsole == true){console.log("selRanVowNum- " +selRanVowNum);}
		if(isConsole == true){console.log("numOfVowels- " +numOfVowels);}
		if(isConsole == true){console.log("numOfConsonants- "+numOfConsonants);}
		
		
		
		
		if(selRanVowNum == 2 && isSelRanVowNumMode == true){
			selRanVowDigrIndex = Math.floor(Math.random() * randomVowelsDigraphs.length);
			
			console.log("selRanVowDigrIndex- "+selRanVowDigrIndex);
			vowel = randomVowelsDigraphs[selRanVowDigrIndex];
			setVowels = vowel;
			var c;
			for(c = 0; c < numOfConsonants; c++) {
				var myRandomIndex = Math.floor(Math.random() * consonants.length);
				letter = consonants.charAt(myRandomIndex);
				word = setConsonants + letter;
				if(c == Math.floor(numOfConsonants/2)){
					word = setConsonants + setVowels
				}
				//if(isConsole == true){console.log("setConsonants- "+setConsonants);}
			}
			
			if(word.charAt(0) == word.charAt(1)){
				var repStrAddSetIndexEqual = new repStrAdd();
				word = repStrAddSetIndexEqual(word,word.charAt(2),1);
			}
		}
		
		if(selRanVowNum >= 1 && isSelRanVowNumMode == false){
			//if(isConsole == true){console.log("selRanVowNum- "+selRanVowNum);}
			if(numOfVowels == 1 && numOfConsonants >= 5){
				
				var isConWordMax = false;
				if(numOfConsonants >= Math.floor(numOfLetters / 2)){
					numOfVowels++;
					numOfConsonants--;
					var v;
					for(v = 0; v < numOfVowels; v++) {
						//vowel = vowels.slice(Math.floor(Math.random() * vowels.length),Math.floor(myRandom * vowels.length)+1);
						var myRandomIndex = Math.floor(Math.random() * vowels.length);
						vowel = vowels.charAt(myRandomIndex);
						setVowels = setVowels + vowel;
					}
					isConWordMax = true;
				}else{
					var myRandomIndex = Math.floor(Math.random() * vowels.length);
					vowel = vowels.charAt(myRandomIndex);
					setVowels = vowel;
				}
				
				var c;
				for(c = 0; c < numOfConsonants; c++) {
					var myRandomIndex = Math.floor(Math.random() * consonants.length);
					letter = consonants.charAt(myRandomIndex);
					setConsonants = setConsonants + letter;
				}
				
				var setIndex = Math.floor(numOfConsonants/2);
				
				if(isConWordMax == true){
					var setIndex_1 = Math.floor(setIndex/2);
					var setIndex_2 = Math.floor(setIndex_1/2);
					var repStrAddSetIndex_1 = new repStrAdd();
					var repStrAddSetIndex_2 = new repStrAdd();
					word = repStrAddSetIndex_1(setConsonants,setVowels,setIndex_1);
					word = repStrAddSetIndex_2(setConsonants,setVowels,setIndex_2);					
				}				
				if(isConWordMax == false){
					var repStrAddSetIndex = new repStrAdd();
					word = repStrAddSetIndex(setConsonants,setVowels,setIndex);
				}
				
				
				if(isRanContrtMode == true){
					//add contractions she'd, you've, he'll
					var contractionsMode = Math.floor(Math.random() * 6);
					if(contractionsMode == 1){
						var myRanContrIndex = Math.floor(Math.random() * consonants.length);
						if(randomContractions[myRanContrIndex].length == 1){
							word += randomContractions[myRanContrIndex];
						}else{
							word += randomContractions[myRanContrIndex];
						}
					}
				}
				
				if(isConsole == true){console.log("if(numOfVowels == 1 && numOfConsonants >= 5)");}
				if(isConsole == true){console.log("setConsonants- " +setConsonants + " setVowels- " +setVowels);}
			}else{
				var v;
				for(v = 0; v < numOfVowels; v++) {
					//vowel = vowels.slice(Math.floor(Math.random() * vowels.length),Math.floor(myRandom * vowels.length)+1);
					var myRandomIndex = Math.floor(Math.random() * vowels.length);
					vowel = vowels.charAt(myRandomIndex);
					setVowels = setVowels + vowel;
				}
				var c;
				for(c = 0; c < numOfConsonants; c++) {
					var myRandomIndex = Math.floor(Math.random() * consonants.length);
					letter = consonants.charAt(myRandomIndex);
					setConsonants = setConsonants + letter;
				}
				
				var mixModes = 0;
				var randomMixModesSel = 0;
				randomMixModesSel = Math.floor(Math.random() * 4);
				
				var m;//mix cons and vow
				if(randomMixModesSel == 0){
					for(m = 0; m < numOfLetters; m++) {
						if(m < setVowels.length){
							word = word + setVowels.charAt(m);
						}
						if(m < setConsonants.length){
							word = word + setConsonants.charAt(m);
						}
					}		
				}
				if(randomMixModesSel == 1){
					for(m = 0; m < numOfLetters; m++) {
						if(m < setConsonants.length){
							word = word + setConsonants.charAt(m);
						}
						if(m < setVowels.length){
							word = word + setVowels.charAt(m);
						}
					}
				}
				if(randomMixModesSel == 2){
					for(m = numOfLetters; m >= 0; m--) {
						if(m < setVowels.length){
							word = word + setVowels.charAt(m);
						}
						if(m < setConsonants.length){
							word = word + setConsonants.charAt(m);
						}
					}
				}
				if(randomMixModesSel == 3){
					for(m = numOfLetters; m >= 0; m--) {
						if(m < setConsonants.length){
							word = word + setConsonants.charAt(m);
						}
						if(m < setVowels.length){
							word = word + setVowels.charAt(m);
						}
					}
				}
				if(isConsole == true){console.log("else");}
				if(isConsole == true){console.log("setConsonants- " +setConsonants + " setVowels- " +setVowels);}
				
				var consDigrTrigMode = Math.floor(Math.random() * 2);
				if(consDigrTrigMode == 0){
					var sliceIndex = randomMixModesSel;
					
					// trigraphs are nth, sch, scr, shr, spl....			
					var wordSliceTrig = word;
					var myRanTrigIndex = Math.floor(Math.random() * randomConsonantsTrigraphs.length);
					var trigraph = "";
					trigraph = randomConsonantsTrigraphs[myRanTrigIndex];
					
					if(word.length > 9){
					
						if(trigraph == undefined){
							trigraph = "_CAT_";
						}
						
						if(sliceIndex == 0 || sliceIndex == 1){
							//var repStrAddSliceTrig = new repStrSlice();
							word = repStrSlice(wordSliceTrig,trigraph,(word.length-2),word.length);
							if(isConsole == true){console.log("-----------------------------------myRanTrigIndex-"+myRanTrigIndex);}
						}
						if(sliceIndex == 2 || sliceIndex == 3){
							//var repStrAddSliceTrig = new repStrSlice();
							word = repStrSlice(wordSliceTrig,trigraph,0,2);
							if(isConsole == true){console.log("-------------------	----------------myRanTrigIndex-"+myRanTrigIndex);}
						}
					}
					
					// add contractions blood-bl, list-st, whith-wh....
					var wordSliceDigr = word;
					var myRanDigrIndex = Math.floor(Math.random() * randomConsonantsDigraphs.length);
					var digraph = "";
					digraph = randomConsonantsDigraphs[myRanDigrIndex];
					
					if(word.length > 5 && word.length < 8){
					
						if(digraph == undefined){
							digraph = "_DOG_";	
						}
						
						if(sliceIndex == 0 || sliceIndex == 1){
							if(isConsole == true){console.log("-----------------------------------myRanDigrIndex-"+myRanDigrIndex);}
							//var repStrAddSliceDigr = new repStrSlice();
							word = repStrSlice(wordSliceDigr,digraph,(word.length-1),word.length);

						}
						if(sliceIndex == 2 || sliceIndex == 3){
							if(isConsole == true){console.log("-------------------	----------------myRanDigrIndex-"+myRanDigrIndex);}
							//var repStrAddSliceDigr = new repStrSlice();
							word = repStrSlice(wordSliceDigr,digraph,0,1);

						}
					}
					
				}
			}
			if(isRanContrtMode == true){
				//add contractions she'd, you've, he'll
				var contractionsMode = Math.floor(Math.random() * 4);
				if(contractionsMode == 0){
					var myRanContrIndex = Math.floor(Math.random() * consonants.length);
					if(randomContractions[myRanContrIndex].length == 1){
						word += randomContractions[myRanContrIndex];
					}else{
						word += randomContractions[myRanContrIndex];
					}
				}
			}			
		}

		if(word.charAt(0) == word.charAt(1) && word.length > 3){
			word = repStrAdd(word,word.charAt(2),1);
		}

		if(isConsole == true){console.log("word- "+word);}
		return word;// is mixed
		//return word = setVowels + setConsonants;// not mixed
	}
}

//myNames-----------------------------------------------_
function myNames(numOfNames) {//text.toUpperCase();

	var numOfNameCountSize = 3;
	var countSize = 0;
	
	var ranNameWord = "";
	
	isRanContrtMode = false;
	var n;
	for(n = 0; n < numOfNames; n++) {randomNames[n] = "";}
	for(n = 0; n < numOfNames; n++) {
		var ranTest = Math.floor(Math.random() * 10);
		if(ranTest < 3){
			ranTest = 5;
		}
		randomNames[n] += myWord(ranTest,0);
		randomNames[n] = titleCase(randomNames[n]);
	}
	isRanContrtMode = true;
}

//myFunctionWords---------------------------------------_
function myFunctionWords(numOfFunctWords) {//the, from, to, be.....
	var numOfFunctCountSize = 2;
	var countSize = 0;
	
	var ranFunWord = "";
	isRanContrtMode = false;
	
	var f;
	for(f = 0; f < numOfFunctWords; f++) {randomFunctionWords[f] = "";}
	for(f = 0; f < numOfFunctWords; f++) {
		
		countSize++;
		if(countSize == Math.floor(numOfFunctWords/4)){
			numOfFunctCountSize++;
			countSize = 0;
		}
		
		ranFunWord = myWord(numOfFunctCountSize,0);
		randomFunctionWords[f] += ranFunWord;
	}
	isRanContrtMode = true;
}

//mySentence--------------------------------------------_
function mySentence(numOfWords, numOfLetters, mode) {//text.toUpperCase();
	if(isConsole == true){console.log("numOfWords- "+numOfWords + " " + "numOfLetters- "+numOfLetters);}
	var nextWord="";
	var lastWord="";
	sentence="";
	if(numOfWords <= 0){
		numOfWords = 1;
	}
	if(mode == 0){
		var w;
		for(w = 0; w < numOfWords; w++) {
			nextWord = myWord(Math.floor(Math.random() * numOfLetters),0);
			if(w == 0){
				sentence += nextWord;
				sentence += " ";
				sentence = titleCase(sentence);
				
			}
			if(w > 0 && w < numOfWords-1){
				if(nextWord.length <= 1 && lastWord.length <= 1){
					var myRanFunIndex = Math.floor(Math.random() * randomFunctionWords.length);
					nextWord = randomFunctionWords[myRanFunIndex];
				}

				sentence += nextWord;
				sentence += " ";
			}
			if(w == numOfWords-1){
				if(nextWord.length <= 1){
					var myRanFunIndex = Math.floor(Math.random() * randomFunctionWords.length);
					nextWord = randomFunctionWords[myRanFunIndex];			
				}
				sentence += nextWord;
				var randomPunc = Math.floor(Math.random() * punctuation.length);
				sentence += punctuation.charAt(randomPunc);
			}
			lastWord = nextWord;
		}
		//console.log("sentence- "+sentence);
		return sentence;
	}
}


//myParagraph------------------------------------------_
function myParagraph(numOfSentence, numOfWords, numOfLetters, mode) {
	paragraph = "";
	var nextSentence = "";
	
	if(numOfSentence == 0){
		numOfSentence = 1;
	}
	if(numOfWords <= 3){
		numOfWords = 7;
	}
	if(numOfLetters <= 3){
		numOfLetters = 5;
	}
	
	var p;
	for(p = 0; p < numOfSentence; p++) {
		nextSentence = mySentence(Math.floor(Math.random() * numOfWords), Math.floor(Math.random() * numOfLetters), 0);
		if(p == 0){
			paragraph += nextSentence;
			paragraph += " ";
		}
		if(p > 0 && p < numOfSentence-1){
			paragraph += nextSentence;
			paragraph += " ";
		}
		if(p == numOfSentence-1){
			paragraph += nextSentence;
			paragraph += " ";
		}
	}
	console.log("paragraph- "+paragraph);
	return paragraph;
}

//myAlertFunction------------------------_
var myStringTesting = "It\'s alright";
function myAlertFunction(isAlert){
	if(isAlert == true){
		alert("It\'s alright");
	}
	//if(isConsole == true){console.log(myStringTesting);}
	return myStringTesting;
}