"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films you've watched?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films you've watched?", "");
    }
}

start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Watched few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Casual user');
    } else if (personalMovieDB.count > 30) {
        console.log('Fan');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);
