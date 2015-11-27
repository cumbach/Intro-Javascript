/* eslint no-extend-native: 0, semi: 2 */

function uniq(array) {
  var uniqItems = [];
  array.forEach(function(num) {
    if (uniqItems.indexOf(num) === -1) {
      uniqItems.push(num);
    }
  });
  return uniqItems;
}

// console.log(uniq([1,2,3,1,3,4]))
function twoSum(array) {
  var indices = [];
  for(var i = 0;i < array.length-1;i++){
    for(var j = i + 1;j < array.length; j++){
      if (array[i] + array[j] === 0){
        indices.push([i, j]);
      }
    }
  }
  return indices;
}

// console.log(twoSum([-1, 0, 2, -2, 1]));

function transpose(matrix) {
  var matrix2 = [];
  for (var i = 0; i < matrix.length; i++) {
    var newArray = [];
    matrix.forEach(function(array) {
      newArray.push(array[i]);
    });
    matrix2.push(newArray);
  }
  return matrix2;
}

// console.log(transpose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]))

// function myEach(array, func) {
  // for (var i = 0; i < array.length; i++) {
  //   console.log(func(array[i]))
//   }
// }
//
function plusOne(num) {
  return (num + 1);
}
//
//
// myEach([1,2,3],plusOne)

Array.prototype.myEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    (func(this[i]));
  }
  return this;
};
// [1,3,6,9].myEach(plusOne)

Array.prototype.myMap = function(func) {
  var array = [];
  this.myEach(function (item) {
    array.push(func(item));
  });
  // console.log(array);
};
var integers = [1, 2, 3, 4, 5];

// integers.myMap(plusOne);

function sum(num1, num2) {
  return num1 + num2;
}

Array.prototype.myInject = function(func) {
  var accum = this.shift();
  this.myEach(function (item){
    accum = func(accum, item);
  });
  console.log(accum);
};

// integers.myInject(sum);

function bubbleSort(array) {
  var sorted = true;
  while (sorted) {
    sorted = false;
    for (var i = 0; i < array.length-1; i++) {
      for (var j = i+1; j < array.length; j++) {
        if (array[i] > array[j]) {
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          sorted = true;
        }
      }
    }
  }
  return array;
}
// console.log(bubbleSort([3,6,1,7,4]));

function subString(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    for (var j = i+1; j <= string.length; j++) {
      var array = string.slice(i, j);
      result.push(array);
    }
  }
  // console.log(result);
}

var string = ("hello");

// subString(string);

function range(start, end) {
  var final = [];
  if (start >= end) {
    var result = [];
    result.push(end);
    return result;
  }
  final = range(start + 1, end);
  final.unshift(start);
  return final;
}
// console.log(range(2,10));

function exponentiation(b, n) {
  if (n === 0){
    return 1;
  }
  if (n === 1) {
    return b;
  }
  if (n%2 === 0){
    return exponentiation(b, n/2)*exponentiation(b, n/2);
  } else {
    return b * (exponentiation(b,(n - 1) / 2)*exponentiation(b,(n-1)
    / 2));
  }
  return b * exponentiation(b, n-1);
}

// console.log(exponentiation(2, 5));

function fib(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }
  var result = fib(n-1);
  result.push(result[result.length-1] + result[result.length-2]);
  return result;
  // result = fib(n-1)[-1] + fib(n-1)[-2]
  // return [fib(n-1), fib(n-1)[-1] + fib(n-1)[-2]];
}
// console.log(fib(10));

function Cat(name,owner) {
  this.name = name;
  this.owner = owner;
}

// Cat.prototype.cuteStatement = function() {
//   return this.owner + " loves " + this.name;
// };
Cat.prototype.meow2 = function () {
  return "meow2";
};


var cat1 = new Cat("cat1name", "cat1owner");
var cat2 = new Cat("cat2name", "cat2owner");
cat1.meow = function () {
  return "purr";
};
console.log(cat2.meow2());
console.log(cat1.meow());


// cat1.cuteStatement;
