"use strict";

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
            personalMovieDB.count = +prompt("How many films you've watched?", "");        
                while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                    personalMovieDB.count = +prompt("How many films you've watched?", "");
                }
        },
        rememberMyFilms: function() {
                            for (let i = 1; i < 4; i++) {
                                let a = prompt("Last wached film?", ""),
                                    b = prompt("Rate it", ""),
                                    c = prompt('Which genre it was?', "");
                            
                                if (a != null && b != null && c != null && a != '' && b != '' && c != '' && a.length < 50) {
                                    personalMovieDB.movies[a] = b;
                                    personalMovieDB.genres[i-1] = c;
                                    console.log('done');
                                } else {
                                    console.log('error');
                                    i--;
                                }
                            }
                            personalMovieDB.genres.forEach((item, i) => {
                                console.log(`Fav genre ${i+1} - ${item}`);
                            })
        },
        detectPersonalLevel: function() {
                                if (personalMovieDB.count < 10) {
                                    console.log("Watched few films");
                                } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                                    console.log('Casual user');
                                } else if (personalMovieDB.count > 30) {
                                    console.log('Fan');
                                } else {
                                    console.log('error');
                                }
        },
        toggleVisibleMyDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
        showMyDB: function() {
                    if (personalMovieDB.privat == true) {
                        console.log(personalMovieDB);
                    }
        },
};