// // Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// // CHALLENGE 1

// function sumFunc(arr) {
//   // YOUR CODE HERE
//     let res = 0;
//     arr.map((a) => res += a);
//     return res;
// }

// // Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

// function returnIterator(arr) {
//   // YOUR CODE HERE
//   let i = 0;
//   function elementIterator(){
//       const res = arr[i];
//       i++;
//       return res;
//   }
//   return elementIterator;

// }

// // Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  // YOUR CODE HERE
    let i = 0;
    let myIterable = {
        next: function(){
            return arr[i++];
        }
    };
    
    return myIterable;
}

// // Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);

// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
    let res = 0;
    let index = 0;
    let iterator = nextIterator(arr);
    while(index < arr.length){
        res += iterator.next();
        index++;
    }
    return res;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

// function setIterator(set) {
//   // YOUR CODE HERE
//     const array = Array.from(set);
//     let index = 0;
//     let iterator = {
//         next: function(){
//             return array[index++];
//         }
//     }
//     return iterator;    
// }

function setIterator(set) {
    // YOUR CODE HERE
    let setIterator = set.values();
    const iterator = {
      next: function () {
        var next = setIterator.next();
        return next.value;
      }
    }
    return iterator;
  }

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE

}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE

}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){

}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {


}

console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {

}

async function f(noun) {

}

f("dog");

