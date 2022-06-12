let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const redoTitle  = function () {
    document.getElementById('main-title').innerHTML = 'DOM TIME';
  };
  
  redoTitle();
 
  // Part 2
  const changeBgColor = function () {
    document.querySelector('body').style.backgroundColor = 'gray';
  };

  changeBgColor();
  
  // Part 3
  const domsFavoriteThings = function() {
    const lastList = document.getElementById('favorite-things');
    lastList.removeChild(lastList.lastElementChild)
  }
  
  domsFavoriteThings();

  // Part 4
  const spec = function() {
    const specTitle = document.querySelectorAll('special-title');
    for (let title of specTitle) {
      title.style.fontSize = '2rem';
    }
  }

  spec();

  // Part 5
  const races = function() {
    const pastRaceList = document.getElementById('past-races');
    pastRaceList.removeChild(pastRaceList.children[3]);
  };

  races();

  // Part 6
  const newRace = function() {
    const newCity = document.createElement('li');
    const pastRaces = document.querySelector('#past-races');
    newCity.innerHTML = 'Detroit';
    pastRaces.append(newCity);
  }

  newRace();
  
  // Part 7
  
}