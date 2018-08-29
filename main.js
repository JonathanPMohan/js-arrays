const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimals = 'cow,bear,dog,cat';
const favoriteAnimalArray = favoriteAnimals.split(','); //['c', 'o', 'w']
console.log('favoriteAnimalArray', favoriteAnimalArray);


const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('cow');
console.log('newNum', newNum);

// mini challenge

const palChecker = (word) => {
    

   const wordArray = word.split('').join('');
   const reverseArray = word.split('').reverse('').join('');
   
   if(wordArray === reverseArray){
       console.log(`${word} IS a palindrome`);
   } else {
       console.log(`${word} NOT a palindrome`);
   }

// yes if it's a palindrome
// no if its not a palindrome

};

palChecker('mom');  //yes
palChecker('monkeybutt'); //no
palChecker('racecar'); //yes


let animals = ['moles', 'spiders', 'snakes', 'roaches'];

const lastItem = animals.pop(); // roaches
const firstItem = animals.shift(); // moles
animals.push('bat');
animals.unshift('baby hippo');
console.log('animals', animals); // ['baby hippo, 'spiders', 'snakes' 'bat'] 

// 1. What is your starting value? : 0 (98% of time)
// 2. What is your stopping value? : something.length (98% of time)
// 3. How are you incrementing? : +1

for(let i = 0;  i < animals.length; i++){
    // do something here
    console.log(animals[i]);

}
