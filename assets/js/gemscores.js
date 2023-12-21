//highscores

const gems = document.querySelector('.gems');
const highGemscore = document.querySelector('#highgemscore');
const back = document.querySelector('#back-btn');
const clear = document.querySelector('#clear-btn');

//back button
back.addEventListener('click', function() {
    window.location.replace('index.html');
});

//clear button
clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

const scores = localStorage.getItem('scores');
scores = JSON.parse(scores);

if (scores !== null) {
    for (var i = 0; i < scores.length; i++) { //const or var?
        const add = document.createElement('li');
        add.setAttribute('id', 'Li');//check once questions are created - id or class
        add.textContent = scores[i].initials + " " + scores[i].gemscore; //check once questions are created

        scores.appendChild(add); //check once questions are created
    }
};