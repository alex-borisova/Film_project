let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
            grade = prompt("На сколько оцените его?", "");
        
        if (lastFilm == null || lastFilm == '' || lastFilm.length > 50 || grade == null || grade == '') {
            i--;
        } else {
            personalMovieDB.movies[lastFilm] = grade;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert ('Просмотрено довольно мало фильмов');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        alert ('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert ('Вы киноман');
    } else {
        alert ('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
    }
}

writeYourGenres();