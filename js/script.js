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
    for (let i = 1; i < 4; i++) {
        let a = prompt("Last wached film?", ""),
            b = prompt("Rate it", ""),
            c = prompt(`Which genre it was?${i}`, "");
    
        if (a != null && b != null && c != null && a != '' && b != '' && c != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            personalMovieDB.genres[i-1] = c;
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

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

