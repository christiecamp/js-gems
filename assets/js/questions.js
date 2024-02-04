//questions
const questions = [
    {
        title: 'High quality opal is more valuable than diamonds',
        choices: ['true', 'false'],
        answer: 'trye'
    },
    {
        title: 'which gem has the nickname of "water sapphire"',
        choices: ['iolite', 'blue topaz', 'tanzanite', 'sapphire'],
        answer: 'iolite'
    },
    {
        title: `according to historic legend - what was Cleopatra's favorite gemstone?`,
        choices: ['emerald', 'peridot', 'sapphire', 'pearl'],
        answer: 'peridot'
    },
    {
        title: 'rubies and sapphires come frome the same mineral',
        choices: ['true', 'false'],
        answer: 'true'
    },
    {
        title: `which fruit's seeds was garnet named after?`,
        choices: ['grape', 'apple', 'orange','pomegranate'],
        answer: 'pomegranate'
    },
    {
        title: `tanzanite was named by Tiffany & Co. in honor of the east African country where it was discovered in the 1960s - what is it's scientific name?`,
        choices: ['zircon', 'spinel', 'tanzanite', 'zoicite'],
        answer: 'zoicite'
    },
    {
        title: 'how long does it take to grow a cultured pearl',
        choices: ['1-3 years', '4-6 years', '7-9 years', '10-12 years'],
        answer: '1-3 years'
    },
    {
        title: `zircon isn't natural gemstone?`,
        choices: ['true', 'false'],
        answer: 'false'
    },
    {
        title: `the phenomenon of cat's eye (or tiger's eye) is called`,
        choices: ['asterism', 'adularescence', 'chatoyancy', 'play of color'],
        answer: 'chatoyancy'
    },
    {
        title: 'which gemstone is the birthstone for the month of October?',
        choices: ['pearl', 'alexandrite', 'opal', 'diamond'],
        answer: 'opal'
    },
];

var score = 0;
var questionIndex = 0;

//declared variables
const container = document.querySelector('#container');
const timer = document.querySelector('#timer');
const gems = document.querySelector('#gems');
const enter = document.querySelector('#enter-btn');

//timer
var timeLeft = 76;
//interval time
var holdInterval = 0;
//penalty time
var penalty = 10;
//create new element
var ulCreate = document.createElement('ul');