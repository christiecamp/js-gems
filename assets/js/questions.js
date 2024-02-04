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

//event listener for start button
enter.addEventListener('click', function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            timeLeft--;
            timer.textContent = 'time: ' + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                timer.textContent = 'time is up!';
            }
        }, 1000);
    }
    render(questionIndex);
});

//render questions
function render(questionIndex) {
    //clears existing data
    gems.innerHTML = '';
    ulCreate.innerHTML = '';
    //loops through all info in array
    for (var i = 0; i < questions.length; i++) {
        //appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        gems.textContent = userQuestion;
    }
    //new for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement('li');
        listItem.textContent = newItem;
        gems.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener('click', (compare));
    });
};

//compare choices with answer
function compare(event) {
    var element = event.target;
    if (element.matches('li')) {
        var createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'createDiv');
        //correct condition
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = 'correct - the answer is:  ' + questions[questionIndex].answer;
        } else {
            //will deduct -10 seconds off time for wrong answers
            timeLeft = timeLeft - penalty;
            createDiv.textContent = 'wrong - the answer is: ' + questions[questionIndex].answer;
        }
    }
    //question index determines number question user is on
    questionIndex++;
    //if no more questions
    if (questionIndex >= questions.length) {
        //all done will append last page with user stats
        allDone();
        createDiv.textContent = 'end of quiz - ' + 'you got  ' + score + '/' + questions.length + ' correct!';
    } else {
        render(questionIndex);
    }
    gems.appendChild(createDiv);
};

//all done will append last page
function allDone() {
    gems.innerHTML = '';
    timer.innerHTML = '';

    //heading
    var createH1 = document.createElement('h1');
    createH1.setAttribute('id', 'createH1');
    createH1.textContent = 'all done!';

    gems.appendChild(createH1);

    //paragraph
    var createP = document.createElement('p');
    createP.setAttribute('id', 'createP');

    gems.appendChild(createP);

    //time remaining
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement('p');
        clearInterval(holdInterval);
        createP.textContent = 'your final score is: ' + timeRemaining;

        gems.appendChild(createP2);
    }

    //label
    var createLabel = document.createElement('label');
    createLabel.setAttribute('id', 'createLabel');
    createLabel.textContent = 'enter your initials: ';

    gems.appendChild(createLabel);

    //input
    var createInput = document.createElement('input');
    createInput.setAttribute('type', 'text');
    createInput.setAttribute('id', 'initials');
    createInput.textContent = '';

    gems.appendChild(createInput);

    //submit
    var createSubmit = document.createElement('button');
    createSubmit.setAttribute('type', 'submit');
    createSubmit.setAttribute('id', 'submit');
    createSubmit.textContent = 'submit';

    gems.appendChild(createSubmit);

    //event listener to capture initials and score
    createSubmit.addEventListener('click', function() {
        var initials = createInput.value;

        if (initials === null) {
            console.log('no value entered!');
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem('allScores');
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem('allScores', newScore);
            window.location.replace('highscores.html');
        }
    });
}