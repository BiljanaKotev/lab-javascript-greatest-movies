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
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let filterScoreArr = moviesArray.filter(function (movie) {
    if (movie.score >= 8 || 0) {
      movie.score += movie.score / 2;
      let roundedNum = movie.score.toFixed(2);
      Number(roundedNum);
    }
  });
  return filterScoreArr;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let onlyDramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  let totalScore = onlyDramaMovies.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0);
  let avgScore = totalScore / onlyDramaMovies.length;
  return avgScore;
}

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
function orderAlphabetically(moviesArray) {
  let alphabeticMovieOrder = [...moviesArray];
  alphabeticMovieOrder.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  if (alphabeticMovieOrder.length > 20) {
    alphabeticMovieOrder = alphabeticMovieOrder.slice(0, 20);
  }
  return alphabeticMovieOrder.map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
