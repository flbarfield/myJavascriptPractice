/*
  Each exercise can only be run inside of it's designated block.
  If the whole file is ran, there will be lots of conflicting functions
  and var names.

  Using JSbin to run my code.
*/

/*
  3) Given pairs of values, return the sum of each pair.
    ex: pairs {
      12,
      56 54,
      594 321,
      402 495
    }
*/

var pairsOne = {
  key1: 13,
  key2: 746346,
  key3: 772864,
  key4: 975123,
  key5: 438208,
  key6: 93838,
  key7: 374531,
  key8: 653944,
  key9: 216367,
  key10: 980930,
  key11: 36465,
  key12: 325327,
  key13: 856112,
  key14: 984037,
}

var pairsTwo = {
  key1: 0,
  key2: 84295,
  key3: 944972,
  key4: 684162,
  key5: 312676,
  key6: 737996,
  key7: 49907,
  key8: 84307,
  key9: 55928,
  key10: 350412,
  key11: 322606,
  key12: 218653,
  key13: 859941,
  key14: 182848,
}

function sumPairs (dataOne, dataTwo){
  oneList = []
  twoList = []
  sumList = [];
  for (var key in dataOne) {
    oneList.push(dataOne[key]);
  }
  for (var key in dataTwo) {
    twoList.push(dataTwo[key]);
  }
  for (var i = 0; i < oneList.length; i++) {
    sumList.push(oneList[i] + twoList[i]);
  }
  return sumList;
}

// 2) add all nums within given array.
numList = "35 1108 496 566 443 852 68 1283 776 749 452 389 713 22 334 1291 807 96 884 742 941 1263 47 1038 1244 16 938 605 237 1159 954 589 966 149 1145 109"

function addNums (arrayList) {
  var newList = numList.split(" ");
  var parsedArray = [];
  var val = 0;

  for (i = 0; i < newList.length; i++) {
    parsedArray.push(parseInt(newList[i]));
  }
  for (j = 1; j < parsedArray.length; j++) {
    val += parsedArray[j]
  }
  return val;
}



// 1) sum of two variables
function addNums (numOne, numTwo) {
  return numOne + numTwo;
}
