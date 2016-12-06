/*
  Each exercise can only be run inside of it's designated block.
  If the whole file is ran, there will be lots of conflicting functions
  and var names.

  Using JSbin to run my code.
*/

// 6) find the min and max values from a pool of data

var data = "-68096 -40807 30906 -14072 49571 63939 47020 47671 74581 -38972 -13127 -68221 -65501 -25887 42376 -48123 72736 -18862 -18372 -4038 13800 79635 -64905 -71096 -30809 57169 -79315 -14441 -53725 -34169 -51421 -41821 5023 59484 24107 -25405 43424 -8873 -57734 38006 32155 9139 49785 46654 63251 12161 78530 55988 73299 -19842 -28050 7099 -20206 -12955 16003 28985 -35785 16688 -65456 -9511 62519 -36877 28668 -12458 -57392 -27225 42137 66031 43902 64403 24037 -3943 -6458 -6178 -37289 -23206 -74016 -38758 -47218 79283 21400 4731 6383 -78806 71776 -57613 30178 -44009 39074 44722 26479 21593 -72155 -24852 -70864 -49548 27922 51273 -63517 -8176 35676 40520 67881 -50781 -45657 -49407 6012 -39673 -8166 38794 -40389 -66766 -36474 45993 -65572 -44698 68380 44606 -8708 27454 9328 -62228 -30952 17172 -7081 -21816 47624 -59159 -50543 64107 12665 65133 24627 546 -65648 58969 31139 20364 -60703 -57026 -20842 -21093 -43793 22683 -55099 -29365 57984 -66719 -64759 -30724 40735 24568 -12953 -70216 -38259 59965 -12033 -70635 -79193 17424 73471 13472 2557 18099 -65982 16909 -2931 45157 -42727 16365 68130 16431 75271 -55663 -40886 -59827 -5028 -62902 -46547 10212 -13626 74187 -45219 53421 -76029 -3479 33387 -8062 5886 34193 -70638 -642 -32335 11919 -62543 -18317 -51171 14525 -53160 -13899 -49109 -65029 -77468 -53837 -40692 -38354 -33665 34279 -21257 -212 -35509 45117 -6025 -729 18538 -2054 75792 -28075 69884 1678 -73881 79246 -78964 -26216 11165 -61507 35466 39993 33018 62306 -53905 63908 77277 -51373 -69929 -43415 -9728 -23594 70863 49015 56193 -44645 14132 -29831 34625 -47330 48114 30418 4595 37998 -47904 10713 37244 -46868 64496 -31590 -28376 19963 -71596 -75358 2270 -45502 68550 -453 -16875 78621 36131 53396 -24973 26995 22411 -48780 62349 -43457 1388 16975 -10787 -30497 -32607 73807 -72498 -512 4520 44746 32620 -10983 -66844 -75756 -71020 -58440 -71114 11250 -23943 77435 -69203 39182 76056 46928 12578 -28916"

function findMinMax (input) {
  var strSplit = (input.split(" "));
  var numList = [];
  for (var i=0; i < strSplit.length; i++) {
    numList.push(parseInt(strSplit[i]));
  }
  console.log(Math.max.apply(Math, numList));
  console.log(Math.min.apply(Math, numList));
}

// 5) return the min value out of three numbers

function findMin (numOne, numTwo, numThree) {
  return Math.min(numOne, numTwo, numThree)
}


// 4) return the min value out of two numbers

function findMin (numOne, numTwo) {
   return num < numTwo ? num: numTwo
}

/*
attempt to make this work on the code-abbey website...Does not. Something
about my misunderstanding of how their input() statement works, and I can't find
any clearification on it.
*/

// function findMin (data, data2) {
//     if (data2 === undefined){
//         return data
//     } else {
//         return data < data2 ? data: data2
//     }
// }
// output(findMin(input()))

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
