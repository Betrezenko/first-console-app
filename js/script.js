"use strict";

const numberOfFilms = +prompt("How many films you've watched?", "");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

for (let i = 0; i < 2; i++) {
    let a = prompt("Last wached film?", ""),
        b = prompt("Rate it", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Watched few films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Casual user');
} else if (personalMovieDB.count > 30) {
    console.log('Fan');
} else {
    console.log('error');
}

console.log(personalMovieDB);
