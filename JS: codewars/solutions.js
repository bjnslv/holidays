/1.Find The Parity Outlier/

function findOutlier(integers) {
var evens = integers.filter(function (x) {
  return x % 2 === 0;
});

var odds = integers.filter(function (x) {
  return x % 2 !== 0;
});

return odds.length > 1 ?  evens[0] :  odds[0];
}
findOutlier([0, 1, 2]);
findOutlier([2,6,8,10,3]);


/2.Exes and Ohs/

function XO(str) {
  var result = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x' || str[i] === 'X') {
      result += 1;
      } else if (str[i] === 'o' || str[i] === 'O') {
      result -= 1;
      }
    }
    return result === 0;
}
XO('xo');
XO("xxOo");

/3.Shortest Word/

function findShort(s){

var arr = s.split(' ');

var shortest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length < shortest.length) {
    shortest = arr[i];
    }
  } 
  return shortest.length;
}


/4.Vowel Count/

function getCount(str) {
  var vowelsCount = 0;
  var regex = /[aeiouAEIOU]/;
  
  for (var i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
    vowelsCount++;
    }
  }
 
  return vowelsCount;
}
getCount("abracadabra");

/5.List Filtering/

function filter_list(l) {
  var result = [];
  
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      result.push(l[i]);
      }
    }
    return result;
}
filter_list([1,2,'a','b']);
filter_list([1,2,'aasf','1','123',123]);

/6.Isograms/

function isIsogram(str){
 
 var upperCase = str.toUpperCase();
 
 for(let i = 0; i < upperCase.length; i++) {
   if (upperCase.split(upperCase[i]).length-1 > 1) {
    return false;
   }  
  }
  return true;
}
isIsogram("Dermatoglyphics");
isIsogram("moOse");

/7.Jaden Casing Strings/

