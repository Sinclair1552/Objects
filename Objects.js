//Array of friends pg. 69
var kallie = { name: "Kallie", age: 11, luckyNumbers: [2, 4, 8, 16] };
var karvie = { name: "Karvie", age: 22, luckyNumbers: [3, 9, 4, 0] };
var tricia = { name: "Tricia", age: 78, luckyNumbers: [5, 6, 7] };
var friends = [kallie, karvie, tricia];
console.log(friends[2]);
console.log(friends[1].name);

//Keeping track of owed money
var owedMoney = {};
owedMoney["Timmy"] = 5;
owedMoney["Patrick"] = 7;
console.log(owedMoney["Timmy"]);
//if Patrick borrowed 4 more dollars
console.log(owedMoney["Patrick"] += 4);

//Challenges
//First Challenge: Scorekeeper
/*Imagine you’re playing a game with some friends and you
want to keep track of the score. Create an object called
scores. The keys will be the names of your friends, and the
values will be the scores (which will all start at 0). As the
players earn points, you must increase their scores. How
would you increase a player’s score in the scores object?*/

var scores = {
    "Thomas": 4,
    "Alberta": 0,
    "Amani": 6
};
console.log(scores.Alberta += 100);
console.log(scores.Thomas += 80);

//Second Challenge: 
/*By using the code below, how would you get the number 123 out of this object
using one line of JavaScript? Try it out in the console to see
if you’re right.*/

var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};
console.log(myCrazyObject["some array"][2].number);