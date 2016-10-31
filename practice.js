//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
    name: "Renata",
    age: 45
}
alert(me.name);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
	band: "Zbogom Brus Lee",
	food: "veggie",
	person: "Anchy",
	book: "Winnetou",
	movie: "pixels",
	holiday: "Koh Samui"
}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Vulcan";
favoriteThings.brand = "Aston Martin";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

 var backPack = {};
backPack['item'] = 'firstPocket';
backPack[backPack.item]= 'chapstick';
backPack.color= 'black';

//After you do the above, alert your entire backPack object.

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

 var alsoMe = {
	name: "Renata",
	age: 45,
	gender: "female",
	married: true,
	eyeColor: "brown",
	hairColor: "blonde"
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var key in alsoMe){
alert(alsoMe[key]);
}




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

 var album = {
	"Ratatatariteti": "5:15",
	"Ukleti salas": "3:19",
	"Zlobro": "4:50",
	"Hogli-Vogli Rok": "1:52",
	"Kokainka": "3:11"
}

//Now, loop through your album object alerting every song title individually.

 for (var pesme in album){
	alert(pesme);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

 var states = {
	Hawaii: 1431603,
	Florida: 20071272,
	Alaska: 738432,
	California: 39144818,
	Vermont: 626042
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

 for (var drzava in states){
	if(states[drzava]>30000000)
	alert(drzava);




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */
for (var x in user1){
	if(!user1[x])
	delete user1[x];
}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user1.name = "Renata";
user1.email = "renatasrbljanin@gmail.com";
user1.username = "renata";




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

 user2.name="Tyler S. McGinnis";
user2.email="tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

user2.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function(){
	alert('hello');
};
methodCollection.logHello = function(){
	console.log('hell

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();


//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

function makePerson(nameP, birthdayP, ssnP){
	var person = {
		name: nameP,
		bday: birthdayP,
		ssn: ssnP
	};
//	person.name = nameP;
//	person.bday = birthdayP;
//	person.ssn = ssnP;
		return person;
}
 
var firstPerson = makePerson("Renata","9/9", 99922228888);



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

 function makeCard(cardNumberP, expirationDateP, securityCodeP){
	var card = {};
	card.num = cardNumberP;
	card.exp = expirationDateP;
	card.code = securityCodeP;
	return card;
}
var firstCard = makeCard(567, "7/17", "huui222");



//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

function bindCard(person, card){
	var entity = {};
	entity.name=person.name;
	entity.bday=person.bday;
	entity.ssn=person.ssn;
	entity.num=card.num;
	entity.exp=card.exp;
	entity.code=card.code;
	return entity;
}

var entity1 = bindCard(firstPerson, firstCard);
