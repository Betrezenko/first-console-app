"use strict";

const numberOfFilms = +prompt("How many films you've watched?", "");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

for (let i = 0; i <= 1; i++) {
    let question1 = prompt("Last wached film?", ""),
        question2 = prompt("Rate it", "");
    personalMovieDB.movies[question1] = question2;
}

console.log(personalMovieDB);
