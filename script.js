'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
                grade = prompt("На сколько оцените его?", "");
            
            if (lastFilm == null || lastFilm == '' || lastFilm.length > 50 || grade == null || grade == '') {
                i--;
            } else {
                personalMovieDB.movies[lastFilm] = grade;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert ('Просмотрено довольно мало фильмов');
        } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
            alert ('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert ('Вы киноман');
        } else {
            alert ('Произошла ошибка');
        }
    },
    showMyDB: function() { //был аттрибут hidden 
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");

            if (genre == null || genre == '') {
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};