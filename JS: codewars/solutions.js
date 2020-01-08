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

/2.Exes and Ohs/
function XO(str) {
  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x' || str[i] === 'X') {
      count += 1;
      } else if (str[i] === 'o' || str[i] === 'O') {
      count -= 1;
      }
    }
    return count === 0;
}

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

/6.Isograms/
function isIsogram(str){
 
 var result = str.toUpperCase();
 
 for(let i = 0; i < result.length; i++) {
   if (result.split(result[i]).length-1 > 1) {
    return false;
   }  
  }
  return true;
}

/7.Jaden Casing Strings/
String.prototype.toJadenCase = function () {
  return this.split(' ').map( function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
};
