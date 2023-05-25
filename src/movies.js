// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// {
//   title: 'The Shawshank Redemption',
//   year: 1994,
//   director: 'Frank Darabont',
//   duration: '2h 22min',
//   genre: ['Crime', 'Drama'],
//   score: 9.3
// },

function getAllDirectors(moviesArray) {
  return moviesArray.map(function (e) {
    return e.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const spielbergMoviesArr = moviesArray.filter(function (element) {
    if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) {
      return true;
    }
  });
  return spielbergMoviesArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let copiedMoviesArray = [...moviesArray];
  copiedMoviesArray.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    } else {
      return a.year.toString().localeCompare(b.year.toString());
    }
  });
  return copiedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
