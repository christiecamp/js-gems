//highscores
const highGemscore = document.querySelector('#highgemscore');
const clear = document.querySelector('#clear');
const back = document.querySelector('#back');

//clear button
clear.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});

//local storage
const allScores = localStorage.getItem('allScores');
allScores = JSON.parse(allScores);
console.log(allScores);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    //create li
    const createLi = document.createElement('li');
    createLi.textContent = allScores[i].name + ' ' + allScores[i].score;
    highGemscore.appendChild(createLi); 
  }
}

//back button
back.addEventListener('click', function () {
  window.location.replace('./index.html');
});