const questions = [

/* ================= HISTORY ================= */

{
id: 1,
question: "Who founded the Mauryan Empire?",
options: ["Ashoka","Bindusara","Chandragupta Maurya","Bimbisara"],
answer: 2,
category: "History",
difficulty: "easy"
},

{
id: 2,
question: "The Battle of Plassey was fought in which year?",
options: ["1764","1757","1748","1772"],
answer: 1,
category: "History",
difficulty: "easy"
},

{
id: 3,
question: "Who was the first Governor-General of independent India?",
options: ["Lord Mountbatten","C. Rajagopalachari","Dr. Rajendra Prasad","Jawaharlal Nehru"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 4,
question: "Which Mughal emperor built the Taj Mahal?",
options: ["Akbar","Shah Jahan","Aurangzeb","Humayun"],
answer: 1,
category: "History",
difficulty: "easy"
},

{
id: 5,
question: "Who wrote the Arthashastra?",
options: ["Kalidasa","Chanakya","Megasthenes","Panini"],
answer: 1,
category: "History",
difficulty: "easy"
},

{
id: 6,
question: "Which movement was launched by Mahatma Gandhi in 1942?",
options: ["Non-Cooperation Movement","Civil Disobedience Movement","Quit India Movement","Khilafat Movement"],
answer: 2,
category: "History",
difficulty: "easy"
},

{
id: 7,
question: "Who was the founder of the Gupta Empire?",
options: ["Samudragupta","Chandragupta I","Skandagupta","Chandragupta II"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 8,
question: "The Jallianwala Bagh massacre took place in which year?",
options: ["1919","1920","1917","1922"],
answer: 0,
category: "History",
difficulty: "easy"
},

{
id: 9,
question: "Who was the first woman ruler of Delhi?",
options: ["Nur Jahan","Razia Sultana","Chand Bibi","Rani Durgavati"],
answer: 1,
category: "History",
difficulty: "easy"
},

{
id: 10,
question: "Which European power first arrived in India for trade?",
options: ["Portuguese","British","French","Dutch"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 11,
question: "Who was the last ruler of the Mauryan dynasty?",
options: ["Ashoka","Brihadratha","Bindusara","Dasharatha"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 12,
question: "Which Veda is the oldest?",
options: ["Rigveda","Samaveda","Yajurveda","Atharvaveda"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 13,
question: "Who was the court poet of Chandragupta II?",
options: ["Kalidasa","Banabhatta","Harsha","Panini"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 14,
question: "Who established the Slave Dynasty in India?",
options: ["Qutb-ud-din Aibak","Iltutmish","Balban","Razia"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 15,
question: "Who was the founder of the Mughal Empire in India?",
options: ["Babur","Humayun","Akbar","Jahangir"],
answer: 0,
category: "History",
difficulty: "easy"
},

{
id: 16,
question: "Who succeeded Babur as the Mughal emperor?",
options: ["Akbar","Humayun","Aurangzeb","Jahangir"],
answer: 1,
category: "History",
difficulty: "easy"
},

{
id: 17,
question: "Who introduced the Mansabdari system?",
options: ["Babur","Akbar","Aurangzeb","Shah Jahan"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 18,
question: "Who built the Red Fort in Delhi?",
options: ["Akbar","Aurangzeb","Shah Jahan","Humayun"],
answer: 2,
category: "History",
difficulty: "easy"
},

{
id: 19,
question: "The Permanent Settlement was introduced by?",
options: ["Lord Cornwallis","Lord Wellesley","Lord Curzon","Lord Hastings"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 20,
question: "Who was known as Netaji?",
options: ["Subhas Chandra Bose","Bhagat Singh","Nehru","Patel"],
answer: 0,
category: "History",
difficulty: "easy"
},

/* ================= GEOGRAPHY ================= */

{
id: 21,
question: "Which is the longest river in the world?",
options: ["Amazon","Nile","Yangtze","Mississippi"],
answer: 1,
category: "Geography",
difficulty: "easy"
},

{
id: 22,
question: "Which country has the largest land area?",
options: ["USA","China","Russia","Canada"],
answer: 2,
category: "Geography",
difficulty: "easy"
},

{
id: 23,
question: "Which is the largest desert in the world?",
options: ["Sahara","Gobi","Kalahari","Arabian"],
answer: 0,
category: "Geography",
difficulty: "easy"
},

{
id: 24,
question: "Which is the highest mountain in the world?",
options: ["K2","Everest","Kangchenjunga","Lhotse"],
answer: 1,
category: "Geography",
difficulty: "easy"
},

{
id: 25,
question: "Which continent has the largest population?",
options: ["Asia","Africa","Europe","South America"],
answer: 0,
category: "Geography",
difficulty: "easy"
},

{
id: 26,
question: "Which ocean is the largest?",
options: ["Atlantic","Indian","Pacific","Arctic"],
answer: 2,
category: "Geography",
difficulty: "easy"
},

{
id: 27,
question: "Mount Kilimanjaro is located in which country?",
options: ["Kenya","Tanzania","Uganda","Ethiopia"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 28,
question: "Which desert is located in India?",
options: ["Sahara","Thar","Gobi","Atacama"],
answer: 1,
category: "Geography",
difficulty: "easy"
},

{
id: 29,
question: "Which river is the longest in India?",
options: ["Ganga","Yamuna","Godavari","Brahmaputra"],
answer: 0,
category: "Geography",
difficulty: "easy"
},

/* ================= SCIENCE ================= */

{
id: 30,
question: "What is the boiling point of water?",
options: ["90°C","100°C","120°C","80°C"],
answer: 1,
category: "Science",
difficulty: "easy"
},

{
id: 31,
question: "What planet is known as the Red Planet?",
options: ["Venus","Mars","Jupiter","Saturn"],
answer: 1,
category: "Science",
difficulty: "easy"
},

{
id: 32,
question: "What gas do plants absorb from the atmosphere?",
options: ["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"],
answer: 1,
category: "Science",
difficulty: "easy"
},

{
id: 33,
question: "What is the chemical symbol of gold?",
options: ["Au","Ag","Gd","Go"],
answer: 0,
category: "Science",
difficulty: "easy"
},

{
id: 34,
question: "What is the speed of light?",
options: ["300000 km/s","150000 km/s","100000 km/s","500000 km/s"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 35,
question: "Which vitamin is produced by sunlight?",
options: ["Vitamin A","Vitamin B","Vitamin C","Vitamin D"],
answer: 3,
category: "Science",
difficulty: "easy"
},

{
id: 36,
question: "Which metal is liquid at room temperature?",
options: ["Iron","Mercury","Gold","Copper"],
answer: 1,
category: "Science",
difficulty: "easy"
},

/* ================= GK ================= */

{
id: 37,
question: "Who is known as the Father of the Nation in India?",
options: ["Nehru","Gandhi","Patel","Ambedkar"],
answer: 1,
category: "GK",
difficulty: "easy"
},

{
id: 38,
question: "Who invented the telephone?",
options: ["Edison","Alexander Graham Bell","Newton","Tesla"],
answer: 1,
category: "GK",
difficulty: "easy"
},

{
id: 39,
question: "Who discovered gravity?",
options: ["Einstein","Newton","Galileo","Darwin"],
answer: 1,
category: "GK",
difficulty: "easy"
},

{
id: 40,
question: "Which is the largest animal?",
options: ["Elephant","Blue Whale","Giraffe","Shark"],
answer: 1,
category: "GK",
difficulty: "easy"
},

{
id: 41,
question: "Which country invented paper?",
options: ["India","China","Egypt","Greece"],
answer: 1,
category: "GK",
difficulty: "easy"
},

{
id: 42,
question: "Which sport uses a shuttlecock?",
options: ["Tennis","Badminton","Squash","Table Tennis"],
answer: 1,
category: "GK",
difficulty: "easy"
},

{
id: 43,
question: "Which country is famous for pyramids?",
options: ["India","Egypt","Mexico","China"],
answer: 1,
category: "GK",
difficulty: "easy"
},

{
id: 44,
question: "Who painted Mona Lisa?",
options: ["Van Gogh","Leonardo da Vinci","Picasso","Michelangelo"],
answer: 1,
category: "GK",
difficulty: "easy"
},

/* ================= MATHS ================= */

{
id: 45,
question: "What is 12 × 8?",
options: ["96","88","108","86"],
answer: 0,
category: "Maths",
difficulty: "easy"
},

{
id: 46,
question: "What is the square root of 81?",
options: ["7","8","9","10"],
answer: 2,
category: "Maths",
difficulty: "easy"
},

{
id: 47,
question: "What is 100 ÷ 5?",
options: ["10","20","25","15"],
answer: 1,
category: "Maths",
difficulty: "easy"
},

{
id: 48,
question: "What is 9 × 9?",
options: ["72","81","90","99"],
answer: 1,
category: "Maths",
difficulty: "easy"
},

{
id: 49,
question: "What is 200 − 50?",
options: ["120","150","170","140"],
answer: 1,
category: "Maths",
difficulty: "easy"
},

{
id: 50,
question: "What is 144 ÷ 12?",
options: ["10","11","12","13"],
answer: 2,
category: "Maths",
difficulty: "easy"
},

{
id: 51,
question: "What is 11 × 11?",
options: ["111","121","131","141"],
answer: 1,
category: "Maths",
difficulty: "easy"
}

];