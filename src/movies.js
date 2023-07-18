// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let getDirectors = moviesArray.map((element) => {
    return element.director;
  });
  return getDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let filteredMovies = moviesArray.filter((element) => {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let autoSum = moviesArray.reduce((acc, element) => {
    if (element.score) {
      return acc + element.score;
    } else {
      return acc;
    }
  }, 0);
  return Number((autoSum / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((moviesArray) => {
    return moviesArray.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  let autoSuma = dramaMovies.reduce((acc, element) => {
    if (element.score) {
      return acc + element.score;
    } else {
      return acc;
    }
  }, 0);
  return Number((autoSuma / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneArr = JSON.parse(JSON.stringify(moviesArray));
  let youngToOld = cloneArr.sort((elem1, elem2) => {
    if (elem1.year < elem2.year) {
      return -1;
    } else if (elem2.year < elem1.year) {
      return 1;
    } else if (elem1.year === elem2.year) {
      return elem1.title.localeCompare(elem2.title);
      // youngToOld.sort ((a, b) => {
      //     if (a.title < b.title) {
      //         return -1
      //     }
      //     else if (b.title < a.title) {
      //         return 1
      //     }
      //     else if (a.title === b.title) {
      //         return 0
      //     }
      // })
      return 0;
    }
  });
  return youngToOld;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titleArr = moviesArray.map((elem1) => {
    return elem1.title;
  });
  let alphArr = titleArr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else if (a === b) {
      return 0;
    }
  });
  let top20Aplh = alphArr.splice(0, 20);
  return top20Aplh;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
