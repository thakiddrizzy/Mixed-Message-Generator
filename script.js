// Global scope variables // 

message1 = "If you woke up today, "
message2 = "By the end of this month, you need to "
message3 = ""

elements1 = ["hit the gym!","get some bread!","be a real one."];
elements2 = ["level up!","move silent.","stunt on em!"]
elements3 = ["Ayyyy! Do ya thang bwa!","Ya Need 2 get rite goofy!","It's MANY MEN that wish death upon you!"]

//functions//

const randomizer = arr => {
     let randomIndex = Math.floor(Math.random() * arr.length);
     let randomArray = arr[randomIndex]
     return randomArray;
};

const generateMessage1 = message1 + randomizer(elements1);
const generateMessage2 = message2 + randomizer(elements2);
const generateMessage3 = message3 + randomizer(elements3);

console.log(generateMessage1);
console.log(generateMessage2);
console.log(generateMessage3);

// Written by Drake T.