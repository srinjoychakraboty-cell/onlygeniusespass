const questions = [

{
id: 1,
question: 'Who was the Viceroy of India during the partition of Bengal in 1905?',
options: ["Lord Curzon","Lord Dalhousie","Lord Mountbatten","Lord Rippon"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 2,
question: 'The Treaty of Versailles was signed in which year?',
options: ["1917","1918","1919","1920"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 3,
question: "Which battle ended Napoleon's rule?",
options: ["Battle of Trafalgar","Battle of Waterloo","Battle of Leipzig","Battle of Austerlitz"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 4,
question: 'Who founded the Indian National Congress in 1885?',
options: ["Dadabhai Naoroji","A.O. Hume","Bal Gangadhar Tilak","Surendranath Banerjee"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 5,
question: 'The Rowlatt Act was passed in which year?',
options: ["1917","1919","1921","1923"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 6,
question: 'Which emperor issued the Edict of Milan granting religious tolerance?',
options: ["Constantine I","Diocletian","Nero","Augustus"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 7,
question: 'Who was the last Mughal Emperor of India?',
options: ["Aurangzeb","Bahadur Shah I","Bahadur Shah Zafar","Akbar II"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 8,
question: 'The Magna Carta was signed in which year?',
options: ["1215","1315","1415","1115"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 9,
question: 'Which civilization built Machu Picchu?',
options: ["Aztec","Maya","Inca","Olmec"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 10,
question: 'Who was the first Sultan of the Delhi Sultanate?',
options: ["Iltutmish","Qutb-ud-din Aibak","Balban","Alauddin Khilji"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 11,
question: 'The Dandi March took place in which year?',
options: ["1928","1929","1930","1931"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 12,
question: 'Who assassinated Archduke Franz Ferdinand?',
options: ["Gavrilo Princip","Black Hand","Dragutin Dimitrijević","Nedeljko Čabrinović"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 13,
question: 'Which dynasty built the Angkor Wat temple complex?',
options: ["Pallava","Khmer","Chola","Gupta"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 14,
question: 'The Boston Tea Party occurred in which year?',
options: ["1770","1771","1773","1775"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 15,
question: "Who wrote 'The Prince', a treatise on political power?",
options: ["Dante","Machiavelli","Rousseau","Voltaire"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 16,
question: "Which Indian king defeated Alexander the Great's forces at the Hydaspes?",
options: ["Chandragupta","Porus","Ambhi","Dhana Nanda"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 17,
question: 'The Opium Wars were fought between China and which country?',
options: ["France","USA","Britain","Russia"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 18,
question: 'Who was the first female Pharaoh of Egypt?',
options: ["Nefertiti","Cleopatra","Hatshepsut","Merneith"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 19,
question: 'Which Indian reformer founded the Brahmo Samaj?',
options: ["Swami Vivekananda","Ram Mohan Roy","Dayananda Saraswati","Ishwar Chandra Vidyasagar"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 20,
question: 'The French Revolution began in which year?',
options: ["1787","1788","1789","1790"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 21,
question: 'Who built the Konark Sun Temple?',
options: ["Narasimhadeva I","Ashoka","Chandragupta II","Harsha"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 22,
question: 'The Battle of Panipat in 1526 was fought between Babur and?',
options: ["Ibrahim Lodi","Rana Sanga","Hemu","Sher Shah Suri"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 23,
question: 'Which Chinese dynasty built the Great Wall?',
options: ["Han","Ming","Qin","Tang"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 24,
question: 'Who led the Bolshevik Revolution in Russia?',
options: ["Stalin","Trotsky","Lenin","Kerensky"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 25,
question: 'The Khilafat Movement in India was led by?',
options: ["Ali Brothers","Gandhi","Nehru","Maulana Azad"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 26,
question: 'Which empire was ruled by Suleiman the Magnificent?',
options: ["Safavid","Mughal","Ottoman","Abbasid"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 27,
question: 'The Congress of Vienna took place after the defeat of?',
options: ["Napoleon","Hitler","Kaiser Wilhelm","Franz Ferdinand"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 28,
question: 'Who founded the Maratha Empire?',
options: ["Baji Rao I","Shivaji","Peshwa Balaji","Sambhaji"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 29,
question: 'The Suez Canal was opened in which year?',
options: ["1859","1864","1869","1875"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 30,
question: "Which Indian ruler was known as 'Tiger of Mysore'?",
options: ["Hyder Ali","Tipu Sultan","Krishnaraja Wadiyar","Haider Ali II"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 31,
question: 'The Amritsar Massacre was ordered by which British officer?',
options: ["General Dyer","Lord Chelmsford","Lord Reading","General O'Dwyer"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 32,
question: 'Which civilization built Stonehenge?',
options: ["Celts","Romans","Druids","Neolithic people"],
answer: 3,
category: "History",
difficulty: "medium"
},

{
id: 33,
question: 'The Treaty of Westphalia ended which war?',
options: ["Thirty Years' War","Hundred Years' War","Seven Years' War","War of Roses"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 34,
question: 'Who was the founder of the Sikh religion?',
options: ["Guru Gobind Singh","Guru Nanak","Guru Arjan Dev","Guru Tegh Bahadur"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 35,
question: 'The Boxer Rebellion took place in which country?',
options: ["Japan","Korea","China","Vietnam"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 36,
question: 'Which ruler constructed the Brihadeeswara Temple at Thanjavur?',
options: ["Rajaraja Chola I","Rajendra Chola","Kulottunga Chola","Vikramaditya"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 37,
question: 'The Non-Cooperation Movement was launched in which year?',
options: ["1919","1920","1921","1922"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 38,
question: 'Who was the first Roman Emperor?',
options: ["Julius Caesar","Mark Antony","Augustus","Nero"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 39,
question: 'The Battle of Thermopylae was fought between Greeks and?',
options: ["Romans","Persians","Macedonians","Carthaginians"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 40,
question: 'Which Indian state was the last to be annexed by British under Doctrine of Lapse?',
options: ["Jhansi","Satara","Nagpur","Awadh"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 41,
question: "The Peasants' Revolt in England occurred in which century?",
options: ["13th","14th","15th","16th"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 42,
question: "Who gave the slogan 'Do or Die'?",
options: ["Bhagat Singh","Nehru","Gandhi","Bose"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 43,
question: 'The partition of India occurred in which year?',
options: ["1945","1946","1947","1948"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 44,
question: 'Which pharaoh built the Great Pyramid of Giza?',
options: ["Khafre","Khufu","Menkaure","Ramesses II"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 45,
question: 'Who was the first President of the USA?',
options: ["John Adams","Benjamin Franklin","Thomas Jefferson","George Washington"],
answer: 3,
category: "History",
difficulty: "hard"
},

{
id: 46,
question: 'The Vijayanagara Empire was founded in which year?',
options: ["1236","1336","1436","1536"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 47,
question: 'Which Mughal Emperor banned alcohol?',
options: ["Akbar","Jahangir","Aurangzeb","Shah Jahan"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 48,
question: 'The Lucknow Pact of 1916 was signed between Congress and?',
options: ["Muslim League","Khilafat Committee","Hindu Mahasabha","All India League"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 49,
question: 'Who was the founder of the Ahom dynasty in Assam?',
options: ["Sukaphaa","Supimphaa","Suhungmung","Sudangphaa"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 50,
question: 'The Silk Road primarily connected China to?',
options: ["India","Rome","Arabia","Persia"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 51,
question: 'Which Viceroy partitioned Bengal in 1905?',
options: ["Lord Curzon","Lord Dalhousie","Lord Minto","Lord Hardinge"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 52,
question: 'The Spanish Armada was defeated in which year?',
options: ["1580","1585","1588","1592"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 53,
question: "Who wrote 'Ain-i-Akbari'?",
options: ["Birbal","Abul Fazl","Todar Mal","Faizi"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 54,
question: 'The Indian Councils Act of 1909 is also known as?',
options: ["Montford Reforms","Morley-Minto Reforms","Rowlatt Act","Pitt's India Act"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 55,
question: 'Which country was formerly known as Persia?',
options: ["Iraq","Iran","Turkey","Afghanistan"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 56,
question: 'The Chauri Chaura incident occurred in which year?',
options: ["1920","1921","1922","1923"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 57,
question: 'Who was the founder of Buddhism?',
options: ["Vardhamana Mahavira","Siddhartha Gautama","Ashoka","Nagarjuna"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 58,
question: 'The Berlin Wall fell in which year?',
options: ["1987","1988","1989","1990"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 59,
question: 'Which dynasty did Chandragupta Maurya overthrow?',
options: ["Nanda","Shishunaga","Gupta","Satavahana"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 60,
question: 'The first Indian War of Independence was fought in?',
options: ["1857","1858","1859","1860"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 61,
question: "Who led India's delegation at the Second Round Table Conference?",
options: ["Gandhi","Nehru","Ambedkar","Patel"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 62,
question: 'Which empire was at its peak under Emperor Trajan?',
options: ["Greek","Byzantine","Roman","Ottoman"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 63,
question: 'The Prarthana Samaj was founded by?',
options: ["Atmaram Pandurang","Bal Gangadhar Tilak","M.G. Ranade","Gopal Hari Deshmukh"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 64,
question: 'Who was the last ruler of the Tughlaq dynasty?',
options: ["Firuz Shah Tughlaq","Muhammad bin Tughlaq","Ghiyas-ud-din","Nasir-ud-din Mahmud"],
answer: 3,
category: "History",
difficulty: "medium"
},

{
id: 65,
question: 'The Khyber Pass connects Pakistan with?',
options: ["India","Afghanistan","Iran","China"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 66,
question: 'Which Indian revolutionary threw a bomb in the Central Legislative Assembly?',
options: ["Bhagat Singh","Sukhdev","Rajguru","Azad"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 67,
question: 'The Treaty of Paris (1783) ended which war?',
options: ["Seven Years' War","American Revolutionary War","War of 1812","French-Indian War"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 68,
question: 'The Home Rule Movement was started by?',
options: ["Annie Besant and Tilak","Gandhi and Nehru","Jinnah and Aga Khan","Patel and Rajagopalachari"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 69,
question: 'Who was the first Governor-General of Pakistan?',
options: ["Liaquat Ali Khan","Muhammad Ali Jinnah","Ayub Khan","Iskander Mirza"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 70,
question: 'The Mughal Emperor who built Fatehpur Sikri was?',
options: ["Humayun","Akbar","Jahangir","Shah Jahan"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 71,
question: 'Which war resulted in India gaining independence of Bangladesh?',
options: ["Kargil War","Indo-Pak War 1971","Indo-Pak War 1965","Indo-Pak War 1947"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 72,
question: 'The Sepoy Mutiny of 1857 began at which place?',
options: ["Delhi","Meerut","Lucknow","Kanpur"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 73,
question: 'Who invented the printing press?',
options: ["Leonardo da Vinci","Galileo Galilei","Johannes Gutenberg","Isaac Newton"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 74,
question: 'The Mauryan Empire reached its greatest extent under?',
options: ["Chandragupta","Bindusara","Ashoka","Brihadratha"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 75,
question: 'The Peshwas were the hereditary prime ministers of which empire?',
options: ["Mughal","Maratha","Vijayanagara","Mysore"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 76,
question: "Which country was known as the 'Sick Man of Europe'?",
options: ["Austria-Hungary","Russia","Ottoman Empire","Spain"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 77,
question: 'The Partition of Bengal was annulled in which year?',
options: ["1909","1911","1913","1915"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 78,
question: 'Simon Commission was boycotted because?',
options: ["It raised taxes","It had no Indian member","It proposed partition","It banned Congress"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 79,
question: 'Who was the Commander-in-Chief during the Second Battle of Panipat?',
options: ["Akbar","Bairam Khan","Hemu","Sher Shah"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 80,
question: 'The Indus Valley Civilization flourished around which millennium BCE?',
options: ["5th","4th","3rd","2nd"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 81,
question: 'Who built the Char Minar in Hyderabad?',
options: ["Aurangzeb","Quli Qutb Shah","Nizamul Mulk","Ibrahim Adil Shah"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 82,
question: 'The Declaration of Independence was adopted in?',
options: ["1774","1775","1776","1777"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 83,
question: 'Who was the first Indian to become a member of the British Parliament?',
options: ["Dadabhai Naoroji","Gopal Krishna Gokhale","Pherozeshah Mehta","Bal Gangadhar Tilak"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 84,
question: 'The Harappan city of Lothal was located in present-day?',
options: ["Punjab","Rajasthan","Gujarat","Sindh"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 85,
question: "Which Indian ruler wrote 'Arthashastra'?",
options: ["Chanakya","Chandragupta","Ashoka","Bindusara"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 86,
question: 'The Crusades were primarily fought to capture?',
options: ["Constantinople","Jerusalem","Alexandria","Antioch"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 87,
question: 'Who was the founder of the Lodi Dynasty?',
options: ["Bahlul Lodi","Sikandar Lodi","Ibrahim Lodi","Daulat Khan Lodi"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 88,
question: 'The Tashkent Declaration was signed after which war?',
options: ["1962 Indo-China War","1965 Indo-Pak War","1971 Indo-Pak War","Kargil War"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 89,
question: 'Which Chola king sent a naval expedition to Southeast Asia?',
options: ["Rajaraja I","Rajendra I","Kulottunga I","Parantaka I"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 90,
question: 'The Rowlatt Act allowed detention without?',
options: ["Bail","Trial","Warrant","Lawyer"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 91,
question: 'Who commanded the English fleet against the Spanish Armada?',
options: ["Walter Raleigh","Francis Drake","John Hawkins","Charles Howard"],
answer: 3,
category: "History",
difficulty: "medium"
},

{
id: 92,
question: 'The Quit India Movement was launched in?',
options: ["1940","1941","1942","1943"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 93,
question: 'Which Mughal emperor abolished Jizya tax?',
options: ["Babur","Akbar","Humayun","Jahangir"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 94,
question: 'The Balkan Wars of 1912-13 were fought in?',
options: ["Eastern Europe","Southeast Europe","Central Asia","Middle East"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 95,
question: 'Who founded the city of Alexandria?',
options: ["Ptolemy I","Alexander the Great","Julius Caesar","Cleopatra"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 96,
question: 'The Indian Independence Act was passed in?',
options: ["June 1947","July 1947","August 1947","September 1947"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 97,
question: 'The Diwan-i-Khas was built by?',
options: ["Akbar","Shah Jahan","Aurangzeb","Babur"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 98,
question: 'Who was the last Peshwa?',
options: ["Baji Rao II","Baji Rao I","Madhav Rao I","Nana Fadnavis"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 99,
question: "The word 'India' is derived from which river?",
options: ["Brahmaputra","Ganga","Indus","Saraswati"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 100,
question: 'Which battle marked the end of the Byzantine Empire?',
options: ["Battle of Manzikert","Fall of Constantinople","Battle of Yarmouk","Battle of Adrianople"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 101,
question: 'Tipu Sultan died in which battle?',
options: ["Battle of Pollilur","Battle of Porto Novo","Battle of Seringapatam","Battle of Sholingarh"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 102,
question: 'The Carnatic Wars were fought between the British and?',
options: ["Marathas","Mysore","French","Dutch"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 103,
question: 'Who was the founder of the Pallava dynasty?',
options: ["Simhavishnu","Mahendravarman","Narasimhavarman","Sivaskandavarman"],
answer: 3,
category: "History",
difficulty: "medium"
},

{
id: 104,
question: "The term 'Renaissance' means?",
options: ["Revolution","Rebirth","Reform","Restoration"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 105,
question: 'The Sarda Act of 1929 raised the minimum age of marriage for girls to?',
options: ["12","14","16","18"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 106,
question: "Who was the Mughal Emperor during Nadir Shah's invasion?",
options: ["Aurangzeb","Bahadur Shah I","Muhammad Shah","Shah Alam II"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 107,
question: 'The 14 Points were proposed by which US President?',
options: ["Roosevelt","Wilson","Taft","Harding"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 108,
question: 'Which Indian mathematician wrote Aryabhatiya?',
options: ["Brahmagupta","Bhaskara","Aryabhata","Varahamihira"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 109,
question: 'The Peace of Westphalia (1648) established the concept of?',
options: ["Democracy","Nation-state sovereignty","Colonialism","Feudalism"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 110,
question: "Who was known as the 'Grand Old Man of India'?",
options: ["Gopal Krishna Gokhale","Bal Gangadhar Tilak","Dadabhai Naoroji","Pherozeshah Mehta"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 111,
question: 'The Raziya Sultana was the daughter of?',
options: ["Qutb-ud-din Aibak","Iltutmish","Ghiyas-ud-din Balban","Alauddin Khilji"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 112,
question: 'The Sikh Empire was founded by?',
options: ["Guru Gobind Singh","Maharaja Ranjit Singh","Banda Singh Bahadur","Hari Singh Nalwa"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 113,
question: "Who gave the title 'Mahatma' to Gandhi?",
options: ["Nehru","Tagore","Gokhale","Patel"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 114,
question: 'The INA (Indian National Army) was reorganized by?',
options: ["Subhas Chandra Bose","Mohan Singh","Shah Nawaz Khan","Giani Pritam Singh"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 115,
question: 'The Moplah Rebellion of 1921 occurred in?',
options: ["Punjab","Kerala","Bengal","Maharashtra"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 116,
question: 'Who was the architect of the Indian Constitution?',
options: ["Nehru","Gandhi","Patel","Ambedkar"],
answer: 3,
category: "History",
difficulty: "medium"
},

{
id: 117,
question: 'The Vijayanagara capital was located at?',
options: ["Mysore","Hampi","Belur","Halebidu"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 118,
question: 'Which Act introduced dyarchy in Indian provinces?',
options: ["Indian Councils Act 1909","Government of India Act 1919","Government of India Act 1935","Indian Independence Act 1947"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 119,
question: 'The First Battle of Tarain was fought in?',
options: ["1191","1192","1193","1194"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 120,
question: 'Who was the founder of the Slave Dynasty?',
options: ["Iltutmish","Qutb-ud-din Aibak","Raziya","Ghiyas-ud-din Balban"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 121,
question: "The Pitt's India Act was passed in?",
options: ["1782","1783","1784","1785"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 122,
question: 'The Azad Hind Fauj was established in?',
options: ["Singapore","Malaysia","Burma","Japan"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 123,
question: 'Which ruler introduced the market reforms?',
options: ["Iltutmish","Ghiyas-ud-din Balban","Alauddin Khilji","Firuz Shah Tughlaq"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 124,
question: 'The Kuka Movement was started by?',
options: ["Guru Ram Singh","Guru Gobind Singh","Maharaja Ranjit Singh","Banda Bahadur"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 125,
question: 'Who was the first to circumnavigate the globe?',
options: ["Columbus","Vasco da Gama","Magellan","Drake"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 126,
question: 'The Deccan Plateau was mostly under which empire during 300 BCE?',
options: ["Nanda","Maurya","Gupta","Satavahana"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 127,
question: 'The Tripartite Treaty of 1838 was signed between?',
options: ["British, Ranjit Singh, and Shah Shuja","British, Marathas, and Mysore","British, France, and Portugal","British, Hyderabad, and Mysore"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 128,
question: 'The Gandhara School of Art was influenced by?',
options: ["Greek art","Persian art","Chinese art","Roman art"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 129,
question: 'Who established the Theosophical Society in India?',
options: ["Annie Besant","H.P. Blavatsky","Henry Steel Olcott","Col. Alcott"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 130,
question: 'Which battle ended the Third Maratha War?',
options: ["Battle of Koregaon","Battle of Bhima Koregaon","Battle of Kirkee","Battle of Sitabaldi"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 131,
question: "The term 'Cold War' was coined by?",
options: ["Walter Lippmann","George Orwell","Churchill","Truman"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 132,
question: 'The Hunter Commission of 1882 was related to?',
options: ["Police reform","Education reform","Revenue reform","Military reform"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 133,
question: "Who wrote 'Hind Swaraj'?",
options: ["Nehru","Tilak","Gandhi","Gokhale"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 134,
question: 'The Battle of Buxar was fought in?',
options: ["1763","1764","1765","1766"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 135,
question: 'Which act provided for the establishment of Supreme Court in Calcutta?',
options: ["Regulating Act 1773","Pitt's India Act","Charter Act 1813","Charter Act 1833"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 136,
question: 'The Poona Pact of 1932 was between Gandhi and?',
options: ["Jinnah","Ambedkar","Nehru","Patel"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 137,
question: 'Who founded the Aligarh Muslim University?',
options: ["Syed Ahmed Khan","Muhammad Ali Jinnah","Aga Khan","Maulana Azad"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 138,
question: 'The First Carnatic War ended with the?',
options: ["Treaty of Pondicherry","Treaty of Aix-la-Chapelle","Treaty of Paris","Treaty of Madras"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 139,
question: 'The Kalinga War was fought in?',
options: ["260 BCE","261 BCE","262 BCE","265 BCE"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 140,
question: 'Which Act of 1935 provided for a Federal Court?',
options: ["Government of India Act","Indian Councils Act","Indian Independence Act","Morley-Minto Reform"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 141,
question: 'The Permanent Settlement was introduced in?',
options: ["1793","1794","1795","1796"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 142,
question: 'Which Mughal painter is known for his portraits?',
options: ["Abul Hasan","Bichitr","Ustad Mansur","Bishandas"],
answer: 3,
category: "History",
difficulty: "medium"
},

{
id: 143,
question: 'The Brahmo Samaj was founded in?',
options: ["1828","1830","1832","1835"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 144,
question: 'The transfer of capital from Calcutta to Delhi was in?',
options: ["1909","1910","1911","1912"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 145,
question: "Who wrote 'Anandamath' from which the song 'Vande Mataram' was taken?",
options: ["Rabindranath Tagore","Bankim Chandra Chattopadhyay","Michael Madhusudan Dutt","Sarat Chandra"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 146,
question: 'The Lucknow Session of Indian National Congress (1916) was presided by?',
options: ["Ambika Charan Mazumdar","Bal Gangadhar Tilak","Annie Besant","Surendranath Banerjee"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 147,
question: 'The Third Battle of Panipat was fought in?',
options: ["1760","1761","1762","1763"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 148,
question: "Which Gupta ruler is known as 'Napoleon of India'?",
options: ["Chandragupta I","Samudragupta","Chandragupta II","Kumaragupta"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 149,
question: 'The Surat Split in Congress happened in?',
options: ["1905","1906","1907","1908"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 150,
question: 'Who killed Afzal Khan?',
options: ["Shivaji","Sambhaji","Bajirao","Tanaji"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 151,
question: 'The foundation of the Muslim League was laid in?',
options: ["1904","1905","1906","1907"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 152,
question: 'Indian Civil Services was founded by?',
options: ["Lord Cornwallis","Lord Dalhousie","Lord Wellesley","Lord Curzon"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 153,
question: 'The Montagu-Chelmsford Reforms were introduced in?',
options: ["1917","1918","1919","1920"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 154,
question: "Which Indian ruler first introduced the 'Iqta' system?",
options: ["Iltutmish","Qutb-ud-din Aibak","Alauddin Khilji","Ghiyas-ud-din Balban"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 155,
question: 'The Charter Act of 1813 was significant because?',
options: ["It abolished the East India Company","It opened India to Christian missionaries","It transferred power to Crown","It gave voting rights to Indians"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 156,
question: 'The Vernacular Press Act of 1878 was passed by?',
options: ["Lord Lytton","Lord Ripon","Lord Curzon","Lord Dufferin"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 157,
question: 'Bhagat Singh was hanged in?',
options: ["1930","1931","1932","1933"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 158,
question: 'The Indian National Congress was founded in?',
options: ["1883","1884","1885","1886"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 159,
question: 'Who was the first Indian woman President?',
options: ["Vijaya Lakshmi Pandit","Sarojini Naidu","Pratibha Patil","Indira Gandhi"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 160,
question: 'The Champaran Satyagraha was against?',
options: ["Salt tax","Indigo cultivation","Cotton tax","Land revenue"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 161,
question: 'The Cabinet Mission came to India in?',
options: ["1944","1945","1946","1947"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 162,
question: "Which ruler issued the 'Blood and Iron' policy?",
options: ["Otto von Bismarck","Kaiser Wilhelm II","Frederick the Great","Adolf Hitler"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 163,
question: "The revolt of 1857 was described as 'First War of Independence' by?",
options: ["V.D. Savarkar","Bal Gangadhar Tilak","R.C. Majumdar","S.N. Sen"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 164,
question: 'The Subsidiary Alliance system was introduced by?',
options: ["Lord Wellesley","Lord Dalhousie","Lord Cornwallis","Lord Hastings"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 165,
question: 'The Cripps Mission came to India in?',
options: ["1940","1941","1942","1943"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 166,
question: "Who coined the slogan 'Jai Hind'?",
options: ["Gandhi","Nehru","Bose","Patel"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 167,
question: 'The Tebhaga Movement was a peasant movement in?',
options: ["Punjab","Bengal","Bihar","Andhra Pradesh"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 168,
question: 'The Burma Campaign in WW2 was led by?',
options: ["Field Marshal Slim","General Auchinleck","General Wavell","Lord Mountbatten"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 169,
question: 'The Chittagong Armoury Raid was led by?',
options: ["Bhagat Singh","Surya Sen","Khudiram Bose","Prafulla Chaki"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 170,
question: 'The Alipur Bomb Case was related to?',
options: ["Bhagat Singh","Aurobindo Ghose","Bal Gangadhar Tilak","Lala Lajpat Rai"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 171,
question: "Who established the Mughal Empire's Din-i-Ilahi religion?",
options: ["Babur","Humayun","Akbar","Jahangir"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 172,
question: 'The Swadeshi Movement began after?',
options: ["Partition of Bengal","Jallianwala Bagh","Rowlatt Act","Simon Commission"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 173,
question: 'Who was the first Indian to win the Nobel Prize?',
options: ["C.V. Raman","Rabindranath Tagore","Amartya Sen","Mother Teresa"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 174,
question: 'The Government of India Act 1935 divided India into how many provinces?',
options: ["9","11","13","15"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 175,
question: "Who wrote 'The Discovery of India'?",
options: ["Gandhi","Nehru","Ambedkar","Patel"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 176,
question: "The term 'Divide and Rule' in Indian context refers to policies of?",
options: ["Lord Curzon","Lord Dalhousie","Lord Minto","Lord Elgin"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 177,
question: 'The Boundary Commission for Partition of India was headed by?',
options: ["Stafford Cripps","Cyril Radcliffe","Lord Mountbatten","Pethick-Lawrence"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 178,
question: 'Which city hosted the first session of Indian National Congress?',
options: ["Calcutta","Delhi","Bombay","Madras"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 179,
question: 'The Pala dynasty was founded by?',
options: ["Gopala","Dharmapala","Devapala","Mahipala"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 180,
question: 'Who introduced the Doctrine of Lapse?',
options: ["Lord Dalhousie","Lord Wellesley","Lord Bentinck","Lord Cornwallis"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 181,
question: 'The Treaty of Amritsar (1809) was between the British and?',
options: ["Hyderabad","Mysore","Ranjit Singh","Marathas"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 182,
question: "The 'Iron Curtain' speech was given by?",
options: ["Roosevelt","Churchill","Truman","Eisenhower"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 183,
question: "Who led the 'Azad Hind Fauj' after Mohan Singh?",
options: ["Shah Nawaz Khan","Subhas Chandra Bose","Giani Pritam Singh","Lakshmi Sahgal"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 184,
question: 'The Bandung Conference of 1955 was attended by how many countries?',
options: ["19","25","29","35"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 185,
question: 'The Ranbir Singh defeated which Afghan ruler in 1837?',
options: ["Dost Mohammed","Shah Shuja","Akbar Khan","Elphinstone"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 186,
question: 'Which Mughal general defeated Rana Pratap at Haldighati?',
options: ["Todar Mal","Man Singh","Birbal","Abdur Rahim"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 187,
question: 'The Indian Rebellion of 1857 is sometimes called?',
options: ["First War of Independence","The Great Mutiny","Sepoy Mutiny","All of these"],
answer: 3,
category: "History",
difficulty: "medium"
},

{
id: 188,
question: 'The Ghadar Party was founded in?',
options: ["England","USA","Canada","Australia"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 189,
question: 'Who presided over the Lahore Session of Congress (1929)?',
options: ["Nehru","Gandhi","Patel","Bose"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 190,
question: 'Which country has the most time zones?',
options: ["Russia","USA","France","China"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 191,
question: 'The Amazon River flows into which ocean?',
options: ["Pacific","Atlantic","Indian","Arctic"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 192,
question: 'Which is the smallest ocean in the world?',
options: ["Indian","Arctic","Atlantic","Southern"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 193,
question: 'The Great Barrier Reef is located in?',
options: ["Indian Ocean","Coral Sea","Tasman Sea","Pacific Ocean"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 194,
question: 'Which country has the longest coastline?',
options: ["Australia","Russia","Norway","Canada"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 195,
question: 'The Sahara Desert spans how many countries?',
options: ["8","10","12","11"],
answer: 3,
category: "Geography",
difficulty: "hard"
},

{
id: 196,
question: 'Which mountain range separates Europe from Asia?',
options: ["Alps","Carpathians","Ural Mountains","Caucasus"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 197,
question: 'The Strait of Malacca separates which two landmasses?',
options: ["Malaysia and Indonesia","India and Sri Lanka","Japan and Korea","Philippines and Borneo"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 198,
question: 'Which is the deepest lake in the world?',
options: ["Caspian Sea","Lake Superior","Lake Baikal","Lake Tanganyika"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 199,
question: 'The Atacama Desert is located in?',
options: ["Argentina","Brazil","Chile","Peru"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 200,
question: 'Which river forms the boundary between India and Pakistan?',
options: ["Indus","Jhelum","Ravi","Sutlej"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 201,
question: 'The capital of Australia is?',
options: ["Sydney","Melbourne","Brisbane","Canberra"],
answer: 3,
category: "Geography",
difficulty: "hard"
},

{
id: 202,
question: "Which country is called the 'Land of the Rising Sun'?",
options: ["China","South Korea","Japan","Thailand"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 203,
question: 'The Strait of Gibraltar separates?',
options: ["Europe and Asia","Europe and Africa","Africa and Asia","Asia and Australia"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 204,
question: "Which river is known as 'Sorrow of China'?",
options: ["Yangtze","Yellow River","Pearl River","Mekong"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 205,
question: 'The Dead Sea is bordered by?',
options: ["Jordan and Israel","Israel and Syria","Lebanon and Syria","Egypt and Israel"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 206,
question: 'Which is the highest plateau in the world?',
options: ["Deccan Plateau","Iranian Plateau","Tibetan Plateau","Colorado Plateau"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 207,
question: 'The Orinoco River is in?',
options: ["Brazil","Venezuela","Colombia","Peru"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 208,
question: 'Which country has the most freshwater resources?',
options: ["USA","Brazil","Canada","Russia"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 209,
question: 'The Tropic of Cancer passes through how many Indian states?',
options: ["6","7","8","9"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 210,
question: 'Which sea is completely enclosed by land?',
options: ["Caspian Sea","Red Sea","Black Sea","Aral Sea"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 211,
question: 'The Suez Canal connects?',
options: ["Red Sea and Mediterranean Sea","Black Sea and Caspian Sea","Persian Gulf and Red Sea","Mediterranean and Black Sea"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 212,
question: 'Which country has the highest population density?',
options: ["Bangladesh","South Korea","Singapore","Netherlands"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 213,
question: "The Pantanal is the world's largest?",
options: ["Desert","Wetland","Rainforest","Savanna"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 214,
question: 'Mount Etna is located in?',
options: ["Greece","Italy","Spain","Portugal"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 215,
question: 'The Nile River flows through how many countries?',
options: ["9","10","11","12"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 216,
question: 'Which island is the largest in the world?',
options: ["Borneo","Greenland","New Guinea","Madagascar"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 217,
question: 'The Gobi Desert is located in?',
options: ["China and Mongolia","China and Russia","Mongolia and Kazakhstan","China and Kazakhstan"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 218,
question: 'Which country has the most volcanoes?',
options: ["Japan","Indonesia","Philippines","USA"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 219,
question: 'The Danube River flows into?',
options: ["Black Sea","Caspian Sea","Mediterranean Sea","Adriatic Sea"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 220,
question: 'Which ocean trench is the deepest?',
options: ["Java Trench","Puerto Rico Trench","Mariana Trench","Tonga Trench"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 221,
question: 'The country of Lesotho is completely surrounded by?',
options: ["Mozambique","Zimbabwe","South Africa","Botswana"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 222,
question: 'Which Indian state has the longest coastline?',
options: ["Tamil Nadu","Andhra Pradesh","Gujarat","Maharashtra"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 223,
question: 'The Patagonia region is in?',
options: ["Chile","Argentina","Bolivia","Uruguay"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 224,
question: 'Which pass connects India and China in Sikkim?',
options: ["Nathu La","Bum La","Rohtang Pass","Chang La"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 225,
question: 'The Sahel region is a transition zone between?',
options: ["Sahara and tropical forest","Mediterranean and Sahara","Tropical forest and savanna","Savanna and rainforest"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 226,
question: "Which country is known as the 'Roof of the World'?",
options: ["Nepal","Bhutan","Tibet","Afghanistan"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 227,
question: 'The Mekong River originates in?',
options: ["Myanmar","China","Thailand","Laos"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 228,
question: 'Which Indian state has the highest tribal population?',
options: ["Jharkhand","Odisha","Madhya Pradesh","Chhattisgarh"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 229,
question: "The world's largest coral island is?",
options: ["Maldives","New Caledonia","Andaman Islands","Lakshadweep"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 230,
question: 'Which ocean current keeps Europe warm?',
options: ["Canary Current","Gulf Stream","North Atlantic Drift","Labrador Current"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 231,
question: 'The Tigris and Euphrates rivers are in?',
options: ["Iran and Iraq","Turkey and Iraq","Iraq and Syria","Iraq only"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 232,
question: 'Which is the highest navigable lake in the world?',
options: ["Lake Titicaca","Lake Baikal","Dal Lake","Pangong Lake"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 233,
question: 'The Deccan Plateau is bounded on the east by?',
options: ["Western Ghats","Eastern Ghats","Vindhya Range","Satpura Range"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 234,
question: 'Which country has the most lakes?',
options: ["Russia","Canada","USA","Finland"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 235,
question: 'The Amazon Rainforest covers approximately what percentage of South America?',
options: ["30%","40%","50%","60%"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 236,
question: 'Which country is completely surrounded by Italy?',
options: ["Monaco","Vatican City","San Marino","Andorra"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 237,
question: 'The Ring of Fire is located around?',
options: ["Atlantic Ocean","Indian Ocean","Pacific Ocean","Arctic Ocean"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 238,
question: "Which Indian river is called 'Dakshin Ganga'?",
options: ["Krishna","Cauvery","Godavari","Mahanadi"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 239,
question: 'The Cape of Good Hope is in?',
options: ["Namibia","Mozambique","South Africa","Angola"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 240,
question: 'Which is the largest hot desert in the world?',
options: ["Gobi","Arabian","Sahara","Kalahari"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 241,
question: 'The Indira Point is the southernmost point of India, located in?',
options: ["Lakshadweep","Andaman and Nicobar","Tamil Nadu","Kerala"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 242,
question: 'The Yellow River is also known as?',
options: ["Chang Jiang","Huang He","Pearl River","Yangtze"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 243,
question: 'Which country has both Atlantic and Pacific coasts?',
options: ["Colombia","Ecuador","Peru","Venezuela"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 244,
question: 'The Karakoram Range is located in?',
options: ["India-Pakistan-China border","Nepal-China border","India-Nepal border","Bhutan-China border"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 245,
question: 'Which state in India has the smallest area?',
options: ["Goa","Sikkim","Nagaland","Tripura"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 246,
question: 'The Palk Strait separates India from?',
options: ["Maldives","Sri Lanka","Indonesia","Myanmar"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 247,
question: 'The Dnieper River flows through which country?',
options: ["Russia","Ukraine","Poland","Belarus"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 248,
question: 'Which sea has no coastline?',
options: ["Sargasso Sea","Caribbean Sea","Arabian Sea","Coral Sea"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 249,
question: 'The Victoria Falls is on the border of?',
options: ["Zimbabwe and Zambia","Zimbabwe and Mozambique","Zambia and Angola","Namibia and Botswana"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 250,
question: 'The Sundarbans mangrove forest is located in?',
options: ["India and Bangladesh","India and Myanmar","Bangladesh and Myanmar","India only"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 251,
question: "Which country is known as the 'Land of a Thousand Lakes'?",
options: ["Sweden","Norway","Finland","Canada"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 252,
question: 'The Sumatran Fault is in?',
options: ["Philippines","Indonesia","Japan","Papua New Guinea"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 253,
question: 'Which Indian state has the Chilika Lake?',
options: ["Andhra Pradesh","West Bengal","Tamil Nadu","Odisha"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 254,
question: 'The Nullarbor Plain is in?',
options: ["USA","Australia","Argentina","South Africa"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 255,
question: 'Which river forms the Marble Canyon?',
options: ["Missouri","Colorado","Snake","Columbia"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 256,
question: 'The Fertile Crescent region is in?',
options: ["East Africa","Middle East","South Asia","Central Asia"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 257,
question: 'Which is the saltiest sea in the world?',
options: ["Red Sea","Caspian Sea","Dead Sea","Mediterranean Sea"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 258,
question: 'The Equator passes through how many African countries?',
options: ["5","6","7","8"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 259,
question: 'Which country has the highest number of UNESCO World Heritage Sites?',
options: ["China","France","Italy","Spain"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 260,
question: 'The Himalayas were formed by the collision of which plates?',
options: ["Indian and Eurasian","African and Eurasian","Arabian and Indian","Pacific and Asian"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 261,
question: "Which river is called the 'Mississippi of India'?",
options: ["Ganga","Brahmaputra","Godavari","Mahanadi"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 262,
question: 'The Mariana Trench is located in?',
options: ["Atlantic Ocean","Indian Ocean","Pacific Ocean","Arctic Ocean"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 263,
question: "Which country is called the 'Switzerland of Asia'?",
options: ["Nepal","Bhutan","Kashmir","Switzerland (in Asia)"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 264,
question: 'The Strait of Hormuz connects?',
options: ["Red Sea and Arabian Sea","Persian Gulf and Gulf of Oman","Arabian Sea and Gulf of Aden","Black Sea and Mediterranean"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 265,
question: "Which Indian city is called the 'Silicon Valley of India'?",
options: ["Hyderabad","Chennai","Pune","Bengaluru"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 266,
question: 'The Pennines mountain range is in?',
options: ["Scotland","Wales","England","Ireland"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 267,
question: 'Which is the longest mountain range in the world?',
options: ["Himalayas","Rocky Mountains","Andes","Alps"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 268,
question: 'The river Volga flows into?',
options: ["Black Sea","Baltic Sea","Caspian Sea","Arctic Ocean"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 269,
question: 'Which desert has the most biodiversity?',
options: ["Gobi","Namib","Sahara","Sonoran"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 270,
question: 'The Gulf of Mannar is between?',
options: ["India and Maldives","India and Sri Lanka","India and Myanmar","India and Pakistan"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 271,
question: 'Which country has the maximum number of natural lakes?',
options: ["Canada","Russia","USA","Sweden"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 272,
question: 'The Transantarctic Mountains divide Antarctica into?',
options: ["East and West","North and South","Central and Coastal","Inner and Outer"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 273,
question: 'Which Indian river originates from Amarkantak?',
options: ["Son","Narmada","Mahanadi","Tapti"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 274,
question: 'The Rann of Kutch is a seasonal?',
options: ["Lake","Desert","Wetland/Salt marsh","Forest"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 275,
question: 'Which country shares the longest border with India?',
options: ["China","Pakistan","Bangladesh","Nepal"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 276,
question: 'The Great Rift Valley runs through?',
options: ["West Africa","East Africa","Southern Africa","North Africa"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 277,
question: "Which sea is also known as the 'Inland Sea of Japan'?",
options: ["Sea of Japan","Seto Inland Sea","Philippine Sea","East China Sea"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 278,
question: 'The Tropic of Capricorn passes through how many continents?',
options: ["2","3","4","5"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 279,
question: 'The Canary Islands belong to?',
options: ["Portugal","Spain","France","Morocco"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 280,
question: 'Which is the largest country in Africa?',
options: ["Sudan","Libya","Algeria","Democratic Republic of Congo"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 281,
question: 'The Malabar Coast is on the?',
options: ["Eastern coast of India","Western coast of India","Northern coast of India","Southern tip of India"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 282,
question: 'Which country has the most rivers?',
options: ["Brazil","Russia","Canada","China"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 283,
question: 'The Eurasian and North American plates diverge at?',
options: ["Iceland","Azores","Hawaii","Canary Islands"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 284,
question: 'The Indus Waters Treaty (1960) was between?',
options: ["India and Pakistan","India and China","India and Afghanistan","India and Nepal"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 285,
question: 'Which Indian city is located on the banks of Sabarmati River?',
options: ["Surat","Baroda","Ahmedabad","Rajkot"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 286,
question: 'The Circum-Pacific Belt is also known as?',
options: ["Tethys Belt","Ring of Fire","Alpine Belt","Mid-Atlantic Ridge"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 287,
question: 'Borneo Island is shared by how many countries?',
options: ["2","3","4","5"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 288,
question: 'The Great Indian Bustard is found in?',
options: ["Rajasthan","Gujarat","Maharashtra","Madhya Pradesh"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 289,
question: 'Which lake is the largest in Africa?',
options: ["Lake Tanganyika","Lake Malawi","Lake Victoria","Lake Chad"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 290,
question: 'The Mangrove forests in India are mainly in?',
options: ["Gujarat coast","Andaman Islands","Sundarbans","Konkan coast"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 291,
question: 'Which country is located at the junction of Europe and Asia?',
options: ["Turkey","Russia","Kazakhstan","Iran"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 292,
question: 'The Cauvery River dispute is between?',
options: ["Kerala and Tamil Nadu","Tamil Nadu and Karnataka","Karnataka and Andhra Pradesh","Tamil Nadu and Andhra Pradesh"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 293,
question: 'Which is the second longest river in Africa?',
options: ["Niger","Congo","Nile","Zambezi"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 294,
question: 'The Kra Isthmus is in?',
options: ["Malaysia","Thailand","Myanmar","Cambodia"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 295,
question: 'Which city is located at the highest altitude?',
options: ["Quito","La Paz","Bogotá","Mexico City"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 296,
question: "The world's largest delta is?",
options: ["Mekong Delta","Mississippi Delta","Ganges-Brahmaputra Delta","Nile Delta"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 297,
question: 'Which country has the most glaciers?',
options: ["Norway","Canada","Pakistan","Greenland"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 298,
question: 'The Lena River flows through?',
options: ["Russia","Canada","China","Mongolia"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 299,
question: 'Which Indian state has the highest per capita income?',
options: ["Maharashtra","Delhi","Goa","Haryana"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 300,
question: 'The Agulhas Current flows along the coast of?',
options: ["West Africa","East Africa","South Africa","North Africa"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 301,
question: 'The Andaman Sea is part of?',
options: ["Pacific Ocean","Indian Ocean","Bay of Bengal","Arabian Sea"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 302,
question: "Which country is known as the 'Emerald Isle'?",
options: ["New Zealand","Ireland","Jamaica","Sri Lanka"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 303,
question: 'The Tibetan Plateau has an average elevation of?',
options: ["3000m","4000m","4500m","5000m"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 304,
question: 'Which is the largest national park in India?',
options: ["Sundarbans","Hemis","Namdapha","Gir"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 305,
question: 'The Equatorial Counter Current flows in?',
options: ["Eastward direction","Westward direction","Northward direction","Southward direction"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 306,
question: 'The Kaveri river originates from?',
options: ["Western Ghats in Karnataka","Eastern Ghats in Tamil Nadu","Brahmagiri Hills","Nandi Hills"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 307,
question: 'Which ocean has the most islands?',
options: ["Atlantic","Indian","Pacific","Arctic"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 308,
question: 'The Steppe climate is also known as?',
options: ["Mediterranean climate","Semi-arid climate","Monsoon climate","Continental climate"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 309,
question: "Which river in India is also called 'Vriddha Ganga'?",
options: ["Godavari","Mahanadi","Kaveri","Krishna"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 310,
question: 'The Labrador Current originates from?',
options: ["North Atlantic","Arctic Ocean","North Pacific","Greenland"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 311,
question: "Which country is known as the 'Land of Midnight Sun'?",
options: ["Iceland","Finland","Norway","Sweden"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 312,
question: 'The Hindu Kush mountain range is in?',
options: ["India and Pakistan","Pakistan and Afghanistan","Afghanistan and Iran","Iran and Turkey"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 313,
question: 'The Cherrapunji receives heavy rainfall due to?',
options: ["Western disturbances","Bay of Bengal branch of monsoon","Arabian Sea branch of monsoon","Cyclones"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 314,
question: 'Which country has no official capital?',
options: ["Nauru","Palau","Tuvalu","Vatican City"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 315,
question: 'The largest freshwater lake by surface area is?',
options: ["Lake Superior","Lake Baikal","Lake Huron","Lake Michigan"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 316,
question: 'The Kunlun Mountains are in?',
options: ["India","Nepal","China","Mongolia"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 317,
question: 'Which strait connects the Atlantic and Pacific Oceans?',
options: ["Drake Passage","Bering Strait","Strait of Magellan","Panama Canal"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 318,
question: 'The Indian Ocean is bounded on the north by?',
options: ["Asia","Africa","Australia","Antarctica"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 319,
question: 'Which country has the most natural UNESCO World Heritage Sites?',
options: ["China","USA","Australia","Brazil"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 320,
question: 'The Brahmaputra River in Tibet is known as?',
options: ["Jamuna","Yarlung Tsangpo","Tsangpo","Dibang"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 321,
question: 'Which sea is between Italy and Croatia?',
options: ["Ionian Sea","Adriatic Sea","Tyrrhenian Sea","Ligurian Sea"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 322,
question: 'The Loess Plateau is in?',
options: ["India","China","USA","Argentina"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 323,
question: 'Which country shares borders with the most other countries?',
options: ["Russia","China","Brazil","Germany"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 324,
question: 'The Western Ghats are also known as?',
options: ["Sahyadri Mountains","Vindhya Range","Satpura Range","Aravalli Range"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 325,
question: 'The Pangong Lake is located in?',
options: ["Himachal Pradesh","Uttarakhand","Ladakh","Sikkim"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 326,
question: 'Which river is the longest in Europe?',
options: ["Rhine","Danube","Volga","Loire"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 327,
question: 'The Malacca Strait has strategic importance because?',
options: ["Oil tanker routes","Freshwater source","Fishing grounds","Military base"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 328,
question: "Which country is known as the 'Granary of Europe'?",
options: ["France","Ukraine","Poland","Hungary"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 329,
question: 'The Chilika Lake is a?',
options: ["Freshwater lake","Saltwater lake","Lagoon","Reservoir"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 330,
question: 'The Great Plains of USA and Canada are also known as?',
options: ["Prairie","Pampas","Steppes","Savanna"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 331,
question: 'Which Indian state has both the Western and Eastern Ghats?',
options: ["Tamil Nadu","Kerala","Karnataka","Andhra Pradesh"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 332,
question: 'The Bab-el-Mandeb strait connects?',
options: ["Red Sea and Indian Ocean","Persian Gulf and Arabian Sea","Gulf of Aden and Red Sea","Arabian Sea and Bay of Bengal"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 333,
question: 'The Pamir Knot is the meeting point of?',
options: ["Himalaya, Hindukush, Karakoram","Himalaya, Hindukush, Tien Shan","Hindukush, Karakoram, Tien Shan","Himalaya, Karakoram, Tien Shan"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 334,
question: 'Which country has the most coastline after Canada?',
options: ["Australia","Russia","Indonesia","Norway"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 335,
question: 'The Westerlies blow from?',
options: ["Sub-tropical high to sub-polar low","Polar high to sub-polar low","Equatorial low to sub-tropical high","Sub-polar low to polar high"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 336,
question: 'The Volta River is in?',
options: ["Nigeria","Ghana","Senegal","Ivory Coast"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 337,
question: 'Which is the smallest country in South America?',
options: ["Uruguay","Paraguay","Suriname","Guyana"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 338,
question: 'The Mississippi River drains into?',
options: ["Atlantic Ocean","Gulf of Mexico","Pacific Ocean","Caribbean Sea"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 339,
question: "Which plateau is called the 'Roof of South America'?",
options: ["Altiplano","Patagonia","Mato Grosso","Brazilian Highlands"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 340,
question: 'The International Date Line is at?',
options: ["0° longitude","90° E longitude","180° longitude","90° W longitude"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 341,
question: 'Which Indian state is the largest producer of tea?',
options: ["Darjeeling","Assam","Nilgiris","Kerala"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 342,
question: 'The Bering Sea separates?',
options: ["USA and Canada","Russia and USA","Russia and Japan","Japan and USA"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 343,
question: "Which river is called the 'Rhine of South America'?",
options: ["Parana","Orinoco","Amazon","Uruguay"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 344,
question: 'The Kalahari Desert is in?',
options: ["Namibia and South Africa","Botswana and Namibia","South Africa and Mozambique","Botswana and South Africa"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 345,
question: 'Which Indian state has the maximum forest area?',
options: ["Madhya Pradesh","Arunachal Pradesh","Chhattisgarh","Maharashtra"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 346,
question: 'The Strait of Dover is the narrowest point of?',
options: ["English Channel","North Sea","Irish Sea","Celtic Sea"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 347,
question: 'The Cordillera system is mainly in?',
options: ["Asia","Europe","Americas","Africa"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 348,
question: 'Which ocean has the Bermuda Triangle?',
options: ["Indian","Atlantic","Pacific","Arctic"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 349,
question: 'The Namib Desert is in?',
options: ["South Africa","Botswana","Namibia","Angola"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 350,
question: 'Which Indian state has the most borders with other states?',
options: ["Uttar Pradesh","Madhya Pradesh","Rajasthan","Maharashtra"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 351,
question: 'The El Niño phenomenon occurs in?',
options: ["Indian Ocean","Atlantic Ocean","Pacific Ocean","Arctic Ocean"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 352,
question: 'The Sahel region is prone to?',
options: ["Desertification","Flooding","Earthquakes","Volcanic activity"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 353,
question: 'Which is the longest river in India?',
options: ["Brahmaputra","Indus","Ganga","Godavari"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 354,
question: 'The Tropic of Cancer passes through?',
options: ["Odisha","Bihar","West Bengal","Tripura"],
answer: 3,
category: "Geography",
difficulty: "hard"
},

{
id: 355,
question: 'Which country has both Sahara Desert and Mediterranean coast?',
options: ["Tunisia","Morocco","Algeria","Libya"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 356,
question: 'The Ganges-Brahmaputra delta is the largest because?',
options: ["Largest river system discharge","Rocky terrain","Tidal actions","Both A and C"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 357,
question: 'The Great Sandy Desert is in?',
options: ["Australia","Saudi Arabia","USA","China"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 358,
question: 'Which Indian state has the longest international boundary?',
options: ["Arunachal Pradesh","West Bengal","Rajasthan","Jammu & Kashmir"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 359,
question: 'The Irawaddy River flows through?',
options: ["Thailand","Cambodia","Myanmar","Laos"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 360,
question: 'The deepest point in the Indian Ocean is?',
options: ["Java Trench","Diama Deep","Ob Trench","Murray Ridge"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 361,
question: 'Which country is the largest producer of rubber?',
options: ["Malaysia","Indonesia","Thailand","Vietnam"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 362,
question: 'The Strait of Florida separates?',
options: ["Florida and Cuba","Florida and Bahamas","Cuba and Bahamas","USA and Mexico"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 363,
question: 'Which mountain pass connects Leh with Manali?',
options: ["Rohtang Pass","Baralacha Pass","Tanglang La","Zoji La"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 364,
question: 'The Huang He River carries a large amount of?',
options: ["Sand","Silt/Loess","Gravel","Clay"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 365,
question: 'The Horn of Africa includes?',
options: ["Somalia, Ethiopia, Eritrea","Kenya, Tanzania, Uganda","Sudan, Chad, Niger","Djibouti, Eritrea, Ethiopia"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 366,
question: 'The Coral Triangle is in?',
options: ["Indian Ocean","Caribbean Sea","Western Pacific","Eastern Pacific"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 367,
question: 'Which country has the most border crossings?',
options: ["USA","China","Germany","Russia"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 368,
question: 'The Tropic of Cancer passes through which Indian city?',
options: ["Agra","Jabalpur","Ranchi","Jaipur"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 369,
question: 'The Tengger Desert is in?',
options: ["China","Mongolia","Kazakhstan","Russia"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 370,
question: 'Which sea is the warmest?',
options: ["Caribbean Sea","Red Sea","Arabian Sea","Persian Gulf"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 371,
question: 'The Kaveri water dispute is between which states?',
options: ["Karnataka, Tamil Nadu","Tamil Nadu, Kerala","Karnataka, Andhra Pradesh","Tamil Nadu, Andhra Pradesh"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 372,
question: 'The Lakshadweep Islands are of what type?',
options: ["Volcanic","Coral","Continental shelf","Glacial"],
answer: 1,
category: "Geography",
difficulty: "hard"
},

{
id: 373,
question: 'The Isthmus of Panama connects?',
options: ["North and South America","Central America and South America","North and Central America","Caribbean islands"],
answer: 0,
category: "Geography",
difficulty: "medium"
},

{
id: 374,
question: 'The Great Dividing Range runs along the coast of?',
options: ["Western Australia","Eastern Australia","Northern Australia","Southern Australia"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 375,
question: 'Which Indian city is the nearest to the Tropic of Cancer?',
options: ["Kolkata","Patna","Ahmedabad","Bhopal"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 376,
question: 'What is the atomic number of Carbon?',
options: ["4","6","8","12"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 377,
question: "Which organelle is called the 'powerhouse of the cell'?",
options: ["Nucleus","Ribosome","Mitochondria","Golgi body"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 378,
question: 'What is the speed of sound in air at 20°C?',
options: ["330 m/s","343 m/s","360 m/s","380 m/s"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 379,
question: "Which gas makes up about 78% of Earth's atmosphere?",
options: ["Oxygen","Argon","Nitrogen","Carbon Dioxide"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 380,
question: 'What is the chemical formula of sulfuric acid?',
options: ["HCl","H2SO3","H2SO4","H2S"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 381,
question: 'Which particle has no electric charge?',
options: ["Proton","Electron","Neutron","Positron"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 382,
question: 'What is the SI unit of electric current?',
options: ["Volt","Ohm","Ampere","Watt"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 383,
question: 'Which phenomenon explains the bending of light around corners?',
options: ["Refraction","Reflection","Diffraction","Polarization"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 384,
question: 'DNA stands for?',
options: ["Deoxyribonucleic Acid","Diribonucleic Acid","Deoxyribonitric Acid","Dinitro Nucleic Acid"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 385,
question: "What is the value of Avogadro's number?",
options: ["6.022×10²²","6.022×10²³","6.022×10²⁴","6.022×10²⁵"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 386,
question: "Which element has the symbol 'Fe'?",
options: ["Fluorine","Fermium","Iron","Francium"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 387,
question: 'The unit of frequency is?',
options: ["Pascal","Hertz","Newton","Joule"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 388,
question: 'Which type of radiation has the shortest wavelength?',
options: ["Radio waves","Infrared","X-rays","Gamma rays"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 389,
question: 'What is the chemical name of common salt?',
options: ["Sodium Carbonate","Sodium Chloride","Sodium Bicarbonate","Sodium Sulfate"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 390,
question: "Which blood group is called the 'universal donor'?",
options: ["A","AB","B","O"],
answer: 3,
category: "Science",
difficulty: "hard"
},

{
id: 391,
question: "What is Newton's First Law of Motion?",
options: ["F=ma","Law of Inertia","Law of Gravitation","Action-Reaction"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 392,
question: 'Which vitamin deficiency causes Scurvy?',
options: ["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 393,
question: 'The nucleus of an atom contains?',
options: ["Protons and electrons","Protons and neutrons","Neutrons and electrons","Only protons"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 394,
question: "Which element is the most abundant in Earth's crust?",
options: ["Silicon","Iron","Aluminum","Oxygen"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 395,
question: 'What is the process by which plants make food?',
options: ["Respiration","Photosynthesis","Transpiration","Digestion"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 396,
question: 'The pH of a neutral solution is?',
options: ["0","7","14","10"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 397,
question: 'Which gas is released during photosynthesis?',
options: ["Carbon Dioxide","Hydrogen","Nitrogen","Oxygen"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 398,
question: 'What is the unit of electrical resistance?',
options: ["Volt","Ampere","Ohm","Watt"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 399,
question: 'Which part of the brain controls balance?',
options: ["Cerebrum","Medulla","Cerebellum","Hypothalamus"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 400,
question: 'What is the speed of light in vacuum?',
options: ["2×10⁸ m/s","3×10⁸ m/s","4×10⁸ m/s","5×10⁸ m/s"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 401,
question: 'Which acid is present in vinegar?',
options: ["Citric acid","Acetic acid","Tartaric acid","Lactic acid"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 402,
question: 'The number of chromosomes in a human cell is?',
options: ["23","44","46","48"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 403,
question: 'What is the chemical formula of water?',
options: ["HO","H2O","H3O","H2O2"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 404,
question: 'Which element is liquid at room temperature (besides mercury)?',
options: ["Gallium","Bromine","Cesium","Francium"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 405,
question: 'What is the process of converting solid to gas directly?',
options: ["Evaporation","Condensation","Sublimation","Deposition"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 406,
question: 'Which part of the cell contains genetic information?',
options: ["Cell wall","Cell membrane","Cytoplasm","Nucleus"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 407,
question: "What is Ohm's Law?",
options: ["V = IR","F = ma","E = mc²","P = mv"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 408,
question: 'The half-life of Carbon-14 is approximately?',
options: ["570 years","5700 years","57000 years","5.7 million years"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 409,
question: 'Which enzyme breaks down starch in saliva?',
options: ["Pepsin","Amylase","Lipase","Trypsin"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 410,
question: 'What is the name of the force that holds atomic nuclei together?',
options: ["Gravitational force","Electromagnetic force","Strong nuclear force","Weak nuclear force"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 411,
question: 'Which hormone regulates blood sugar levels?',
options: ["Adrenaline","Insulin","Thyroxine","Cortisol"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 412,
question: 'The chemical formula of glucose is?',
options: ["C6H12O6","C12H22O11","C6H6","CH4"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 413,
question: 'Which law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules?',
options: ["Boyle's Law","Charles' Law","Avogadro's Law","Gay-Lussac's Law"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 414,
question: 'What is the atomic mass of Carbon?',
options: ["6","10","12","14"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 415,
question: 'Which organ produces bile?',
options: ["Pancreas","Stomach","Liver","Kidney"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 416,
question: 'The phenomenon of total internal reflection is used in?',
options: ["Microscopes","Optical fibres","Telescopes","Periscopes"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 417,
question: 'What is the SI unit of force?',
options: ["Pascal","Joule","Newton","Watt"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 418,
question: 'Which metal is the best conductor of electricity?',
options: ["Copper","Aluminum","Iron","Silver"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 419,
question: 'What is the process by which DNA makes a copy of itself?',
options: ["Transcription","Translation","Replication","Mutation"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 420,
question: 'The ozone layer is found in which layer of atmosphere?',
options: ["Troposphere","Stratosphere","Mesosphere","Thermosphere"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 421,
question: 'Which disease is caused by the deficiency of Vitamin D?',
options: ["Scurvy","Rickets","Pellagra","Beriberi"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 422,
question: 'What is the chemical symbol for Potassium?',
options: ["P","Pt","Po","K"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 423,
question: 'Which force causes tides on Earth?',
options: ["Gravitational force of Sun","Gravitational force of Moon","Gravitational force of both Sun and Moon","Centrifugal force of Earth"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 424,
question: 'The unit of power is?',
options: ["Joule","Newton","Watt","Pascal"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 425,
question: 'Which type of bond involves sharing of electrons?',
options: ["Ionic bond","Covalent bond","Metallic bond","Hydrogen bond"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 426,
question: 'What is the chemical name of rust?',
options: ["Iron oxide","Iron carbonate","Iron sulfate","Iron chloride"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 427,
question: 'Which blood cells are responsible for immunity?',
options: ["Red blood cells","Platelets","White blood cells","Plasma"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 428,
question: 'The critical angle for total internal reflection depends on?',
options: ["Wavelength of light","Refractive index","Intensity of light","Frequency"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 429,
question: 'What is the formula for kinetic energy?',
options: ["mgh","½mv²","mv","½mgh"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 430,
question: 'Which element is used in making semiconductors?',
options: ["Germanium","Tungsten","Platinum","Titanium"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 431,
question: 'The Hardy-Weinberg principle describes?',
options: ["Genetic drift","Population genetics equilibrium","Natural selection","Mutation rate"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 432,
question: 'What is the unit of measurement for luminous intensity?',
options: ["Lux","Candela","Lumen","Watt"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 433,
question: 'Which gas is responsible for the greenhouse effect primarily?',
options: ["Oxygen","Nitrogen","Carbon Dioxide","Ozone"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 434,
question: 'What is the process of fusion in nuclear physics?',
options: ["Splitting heavy nuclei","Combining light nuclei","Radioactive decay","Fission of atoms"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 435,
question: 'Which organ in the human body produces insulin?',
options: ["Liver","Kidney","Pancreas","Spleen"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 436,
question: 'What is absolute zero temperature?',
options: ["-273°C","-173°C","-373°C","-473°C"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 437,
question: 'Which type of mirror is used in vehicle rear-view mirrors?',
options: ["Concave","Plane","Convex","Parabolic"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 438,
question: 'The process of electrolysis was discovered by?',
options: ["Volta","Faraday","Ohm","Ampere"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 439,
question: 'What is the chemical formula of methane?',
options: ["CH2","CH4","C2H4","C2H6"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 440,
question: 'Which layer of Earth is liquid?',
options: ["Inner core","Outer core","Mantle","Crust"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 441,
question: 'DNA replication is called semiconservative because?',
options: ["Each new DNA has one old and one new strand","Both strands are new","Both strands are old","DNA is destroyed after replication"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 442,
question: 'The device used to measure atmospheric pressure is?',
options: ["Thermometer","Hydrometer","Barometer","Manometer"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 443,
question: 'Which planet has the most moons?',
options: ["Jupiter","Saturn","Uranus","Neptune"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 444,
question: 'What is the chemical formula of ammonia?',
options: ["NH","NH2","NH3","NH4"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 445,
question: 'The principle of conservation of momentum states?',
options: ["Momentum can be created","Momentum is always lost","Total momentum in a closed system is constant","Momentum equals force"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 446,
question: 'Which microorganism was first observed by Leeuwenhoek?',
options: ["Virus","Bacteria","Fungi","Protozoa"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 447,
question: 'What is the name of the process where a caterpillar becomes a butterfly?',
options: ["Hibernation","Metamorphosis","Migration","Moulting"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 448,
question: 'The formula for calculating pressure is?',
options: ["Force/Area","Mass/Volume","Force×Area","Mass×Acceleration"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 449,
question: 'Which vitamin helps in blood clotting?',
options: ["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 450,
question: 'What is the primary function of the kidneys?',
options: ["Produce insulin","Filter blood and produce urine","Digest food","Pump blood"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 451,
question: 'The phenomenon of electromagnetic induction was discovered by?',
options: ["Maxwell","Faraday","Edison","Tesla"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 452,
question: 'Which element has the highest melting point?',
options: ["Iron","Tungsten","Carbon","Platinum"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 453,
question: 'What is the approximate age of the universe?',
options: ["10 billion years","13.8 billion years","15 billion years","20 billion years"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 454,
question: 'The process of nuclear fission releases energy according to?',
options: ["Newton's laws","Einstein's E=mc²","Ohm's law","Faraday's law"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 455,
question: 'Which organ is affected by jaundice?',
options: ["Kidney","Heart","Liver","Lung"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 456,
question: 'What is the chemical name of bleaching powder?',
options: ["Calcium chloride","Calcium hypochlorite","Calcium carbonate","Calcium sulfate"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 457,
question: 'The vaccine for smallpox was discovered by?',
options: ["Pasteur","Fleming","Jenner","Koch"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 458,
question: 'Which planet is closest in size to Earth?',
options: ["Mars","Venus","Mercury","Neptune"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 459,
question: 'What is the unit of electrical charge?',
options: ["Volt","Ampere","Coulomb","Farad"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 460,
question: 'The largest organ in the human body is?',
options: ["Liver","Brain","Skin","Lungs"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 461,
question: 'Which process converts ADP to ATP in cells?',
options: ["Glycolysis","Oxidative phosphorylation","Fermentation","Photolysis"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 462,
question: 'The Doppler effect is related to?',
options: ["Color of light","Frequency change due to motion","Refraction of waves","Amplitude of sound"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 463,
question: 'Which gas is used in electric bulbs?',
options: ["Oxygen","Nitrogen","Argon","Neon"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 464,
question: 'What is the chemical formula of table sugar (sucrose)?',
options: ["C6H12O6","C12H22O11","C11H22O11","C12H24O12"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 465,
question: 'The phenomenon of light bending when passing through a medium is called?',
options: ["Reflection","Refraction","Diffraction","Polarization"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 466,
question: "Which planet is known as the 'Evening Star'?",
options: ["Mars","Mercury","Saturn","Venus"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 467,
question: 'What is the chemical formula of carbon dioxide?',
options: ["CO","CO2","C2O","CO3"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 468,
question: 'The SI unit of temperature is?',
options: ["Celsius","Fahrenheit","Kelvin","Rankine"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 469,
question: 'Which disease is caused by the deficiency of iodine?',
options: ["Anemia","Goiter","Rickets","Pellagra"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 470,
question: 'What is the acceleration due to gravity on Earth?',
options: ["8.9 m/s²","9.8 m/s²","10.8 m/s²","7.8 m/s²"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 471,
question: 'The periodic table was developed by?',
options: ["Dalton","Rutherford","Mendeleev","Bohr"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 472,
question: 'Which type of electromagnetic radiation is used in MRI?',
options: ["X-rays","Gamma rays","Radio waves","Microwaves"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 473,
question: 'What is the chemical formula of ozone?',
options: ["O","O2","O3","O4"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 474,
question: 'Which part of the brain controls hunger and thirst?',
options: ["Cerebrum","Hippocampus","Hypothalamus","Amygdala"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 475,
question: 'The process by which plants lose water through leaves is?',
options: ["Transpiration","Evaporation","Respiration","Absorption"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 476,
question: 'What is the unit of magnetic field strength?',
options: ["Gauss","Tesla","Weber","Henry"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 477,
question: 'The element with highest atomic number that exists naturally is?',
options: ["Uranium","Plutonium","Radium","Thorium"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 478,
question: 'Which scientist proposed the theory of evolution?',
options: ["Lamarck","Mendel","Darwin","Wallace"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 479,
question: 'What is the formula for potential energy?',
options: ["½mv²","mgh","mv","Fd"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 480,
question: 'The center of mass of Earth and Moon lies?',
options: ["Inside the Earth","At the Moon's surface","Between them but closer to Earth","Between them at midpoint"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 481,
question: 'Which substance is the hardest naturally occurring mineral?',
options: ["Quartz","Topaz","Corundum","Diamond"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 482,
question: 'What is the chemical formula of hydrochloric acid?',
options: ["H2S","HCl","H2SO4","HNO3"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 483,
question: 'Bioluminescence is the ability of living organisms to?',
options: ["Produce light","Absorb UV radiation","Reflect light","Store heat"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 484,
question: 'What is the smallest unit of matter?',
options: ["Atom","Molecule","Ion","Quark"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 485,
question: 'Which planet takes the longest to orbit the Sun?',
options: ["Saturn","Uranus","Neptune","Jupiter"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 486,
question: 'The chemical symbol for Gold is?',
options: ["Gd","Go","Au","Ag"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 487,
question: 'What is the half-life of Uranium-238?',
options: ["4.5 million years","4.5 billion years","45 million years","450 million years"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 488,
question: 'The process of conversion of liquid to solid is called?',
options: ["Freezing","Melting","Evaporation","Condensation"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 489,
question: 'Which organ in the human body produces red blood cells in adults?',
options: ["Spleen","Liver","Bone marrow","Lymph nodes"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 490,
question: 'What is the chemical formula of ethanol?',
options: ["CH3OH","C2H5OH","C3H7OH","C4H9OH"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 491,
question: "Newton's law of universal gravitation states that the gravitational force is?",
options: ["Proportional to the sum of masses","Proportional to the product of masses","Inversely proportional to the sum of masses","Proportional to the square of masses"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 492,
question: 'Which element is the most abundant in the human body?',
options: ["Carbon","Hydrogen","Oxygen","Nitrogen"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 493,
question: 'What is the study of fungi called?',
options: ["Botany","Mycology","Phycology","Bacteriology"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 494,
question: 'The process by which green plants trap sunlight energy is?',
options: ["Chemosynthesis","Photosynthesis","Fermentation","Glycolysis"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 495,
question: 'Which type of radiation is used in cancer treatment?',
options: ["Alpha radiation","Beta radiation","Gamma radiation","X-rays"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 496,
question: 'What is the unit of measurement for radioactivity?',
options: ["Becquerel","Curie","Roentgen","Rem"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 497,
question: 'The speed of light is approximately?',
options: ["300,000 km/h","300,000 km/s","30,000 km/s","3,000,000 km/s"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 498,
question: 'Which gas is produced when acids react with metals?',
options: ["Oxygen","Carbon dioxide","Hydrogen","Nitrogen"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 499,
question: 'What is the process of converting solid iron ore to iron?',
options: ["Smelting","Electrolysis","Roasting","Calcination"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 500,
question: 'The four fundamental forces in nature are?',
options: ["Gravity, Electromagnetic, Strong nuclear, Weak nuclear","Gravity, Friction, Tension, Normal","Gravity, Magnetism, Nuclear, Chemical","Gravity, Electric, Magnetic, Centrifugal"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 501,
question: 'Which planet has a day longer than its year?',
options: ["Mercury","Venus","Mars","Pluto"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 502,
question: 'What is the chemical formula of limestone?',
options: ["CaSO4","CaCO3","Ca(OH)2","CaCl2"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 503,
question: 'The process by which organisms maintain a stable internal environment is?',
options: ["Evolution","Homeostasis","Metabolism","Symbiosis"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 504,
question: 'Which type of bond exists between water molecules?',
options: ["Covalent bond","Ionic bond","Hydrogen bond","Van der Waals forces"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 505,
question: "What is Bernoulli's principle about?",
options: ["Conservation of energy in fluids","Pressure in solids","Heat transfer","Wave motion"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 506,
question: 'The chemical formula of baking soda is?',
options: ["Na2CO3","NaHCO3","NaOH","NaCl"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 507,
question: 'Which process is used to separate crude oil into fractions?',
options: ["Distillation","Filtration","Chromatography","Crystallization"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 508,
question: 'The SI unit of energy is?',
options: ["Watt","Newton","Joule","Pascal"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 509,
question: 'Which scientist first described the structure of DNA?',
options: ["Watson and Crick","Rosalind Franklin","Linus Pauling","Erwin Chargaff"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 510,
question: 'What is the chemical formula of nitric acid?',
options: ["HCl","H2SO4","HNO3","H3PO4"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 511,
question: "The term 'ecology' was coined by?",
options: ["Darwin","Haeckel","Linnaeus","Lamarck"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 512,
question: 'Which subatomic particle was discovered by Thomson?',
options: ["Proton","Neutron","Electron","Positron"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 513,
question: 'The speed of electromagnetic waves in vacuum is?',
options: ["Depends on frequency","Depends on wavelength","Same for all","Different for each type"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 514,
question: 'What is the function of ribosomes in cells?',
options: ["Energy production","Protein synthesis","DNA replication","Cell division"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 515,
question: 'Which isotope is used in carbon dating?',
options: ["Carbon-12","Carbon-13","Carbon-14","Carbon-15"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 516,
question: 'The Chandrasekhar Limit is related to?',
options: ["Black holes","White dwarfs","Neutron stars","Pulsars"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 517,
question: 'What is the chemical formula of glucose?',
options: ["C6H12O6","C12H22O11","C6H10O5","C5H10O5"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 518,
question: 'Which process produces ATP without oxygen?',
options: ["Aerobic respiration","Anaerobic respiration","Photosynthesis","Fermentation only"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 519,
question: "The 'Big Bang Theory' explains?",
options: ["Evolution of species","Origin of the universe","Formation of black holes","Motion of planets"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 520,
question: 'What is the chemical symbol for Sodium?',
options: ["So","Sd","Na","Nm"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 521,
question: 'Which law relates gas pressure and volume at constant temperature?',
options: ["Charles' Law","Boyle's Law","Gay-Lussac's Law","Avogadro's Law"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 522,
question: 'The phenomenon of change in frequency of waves due to relative motion is?',
options: ["Doppler effect","Interference","Diffraction","Resonance"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 523,
question: 'Which acid is found in the stomach?',
options: ["Sulfuric acid","Hydrochloric acid","Nitric acid","Acetic acid"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 524,
question: 'What is the formula for gravitational potential energy?',
options: ["½mv²","mgh","mv²","Fd"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 525,
question: 'Which element is used in nuclear reactors as fuel?',
options: ["Radium","Thorium","Uranium","Plutonium"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 526,
question: 'The genetic code consists of how many base triplets (codons)?',
options: ["20","32","64","128"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 527,
question: 'What is the unit of wavelength?',
options: ["Hertz","Meter","Second","Candela"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 528,
question: 'Which part of the eye controls the amount of light entering?',
options: ["Retina","Cornea","Iris","Lens"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 529,
question: 'The chemical formula of calcium carbonate is?',
options: ["CaCl2","Ca(OH)2","CaCO3","CaSO4"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 530,
question: 'What is the process of breaking down food molecules in cells to release energy?',
options: ["Anabolism","Catabolism","Respiration","Digestion"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 531,
question: 'Which fundamental particle carries the electromagnetic force?',
options: ["Gluon","Graviton","Photon","Boson"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 532,
question: "The immune system's first line of defense includes?",
options: ["Antibodies","Skin and mucus membranes","T-cells","B-cells"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 533,
question: 'What is the chemical formula of carbon monoxide?',
options: ["CO2","CO","C2O","CO3"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 534,
question: 'Which type of radiation can penetrate the most material?',
options: ["Alpha","Beta","Gamma","X-ray"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 535,
question: 'The Doppler shift of light from distant galaxies tells us they are?',
options: ["Moving toward us","Moving away from us","Stationary","Rotating"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 536,
question: "Which gland is called the 'master gland' of the endocrine system?",
options: ["Thyroid","Adrenal","Pituitary","Pineal"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 537,
question: 'What is the process of a gas changing to liquid called?',
options: ["Solidification","Evaporation","Condensation","Sublimation"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 538,
question: 'The chemical formula of hydrofluoric acid is?',
options: ["HCl","HBr","HI","HF"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 539,
question: 'Which principle states that the position and momentum of a particle cannot both be precisely measured?',
options: ["Pauli Exclusion Principle","Heisenberg Uncertainty Principle","Schrödinger's Principle","Bohr's Principle"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 540,
question: 'What is the chemical formula of ethylene?',
options: ["CH4","C2H4","C2H6","C3H6"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 541,
question: 'Which cell organelle is responsible for photosynthesis?',
options: ["Mitochondria","Chloroplast","Nucleus","Ribosome"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 542,
question: 'The SI base unit of amount of substance is?',
options: ["Gram","Mole","Kilogram","Dalton"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 543,
question: 'What is the chemical formula of phosphoric acid?',
options: ["H2SO4","HNO3","H3PO4","HPO3"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 544,
question: 'Which force is responsible for keeping electrons in orbit around the nucleus?',
options: ["Gravitational","Nuclear","Electromagnetic","Centrifugal"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 545,
question: 'The process of nuclear fusion occurs in?',
options: ["Nuclear reactors","Atom bombs","Stars","Radioactive decay"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 546,
question: 'What is the unit of luminous flux?',
options: ["Candela","Lux","Lumen","Watt"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 547,
question: 'Which gas turns lime water milky?',
options: ["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 548,
question: 'The equation E = mc² was proposed by?',
options: ["Newton","Planck","Bohr","Einstein"],
answer: 3,
category: "Science",
difficulty: "medium"
},

{
id: 549,
question: 'Which element is in group 18 (noble gases)?',
options: ["Chlorine","Nitrogen","Argon","Fluorine"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 550,
question: 'What is the chemical formula of acetic acid?',
options: ["CH3COOH","CH2COOH","CHCOOH","C2H5COOH"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 551,
question: 'The phenomenon of light splitting into colors is called?',
options: ["Refraction","Dispersion","Diffraction","Reflection"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 552,
question: 'Which planet has the Great Red Spot?',
options: ["Saturn","Mars","Jupiter","Neptune"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 553,
question: "Who wrote 'War and Peace'?",
options: ["Dostoyevsky","Turgenev","Tolstoy","Chekhov"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 554,
question: 'The United Nations was founded in?',
options: ["1944","1945","1946","1947"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 555,
question: 'Which is the largest religion in the world?',
options: ["Islam","Hinduism","Buddhism","Christianity"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 556,
question: 'Who invented the World Wide Web?',
options: ["Bill Gates","Tim Berners-Lee","Steve Jobs","Vint Cerf"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 557,
question: 'The Nobel Prize is awarded in how many categories?',
options: ["4","5","6","7"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 558,
question: 'Which country is the largest producer of coffee?',
options: ["Colombia","Vietnam","Ethiopia","Brazil"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 559,
question: 'The headquarters of the United Nations is in?',
options: ["Geneva","Washington DC","New York","London"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 560,
question: "Who wrote 'Romeo and Juliet'?",
options: ["Chaucer","Marlowe","Shakespeare","Jonson"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 561,
question: 'The International Court of Justice is located in?',
options: ["Brussels","Geneva","The Hague","Strasbourg"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 562,
question: 'Which country has the oldest written constitution?',
options: ["UK","India","France","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 563,
question: 'The Pulitzer Prize is awarded in?',
options: ["Science","Literature and Journalism","Sports","Medicine"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 564,
question: 'Who invented the telephone?',
options: ["Edison","Bell","Marconi","Tesla"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 565,
question: 'The headquarters of UNESCO is in?',
options: ["New York","Geneva","Paris","Vienna"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 566,
question: "Which is the world's oldest democracy?",
options: ["USA","UK","Greece","India"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 567,
question: 'Who was the first person to walk on the Moon?',
options: ["Yuri Gagarin","Buzz Aldrin","Neil Armstrong","Michael Collins"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 568,
question: 'The International Olympic Committee (IOC) is headquartered in?',
options: ["Paris","Geneva","Lausanne","Zurich"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 569,
question: 'Which country produces the most wine?',
options: ["France","Italy","Spain","Australia"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 570,
question: "Who wrote 'Pride and Prejudice'?",
options: ["Charlotte Brontë","George Eliot","Jane Austen","Virginia Woolf"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 571,
question: "The world's largest library is?",
options: ["British Library","Library of Congress","Bodleian Library","Harvard Library"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 572,
question: 'Which country has the most billionaires?',
options: ["China","India","Germany","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 573,
question: 'The headquarters of INTERPOL is in?',
options: ["Paris","Lyon","Brussels","London"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 574,
question: 'Who invented the airplane?',
options: ["Glenn Curtiss","Samuel Langley","Wright Brothers","Leonardo da Vinci"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 575,
question: 'The World Bank is headquartered in?',
options: ["New York","London","Washington DC","Geneva"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 576,
question: 'Which author wrote the Harry Potter series?',
options: ["Suzanne Collins","J.K. Rowling","Philip Pullman","Tolkien"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 577,
question: 'The Oscars are officially called?',
options: ["Golden Globe Awards","BAFTA Awards","Academy Awards","Screen Actors Guild Awards"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 578,
question: 'Who invented the steam engine?',
options: ["James Watt","George Stephenson","Richard Trevithick","Thomas Newcomen"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 579,
question: 'The International Monetary Fund (IMF) was established in?',
options: ["1942","1944","1945","1946"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 580,
question: 'Which country has the highest Human Development Index?',
options: ["USA","Norway","Switzerland","Germany"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 581,
question: "Who wrote '1984'?",
options: ["Aldous Huxley","George Orwell","Ray Bradbury","H.G. Wells"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 582,
question: 'The FIFA World Cup is held every?',
options: ["2 years","3 years","4 years","5 years"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 583,
question: 'Which is the most spoken language in the world?',
options: ["English","Spanish","Mandarin Chinese","Hindi"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 584,
question: 'The Red Cross was founded by?',
options: ["Albert Schweitzer","Henry Dunant","Florence Nightingale","Louis Pasteur"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 585,
question: "Who wrote 'The Alchemist'?",
options: ["Gabriel García Márquez","Mario Vargas Llosa","Paulo Coelho","Jorge Amado"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 586,
question: 'Which country has the most UNESCO World Heritage Sites?',
options: ["France","China","Italy","Spain"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 587,
question: 'The World Trade Organization (WTO) was established in?',
options: ["1990","1992","1993","1995"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 588,
question: 'Who painted the Sistine Chapel ceiling?',
options: ["Leonardo da Vinci","Raphael","Donatello","Michelangelo"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 589,
question: 'The BRICS countries include?',
options: ["Brazil, Russia, India, China, South Africa","Brazil, Romania, India, China, Saudi Arabia","Bulgaria, Russia, Indonesia, China, South Africa","Brazil, Russia, Iran, China, South Africa"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 590,
question: "Who wrote 'The Great Gatsby'?",
options: ["Ernest Hemingway","F. Scott Fitzgerald","William Faulkner","John Steinbeck"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 591,
question: 'The Olympics were revived in modern form in?',
options: ["1892","1896","1900","1904"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 592,
question: 'Which country has the most Olympic gold medals overall?',
options: ["China","USSR/Russia","Germany","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 593,
question: 'Who composed the Fifth Symphony?',
options: ["Mozart","Bach","Beethoven","Brahms"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 594,
question: 'The headquarters of the World Health Organization is in?',
options: ["New York","Geneva","Vienna","Brussels"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 595,
question: 'Which river is the longest in Europe?',
options: ["Rhine","Danube","Volga","Thames"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 596,
question: "Who wrote 'Don Quixote'?",
options: ["Lope de Vega","Miguel de Cervantes","Federico García Lorca","Pablo Neruda"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 597,
question: 'The United Nations has how many official languages?',
options: ["4","5","6","7"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 598,
question: 'Which country is the largest producer of oil?',
options: ["Russia","Iraq","Saudi Arabia","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 599,
question: 'Who invented the internet (as a protocol)?',
options: ["Tim Berners-Lee","Vint Cerf","Bill Gates","Steve Jobs"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 600,
question: 'The International Space Station was launched in?',
options: ["1996","1998","2000","2002"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 601,
question: 'Which is the largest stock exchange by market capitalization?',
options: ["London Stock Exchange","Tokyo Stock Exchange","Shanghai Stock Exchange","New York Stock Exchange"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 602,
question: "Who wrote 'Les Misérables'?",
options: ["Alexandre Dumas","Gustave Flaubert","Victor Hugo","Honoré de Balzac"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 603,
question: 'The Kyoto Protocol deals with?',
options: ["Nuclear disarmament","Climate change and greenhouse gases","Biodiversity","Free trade"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 604,
question: 'Which country has the most spoken dialects?',
options: ["China","India","Nigeria","Papua New Guinea"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 605,
question: 'Who invented the radio?',
options: ["Edison","Marconi","Tesla","Bell"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 606,
question: 'The headquarters of NATO is in?',
options: ["London","Paris","Brussels","The Hague"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 607,
question: "Which is the world's largest democracy?",
options: ["USA","India","China","Brazil"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 608,
question: "Who wrote 'Crime and Punishment'?",
options: ["Tolstoy","Gogol","Turgenev","Dostoevsky"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 609,
question: 'The Human Genome Project was completed in?',
options: ["1998","2000","2003","2005"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 610,
question: 'Which country has the most nuclear weapons?',
options: ["USA","France","China","Russia"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 611,
question: 'The Booker Prize is awarded for?',
options: ["Science","Fiction in English","Non-fiction","Drama"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 612,
question: 'Who invented the microscope?',
options: ["Galileo","Leeuwenhoek","Hooke","Newton"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 613,
question: 'The Antarctic Treaty was signed in?',
options: ["1955","1957","1959","1961"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 614,
question: 'Which country has the most hospitals?',
options: ["USA","India","China","Russia"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 615,
question: "Who wrote 'Hamlet'?",
options: ["Marlowe","Webster","Jonson","Shakespeare"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 616,
question: 'The headquarters of the African Union is in?',
options: ["Nairobi","Cairo","Lagos","Addis Ababa"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 617,
question: 'Which country has won the most FIFA World Cups?',
options: ["Germany","Argentina","Italy","Brazil"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 618,
question: "Who wrote 'Anna Karenina'?",
options: ["Dostoevsky","Chekhov","Tolstoy","Turgenev"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 619,
question: 'The European Union was formally established by the Maastricht Treaty in?',
options: ["1990","1991","1992","1993"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 620,
question: 'Which is the oldest university in the world?',
options: ["Oxford","Cambridge","Bologna","Harvard"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 621,
question: "The 'Golden Gate' bridge is in?",
options: ["Los Angeles","Las Vegas","San Francisco","Seattle"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 622,
question: 'Who invented the electric light bulb?',
options: ["Tesla","Faraday","Edison","Bell"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 623,
question: 'Which country has the most internet users?',
options: ["India","USA","China","Indonesia"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 624,
question: 'The International Criminal Court is located in?',
options: ["Brussels","Strasbourg","Geneva","The Hague"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 625,
question: "Who wrote 'Brave New World'?",
options: ["George Orwell","Aldous Huxley","H.G. Wells","Ray Bradbury"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 626,
question: 'The ASEAN was founded in?',
options: ["1965","1966","1967","1968"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 627,
question: 'Which is the most widely read book in history?',
options: ["Quran","Harry Potter","Bible","Don Quixote"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 628,
question: 'Who invented penicillin?',
options: ["Pasteur","Koch","Fleming","Lister"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 629,
question: 'The Commonwealth of Nations has how many members?',
options: ["45","54","56","63"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 630,
question: "Which country has the world's oldest parliament (Althing)?",
options: ["Denmark","Norway","Iceland","Sweden"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 631,
question: "Who wrote 'The Lord of the Rings'?",
options: ["C.S. Lewis","J.R.R. Tolkien","Philip Pullman","Terry Pratchett"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 632,
question: "The first artificial satellite 'Sputnik' was launched by?",
options: ["USA","USSR","UK","France"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 633,
question: 'Which country has the most medals in the Winter Olympics?',
options: ["Germany","Norway","Canada","USA"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 634,
question: 'Who invented the television?',
options: ["Edison","Marconi","Baird","Tesla"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 635,
question: 'The International Labour Organization (ILO) is headquartered in?',
options: ["New York","Vienna","Geneva","Brussels"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 636,
question: 'Which country produces the most diamonds?',
options: ["South Africa","Botswana","Russia","Australia"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 637,
question: "Who wrote 'One Hundred Years of Solitude'?",
options: ["Pablo Neruda","Mario Vargas Llosa","Gabriel García Márquez","Jorge Luis Borges"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 638,
question: "The 'Silicon Valley' is located in?",
options: ["Seattle, Washington","Austin, Texas","Boston, Massachusetts","San Jose, California"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 639,
question: 'Which country has the highest literacy rate?',
options: ["South Korea","Japan","Finland","Norway"],
answer: 0,
category: "GK",
difficulty: "hard"
},

{
id: 640,
question: 'Who invented X-rays?',
options: ["Marie Curie","Wilhelm Röntgen","Henri Becquerel","Max Planck"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 641,
question: 'The headquarters of OPEC is in?',
options: ["Riyadh","Dubai","Vienna","Baghdad"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 642,
question: "Which is the world's longest suspension bridge?",
options: ["Golden Gate","Akashi Kaikyō","Øresund","Brooklyn Bridge"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 643,
question: "Who painted 'The Starry Night'?",
options: ["Monet","Renoir","Van Gogh","Cézanne"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 644,
question: 'The Non-Aligned Movement was founded in?',
options: ["1955","1957","1961","1965"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 645,
question: 'Which country is the largest exporter of goods?',
options: ["USA","Germany","Japan","China"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 646,
question: "Who wrote 'Fahrenheit 451'?",
options: ["Aldous Huxley","George Orwell","Ray Bradbury","H.G. Wells"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 647,
question: "The 'Wall Street' is a symbol of?",
options: ["US government","US military","US stock market","US media"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 648,
question: 'Which country has won the most Nobel Prizes?',
options: ["Germany","UK","France","USA"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 649,
question: 'Who invented the calculator?',
options: ["Charles Babbage","Blaise Pascal","Leibniz","Alan Turing"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 650,
question: 'The headquarters of the World Bank is in?',
options: ["New York","London","Washington DC","Geneva"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 651,
question: 'Which artist painted the Mona Lisa?',
options: ["Raphael","Michelangelo","Leonardo da Vinci","Botticelli"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 652,
question: "The 'Silicon Savannah' refers to the tech hub in?",
options: ["South Africa","Nigeria","Kenya","Ethiopia"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 653,
question: 'Who was the first woman to win a Nobel Prize?',
options: ["Rosalind Franklin","Lise Meitner","Marie Curie","Dorothy Hodgkin"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 654,
question: 'The G7 group currently consists of?',
options: ["USA, UK, France, Germany, Italy, Canada, Japan","USA, UK, France, Germany, Italy, Canada, Australia","USA, UK, France, Germany, Italy, Canada, Russia","USA, UK, France, Germany, Italy, Spain, Japan"],
answer: 0,
category: "GK",
difficulty: "hard"
},

{
id: 655,
question: 'Which country has the most natural gas reserves?',
options: ["Iran","Qatar","Russia","USA"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 656,
question: "Who wrote 'The Art of War'?",
options: ["Confucius","Sun Tzu","Lao Tzu","Mao Tse-tung"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 657,
question: 'The headquarters of the WTO is in?',
options: ["New York","Vienna","Geneva","Brussels"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 658,
question: 'Which country is the largest producer of wheat?',
options: ["India","Russia","USA","China"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 659,
question: 'Who invented the transistor?',
options: ["Shockley, Bardeen and Brattain","Edison","Tesla","De Forest"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 660,
question: "The 'Hollywood' film industry is named after a district in?",
options: ["New York","Chicago","Los Angeles","San Francisco"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 661,
question: 'Which international organization deals with nuclear matters?',
options: ["IAEA","UNCTAD","UNESCO","UNCHR"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 662,
question: "Who composed 'The Four Seasons'?",
options: ["Bach","Handel","Vivaldi","Pachelbel"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 663,
question: 'The Schengen Agreement allows?',
options: ["Free trade","Free movement of people","Common currency","Common army"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 664,
question: 'Which country has the most spoken languages?',
options: ["China","India","Nigeria","Papua New Guinea"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 665,
question: "Who wrote 'The Wealth of Nations'?",
options: ["David Ricardo","Karl Marx","John Maynard Keynes","Adam Smith"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 666,
question: 'The International Court of Justice was established in?',
options: ["1944","1945","1946","1947"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 667,
question: 'Which country has hosted the most Olympics?',
options: ["Germany","France","UK","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 668,
question: 'Who invented the steam locomotive?',
options: ["James Watt","George Stephenson","Richard Trevithick","Robert Fulton"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 669,
question: 'The headquarters of Amnesty International is in?',
options: ["Geneva","New York","Brussels","London"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 670,
question: 'Which language has the most words?',
options: ["Mandarin","Spanish","English","German"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 671,
question: "Who composed the opera 'The Magic Flute'?",
options: ["Beethoven","Bach","Mozart","Handel"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 672,
question: 'The Rio Earth Summit on environment was held in?',
options: ["1990","1992","1994","1996"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 673,
question: 'Which country has the most coastline in the world?',
options: ["Russia","Norway","Australia","Canada"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 674,
question: 'Who invented the laser?',
options: ["Theodore Maiman","Charles Townes","Gordon Gould","Arthur Schawlow"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 675,
question: 'The first Nobel Prize was awarded in?',
options: ["1899","1900","1901","1902"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 676,
question: 'Which country has the most psychiatric beds per capita?',
options: ["USA","Germany","Japan","Switzerland"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 677,
question: "Who wrote 'The Communist Manifesto'?",
options: ["Lenin and Stalin","Marx and Engels","Trotsky and Lenin","Marx and Lenin"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 678,
question: 'The headquarters of the European Central Bank is in?',
options: ["Brussels","Frankfurt","Paris","Zurich"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 679,
question: 'Which country has the most golf courses?',
options: ["Scotland","Japan","Australia","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 680,
question: 'Who invented the diesel engine?',
options: ["Benz","Daimler","Otto","Diesel"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 681,
question: 'The MERCOSUR trade bloc is in?',
options: ["Southeast Asia","Africa","South America","Eastern Europe"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 682,
question: 'Which country has the most languages in its constitution?',
options: ["Switzerland","Belgium","South Africa","Canada"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 683,
question: "Who wrote 'The Origin of Species'?",
options: ["Lamarck","Wallace","Darwin","Mendel"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 684,
question: 'The first World War ended in?',
options: ["1917","1918","1919","1920"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 685,
question: 'Which country has the most registered patents?',
options: ["Germany","Japan","South Korea","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 686,
question: "Who painted 'Girl with a Pearl Earring'?",
options: ["Rembrandt","Vermeer","Hals","Rubens"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 687,
question: 'The World Meteorological Organization is headquartered in?',
options: ["New York","Vienna","Geneva","Brussels"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 688,
question: 'Which country has the most active volcanoes?',
options: ["Japan","Philippines","Iceland","Indonesia"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 689,
question: "Who wrote 'The Trial'?",
options: ["Thomas Mann","Franz Kafka","Herman Hesse","Stefan Zweig"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 690,
question: "The 'Silicon Roundabout' refers to the tech hub in?",
options: ["Dublin","Amsterdam","London","Berlin"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 691,
question: 'Which country is the largest producer of cocoa?',
options: ["Ghana","Nigeria","Ecuador","Ivory Coast"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 692,
question: 'Who invented the fax machine?',
options: ["Graham Bell","Thomas Edison","Alexander Bain","Samuel Morse"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 693,
question: 'The headquarters of the Red Cross is in?',
options: ["Paris","Brussels","Geneva","Zurich"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 694,
question: 'Which country has the most scientific publications?',
options: ["Germany","UK","Japan","China"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 695,
question: "Who wrote 'The Jungle Book'?",
options: ["Rudyard Kipling","H.G. Wells","Arthur Conan Doyle","R.L. Stevenson"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 696,
question: 'The International Atomic Energy Agency is headquartered in?',
options: ["Geneva","Brussels","Vienna","New York"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 697,
question: "Which country is the world's largest democracy by population?",
options: ["USA","Indonesia","Pakistan","India"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 698,
question: "Who painted 'The Last Supper'?",
options: ["Raphael","Michelangelo","Leonardo da Vinci","Botticelli"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 699,
question: 'The first email was sent by?',
options: ["Tim Berners-Lee","Vint Cerf","Ray Tomlinson","Bill Gates"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 700,
question: 'Which country has the most airports?',
options: ["Russia","China","India","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 701,
question: "Who wrote 'Gulliver's Travels'?",
options: ["Daniel Defoe","Henry Fielding","Jonathan Swift","Samuel Richardson"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 702,
question: 'The International Space Station orbits at an altitude of approximately?',
options: ["200 km","400 km","600 km","800 km"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 703,
question: 'Which country has the most stars on its flag?',
options: ["USA","Brazil","China","Australia"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 704,
question: 'Who invented the first programmable computer?',
options: ["John von Neumann","Alan Turing","Konrad Zuse","Charles Babbage"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 705,
question: 'The headquarters of the Food and Agriculture Organization is in?',
options: ["Geneva","New York","Paris","Rome"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 706,
question: 'Which country has the highest minimum wage?',
options: ["USA","Germany","Switzerland","Luxembourg"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 707,
question: "Who wrote 'The Count of Monte Cristo'?",
options: ["Victor Hugo","Alexandre Dumas","Stendhal","Gustave Flaubert"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 708,
question: 'The United Nations Security Council has how many permanent members?',
options: ["3","4","5","6"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 709,
question: 'Which country has the most engineers per capita?',
options: ["South Korea","Germany","Russia","Japan"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 710,
question: "Who composed the opera 'Carmen'?",
options: ["Verdi","Puccini","Bizet","Wagner"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 711,
question: "The 'Green Revolution' in India was associated with?",
options: ["MS Swaminathan","Norman Borlaug","Verghese Kurien","BR Ambedkar"],
answer: 0,
category: "GK",
difficulty: "hard"
},

{
id: 712,
question: 'Which country invented chess?',
options: ["Persia","China","India","Arabia"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 713,
question: "Who wrote 'The Odyssey'?",
options: ["Virgil","Sophocles","Homer","Euripides"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 714,
question: 'The headquarters of the OECD is in?',
options: ["Brussels","Geneva","London","Paris"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 715,
question: 'Which country has the most daily newspaper readers per capita?',
options: ["UK","Germany","Japan","USA"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 716,
question: 'Who invented the contact lens?',
options: ["Adolf Fick","Nikolai Tesla","Otto Wichterle","Kevin Tuohy"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 717,
question: "The 'Venice of the North' refers to?",
options: ["Stockholm","Amsterdam","Bruges","Copenhagen"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 718,
question: 'Which country has the most football (soccer) World Cup wins?',
options: ["Italy","Germany","Argentina","Brazil"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 719,
question: "Who wrote 'Moby Dick'?",
options: ["Nathaniel Hawthorne","Herman Melville","Mark Twain","Edgar Allan Poe"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 720,
question: "The 'Davos Forum' is formally known as?",
options: ["G20","World Economic Forum","Bilderberg Group","Trilateral Commission"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 721,
question: "Which country is the world's largest arms exporter?",
options: ["Russia","UK","France","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 722,
question: "Who painted 'Guernica'?",
options: ["Dalí","Miró","Picasso","Gris"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 723,
question: 'The International Finance Corporation is part of?',
options: ["IMF","United Nations","World Bank Group","WTO"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 724,
question: 'Which country has the most Internet bandwidth?',
options: ["China","USA","South Korea","Japan"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 725,
question: "Who wrote 'The Hitchhiker's Guide to the Galaxy'?",
options: ["Terry Pratchett","Douglas Adams","Isaac Asimov","Arthur C. Clarke"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 726,
question: 'The most widely used writing system in the world is?',
options: ["Latin script","Arabic script","Chinese characters","Cyrillic script"],
answer: 0,
category: "GK",
difficulty: "hard"
},

{
id: 727,
question: 'Which country has the most tax revenue as a percentage of GDP?',
options: ["Germany","Sweden","Denmark","France"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 728,
question: 'Who invented bifocal glasses?',
options: ["Isaac Newton","Benjamin Franklin","Thomas Jefferson","Galileo"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 729,
question: "The 'City of Light' refers to?",
options: ["Rome","London","Vienna","Paris"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 730,
question: 'Which country has the most Fortune 500 companies?',
options: ["China","Japan","UK","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 731,
question: "Who wrote 'The Iliad'?",
options: ["Virgil","Sophocles","Euripides","Homer"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 732,
question: 'The G20 group was established in?',
options: ["1997","1998","1999","2000"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 733,
question: 'Which country has the most natural wonders?',
options: ["Australia","China","USA","Brazil"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 734,
question: 'Who invented the submarine?',
options: ["David Bushnell","John Holland","Robert Fulton","Simon Lake"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 735,
question: "The 'Land of the Long White Cloud' refers to?",
options: ["Iceland","Ireland","New Zealand","Norway"],
answer: 2,
category: "GK",
difficulty: "hard"
},

{
id: 736,
question: 'Which country consumes the most energy per capita?',
options: ["UAE","Canada","Qatar","USA"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 737,
question: "Who wrote 'In Search of Lost Time'?",
options: ["Flaubert","Zola","Proust","Sartre"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 738,
question: 'The first test tube baby was born in?',
options: ["1975","1976","1977","1978"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 739,
question: 'Which country has the most museums?',
options: ["France","UK","Germany","USA"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 740,
question: 'Who invented vulcanized rubber?',
options: ["Charles Goodyear","John Dunlop","Harvey Firestone","André Michelin"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 741,
question: 'What is the value of π (pi) to 4 decimal places?',
options: ["3.1415","3.1416","3.1417","3.1418"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 742,
question: 'What is the square root of 225?',
options: ["13","14","15","16"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 743,
question: 'If a triangle has angles 30° and 60°, what is the third angle?',
options: ["80°","85°","90°","95°"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 744,
question: 'What is 17 × 18?',
options: ["296","304","306","316"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 745,
question: 'The sum of first 50 natural numbers is?',
options: ["1225","1250","1275","1300"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 746,
question: 'What is 2⁸?',
options: ["128","256","512","1024"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 747,
question: 'If x² - 5x + 6 = 0, what are the roots?',
options: ["2 and 3","1 and 6","2 and 4","3 and 4"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 748,
question: 'What is the LCM of 12 and 18?',
options: ["24","36","48","54"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 749,
question: 'A circle has radius 7cm. Its area is? (π = 22/7)',
options: ["144cm²","154cm²","164cm²","174cm²"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 750,
question: 'What is 15% of 560?',
options: ["72","78","84","90"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 751,
question: 'If a:b = 3:4 and b:c = 6:7, then a:c is?',
options: ["9:14","18:28","9:28","7:14"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 752,
question: 'The HCF of 36 and 48 is?',
options: ["6","8","12","18"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 753,
question: 'What is the value of √(144 + 25)?',
options: ["13","15","17","19"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 754,
question: 'If 3x + 4y = 10 and 2x - 3y = 1, the value of x is?',
options: ["2","3","4","5"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 755,
question: 'A train 120m long passes a pole in 12 seconds. Its speed is?',
options: ["8 m/s","10 m/s","12 m/s","15 m/s"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 756,
question: 'What is the cube of 12?',
options: ["1228","1628","1728","1828"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 757,
question: 'In how many ways can 5 books be arranged on a shelf?',
options: ["60","80","100","120"],
answer: 3,
category: "Maths",
difficulty: "medium"
},

{
id: 758,
question: 'The simple interest on Rs 1000 at 10% per year for 2 years is?',
options: ["Rs 100","Rs 150","Rs 200","Rs 250"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 759,
question: 'What is the probability of getting a head when tossing two coins?',
options: ["1/4","1/2","3/4","1"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 760,
question: 'A cylinder has radius 3.5cm and height 10cm. Its volume is? (π=22/7)',
options: ["385 cm³","385 cm³","392 cm³","400 cm³"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 761,
question: 'What is the sum of angles in a hexagon?',
options: ["540°","600°","720°","800°"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 762,
question: 'If log 2 = 0.3010, what is log 8?',
options: ["0.6020","0.7210","0.9030","1.2040"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 763,
question: 'The area of a trapezium with parallel sides 5cm and 9cm and height 4cm is?',
options: ["24 cm²","28 cm²","30 cm²","32 cm²"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 764,
question: 'How many prime numbers are there between 1 and 30?',
options: ["8","9","10","11"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 765,
question: 'What is 35% of 240?',
options: ["72","80","84","96"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 766,
question: 'If the perimeter of a square is 48cm, its area is?',
options: ["100 cm²","121 cm²","144 cm²","169 cm²"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 767,
question: 'The compound interest on Rs 2000 at 10% for 2 years is?',
options: ["Rs 400","Rs 420","Rs 440","Rs 460"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 768,
question: 'What is the value of sin 45°?',
options: ["1/2","√2/2","√3/2","1"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 769,
question: 'How many diagonals does a pentagon have?',
options: ["4","5","6","7"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 770,
question: 'If a number is increased by 25% and then decreased by 20%, the net change is?',
options: ["0%","2%","5%","10%"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 771,
question: 'What is 3⁴ + 4³?',
options: ["144","145","146","147"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 772,
question: 'The median of 3, 7, 5, 9, 1, 11, 8 is?',
options: ["5","7","8","9"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 773,
question: 'Two numbers are in ratio 4:5. Their sum is 81. The larger number is?',
options: ["36","40","45","50"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 774,
question: 'What is the cube root of 1331?',
options: ["9","10","11","12"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 775,
question: 'A man walks 4km East and then 3km North. His distance from start is?',
options: ["5km","6km","7km","8km"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 776,
question: 'If the selling price is 120% of cost price, the profit percentage is?',
options: ["12%","15%","20%","25%"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 777,
question: 'What is the number of zeros at the end of 100!?',
options: ["20","22","24","26"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 778,
question: 'The AM of two numbers is 25 and GM is 20. The numbers are?',
options: ["10 and 40","16 and 34","20 and 30","15 and 35"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 779,
question: 'If tan θ = 3/4, then sin θ is?',
options: ["3/4","3/5","4/5","4/3"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 780,
question: 'What is the area of equilateral triangle with side 6cm?',
options: ["9√3 cm²","12√3 cm²","15√3 cm²","18√3 cm²"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 781,
question: 'A sum doubles itself in 5 years at simple interest. The rate is?',
options: ["10%","15%","20%","25%"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 782,
question: 'How many positive integers less than 100 are divisible by both 4 and 6?',
options: ["6","8","10","12"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 783,
question: 'If f(x) = x² - 3x + 2, then f(0) + f(1) + f(2) =?',
options: ["0","1","2","3"],
answer: 3,
category: "Maths",
difficulty: "hard"
},

{
id: 784,
question: 'The perimeter of a semicircle with diameter 14cm is? (π=22/7)',
options: ["36cm","44cm","50cm","56cm"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 785,
question: 'What is 2/3 of 3/4 of 4/5 of 1000?',
options: ["300","400","500","600"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 786,
question: 'A shopkeeper marks price 30% above cost. He gives 10% discount. Profit %?',
options: ["15%","16%","17%","18%"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 787,
question: 'The number of ways to select 3 from 8 is?',
options: ["36","48","56","64"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 788,
question: 'If x + y = 10 and x² + y² = 58, then xy is?',
options: ["16","18","20","22"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 789,
question: 'What is √(0.0625)?',
options: ["0.025","0.25","0.5","2.5"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 790,
question: "If the ratio of ages of A and B is 3:5 and sum is 80, A's age is?",
options: ["24","28","30","32"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 791,
question: 'A train runs at 60 km/h. In 15 minutes it covers?',
options: ["12km","15km","16km","20km"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 792,
question: 'What is the sum of first n natural numbers?',
options: ["n(n+1)","n(n+1)/2","n(n-1)/2","n²"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 793,
question: 'If 2^x = 32, what is x?',
options: ["4","5","6","7"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 794,
question: 'The diagonal of a rectangle with length 12cm and width 5cm is?',
options: ["13cm","14cm","15cm","16cm"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 795,
question: 'What is the value of cos 60°?',
options: ["0","1/2","√3/2","1"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 796,
question: 'A pipe fills a tank in 6 hours and another in 12 hours. Together they fill in?',
options: ["3 hours","4 hours","5 hours","6 hours"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 797,
question: 'What is 17² - 13²?',
options: ["100","120","120","180"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 798,
question: 'If 5 men can do a work in 8 days, 4 men will do it in?',
options: ["8","9","10","11"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 799,
question: 'The number of factors of 72 is?',
options: ["9","10","11","12"],
answer: 3,
category: "Maths",
difficulty: "medium"
},

{
id: 800,
question: 'What is the value of tan 30°?',
options: ["1","√3","1/√3","√3/2"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 801,
question: 'A and B together can do work in 12 days. A alone in 20 days. B alone in?',
options: ["24","28","30","32"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 802,
question: 'What is the remainder when 2^100 is divided by 3?',
options: ["0","1","2","3"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 803,
question: 'The surface area of a cube with side 4cm is?',
options: ["64 cm²","80 cm²","96 cm²","112 cm²"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 804,
question: 'If a number is multiplied by 3/4 and increased by 8 gives 20, the number is?',
options: ["14","16","18","20"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 805,
question: 'What is the probability of getting at least one head in 3 coin tosses?',
options: ["1/8","3/8","7/8","5/8"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 806,
question: 'The sum of squares of first 10 natural numbers is?',
options: ["300","350","385","400"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 807,
question: 'Two trains of length 150m and 100m approach each other at 40 and 50 km/h. Time to cross?',
options: ["9.8s","10.8s","11.8s","12.8s"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 808,
question: 'If x/3 + y/4 = 1 and x/2 - y = 1, then x is?',
options: ["1","2","3","4"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 809,
question: 'The HCF and LCM of two numbers are 4 and 60. One number is 12. The other is?',
options: ["18","20","24","28"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 810,
question: 'What is (a+b)² - (a-b)²?',
options: ["4ab","2ab","a²-b²","2(a²+b²)"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 811,
question: 'A car increases speed from 60 to 90 km/h. Percentage increase is?',
options: ["30%","40%","50%","60%"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 812,
question: 'If the mean of 5 observations is 6 and four observations are 4,7,8,5, the fifth is?',
options: ["4","5","6","7"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 813,
question: 'What is 1 + 2 + 3 + ... + 100?',
options: ["4950","5000","5050","5100"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 814,
question: 'The circumference of a circle with area 154 cm² is? (π=22/7)',
options: ["44cm","48cm","52cm","56cm"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 815,
question: 'If 10 men can complete a job in 15 days, 5 men will complete it in?',
options: ["20","25","30","35"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 816,
question: 'What is the value of sin²30° + cos²30°?',
options: ["1/2","√3/2","1","3/4"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 817,
question: 'A mixture contains milk and water in ratio 5:2. If 7L of water is added, ratio becomes 5:3. Find milk?',
options: ["28L","35L","42L","49L"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 818,
question: "The number of ways to arrange letters in 'INDIA' is?",
options: ["60","120","180","360"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 819,
question: 'If P(A) = 0.4 and P(B) = 0.5 and P(A∩B) = 0.2, P(A∪B) is?',
options: ["0.5","0.6","0.7","0.8"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 820,
question: 'What is the sum of exterior angles of any polygon?',
options: ["180°","270°","360°","540°"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 821,
question: 'A shopkeeper buys at 10 for Rs 8, sells at 8 for Rs 10. Profit %?',
options: ["56.25%","57.25%","58.25%","59.25%"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 822,
question: 'The curved surface area of a cone with radius 5cm and slant height 13cm is? (π=22/7)',
options: ["204.05 cm²","209.09 cm²","220.05 cm²","214.29 cm²"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 823,
question: 'How many even numbers are there between 1 and 100?',
options: ["48","49","50","51"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 824,
question: 'If 20% of x is 16, then 30% of x is?',
options: ["20","22","24","26"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 825,
question: 'The harmonic mean of 4 and 6 is?',
options: ["4.8","5","5.2","5.5"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 826,
question: 'What is i² where i is the imaginary unit?',
options: ["1","i","-i","-1"],
answer: 3,
category: "Maths",
difficulty: "medium"
},

{
id: 827,
question: 'If a polynomial has roots 2, -3, and 5, it is?',
options: ["x³-4x²-11x+30","x³+4x²-11x-30","x³-4x²+11x-30","x³+4x²+11x+30"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 828,
question: 'The value of 7! is?',
options: ["2040","4040","5040","6040"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 829,
question: 'A number leaves remainder 3 when divided by 7 and remainder 2 when divided by 5. Smallest such number is?',
options: ["17","22","27","32"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 830,
question: 'What is the 10th term of AP: 3, 7, 11, 15...?',
options: ["39","41","43","45"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 831,
question: 'If the mean of a data set is 50 and standard deviation is 10, CV (coefficient of variation) is?',
options: ["15%","20%","25%","30%"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 832,
question: 'A cone and cylinder have same base and height. Ratio of volumes is?',
options: ["1:2","1:3","1:4","2:3"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 833,
question: 'What is the value of log₁₀(1000)?',
options: ["2","3","4","5"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 834,
question: 'Two numbers have LCM 60 and HCF 5. One number is 15. The other is?',
options: ["15","20","25","30"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 835,
question: 'The maximum value of sin(x) + cos(x) is?',
options: ["1","√2","2","√3"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 836,
question: 'What is 15 × 13 × 11 mod 7?',
options: ["0","1","2","3"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 837,
question: 'A boat goes 12km upstream in 4 hours and 15km downstream in 3 hours. Speed of stream is?',
options: ["1.5 km/h","2 km/h","2.5 km/h","3 km/h"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 838,
question: 'The number of solutions of x + y + z = 10 in non-negative integers is?',
options: ["55","65","66","77"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 839,
question: 'If x = 2 + √3, then x + 1/x is?',
options: ["4","3+√3","4+√3","2√3"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 840,
question: 'What is the value of sin(90° - θ)?',
options: ["sin θ","cos θ","tan θ","-sin θ"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 841,
question: 'A man rows 24km upstream in 6 hours. If stream speed is 2 km/h, time downstream is?',
options: ["3 hours","4 hours","5 hours","6 hours"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 842,
question: 'The variance of numbers 2, 4, 6, 8, 10 is?',
options: ["6","8","10","12"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 843,
question: 'If ΔABC ~ ΔPQR and their areas are 64 and 100, the ratio of perimeters is?',
options: ["4:5","8:10","16:25","64:100"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 844,
question: 'What is the sum of all 3-digit multiples of 9?',
options: ["49000","54945","55000","59445"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 845,
question: 'The number of integers in [−3.5, 3.5] is?',
options: ["6","7","8","9"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 846,
question: 'What is the distance between points (3,4) and (7,1)?',
options: ["4","5","√34","√41"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 847,
question: 'If ax² + bx + c = 0, sum of roots is?',
options: ["c/a","-b/a","b/a","-c/a"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 848,
question: 'The geometric series 1 + 1/2 + 1/4 + ... has sum?',
options: ["1","2","3","4"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 849,
question: 'In how many ways can 4 boys and 3 girls be seated in a row if girls must sit together?',
options: ["720","840","1080","4320"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 850,
question: 'What is 12!/10!?',
options: ["110","120","132","144"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 851,
question: 'If x³ - y³ = 152 and x - y = 2, xy is?',
options: ["20","22","24","26"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 852,
question: 'What is the area of a rhombus with diagonals 12cm and 18cm?',
options: ["100 cm²","108 cm²","116 cm²","124 cm²"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 853,
question: 'A can complete work in 20 days, B in 30, C in 60. All work for 4 days, then A leaves. B and C finish in?',
options: ["8 more days","10 more days","12 more days","14 more days"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 854,
question: 'What is the unit digit of 7⁶⁸?',
options: ["1","3","7","9"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 855,
question: 'The number of factors of 2⁴ × 3³ × 5² is?',
options: ["30","35","40","45"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 856,
question: 'If A and B are mutually exclusive, P(A)=0.3, P(B)=0.4, P(A∪B) is?',
options: ["0.5","0.6","0.7","0.8"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 857,
question: 'What is the arithmetic mean of 1/2, 1/3, 1/4?',
options: ["1/4","13/36","3/36","1/3"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 858,
question: 'The area of a sector with angle 90° in a circle of radius 14cm is? (π=22/7)',
options: ["121 cm²","144 cm²","154 cm²","164 cm²"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 859,
question: 'If the mode of a data set is 4 and median is 5, mean is approximately?',
options: ["5.5","6","7","8"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 860,
question: 'What is the value of cos²45° - sin²45°?',
options: ["-1","0","1","√2"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 861,
question: 'A ladder 10m long rests against a wall. Its foot is 6m from the wall. Height on wall is?',
options: ["6m","7m","8m","9m"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 862,
question: 'The number of triangles in a figure with n points on a circle is?',
options: ["nC3","nC2","n!","2^n"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 863,
question: 'What is 50% of (40% of 500)?',
options: ["90","100","110","120"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 864,
question: 'If a:b = 2:3 and b:c = 4:5, then a:b:c is?',
options: ["8:12:15","2:3:5","4:6:5","6:9:10"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 865,
question: 'The sum of all odd numbers from 1 to 199 is?',
options: ["9900","10000","10100","10200"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 866,
question: 'What is the value of (1 + tan²θ)?',
options: ["cos²θ","sin²θ","sec²θ","cosec²θ"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 867,
question: 'A number when divided by 56 gives remainder 29. When divided by 8, remainder is?',
options: ["4","5","6","7"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 868,
question: 'The product of two numbers is 1575 and their ratio is 7:9. The numbers are?',
options: ["35 and 45","42 and 54","45 and 55","49 and 63"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 869,
question: 'What is 8 × 9 × 10 ÷ 6?',
options: ["110","115","120","125"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 870,
question: 'If f(x) = 2x² - 5x + 3, the minimum value is?',
options: ["-1/8","1/8","7/8","−7/8"],
answer: 3,
category: "Maths",
difficulty: "hard"
},

{
id: 871,
question: 'The angle subtended by an arc at the center is 120°. Angle at the circumference is?',
options: ["40°","50°","60°","70°"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 872,
question: 'What is the perimeter of an equilateral triangle with area 16√3 cm²?',
options: ["20cm","24cm","28cm","30cm"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 873,
question: 'If x + 1/x = 4, then x² + 1/x² is?',
options: ["12","14","16","18"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 874,
question: 'A bag has 3 red and 4 blue balls. P(two red balls drawn without replacement) is?',
options: ["1/7","2/7","3/14","1/14"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 875,
question: 'What is ⁷C₃?',
options: ["21","28","35","42"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 876,
question: 'If the diagonals of a parallelogram are 6cm and 8cm, area of parallelogram when diagonals are perpendicular is?',
options: ["24 cm²","48 cm²","56 cm²","64 cm²"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 877,
question: 'What is the value of sin 120°?',
options: ["√3/2","1/2","-1/2","−√3/2"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 878,
question: 'The equation of line with slope 2 and y-intercept -3 is?',
options: ["y = 2x + 3","y = 2x - 3","y = -2x + 3","y = 3x - 2"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 879,
question: 'A train takes 9 sec to pass a man walking at 3 km/h and 12 sec to pass a 150m platform. Train speed is?',
options: ["45 km/h","51 km/h","54 km/h","57 km/h"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 880,
question: 'What is the area of a circle with circumference 44cm? (π=22/7)',
options: ["100 cm²","121 cm²","144 cm²","154 cm²"],
answer: 3,
category: "Maths",
difficulty: "medium"
},

{
id: 881,
question: 'If cot θ = √3, what is θ?',
options: ["30°","45°","60°","90°"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 882,
question: 'A man bought an article and sold it at 20% profit. If cost was 15% more, profit % would be?',
options: ["4.35%","5.35%","6.35%","7.35%"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 883,
question: 'What is the number of terms in (2a + 3b)⁵?',
options: ["4","5","6","7"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 884,
question: 'The AM, GM, and HM of two numbers: if AM = 10 and GM = 8, HM is?',
options: ["6","6.2","6.4","6.6"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 885,
question: 'If x + y + z = 0, then x³ + y³ + z³ is?',
options: ["0","xyz","3xyz","x²+y²+z²"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 886,
question: 'What is the volume of a sphere with diameter 14cm? (π=22/7)',
options: ["1437.3 cm³","1437.1 cm³","1441.3 cm³","1437.0 cm³"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 887,
question: 'A and B can complete a work in 15 and 20 days. If A works for 5 days, B finishes in?',
options: ["10 days","12 days","14 days","15 days"],
answer: 3,
category: "Maths",
difficulty: "medium"
},

{
id: 888,
question: 'The number of ways to choose a team of 2 men from 6 and 3 women from 5 is?',
options: ["100","120","150","200"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 889,
question: 'What is (√5 + √3)(√5 - √3)?',
options: ["1","2","√2","√8"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 890,
question: 'A sum of Rs 6000 yields Rs 1325 compound interest in 2 years. Rate of interest is?',
options: ["8%","9%","10%","11%"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 891,
question: 'The distance from origin to the line 3x + 4y = 15 is?',
options: ["2","3","4","5"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 892,
question: 'What is the value of (1/2)⁻³?',
options: ["1/8","1/4","4","8"],
answer: 3,
category: "Maths",
difficulty: "medium"
},

{
id: 893,
question: 'If 4x ≡ 3 (mod 5), x is?',
options: ["2","3","4","5"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 894,
question: 'The number of 4-digit numbers formed from 1,2,3,4,5 without repetition is?',
options: ["100","120","150","200"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 895,
question: 'What is the value of cos(A+B) + cos(A-B)?',
options: ["2cosAcosB","2sinAsinB","2cosAsinB","2sinAcosB"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 896,
question: 'If log₂(x) = 5, x is?',
options: ["16","24","32","64"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 897,
question: 'What is the perimeter of a right triangle with legs 8cm and 15cm?',
options: ["30cm","36cm","40cm","44cm"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 898,
question: 'A man can row 8 km/h in still water. If river flows at 2 km/h, time to row 30km upstream is?',
options: ["5 hours","5.5 hours","6 hours","6.5 hours"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 899,
question: 'The sum of n terms of GP: 1 + 2 + 4 + 8... is?',
options: ["2n - 1","2n","2n+1 - 1","2n-1 - 1"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 900,
question: 'What is the value of ∑(r=1 to 5) r²?',
options: ["50","55","60","65"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 901,
question: 'If f(x) = √(x² - 4), domain of f is?',
options: ["x ≥ 2","x ≤ -2 or x ≥ 2","x ≤ 2","-2 ≤ x ≤ 2"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 902,
question: 'A wire of length 44m is bent into a circle. Its area is? (π=22/7)',
options: ["154 m²","144 m²","124 m²","104 m²"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 903,
question: 'How many 3-digit palindrome numbers are there?',
options: ["80","81","90","99"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 904,
question: 'The Vernacular Press Act was passed during the tenure of?',
options: ["Lord Lytton","Lord Ripon","Lord Curzon","Lord Dufferin"],
answer: 0,
category: "History",
difficulty: "hard"
},

{
id: 905,
question: 'Who was the President of INC during Quit India Movement?',
options: ["Gandhi","Nehru","Maulana Azad","Patel"],
answer: 2,
category: "History",
difficulty: "medium"
},

{
id: 906,
question: 'The Sikh Guru who was executed by Aurangzeb was?',
options: ["Guru Gobind Singh","Guru Tegh Bahadur","Guru Arjan Dev","Guru Hargobind"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 907,
question: 'The Second Anglo-Afghan War took place in?',
options: ["1878-1880","1880-1882","1863-1866","1839-1842"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 908,
question: 'The Gandhi-Irwin Pact was signed in?',
options: ["1929","1930","1931","1932"],
answer: 2,
category: "History",
difficulty: "hard"
},

{
id: 909,
question: 'Who founded the Aligarh Scientific Society?',
options: ["Syed Ahmed Khan","Muhammad Ali Jinnah","Aga Khan III","Maulana Azad"],
answer: 0,
category: "History",
difficulty: "medium"
},

{
id: 910,
question: 'The Mughal painter famous for court scenes was?',
options: ["Ustad Mansur","Abul Hasan","Govardhan","Bichitr"],
answer: 3,
category: "History",
difficulty: "hard"
},

{
id: 911,
question: 'Razia Sultana was deposed in?',
options: ["1238","1240","1242","1244"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 912,
question: 'The Wavell Plan was presented in?',
options: ["1944","1945","1946","1947"],
answer: 1,
category: "History",
difficulty: "hard"
},

{
id: 913,
question: 'The Rowlatt Act is also known as?',
options: ["Black Act","Anarchical Act","Revolutionary Act","Sedition Act"],
answer: 1,
category: "History",
difficulty: "medium"
},

{
id: 914,
question: 'The Widow Remarriage Act was passed in?',
options: ["1850","1852","1854","1856"],
answer: 3,
category: "History",
difficulty: "hard"
},

{
id: 915,
question: 'The Suez Canal is approximately how long?',
options: ["120 km","145 km","160 km","193 km"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 916,
question: 'The Ross Ice Shelf is in?',
options: ["Arctic","Greenland","Antarctica","Iceland"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 917,
question: 'Which Indian state borders the most countries?',
options: ["Arunachal Pradesh","Sikkim","Manipur","Meghalaya"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 918,
question: "The 'Fertile Crescent' is also called?",
options: ["Cradle of Civilization","Bread Basket","Garden of Eden","Land of Rivers"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 919,
question: 'The Great Barrier Reef is primarily made of?',
options: ["Sandstone","Limestone","Coral polyps","Volcanic rock"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 920,
question: 'Which country has the most rivers by number?',
options: ["Russia","Brazil","China","Canada"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 921,
question: 'The Niger Delta is located in?',
options: ["Niger","Mali","Senegal","Nigeria"],
answer: 3,
category: "Geography",
difficulty: "medium"
},

{
id: 922,
question: 'The Danakil Depression is in?',
options: ["Ethiopia","Kenya","Sudan","Somalia"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 923,
question: 'Which country has no rivers?',
options: ["Malta","Saudi Arabia","Qatar","Maldives"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 924,
question: "The world's highest waterfall is?",
options: ["Victoria Falls","Niagara Falls","Angel Falls","Iguazu Falls"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 925,
question: 'Palk Strait connects Bay of Bengal with?',
options: ["Arabian Sea","Gulf of Mannar","Indian Ocean","Laccadive Sea"],
answer: 1,
category: "Geography",
difficulty: "medium"
},

{
id: 926,
question: 'The Trans-Siberian Railway connects Moscow to?',
options: ["Vladivostok","Beijing","Almaty","Ulaanbaatar"],
answer: 0,
category: "Geography",
difficulty: "hard"
},

{
id: 927,
question: 'Which ocean has the most seamounts?',
options: ["Atlantic","Indian","Pacific","Arctic"],
answer: 2,
category: "Geography",
difficulty: "medium"
},

{
id: 928,
question: "The 'Corn Belt' of USA is primarily in?",
options: ["Great Plains","Mississippi Basin","Midwest","Southeast"],
answer: 2,
category: "Geography",
difficulty: "hard"
},

{
id: 929,
question: 'The bond angle in water molecule is?',
options: ["90°","104.5°","107°","109.5°"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 930,
question: 'Which planet has the highest density?',
options: ["Jupiter","Saturn","Earth","Neptune"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 931,
question: 'The process of making alcohol from sugar is?',
options: ["Oxidation","Fermentation","Hydrolysis","Reduction"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 932,
question: 'Which blood type can receive from all groups?',
options: ["A","B","O","AB"],
answer: 3,
category: "Science",
difficulty: "hard"
},

{
id: 933,
question: 'The unit of measurement for sound intensity is?',
options: ["Hertz","Decibel","Pascal","Watt"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 934,
question: 'How many bones are in the human skull?',
options: ["20","22","24","26"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 935,
question: 'The chemical symbol for Tungsten is?',
options: ["Tg","Tu","W","Tn"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 936,
question: 'Which gas is used in fire extinguishers?',
options: ["Nitrogen","Helium","Carbon dioxide","Argon"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 937,
question: 'The Krebs cycle takes place in?',
options: ["Cytoplasm","Nucleus","Mitochondria","Ribosome"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 938,
question: 'What is the oxidation state of Oxygen in H2O?',
options: ["0","+1","-1","-2"],
answer: 3,
category: "Science",
difficulty: "hard"
},

{
id: 939,
question: 'The second law of thermodynamics relates to?',
options: ["Conservation of energy","Entropy","Temperature","Pressure"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 940,
question: 'What is the name of the protein that carries oxygen in blood?',
options: ["Albumin","Globulin","Hemoglobin","Fibrin"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 941,
question: 'Which planet rotates on its side?',
options: ["Neptune","Saturn","Uranus","Venus"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 942,
question: 'The process of removing minerals from water is?',
options: ["Filtration","Distillation","Demineralization","Sedimentation"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 943,
question: 'Peristalsis is movement of food in?',
options: ["Intestines","Heart","Lungs","Blood vessels"],
answer: 0,
category: "Science",
difficulty: "medium"
},

{
id: 944,
question: 'Which type of mirror is used in solar cookers?',
options: ["Plane","Convex","Concave","Parabolic concave"],
answer: 3,
category: "Science",
difficulty: "hard"
},

{
id: 945,
question: 'What is the atomic number of Nitrogen?',
options: ["5","6","7","8"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 946,
question: 'Which is the smallest planet in our solar system?',
options: ["Mars","Venus","Mercury","Pluto"],
answer: 2,
category: "Science",
difficulty: "hard"
},

{
id: 947,
question: 'The process of nuclear reactions in the Sun is?',
options: ["Fission","Fusion","Decay","Bombardment"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 948,
question: 'Blood pressure is measured by?',
options: ["ECG","Sphygmomanometer","Stethoscope","Thermometer"],
answer: 1,
category: "Science",
difficulty: "hard"
},

{
id: 949,
question: 'Which element is used in making matches?',
options: ["Sulfur","Phosphorus","Carbon","Nitrogen"],
answer: 1,
category: "Science",
difficulty: "medium"
},

{
id: 950,
question: "The term 'Laser' stands for?",
options: ["Light Amplification by Stimulated Emission of Radiation","Light Absorption by Special Energy Radiation","Luminous Amplification by Stimulated Electron Radiation","Light Amplification by Secondary Energy Radiation"],
answer: 0,
category: "Science",
difficulty: "hard"
},

{
id: 951,
question: 'What is the molecular formula of ethane?',
options: ["CH4","C2H4","C2H6","C3H8"],
answer: 2,
category: "Science",
difficulty: "medium"
},

{
id: 952,
question: "The 'White Revolution' in India relates to?",
options: ["Wheat production","Milk production","Cotton production","Sugar production"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 953,
question: "The term 'cyberspace' was coined by?",
options: ["William Gibson","Timothy Leary","Philip K. Dick","Isaac Asimov"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 954,
question: 'The CERN is located in?',
options: ["Germany","Switzerland","France","Both Switzerland and France"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 955,
question: 'The highest civilian award in India is?',
options: ["Padma Shri","Padma Bhushan","Padma Vibhushan","Bharat Ratna"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 956,
question: "Who is known as the 'Father of the Internet'?",
options: ["Tim Berners-Lee","Vint Cerf","Larry Page","Bill Gates"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 957,
question: 'Which country has the most UNESCO Creative Cities?',
options: ["USA","France","China","Germany"],
answer: 2,
category: "GK",
difficulty: "medium"
},

{
id: 958,
question: "The world's longest railway network is in?",
options: ["China","Russia","India","USA"],
answer: 3,
category: "GK",
difficulty: "hard"
},

{
id: 959,
question: 'The Cannes Film Festival is held in?',
options: ["Italy","France","Spain","Germany"],
answer: 1,
category: "GK",
difficulty: "medium"
},

{
id: 960,
question: "The 'Blue Revolution' in India relates to?",
options: ["Water conservation","Fisheries development","Sky monitoring","Air quality"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 961,
question: 'Which country invented pizza?',
options: ["Greece","Spain","France","Italy"],
answer: 3,
category: "GK",
difficulty: "medium"
},

{
id: 962,
question: 'The Nobel Prize in Economics is formally called?',
options: ["Nobel Economic Sciences Award","Sveriges Riksbank Prize in Economic Sciences","International Economic Prize","Stockholm Economic Award"],
answer: 1,
category: "GK",
difficulty: "hard"
},

{
id: 963,
question: "The 'Silicon Plateau' refers to?",
options: ["Hyderabad","Bengaluru","Pune","Chennai"],
answer: 0,
category: "GK",
difficulty: "medium"
},

{
id: 964,
question: 'What is the value of 0! (zero factorial)?',
options: ["0","1","Undefined","Infinity"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 965,
question: 'The sum of interior angles of a decagon is?',
options: ["1440°","1260°","1620°","1080°"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 966,
question: 'If z = 3 + 4i, |z| is?',
options: ["4","5","7","3"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 967,
question: 'The number of prime numbers between 50 and 100 is?',
options: ["9","10","11","12"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 968,
question: 'What is the value of lim(x→0) sin(x)/x?',
options: ["0","1","Infinity","Undefined"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 969,
question: 'A regular hexagon has how many lines of symmetry?',
options: ["3","4","5","6"],
answer: 3,
category: "Maths",
difficulty: "medium"
},

{
id: 970,
question: 'What is the derivative of x³?',
options: ["x","2x","3x²","3x"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 971,
question: 'The sum of GP: 2 + 6 + 18 + ... + 4374 is?',
options: ["6558","6560","6562","6564"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 972,
question: 'If tan A = 1/√3, A is?',
options: ["30°","45°","60°","90°"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 973,
question: 'What is the angle between hour and minute hands at 3:15?',
options: ["0°","7.5°","15°","22.5°"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 974,
question: "What is the value of e (Euler's number) approximately?",
options: ["2.618","2.718","2.818","2.918"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 975,
question: 'The equation of a circle with center (2,3) and radius 5 is?',
options: ["(x-2)²+(y-3)²=5","(x-2)²+(y-3)²=25","(x+2)²+(y+3)²=25","(x-2)²+(y-3)²=10"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 976,
question: 'What is the integral of 1/x?',
options: ["x","ln|x|","x²/2","1/x²"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 977,
question: 'How many sides does an icosagon have?',
options: ["12","15","18","20"],
answer: 3,
category: "Maths",
difficulty: "medium"
},

{
id: 978,
question: 'The value of nC0 + nC1 + ... + nCn is?',
options: ["n","n²","2n","2n+1"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 979,
question: 'What is the geometric mean of 4 and 9?',
options: ["5","6","6.5","7"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 980,
question: 'The sum of all 2-digit odd numbers is?',
options: ["2475","2525","2580","2500"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 981,
question: 'If A is a 3×3 matrix and det(A) = 5, det(2A) is?',
options: ["10","20","40","80"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 982,
question: 'What is the value of sin(A+B) - sin(A-B)?',
options: ["2sinAcosB","2cosAsinB","2sinAsinB","2cosAcosB"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 983,
question: 'How many 3-digit numbers are divisible by 7?',
options: ["126","127","128","129"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 984,
question: 'A number is chosen from 1-100. P(it is a perfect square) is?',
options: ["1/10","1/12","1/9","1/11"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 985,
question: 'What is the value of (a-b)(a²+ab+b²)?',
options: ["a³+b³","a³-b³","a²-b²","a²+b²"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 986,
question: 'The diagonal of a cube with side 3cm is?',
options: ["3cm","3√2 cm","3√3 cm","9 cm"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 987,
question: 'What is the solution set of |x - 3| < 2?',
options: ["1 < x < 5","1 ≤ x ≤ 5","x > 5","x < 1"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 988,
question: 'Two dice are thrown. P(sum is 9) is?',
options: ["1/9","1/6","4/36","5/36"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 989,
question: 'What is the value of arctan(1)?',
options: ["30°","45°","60°","90°"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 990,
question: 'In a GP, if first term is 2 and common ratio is 3, 5th term is?',
options: ["54","81","162","243"],
answer: 2,
category: "Maths",
difficulty: "hard"
},

{
id: 991,
question: 'If the circumradius of an equilateral triangle is 6cm, its side is?',
options: ["6√3 cm","6 cm","3√3 cm","12 cm"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 992,
question: 'What is the number of ways to distribute 5 identical balls in 3 boxes?',
options: ["18","21","24","27"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

{
id: 993,
question: 'The locus of points equidistant from two fixed points is?',
options: ["Circle","Ellipse","Perpendicular bisector","Parabola"],
answer: 2,
category: "Maths",
difficulty: "medium"
},

{
id: 994,
question: 'What is 2log3 + log4 - log36?',
options: ["0","1","2","3"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 995,
question: 'What is the remainder when x⁴ - 3x³ + 2x - 1 is divided by (x-1)?',
options: ["-1","0","1","2"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 996,
question: 'How many times do clock hands overlap in 24 hours?',
options: ["22","23","24","44"],
answer: 3,
category: "Maths",
difficulty: "hard"
},

{
id: 997,
question: 'The number of solutions of 2sinx = 1 in [0, 2π] is?',
options: ["1","2","3","4"],
answer: 1,
category: "Maths",
difficulty: "medium"
},

{
id: 998,
question: 'If P and Q are sets with |P|=5 and |Q|=3 and |P∩Q|=2, |P∪Q| is?',
options: ["6","7","8","9"],
answer: 0,
category: "Maths",
difficulty: "hard"
},

{
id: 999,
question: 'What is the distance between the parallel lines 3x+4y=7 and 3x+4y=12?',
options: ["1","5/4","5","7/5"],
answer: 0,
category: "Maths",
difficulty: "medium"
},

{
id: 1000,
question: 'The value of (sinθ + cosθ)² + (sinθ - cosθ)² is?',
options: ["1","2","3","4"],
answer: 1,
category: "Maths",
difficulty: "hard"
},

];